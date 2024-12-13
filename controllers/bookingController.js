const Booking = require('../models/Booking');

exports.getBookings = async (req, res) => {
  try {
    const { userId, propertyId } = req.query;
    let query = {};

    if (userId) {
      query.user = userId;
    }

    if (propertyId) {
      query.property = propertyId;
    }

    const bookings = await Booking.find(query)
      .populate('user', 'name email')
      .populate('property', 'title location price');

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Server Error', message: error.message });
  }
};

exports.createBooking = async (req, res) => {
  const { propertyId, startDate, endDate } = req.body;

  try {
    const existingBooking = await Booking.findOne({
      property: propertyId,
      $or: [
        { startDate: { $lte: endDate }, endDate: { $gte: startDate } }
      ]
    });

    if (existingBooking) {
      return res.status(400).json({ error: 'This property is already booked.' });
    }

    const booking = new Booking({ 
      property: propertyId, 
      startDate, 
      endDate, 
      user: req.user.id 
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
