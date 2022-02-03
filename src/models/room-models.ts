export class Room {
    no: number;
    hid: number;
    roomType: string;

    constructor(no: number, hid: number, roomType: string){
        this.no = no;
        this.hid = hid;
        this.roomType = roomType;
    }
}