export class Meeting {
  userId: number;
  meetingName: string;
  agenda: string;
  meetingAttendeeId: Array<Number>;
  startTime: Date;
  endTime: Date;
  roomId: number;
  constructor(
    userId: number,
    meetingname: string,
    agenda: string,
    attendees: Array<Number>,
    starttime: Date,
    endtime: Date,
    roomid: number
  ) {
    this.userId = userId;
    this.meetingName = meetingname;
    this.agenda = agenda;
    this.meetingAttendeeId = attendees;

    this.startTime = starttime;
    this.endTime = endtime;
    this.roomId = roomid;
  }
}
