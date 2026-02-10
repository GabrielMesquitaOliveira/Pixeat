"use client";

import { ClerkOrganizationProfile } from "@/components/clerk/ClerkWidgets";

export default function OrganizationSettingsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <main>
        <div className="bg-card rounded-md">
          <ClerkOrganizationProfile />
        </div>
      </main>
    </div>
  );
}
