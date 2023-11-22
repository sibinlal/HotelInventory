import { Component, OnInit, ViewChild  } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../service/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{

  constructor(private roomsService: RoomsService) {

  }

  ngOnInit(): void {
    this.roomsList = this.roomsService.getRoomsHardCoded();
  }


  hotelName = "Dream Palace";
  numberOfRooms = 10;
  hideRooms = false;
  buttonName = "hide rooms";

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 5,
    bookedRooms: 15
  }

  roomsList: RoomList[] = [];

  toggle() {
    this.hideRooms = !this.hideRooms;
    if (this.buttonName === "hide rooms") {
      this.buttonName = "show rooms";
    } else {
      this.buttonName = "hide rooms";
    }
  }

  selectRoom(room: RoomList) {
    console.log(room);

    // do something with selected room

  }

}
