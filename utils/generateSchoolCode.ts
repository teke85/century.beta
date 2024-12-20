import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function generateSchoolCode(): Promise<string> {
  let code: string = ''
  let isUnique = false

  while (!isUnique) {
    code = Math.floor(1000 + Math.random() * 9000).toString()
    const existingSchool = await prisma.school.findUnique({
      where: { code },
    })
    if (!existingSchool) {
      isUnique = true
    }
  }

  return code
}

