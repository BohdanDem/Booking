import {Injectable} from "@nestjs/common";
import {AbstractRepository} from "@app/common";

@Injectable()
export class ReservationsRepository extends AbstractRepository<any>