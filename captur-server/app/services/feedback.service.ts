import { Service } from 'typedi'
import prisma from 'app/helpers/client'
import { Prisma } from '@prisma/client'

@Service()
export class FeedbackService {
  async create(data: Omit<Prisma.FeedbackCreateInput, 'createAt'>) {
    return prisma.feedback.create({
      data: {
        appId: data.appId,
        email: data.email,
        description: data.description,
        recordJson: data.recordJson,
      },
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
    const { appId, email } = data
    return prisma.feedback.findMany({
      where: {
        appId,
        email
      }
    })
  }
}
