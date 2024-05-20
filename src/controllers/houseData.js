import houseDataModel from "../models/houseData.js"; 


const createHouse = async (req, res) => {
  try {
    const {
      img,
      location,
      price,
      description,
      luxuryType,
      bedrooms,
      bathrooms,
      area,
      yearBuilt,
      amenities
    } = req.body;


    if (!img || !location || !price || !description || !luxuryType || bedrooms === undefined || bathrooms === undefined || !area || !yearBuilt) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }


    if (isNaN(price)) {
      return res.status(400).json({ message: 'Price must be a number' });
    }

    if (isNaN(bedrooms) || isNaN(bathrooms)) {
      return res.status(400).json({ message: 'Bedrooms and bathrooms must be numbers' });
    }

    if (isNaN(area)) {
      return res.status(400).json({ message: 'Area must be a number' });
    }

    if (isNaN(yearBuilt) || yearBuilt.toString().length !== 4) {
      return res.status(400).json({ message: 'Year built must be a valid year' });
    }

    
    const newHouse = new houseDataModel({
      img,
      location,
      price,
      description,
      luxuryType,
      bedrooms,
      bathrooms,
      area,
      yearBuilt,
      amenities
    });

  
    const savedHouse = await newHouse.save();

   
    res.status(201).json({ message: 'House data created successfully', house: savedHouse });
  } catch (error) {
   
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the house data' });
  }
};
const getAllHouses = async (req, res) => {
    try {
      const houses = await houseDataModel.find({});
      res.status(200).json({ message: 'Houses retrieved successfully', houses });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while retrieving the houses' });
    }
  };
const getHouseById = async (req, res) => {
    try {
      const { id } = req.params;
      const house = await houseDataModel.findById(id);
  
      if (!house) {
        return res.status(404).json({ message: 'House not found' });
      }
  
      res.status(200).json({ message: 'House retrieved successfully', house });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while retrieving the house' });
    }};
const getLastFourHouses = async (req, res) => {
        try {
          const houses = await houseDataModel.find({}).sort({ _id: -1 }).limit(4);
          res.status(200).json({ message: 'Last four houses retrieved successfully', houses });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'An error occurred while retrieving the last four houses' });
        }
      };

      const findByLocation = async (req, res) => {
        try {
          const { location } = req.query;
          const houses = await houseDataModel.find({ location: { $regex: new RegExp(location, 'i') } });
          res.status(200).json({ message: 'Houses retrieved successfully', houses });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while retrieving houses' });
        }
      };

export default{
        createHouse,
        getAllHouses,
        getHouseById,
        getLastFourHouses,
        findByLocation,
}
