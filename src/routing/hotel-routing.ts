import { Router, } from "express";
import hotelController from "../controllers/hotel-controller";

const router: Router = Router();

// *****drugi nacin za koriscenje*****
//router.route('/hotels')
   //.get(hotelController.getAllHotels)  //za jedan isti sablon mozemo nakaciti vise zahtjeva
   //.post(hotelController.insertHotel);
//router.route('/hotels/:id')
   //.get(hotelController.getHotelByID)
   //.put(hotelController.updateHotel)
   //.delete(hotelController.deleteHotel);


router.get('/hotels', hotelController.getAllHotels); //funkciju ne pozivamo samo je prosledjujemo kontroleru
router.get('/hotels/:hid', hotelController.getHotelByID);   //hid-id
router.post('/hotels', hotelController.insertHotel);
router.put('/hotels/:id', hotelController.updateHotel);
router.delete('/hotels/:id',hotelController.deleteHotel);



export default router;  //da se koristi i za vani i da je defolt