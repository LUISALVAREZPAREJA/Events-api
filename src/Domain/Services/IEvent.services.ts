import { IfcEvent, IfcEventCreate } from "../interfaces/Event.interfaces";

export interface IEventServices {
  create: (Event: IfcEventCreate) => Promise<IfcEvent>;
  getAll: () => Promise<IfcEvent[]>;
  getById: (id: IfcEvent["id"]) => Promise<IfcEvent | null>;
  update: (id: IfcEvent["id"], Event: Partial<IfcEvent>) => Promise<IfcEvent | null>;
  delete: (id: IfcEvent["id"]) => Promise<IfcEvent | null>;
}
