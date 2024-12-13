const Property = require('../models/Property');

exports.createProperty = async (req, res) => {
  const { title, description, location, price } = req.body;
  const images = req.files.map(file => file.path);

  const property = new Property({ 
    title, 
    description, 
    location, 
    price, 
    images, 
    user: req.user.id 
  });
  
  await property.save();
  res.status(201).json(property);
};

exports.getProperties = async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
};
