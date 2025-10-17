import { Subjects } from "./subjects";

export interface TicketCancelledEvent {
  subject : Subjects.OrderCancelled;
  data : {
    id : string;
    ticket : {
      id : string;
      price : number;
    }
  }
}