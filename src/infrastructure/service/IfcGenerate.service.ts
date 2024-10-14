import { v4 } from "uuid";
import { IfcGenerateIdService } from "../interface/GenerateId.interface";

export class GenerateIdService implements IfcGenerateIdService {
    get(): string {
        return v4();
    }
}