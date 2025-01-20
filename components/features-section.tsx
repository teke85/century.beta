import { Search, Phone, Shield, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { SchoolRegistrationForm } from "./school-registration-form1";

export function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-black/20 p-3">
          <Search className="h-6 w-6 dark:text-white text-gray-600" />
        </div>
        <h3 className="mb-2 font-semibold">Find Schools</h3>
        <p className="text-sm text-black dark:text-gray-300">
          Quickly find the best schools that match your requirements
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-black/20 p-3">
          <Phone className="h-6 w-6 dark:text-white text-gray-600" />
        </div>
        <h3 className="mb-2 font-semibold">Contact Schools</h3>
        <p className="text-sm dark:text-gray-300 text-black">
          Get email, phone, location and other important contact information
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-black/20 p-3">
          <Shield className="h-6 w-6 dark:text-white text-gray-600" />
        </div>
        <h3 className="mb-2 font-semibold">Make Informed Decisions</h3>
        <p className="text-sm dark:text-gray-300 text-black">
          Browse detailed information about facilities, programs, and
          achievements
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-black/20 p-3">
          <Globe className="h-6 w-6 dark:text-white text-gray-600" />
        </div>
        <h3 className="mb-2 font-semibold">Compare Schools</h3>
        <p className="text-sm dark:text-gray-300 text-black">
          Compare different schools to find the perfect fit for your needs
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" className="">
          Browse Schools
        </Button>
        {/* <Button size="lg" variant="outline" className="">
          Register Your School
        </Button> */}
        <Dialog>
              <DialogTrigger asChild>
                <Button className="font-[family-name:var(--font-rethink)]" variant="outline">Register your School</Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <SchoolRegistrationForm />
              </DialogContent>
            </Dialog>
      </div>
    </div>
  );
}
