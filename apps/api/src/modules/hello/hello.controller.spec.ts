import { Test, TestingModule } from "@nestjs/testing";
import { HelloController } from "./hello.controller";
import { HelloService } from "./hello.service";

describe("HelloController", () => {
  let controller: HelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloService],
      controllers: [HelloController],
    }).compile();

    controller = module.get<HelloController>(HelloController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
