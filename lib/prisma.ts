// it is designed to be a singleton, so we can safely use and re-use it throughout our application.
import { PrismaClient } from '@prisma/client'

if (process.env.NODE_ENV === 'production') {
  var prisma = new PrismaClient()
  
} else {
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient()
  }
  // @ts-ignore
  var prisma = global.prisma

}


export default prisma

