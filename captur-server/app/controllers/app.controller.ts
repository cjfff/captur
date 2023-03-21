import {
  Post,
  JsonController,
  BodyParam,
  Get,
  Param,
  Delete,
} from 'routing-controllers'
import { AppService } from '../services'
import { Service } from 'typedi'

@JsonController('/app')
@Service()
export class SessionsController {
  constructor(private appService: AppService) {}

  @Post('/')
  async create(@BodyParam('name') name: string) {
    return this.appService.create(name)
  }

  @Delete('/:id')
  async deleteById(@Param('id') id: number) {
    return this.appService.deleteById(id)
  }

  @Get('/list')
  async getApps() {
    return this.appService.getApps()
  }

 
  @Get('/:id')
  async getById(@Param('id') id: number) {
    return this.appService.getById(id)
  }
}
