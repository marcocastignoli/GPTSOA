import { Route, Post, Body, Controller } from "@tsoa/runtime";

interface HelloWorldBody {
  name: string;
}

@Route("example")
export class Dev extends Controller {
  /**
   * It will simply return `hello ${body.name}`
   */
  @Post("hello")
  public async hello(@Body() requestBody: HelloWorldBody): Promise<string> {
    this.setStatus(200); // set return status 201
    return `hello ${requestBody.name}`;
  }
}
