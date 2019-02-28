export class Rooms {
  RoomId: number;
  RoomName: string;

  constructor(name: string, id: number) {
    this.RoomId = id;
    this.RoomName = name;
  }
}
