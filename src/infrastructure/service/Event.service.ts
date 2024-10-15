import { NotFoundError } from "../../Domain/Errors/NotFoundError";
import { IfcEvent, IfcEventCreate } from "../../Domain/interfaces/Event.interfaces";
import { IfcEventServices } from "../../Domain/Services/IEvent.services";
import { IfcGenerateIdService } from "../interface/GenerateId.interface";
import Event from '../models/event.model';

export class EventService implements IfcEventServices{
  private readonly event = Event

  constructor(private readonly getIdSrv: IfcGenerateIdService) {
        
  }

  async create(event : IfcEventCreate) : Promise<IfcEvent>{
    const newEvent : IfcEvent = {
      id : this.getIdSrv.get(),
      ...event
    }
    await this.event.create(newEvent);
    return newEvent;
  }

  async getAll() : Promise<IfcEvent[]>{
    const events = await this.event.find({});
    return events;
  }

  async getById( id : IfcEvent["id"] ) : Promise<IfcEvent | null> {
    const event = await this.event.findOne({id});
    if(!event)
      throw new NotFoundError();
    return event;
  }

  async update( id: IfcEvent["id"], event : Partial<IfcEvent> ) : Promise<IfcEvent | null>{
    const eventUpdated = await this.event.findOneAndUpdate({id}, event, {returnDocument:'after'});
    return eventUpdated;
  }

  async delete(id: IfcEvent["id"]) : Promise<IfcEvent | null> {
    const eventDeleted  = await this.event.findOneAndDelete({id}, {returnDocument:'after'});
    return eventDeleted;
  }
  
  
  
  
}
