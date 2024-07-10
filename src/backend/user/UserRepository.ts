import { User } from "@/core/model/User";
import { PrismaClient } from "@prisma/client";

export default class UserRepository {
  private static db: PrismaClient = new PrismaClient()

  static async save(user: User): Promise<User> {
    const saveUser = await this.db.user.upsert({
      where: { id: user.id },
      update: user,
      create: user,
      })

      return saveUser as User
  }

  static async getAll(): Promise<User[]>{
    const user = await this.db.user.findMany()
    return user as User[]
  }

  static async getById(id: string): Promise<User>{
    const user = await this.db.user.findUnique({
      where: { id }
    })
    return user as User
  }

}