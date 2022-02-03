import { getManager } from "typeorm";
import { Room } from "../models/room-models"; 

const getAllRooms = () => {
    return getManager().query(` select * from soba`);
}

const getRoomByHidAnNO = (hid:number, no:number) => {
    return getManager().query (` select * from soba where
    hid = ? and broj = ?`, [hid ,no]);
}

const getRoomsByHid = (hid:number) => {
    return getManager().query(`select * from soba where hid = ?`, [ hid ]);
}

const insertRoom = (room: Room) => {
    return getManager().query(`inserd into soba (hid , broj, naziv)
    values (?, ?, ?)`);
}

const updateRoom = (room: Room) => {
    return getManager().query(`update soba 
    set naziv = ?
    where hid = ? and broj = ?`,
    [room.roomType,room.hid,room.no]);
}

const deleteRoom = (hid: number, no:number) => {
    return getManager().query(`delete from soba where hid = ? and broj = ?`,
    [hid, no]);
}

export default { getAllRooms, getRoomByHidAnNO, getRoomsByHid, insertRoom, updateRoom, deleteRoom }
