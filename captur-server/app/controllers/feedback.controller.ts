import {
  Post,
  JsonController,
  Body,
  QueryParams,
  Get,
  Param,
} from 'routing-controllers'
import { FeedbackService } from '../services'
import { Service } from 'typedi'
import { Prisma } from '@prisma/client';

@JsonController('/feedback')
@Service()
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post('/')
  async create(@Body() data: Omit<Prisma.FeedbackCreateInput, 'createAt'>) {
    return this.feedbackService.create(data)
  }

  @Get('/list')
  async list(@QueryParams() query: Pick<Prisma.FeedbackCreateInput,  'appId' | 'description' | 'email' | 'valid'>) {
    return this.feedbackService.getList(query)
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return this.feedbackService.getById(id)
  }
}
