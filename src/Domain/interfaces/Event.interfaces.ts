export interface IfcEvent {
    id: string;
    title: string;
    description: string;
    date: Date;
    location:string;
    organizer:string;
}

export interface IfcEventCreate extends Omit<IfcEvent, "id"> {}
// export interface IEventFound extends Partial<IEvent> {}