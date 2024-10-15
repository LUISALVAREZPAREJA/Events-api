
import { Request, Response, Router } from "express";
import { EventService } from "../service/Event.service";
import { GenerateIdService } from "../service/IfcGenerate.service";
import { ResponseAdapter } from "./responseAdapter";
import { Event } from "../../Application/event.application";
import { schemaValidator } from "../middleware/bodyValidator";
import { eventSchemaCreate, eventSchemaUpdate } from "../../utils/joiValidator";

const generateIdSrv = new GenerateIdService();
const eventSrv = new EventService(generateIdSrv);
const eventsUseCases = new Event(eventSrv);

const eventRouter = Router();

eventRouter.post("/", schemaValidator(eventSchemaCreate) ,async (req: Request, res: Response) => {
    const body = req.body;
    ResponseAdapter.handler(eventsUseCases.CreateEvent(body), req, res);
});

eventRouter.get("/", async (req: Request, res: Response) => {
    const body = req.body;
    ResponseAdapter.handler(eventsUseCases.getAllEvents(), req, res);
});

eventRouter.get("/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    ResponseAdapter.handler(eventsUseCases.getEventById(id), req, res);
});

eventRouter.patch("/:id",schemaValidator(eventSchemaUpdate) ,async (req: Request, res: Response) => {
    const {id} = req.params;
    const body = req.body;
    ResponseAdapter.handler(eventsUseCases.updateEvent(id,body), req, res);
});

eventRouter.delete("/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    ResponseAdapter.handler(eventsUseCases.DeleteEvent(id), req, res);
});



export {eventRouter};