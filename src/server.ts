import express from 'express';  // const app: express.Application = express(); drugi nacin za povezivanje sa serverom
import { Application } from 'express';
import { createConnection } from 'typeorm';  //povezivanje sa bazom
import dbConfig  from './common/db-config';
// import router
import hotelRouter from './routing/hotel-routing';  //posto je nas modul ovako ga upisujemo
import roomRouter from './routing/room-routing';
const app: Application = express();   //nasa glavna promljeniva
app.use(express.json());//pruzamo podrsku serveru da moze da koristi json podatke,odmah posle glavne promljenjive je stavljamo

app.use('/hotels',hotelRouter);
app.use('/rooms',roomRouter);

createConnection(dbConfig)
.then(connection => {
    console.log('Conection to DB');
})
.catch(err => {
    console.log('Error while connecting to DB');
    console.log(err);
})

const listener: any = app.listen(3000,  () => {       // croz callback funkciju upisati localhost port na koji kacimo aplikaciju
    console.log('Server is listening at port 3000');
    console.log(listener.address());
})


