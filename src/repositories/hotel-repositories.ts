import { getManager } from "typeorm";
import { Hotel } from "../models/hotel-model";


const getAllHotels = () => {
    return getManager().query('select * from hotel');
}


const getHotelByID = (hid: number) => {
    //return getManager().query(`select * from hotel where hid = ${hid}`);
    return getManager().query(`select * from hotel where hid = ?` ,[ hid ]);//? je parametar,prvo ? je prvi parametar u nizu
}


const insertHotel = (hotel: Hotel ) => {
    return getManager().query(`insert into hotel(naziv, godina_gradnje)
                                values (? ,?)`, [hotel.name, hotel.year]);
}


const updateHotel = (hotel: Hotel) => {
    return getManager().query('Update hotel set naziv = ?, godina_gradnje = ? where hid = ?', []);
}



export default { getAllHotels, getHotelByID, insertHotel}