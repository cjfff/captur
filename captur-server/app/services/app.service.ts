import { Service } from "typedi";
import prisma from "app/helpers/client";

@Service()
export class AppService {
  async create(name: string) {
    return prisma.app.create({
      data: {
        name
      }
    });
  }

  async deleteById(id: number) {
    await prisma.app.delete({
      where: {
        id
      }
    });
    return true
  }

  async getById(id: number) {
    return prisma.app.findFirstOrThrow({
      where: {
        id
      }
    });
  }

  async getApps() {
    const list = await prisma.app.findMany();
    return {
      list,
      count: list.length
    };
  }
}
