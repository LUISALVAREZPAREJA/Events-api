import { InternalError } from "../Domain/Errors/InternalError";
import { NotCreatedError } from "../Domain/Errors/NotCreatedError";
import { NotFoundError } from "../Domain/Errors/NotFoundError";
import { NotUpdatedError } from "../Domain/Errors/NotUpdatedError";
import { IfcEvent,IfcEventCreate } from "../Domain/interfaces/Event.interfaces";
import { IEventServices } from "../Domain/Services/IEvent.services";

export class Event {

    constructor(
        private readonly EventServ:IEventServices
    ){}

    async CreateEvent(event:IfcEventCreate){
        try {
            const newEvent = await this.EventServ.create(event)
            return newEvent
        } catch (error) {
            throw new NotCreatedError()
        }
    }

    async getAllEvents(){
        try {
            const allEvent = await this.EventServ.getAll()
            return allEvent
        } catch (error) {
            throw new NotFoundError()
        }
    }
    async getEventById(id:string):Promise<IfcEvent | null>{
        try {
            const getEventById = await this.EventServ.getById(id);
            return getEventById
        } catch (error) {
            throw new NotFoundError();
        }
    }
    async updateEvent(id:string,event:Partial<IfcEvent>):Promise<IfcEvent | null>{
        try {
            const Event = await this.getEventById(id) 
            if(!Event) throw new NotFoundError()
            
           const eventUpdated = await this.EventServ.update(id,event)
            return eventUpdated
        } catch (error) {
            throw new NotUpdatedError()
        }
    }
    async DeleteEvent(id:string):Promise<IfcEvent | null>{
        try {
            const Event = await this.getEventById(id) 
            if(!Event) throw new NotFoundError()
            
           const eventDeleted = await this.EventServ.delete(id)
            return eventDeleted;
        } catch (error) {
            throw new InternalError()
        }
    }



}