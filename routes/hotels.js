import express from "express";

import Hotel from "../models/Hotel.js"

const router = express.Router();

/**
 * !CREATE
 * @method post
 * @route api/hotel
 * @description
 * @access private
 */

router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error)
  }
})

/**
 * !UPDATE
 * @method put
 * @route api/hotel:id
 * @description
 * @access private
 */

router.put("/:id", async(req,res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body ,{new:true})
    res.status(200).json(updatedHotel) 
  } catch (error) {
    res.status(500).json(error)
  }
})


/**
 * !DELETE
 * @method delete
 * @route api/hotel:id
 * @description
 * @access private
 */

router.delete("/:id", async(req,res)=>{
  try{
   await Hotel.findByIdAndDelete(req.params.id)
   res.status(200).json("The Hotel has been deleted")

  } catch(error){
    res.status(500).json(error)
  }
})


/**
 * !GET ONE
 * @method get
 * @route api/hotel:id
 * @description
 * @access public
 */
router.get("/:id", async(req,res)=>{
  try {
    
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json(hotel)
  } catch(err){
    res.status(500).json(err)
  }

})

/**
 * !GET ALL
 * @method get
 * @route /api/hotel
 * @description
 * @access public
 */

router.get("/", async(req,res) => {
  try{
    const hotels = await Hotel.find()
    res.status(200).json(hotels)
  } catch(error) {
    res.sendStatus(500).json(error)
  }
})


export default router;