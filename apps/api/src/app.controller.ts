import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Api")
@Controller()
export class AppController {
  constructor() {}
}
