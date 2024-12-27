"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import { registerSchool } from "@/app/actions/registerSchool";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  schoolName: z.string().min(2, "School name is required"),
  schoolEmail: z.string().email("Invalid email"),
  schoolPhone: z.string().min(10, "Phone number is required"),
  schoolAddress: z.string().min(5, "Address is required"),
  schoolWebsite: z.string().url("Invalid URL").optional().or(z.literal("")),
  adminFirstName: z.string().min(2, "First name is required"),
  adminLastName: z.string().min(2, "Last name is required"),
  adminEmail: z.string().email("Invalid email"),
  adminPassword: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function SchoolRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // const result = await registerSchool(formData);

  //   setIsSubmitting(false);
  //   if (result.success) {
  //     setSubmitResult({
  //       success: true,
  //       message: `School registered successfully! Your school code is: ${result.schoolCode}`,
  //     });
  //   } else {
  //     setSubmitResult({
  //       success: false,
  //       message: result.error || "An error occurred during registration.",
  //     });
  //   }
  // };

  return (
    <Card className="w-full max-w-5xl mx-auto text-black bg-white">
      <CardHeader>
        <CardTitle>School Registration</CardTitle>
        <CardDescription>
          Register your school to get started with our management system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label
                className="font-[family-name:var(--font-rethink)]"
                htmlFor="schoolName"
              >
                School Name
              </Label>
              <Input
                id="schoolName"
                {...register("schoolName")}
                placeholder="e.g., Springfield Elementary School"
              />
              {errors.schoolName && (
                <p className="text-sm text-red-500">
                  {errors.schoolName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                className="font-[family-name:var(--font-rethink)]"
                htmlFor="schoolEmail"
              >
                School Email
              </Label>
              <Input
                id="schoolEmail"
                type="email"
                {...register("schoolEmail")}
                placeholder="e.g., info@springfieldelementary.edu"
              />
              {errors.schoolEmail && (
                <p className="text-sm text-red-500">
                  {errors.schoolEmail.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                className="font-[family-name:var(--font-rethink)]"
                htmlFor="schoolPhone"
              >
                School Phone
              </Label>
              <Input
                id="schoolPhone"
                {...register("schoolPhone")}
                placeholder="e.g., +1 (555) 123-4567"
              />
              {errors.schoolPhone && (
                <p className="text-sm text-red-500">
                  {errors.schoolPhone.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                className="font-[family-name:var(--font-rethink)]"
                htmlFor="schoolAddress"
              >
                School Address
              </Label>
              <Input
                id="schoolAddress"
                {...register("schoolAddress")}
                placeholder="e.g., 123 Education St, Springfield, ST 12345"
              />
              {errors.schoolAddress && (
                <p className="text-sm text-red-500">
                  {errors.schoolAddress.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                className="font-[family-name:var(--font-rethink)]"
                htmlFor="schoolWebsite"
              >
                School Website (Optional)
              </Label>
              <Input
                id="schoolWebsite"
                {...register("schoolWebsite")}
                placeholder="e.g., https://www.springfieldelementary.edu"
              />
              {errors.schoolWebsite && (
                <p className="text-sm text-red-500">
                  {errors.schoolWebsite.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                className="font-[family-name:var(--font-rethink)]"
                htmlFor="adminFirstName"
              >
                Admin First Name
              </Label>
              <Input
                id="adminFirstName"
                {...register("adminFirstName")}
                placeholder="e.g., John"
              />
              {errors.adminFirstName && (
                <p className="text-sm text-red-500">
                  {errors.adminFirstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                className="font-[family-name:var(--font-rethink)]"
                htmlFor="adminLastName"
              >
                Admin Last Name
              </Label>
              <Input
                id="adminLastName"
                {...register("adminLastName")}
                placeholder="e.g., Doe"
              />
              {errors.adminLastName && (
                <p className="text-sm text-red-500">
                  {errors.adminLastName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                className="font-[family-name:var(--font-rethink)]"
                htmlFor="adminEmail"
              >
                Admin Email
              </Label>
              <Input
                id="adminEmail"
                type="email"
                {...register("adminEmail")}
                placeholder="e.g., john.doe@springfieldelementary.edu"
              />
              {errors.adminEmail && (
                <p className="text-sm text-red-500">
                  {errors.adminEmail.message}
                </p>
              )}
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label
                className="font-[family-name:var(--font-rethink)]"
                htmlFor="adminPassword"
              >
                Admin Password
              </Label>
              <Input
                id="adminPassword"
                type="password"
                {...register("adminPassword")}
                placeholder="Enter a strong password (min. 8 characters)"
              />
              {errors.adminPassword && (
                <p className="text-sm text-red-500">
                  {errors.adminPassword.message}
                </p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            className="w-full font-[family-name:var(--font-rethink)] dark:text-white dark:bg-black max-w-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register School"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {submitResult && (
          <Alert variant={submitResult.success ? "default" : "destructive"}>
            <AlertTitle>
              {submitResult.success ? "Success" : "Error"}
            </AlertTitle>
            <AlertDescription>{submitResult.message}</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
