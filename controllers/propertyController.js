const Property = require('../models/Property');


exports.createProperty = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getProperties = async (req, res) => {
  try {
    const { location, minPrice, maxPrice } = req.query;
    let query = {};

    if (location) query.location = new RegExp(location, 'i');
    if (minPrice) query.price = { ...query.price, $gte: minPrice };
    if (maxPrice) query.price = { ...query.price, $lte: maxPrice };

    const properties = await Property.find(query).populate('user', 'name email');
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Server Error', message: error.message });
  }
};


exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('user', 'name email');
    if (!property) return res.status(404).json({ error: 'Property not found' });

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Server Error', message: error.message });
  }
};


exports.updateProperty = async (req, res) => {
  try {
    const { title, description, location, price } = req.body;

    
    const property = await Property.findByIdAndUpdate(
      req.params.id, 
      { title, description, location, price }, 
      { new: true, runValidators: true }
    );

    if (!property) return res.status(404).json({ error: 'Property not found' });

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Server Error', message: error.message });
  }
};


exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) return res.status(404).json({ error: 'Property not found' });

    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error', message: error.message });
  }
};
