// 'use client'

// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as z from 'zod'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { School } from '@/types/school'

// const formSchema = z.object({
//   name: z.string().min(2, 'School name is required'),
//   email: z.string().email('Invalid email'),
//   phoneNumber: z.string().min(10, 'Phone number is required'),
//   address: z.string().min(5, 'Address is required'),
//   website: z.string().url('Invalid URL').optional().or(z.literal('')),
//   logo: z.instanceof(File).optional(),
// })

// type FormData = z.infer<typeof formSchema>

// export function SchoolProfileUpdateForm({ school }) {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: school.name,
//       email: school.email,
//       phoneNumber: school.phoneNumber,
//       address: school.address,
//       website: school.website,
//     },
//   })

//   const onSubmit = async (data: FormData) => {
//     setIsSubmitting(true)
//     setSubmitResult(null)

//     const formData = new FormData()
//     Object.entries(data).forEach(([key, value]) => {
//       if (key === 'logo' && value instanceof File) {
//         formData.append(key, value)
//       } else if (typeof value === 'string') {
//         formData.append(key, value)
//       }
//     })

//     try {
//       const response = await fetch('/api/update-school-profile', {
//         method: 'POST',
//         body: formData,
//       })

//       if (response.ok) {
//         setSubmitResult({ success: true, message: 'School profile updated successfully!' })
//       } else {
//         throw new Error('Failed to update school profile')
//       }
//     } catch (error) {
//       setSubmitResult({ success: false, message: 'An error occurred while updating the profile.' })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardHeader>
//         <CardTitle>Update School Profile</CardTitle>
//         <CardDescription>Update your school's information and logo.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">School Name</Label>
//             <Input id="name" {...register('name')} />
//             {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">School Email</Label>
//             <Input id="email" type="email" {...register('email')} />
//             {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="phoneNumber">School Phone</Label>
//             <Input id="phoneNumber" {...register('phoneNumber')} />
//             {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="address">School Address</Label>
//             <Input id="address" {...register('address')} />
//             {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="website">School Website (Optional)</Label>
//             <Input id="website" {...register('website')} />
//             {errors.website && <p className="text-sm text-red-500">{errors.website.message}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="logo">School Logo</Label>
//             <Input id="logo" type="file" accept="image/*" {...register('logo')} />
//           </div>
//           <Button type="submit" className="w-full" disabled={isSubmitting}>
//             {isSubmitting ? 'Updating...' : 'Update Profile'}
//           </Button>
//         </form>
//       </CardContent>
//       <CardFooter>
//         {submitResult && (
//           <Alert variant={submitResult.success ? "default" : "destructive"}>
//             <AlertTitle>{submitResult.success ? 'Success' : 'Error'}</AlertTitle>
//             <AlertDescription>{submitResult.message}</AlertDescription>
//           </Alert>
//         )}
//       </CardFooter>
//     </Card>
//   )
// }

