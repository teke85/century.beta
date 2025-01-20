import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ChevronDown, ChevronRight } from "lucide-react";

type Filters = {
  keyword: string;
  province: string;
  type: string;
  specialization: string;
  isBoarding: boolean | null;
  offerAccommodation: boolean | null;
  gender: string;
};

type SidebarProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export function Sidebar({
  filters,
  setFilters,
  isOpen,
  setIsOpen,
}: SidebarProps) {
  const [openSections, setOpenSections] = useState({
    location: true,
    schoolType: true,
    specialization: true,
    accommodation: true,
    gender: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const provinces = [
    "All",
    "Lusaka",
    "Copperbelt",
    "Southern",
    "Eastern",
    "Northern",
    "Luapula",
    "Western",
    "Northwestern",
    "Central",
    "Muchinga",
  ];

  const schoolTypes = [
    "All",
    "Government",
    "Private",
    "Training Centre",
    "College",
    "University",
    "Higher Education",
  ];

  const specializations = [
    "All",
    "General",
    "TEVETA Accredited",
    "Agriculture",
    "Teacher Training",
    "Nursing",
    "Health Sciences",
    "Language School",
  ];

  const sidebarContent = (
    <div className="h-full w-80 overflow-y-auto bg-background p-6 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <div className="space-y-2">
        <Label htmlFor="keyword">Search</Label>
        <Input
          id="keyword"
          value={filters.keyword}
          onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
          placeholder="School, town, or keyword"
          className="dark:border-neutral-50"
        />
      </div>

      {/* Location Section */}
      <Collapsible
        open={openSections.location}
        onOpenChange={() => toggleSection("location")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-lg font-medium">Location</h3>
          {openSections.location ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            <Label htmlFor="province">Province</Label>
            <Select
              value={filters.province}
              onValueChange={(value) =>
                setFilters({ ...filters, province: value })
              }
            >
              <SelectTrigger id="province" className="dark:border-neutral-50">
                <SelectValue placeholder="Select province" />
              </SelectTrigger>
              <SelectContent className="dark:bg-white dark:text-black">
                {provinces.map((province) => (
                  <SelectItem key={province} value={province}>
                    {province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* School Type Section */}
      <Collapsible
        open={openSections.schoolType}
        onOpenChange={() => toggleSection("schoolType")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-lg font-medium">School Type</h3>
          {openSections.schoolType ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            <Label htmlFor="type">School Type</Label>
            <Select
              value={filters.type}
              onValueChange={(value) => setFilters({ ...filters, type: value })}
            >
              <SelectTrigger id="type" className="dark:border-neutral-50">
                <SelectValue placeholder="Select school type" />
              </SelectTrigger>
              <SelectContent className="dark:bg-white dark:text-black">
                {schoolTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Specialization Section */}
      <Collapsible
        open={openSections.specialization}
        onOpenChange={() => toggleSection("specialization")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-lg font-medium">Specialization</h3>
          {openSections.specialization ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            <Label htmlFor="specialization">Specialization</Label>
            <Select
              value={filters.specialization}
              onValueChange={(value) =>
                setFilters({ ...filters, specialization: value })
              }
            >
              <SelectTrigger
                id="specialization"
                className="dark:border-neutral-50"
              >
                <SelectValue placeholder="Select specialization" />
              </SelectTrigger>
              <SelectContent className="dark:bg-white dark:text-black">
                {specializations.map((spec) => (
                  <SelectItem key={spec} value={spec}>
                    {spec}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Accommodation Section */}
      <Collapsible
        open={openSections.accommodation}
        onOpenChange={() => toggleSection("accommodation")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-lg font-medium">Accommodation</h3>
          {openSections.accommodation ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-4">
              <Switch
                id="boarding"
                className="shadow-2xl"
                checked={filters.isBoarding === true}
                onCheckedChange={(checked) =>
                  setFilters({ ...filters, isBoarding: checked ? true : null })
                }
              />
              <Label htmlFor="boarding">Boarding Schools</Label>
            </div>
            <div className="flex items-center gap-4">
              <Switch
                id="accommodation"
                className="shadow-2xl"
                checked={filters.offerAccommodation === true}
                onCheckedChange={(checked) =>
                  setFilters({
                    ...filters,
                    offerAccommodation: checked ? true : null,
                  })
                }
              />
              <Label htmlFor="accommodation">Offers Accommodation</Label>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Gender Section */}
      <Collapsible
        open={openSections.gender}
        onOpenChange={() => toggleSection("gender")}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-lg font-medium">Gender</h3>
          {openSections.gender ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={filters.gender}
              onValueChange={(value) =>
                setFilters({ ...filters, gender: value })
              }
            >
              <SelectTrigger id="gender" className="dark:border-neutral-50">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent className="dark:bg-white dark:text-black">
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Boys">Boys</SelectItem>
                <SelectItem value="Girls">Girls</SelectItem>
                <SelectItem value="Mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="p-0 w-80">
          {sidebarContent}
        </SheetContent>
      </Sheet>
    </>
  );
}
