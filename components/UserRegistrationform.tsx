"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getSchools } from "@/app/actions/getSchools";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

interface School {
  id: string;
  name: string;
}

const phoneRegex = /^(\+?260|0)([79]\d{8})$/;

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(
      phoneRegex,
      "Invalid Zambian phone number. Format: +260977000000 or 0XXXXXXXXX"
    ),
  userType: z.enum(["ADMIN", "TEACHER", "STUDENT", "PARENT"], {
    required_error: "Please select a user type",
  }),
  schoolId: z.string().min(1, "Please select a school"),
});

type FormData = z.infer<typeof formSchema>;

export default function UserRegistrationForm() {
  const [schools, setSchools] = useState<School[]>([]);
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const schoolList = await getSchools();
        setSchools(schoolList);
        setFilteredSchools(schoolList);
      } catch (error) {
        console.error("Failed to fetch schools:", error);
        toast({
          title: "Error",
          description: "Failed to load schools. Please try again later.",
          variant: "destructive",
        });
      }
    };
    fetchSchools();
  }, []);

  useEffect(() => {
    const results = schools.filter((school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSchools(results);
  }, [searchTerm, schools]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Replace this with your actual API call
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();
      console.log("User registration data:", result);
      toast({
        title: "Success",
        description: "User registered successfully!",
      });
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Error",
        description: "Failed to register. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSchoolSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-transparent shadow-2xl">
      <CardHeader>
        <CardTitle>User Registration</CardTitle>
        <CardDescription>
          Sign up for the Student Management Platform
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 font-[family-name:var(--font-rethink)]">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                {...register("firstName")}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2 font-[family-name:var(--font-rethink)]">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                {...register("lastName")}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 font-[family-name:var(--font-rethink)]">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2 font-[family-name:var(--font-rethink)]">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 font-[family-name:var(--font-rethink)]">
              <Label htmlFor="userType">User Type</Label>
              <Controller
                name="userType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="userType">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ADMIN">Admin</SelectItem>
                      <SelectItem value="TEACHER">Teacher</SelectItem>
                      <SelectItem value="STUDENT">Student</SelectItem>
                      <SelectItem value="PARENT">Parent</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.userType && (
                <p className="text-red-500 text-sm">
                  {errors.userType.message}
                </p>
              )}
            </div>
            <div className="space-y-2 font-[family-name:var(--font-rethink)]">
              <Label htmlFor="schoolId">School</Label>
              <Controller
                name="schoolId"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="schoolId">
                      <SelectValue placeholder="Select your school" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredSchools.map((school) => (
                        <SelectItem key={school.id} value={school.id}>
                          {school.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.schoolId && (
                <p className="text-red-500 text-sm">
                  {errors.schoolId.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2 font-[family-name:var(--font-rethink)]">
            <Label htmlFor="schoolSearch">Search for a school</Label>
            <Input
              id="schoolSearch"
              name="schoolSearch"
              value={searchTerm}
              onChange={handleSchoolSearch}
              placeholder="Type to search for a school"
            />
          </div>
        </CardContent>
        <CardFooter className="flex w-full items-start justify-center flex-col gap-2">
          <Button
            type="submit"
            className="w-full max-w-xs font-[family-name:var(--font-rethink)]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
