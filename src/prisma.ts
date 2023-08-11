import { PrismaClient } from '@prisma/client'

declare global {
    var _prisma: PrismaClient | undefined
}

const prisma = global._prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') {
    global._prisma = prisma
}

export { prisma }
