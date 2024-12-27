"use client";

import { useState, useEffect } from "react";
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

interface School {
  id: string;
  name: string;
}

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userType: "",
    schoolId: "",
  });
  const [schools, setSchools] = useState<School[]>([]);
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSchools = async () => {
      const schoolList = await getSchools();
      setSchools(schoolList);
      setFilteredSchools(schoolList);
    };
    fetchSchools();
  }, []);

  useEffect(() => {
    const results = schools.filter((school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSchools(results);
  }, [searchTerm, schools]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("User registration data:", formData);
    // Handle successful registration (e.g., show success message, redirect, etc.)
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
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userType">User Type</Label>
            <Select
              onValueChange={(value) => handleSelectChange("userType", value)}
              value={formData.userType}
            >
              <SelectTrigger id="userType">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TEACHER">Teacher</SelectItem>
                <SelectItem value="STUDENT">Student</SelectItem>
                <SelectItem value="PARENT">Parent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="schoolId">School</Label>
            <Select
              onValueChange={(value) => handleSelectChange("schoolId", value)}
              value={formData.schoolId}
            >
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
          </div>
          <div className="space-y-2">
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
        <CardFooter>
          <Button type="submit" className="w-full max-w-xs">
            Register
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
