"use client";

import * as React from "react";
import {
  OrganizationSwitcher,
  CreateOrganization,
  UserButton,
  useClerk,
} from "@clerk/nextjs";
import { ClerkOrganizationProfile } from "@/components/clerk/ClerkWidgets";

function ClerkSettingsControls() {
  const clerk = useClerk();

  React.useEffect(() => {
    if (!clerk) return;
    // Ensure the user is authenticated before rendering the settings controls
    if (!clerk.user) {
      clerk.openSignIn();
    }
  }, [clerk]);

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <OrganizationSwitcher />
        <CreateOrganization />
      </div>
    </div>
  );
}

export default function OrganizationSettingsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <header className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Configurações da Empresa</h1>
        <div className="w-full sm:w-auto">
          <ClerkSettingsControls />
        </div>
      </header>

      <main>
        <div className="bg-card rounded-md p-6">
          <ClerkOrganizationProfile />
        </div>
      </main>
    </div>
  );
}
