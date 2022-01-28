import { Request, Response } from "express";
import { Hotel } from "../models/hotel-model";
import hotelRepository from "../repository/hotel-repository";


// ORM - Object Relational Mapper-biblioteka koja sluzi da iz moga koda komuniciram sa bazom

const getAllHotels = async (request: Request, response: Response) => {
    hotelRepository.getAllHotels()
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);       //404 ne moze da se nadje na serveru,500 puklo je nesto na serveru
    })
}
   
const getHotelByID = async (request: Request, response: Response) =>{
    hotelRepository.getHotelByID(parseInt(request.params.hid))
    .then(data => {
        response.send(data[0]); //posalje data prvi objekat
    })
    .catch(err => {
        response.status(500).send(err);
    })
}
const insertHotel = async (request: Request, response: Response) =>{
    const hotel: Hotel = new Hotel(request.body.hid,request.body.name, request.body.year)
    hotelRepository.insertHotel(hotel)
    .then(data => {
        response.send(data);
        if(data.effectedRows == 1){
            response.send({insertId: data.insertId});
        }
        else{
            response.send(500).send(data);
        }
    })
    .catch(err => {
        response.status(500).send(err);
    })



}
const updateHotel = async (request: Request, response: Response) => { 
    const hotel: Hotel = new Hotel(parseInt(request.params.hid),
                                     request.body.name,
                                     request.body.year);
     hotelRepository.updateHotel(hotel)
     .then( data => {
            response.send({sauccess: true});
         }) 
     .catch(err => {
         response.status(500).send(err);
     })                               
}
const deleteHotel = async (request: Request, response: Response) => {
    hotelRepository.deleteHotel(parseInt(request.params.hid))
    .then(data => {
        if(data.affectedRows == 1){
            response.send({sauccess: true});
        }
    })
    .catch(err => {
        response.status(500).send(err);
    })
}



export default { getAllHotels, getHotelByID, insertHotel, updateHotel, deleteHotel }