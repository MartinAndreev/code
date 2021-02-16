import NextAuth, { InitOptions } from 'next-auth'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'
import Email from 'src/lib/next-auth/email-provider'
import { jwtConfig as jwt } from 'src/lib/next-auth/jwt'

import { User } from '@generated/type-graphql'

const prisma = new PrismaClient()

const options: InitOptions = {
  providers: [
    Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT),
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  events: {
    createUser: async (user: User) => {
      // Create a User Acter
      const userActerType = await prisma.acterType.findFirst({
        where: { name: 'user' },
      })
      if (!userActerType) {
        console.error('Could not find user ActerType')
        return
      }

      const userActer = prisma.acter.create({
        data: {
          acterTypeId: userActerType.id,
          createdByUserId: user.id,
        },
      })
      console.info('Created User Acter to match User', user.id)
    },
  },

  adapter: Adapters.Prisma.Adapter({ prisma }),

  session: { jwt: true },
  jwt,
}

export default (req, res) => NextAuth(req, res, options)
