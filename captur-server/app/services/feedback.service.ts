import { Service } from 'typedi'
import prisma from 'app/helpers/client'
import { Prisma } from '@prisma/client'

@Service()
export class FeedbackService {
  async create(data: Omit<Prisma.FeedbackCreateInput, 'createAt'>) {
    return prisma.feedback.create({
      data,
    })
  }


  async getById(id: number) {
    return prisma.feedback.findUnique({
      where: {
        id
      }
    })
  }

  async getList(data: Pick<Prisma.FeedbackCreateInput,  'appId' | 'description' | 'email' | 'valid'>) {
    return prisma.feedback.findMany({
      where: {
        ...data
      }
    })
  }
}
