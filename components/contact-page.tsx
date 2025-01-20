"use client";

import { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen dark:text-white text-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-semibold sm:text-3xl font-[family-name:var(--font-rethink)]">Drop us a Line.</h1>
          <p className="mt-4 text-xl font-[family-name:var(--font-rethink)]">Ask us a question, or just say Hello.</p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Form Section */}
          <div className="space-y-2">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 font-[family-name:var(--font-rethink)]">
                  <Label htmlFor="firstName">First name *</Label>
                  <Input
                    id="firstName"
                    {...form.register("firstName")}
                    className="border-black dark:border-violet-50"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-sm text-red-400">
                      {form.formState.errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name *</Label>
                  <Input
                    id="lastName"
                    {...form.register("lastName")}
                    className="border-black dark:border-violet-50"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-sm text-red-400">
                      {form.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="border-black dark:border-violet-50"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-400">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    className="border-black dark:border-violet-50"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-400">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  className="min-h-[150px] border-black dark:border-violet-50"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-red-400">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-black/80 dark:bg-white hover:bg-blue-700 font-[family-name:var(--font-rethink)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative hidden lg:block">
            <div className="space-y-4 font-[family-name:var(--font-rethink)]">
              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="phone">Phone</TabsTrigger>
                </TabsList>
                <TabsContent value="email" className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span className="font-[family-name:var(--font-rethink)]">hello@century.com</span>
                  </div>
                </TabsContent>
                <TabsContent value="location" className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>123 Business Street, Suite 100, City, Country</span>
                  </div>
                </TabsContent>
                <TabsContent value="phone" className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <Image
              src="/assets/images/city.webp"
              alt="City illustration"
              width={800}
              height={600}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
