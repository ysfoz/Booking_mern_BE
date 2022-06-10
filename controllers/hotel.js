import Hotel from "../models/Hotel.js";

export const createHotel =  async (req, res,next) => {
    const newHotel = new Hotel(req.body);
  
    try {
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
    } catch (error) {
     next(error)
    }
  }


  export const updateHotel = async (req, res) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedHotel);
    } catch (error) {
        next(error)
    }
  }

  export const deleteHotel = async (req, res) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("The Hotel has been deleted");
    } catch (error) {
        next(error)
    }
  }

  export const getHotel =  async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (err) {
        next(error)
    }
  }

  export const getHotels = async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
        next(error)
    }
  }