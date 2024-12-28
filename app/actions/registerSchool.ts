'use server'

import { PrismaClient } from '@prisma/client'
import { generateSchoolCode } from '@/utils/generateSchoolCode'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function registerSchool(formData: FormData) {
  const schoolName = formData.get('schoolName') as string
  const schoolEmail = formData.get('schoolEmail') as string
  const schoolPhone = formData.get('schoolPhone') as string
  const schoolAddress = formData.get('schoolAddress') as string
  const schoolWebsite = formData.get('schoolWebsite') as string
  const adminFirstName = formData.get('adminFirstName') as string
  const adminLastName = formData.get('adminLastName') as string
  const adminEmail = formData.get('adminEmail') as string
  const adminPassword = formData.get('adminPassword') as string

  try {
    const schoolCode = await generateSchoolCode()
    const hashedPassword = await bcrypt.hash(adminPassword, 10)

    const school = await prisma.school.create({
      data: {
        name: schoolName,
        code: schoolCode,
        email: schoolEmail,
        phoneNumber: schoolPhone,
        address: schoolAddress,
        website: schoolWebsite,
        users: {
          create: {
            firstName: adminFirstName,
            lastName: adminLastName,
            email: adminEmail,
            password: hashedPassword,
            isAdmin: true,
          },
        },
        schoolStats: {
          create: {},
        },
      },
    })

    return { success: true, schoolCode }
  } catch (error) {
    console.error('Error registering school:', error)
    return { success: false, error: 'Failed to register school. Please try again.' }
  }
}

