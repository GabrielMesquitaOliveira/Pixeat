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
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default function OrganizationSettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Configurações da Empresa</h1>
      <div className="mb-6">
        <ClerkSettingsControls />
      </div>
      <div className="bg-card rounded-md p-4">
        <ClerkOrganizationProfile />
      </div>
    </div>
  );
}
