export class Training {
  userId: number;
  topic: string;
  description: string;
  startTime: string;
  endTime: string;
  roomId: number;

  constructor(
    userId: number,
    topic: string,
    description: string,
    starttime: string,
    endime: string,
    roomid: number
  ) {
    this.userId = userId;
    this.topic = topic;
    this.description = description;
    this.startTime = starttime;
    this.endTime = endime;
    this.roomId = roomid;
  }
}
