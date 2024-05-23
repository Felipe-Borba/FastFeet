const prisma = new PrismaClient();

class ReadUserService {
    async findById(id){
        const user = await prisma.user.findUnique({ where:{id}})
        return user
    }
}