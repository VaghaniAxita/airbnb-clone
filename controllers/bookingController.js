const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { propertyId, startDate, endDate } = req.body;
  const existingBooking = await Booking.findOne({
    property: propertyId,
    $or: [
      { startDate: { $lte: endDate }, endDate: { $gte: startDate } }
    ]
  });

  if (existingBooking) return res.status(400).json({ error: 'This property is already booked.' });

  const booking = new Booking({ 
    property: propertyId, 
    user: req.user.id, 
    startDate, 
    endDate, 
    totalPrice: req.body.totalPrice 
  });

  await booking.save();
  res.status(201).json(booking);
};
