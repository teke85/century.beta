import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50, { message: "Username cannot exceed 50 characters." }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(2)
    .max(50),
  password: z
    .string()
    .min(8, { message: "Password must have atleast a minimum of 8 characters long" })
    .max(20, { message: "Password cannot exceed 20 characters." }),
});

export const signInFormSchema = formSchema.pick({
    email: true,
    password: true
})