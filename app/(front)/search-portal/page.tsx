import { PortalLayout } from "@/components/portal/Layout";

export default function SearchPortal() {
  return (
    <PortalLayout>
      <div className="p-8 pt-16">
        <h1 className="text-2xl text-center lg:text-left font-bold mb-4">Search Portal</h1>
        <p>Welcome to the Century Search Portal. Use the filters to find schools.</p>
      </div>
    </PortalLayout>
  );
}
