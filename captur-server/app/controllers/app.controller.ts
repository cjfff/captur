import {
  Post,
  JsonController,
  Body,
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
  async create(@Body() body: any) {
    return this.appService.create(body)
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
