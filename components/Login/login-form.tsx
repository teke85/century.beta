"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import CustomCarousel from "../frontend/Custom-carousel";
import Image from "next/image";
import Logo from "../Logo";

type School = {
  id: string;
  name: string;
};

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  schoolId: z.string().min(1, "Please select a school"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [schools] = useState<School[]>([
    { id: "1", name: "Lusaka Secondary School" },
    { id: "2", name: "Kitwe Boys Secondary School" },
    { id: "3", name: "Ndola Girls Technical High School" },
    { id: "4", name: "Chongwe Secondary School" },
    { id: "5", name: "Kafue Day Secondary School" },
    { id: "6", name: "Chipata Day Secondary School" },
    { id: "7", name: "Mansa Secondary School" },
    { id: "8", name: "Monze Secondary School" },
    { id: "9", name: "Kabwe Secondary School" },
    { id: "10", name: "Livingstone Secondary School" },
    { id: "11", name: "Choma Secondary School" },
    { id: "12", name: "Kasama Boys Secondary School" },
    { id: "13", name: "Solwezi Technical Secondary School" },
    { id: "14", name: "Mazabuka Secondary School" },
    { id: "15", name: "Luanshya Boys Secondary School" },
    { id: "16", name: "Mufulira Secondary School" },
    { id: "17", name: "Chinsali Girls Secondary School" },
    { id: "18", name: "Kaoma Secondary School" },
    { id: "19", name: "Mpika Boys Secondary School" },
    { id: "20", name: "Samfya Secondary School" },
    { id: "21", name: "Mumbwa Secondary School" },
    { id: "22", name: "Kalomo Secondary School" },
    { id: "23", name: "Mwinilunga Secondary School" },
    { id: "24", name: "Petauke Boarding Secondary School" },
    { id: "25", name: "Mkushi Secondary School" },
    { id: "26", name: "Senanga Secondary School" },
    { id: "27", name: "Lundazi Boarding Secondary School" },
    { id: "28", name: "Kasempa Day Secondary School" },
    { id: "29", name: "Mwense Secondary School" },
    { id: "30", name: "Serenje Technical High School" },
    { id: "31", name: "Katete Secondary School" },
    { id: "32", name: "Kawambwa Secondary School" },
    { id: "33", name: "Isoka Boys Secondary School" },
    { id: "34", name: "Mongu Secondary School" },
    { id: "35", name: "Nchelenge Secondary School" },
    { id: "36", name: "Kapiri Mposhi Secondary School" },
    { id: "37", name: "Mporokoso Secondary School" },
    { id: "38", name: "Kalulushi Secondary School" },
    { id: "39", name: "Chililabombwe Secondary School" },
    { id: "40", name: "Luangwa Secondary School" },
    { id: "41", name: "Siavonga Secondary School" },
    { id: "42", name: "Zambezi Secondary School" },
    { id: "43", name: "Chavuma Secondary School" },
    { id: "44", name: "Lukulu Secondary School" },
    { id: "45", name: "Mufumbwe Secondary School" },
    { id: "46", name: "Nakonde Secondary School" },
    { id: "47", name: "Mpulungu Secondary School" },
    { id: "48", name: "Chirundu Secondary School" },
    { id: "49", name: "Chibombo Day Secondary School" },
    { id: "50", name: "Luwingu Secondary School" },
  ]);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to login");
      }

      // Redirect to dashboard or handle successful login
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full py-10">
      <div>
        <Card className="max-w-lg bg-transparent mx-auto border shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-center py-4">
              <Logo />
            </div>
            <CardTitle className="text-center">Login to your account</CardTitle>
            <CardDescription>
              Sign in to access your school management system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label
                  className="font-[family-name:var(--font-rethink)]"
                  htmlFor="school"
                >
                  School
                </Label>
                <Controller
                  name="schoolId"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue
                          className="font-[family-name:var(--font-rethink)]"
                          placeholder="Select your school"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {schools.map((school) => (
                          <SelectItem key={school.id} value={school.id}>
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.schoolId && (
                  <p className="text-sm text-red-500">
                    {errors.schoolId.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  className="font-[family-name:var(--font-rethink)]"
                  htmlFor="email"
                >
                  Email
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className="pl-10"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label
                    className="font-[family-name:var(--font-rethink)]"
                    htmlFor="password"
                  >
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary font-[family-name:var(--font-rethink)] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Enter your password"
                    className="pr-10 font-[family-name:var(--font-rethink)]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full font-[family-name:var(--font-rethink)]"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <p className="text-sm text-center font-[family-name:var(--font-rethink)]">
              Don't have an account?{" "}
              <Link
                href="/registration"
                className="text-primary hover:underline font-[family-name:var(--font-rethink)]"
              >
                Kindly Register here
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="max-w-full">
        <CustomCarousel />
      </div>
    </div>
  );
};

export default LoginForm;
