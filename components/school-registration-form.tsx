'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SchoolRegistrationForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    schoolName: '',
    adminName: '',
    adminEmail: '',
    phoneNumber: '',
    address: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('School registration data:', formData)
    // Redirect to the user registration page after successful submission
    router.push('/user-registration')
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>School Registration</CardTitle>
        <CardDescription>Register your school to start using the Student Management Platform</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="schoolName">School Name</Label>
            <Input 
              id="schoolName" 
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="Enter your school name" 
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="adminName">Admin Name</Label>
            <Input 
              id="adminName" 
              name="adminName"
              value={formData.adminName}
              onChange={handleChange}
              placeholder="Enter admin's full name" 
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="adminEmail">Admin Email</Label>
            <Input 
              id="adminEmail" 
              name="adminEmail"
              value={formData.adminEmail}
              onChange={handleChange}
              type="email" 
              placeholder="Enter admin's email address" 
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input 
              id="phoneNumber" 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              type="tel" 
              placeholder="Enter school's phone number" 
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">School Address</Label>
            <Textarea 
              id="address" 
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter school's full address" 
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Register School</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

