import { Router } from "express";
import roomController from "../controllers/room-controller";

const roomRouter: Router = Router();

roomRouter.route('/')  //rooms
                .get(roomController.getAllRooms)
                .post(roomController.insertRoom);
roomRouter.route('/:hid')
                .get(roomController.getRoomsByHid);

roomRouter.route('/:hid/:no')
                 .get(roomController.getRoomByHidAndNo)
                 .put(roomController.updateRoom)
                 .delete(roomController.deleteRoom);                

export default roomRouter;


