import express from "express";

import { createHotel,updateHotel,deleteHotel,getHotel,getHotels } from "../controllers/hotel.js";

const router = express.Router();

/**
 * !CREATE
 * @method post
 * @route api/hotel
 * @description
 * @access private
 */

router.post("/",createHotel);

/**
 * !UPDATE
 * @method put
 * @route api/hotel:id
 * @description
 * @access private
 */

router.put("/:id", updateHotel);

/**
 * !DELETE
 * @method delete
 * @route api/hotel:id
 * @description
 * @access private
 */

router.delete("/:id", deleteHotel );

/**
 * !GET ONE
 * @method get
 * @route api/hotel:id
 * @description
 * @access public
 */
router.get("/:id", getHotel);

/**
 * !GET ALL
 * @method get
 * @route /api/hotel
 * @description
 * @access public
 */

router.get("/", getHotels);

export default router;
