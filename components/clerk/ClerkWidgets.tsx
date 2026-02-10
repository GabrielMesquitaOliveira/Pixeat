"use client";

import * as React from "react";
import {
  UserButton,
  OrganizationSwitcher,
  CreateOrganization,
  OrganizationProfile,
} from "@clerk/nextjs";

export function ClerkUserButton() {
    
  return (
    <div className="flex items-center gap-2">
      <UserButton/>
    </div>
  );
}

export function ClerkOrganizationSwitcher() {
  return <OrganizationSwitcher />;
}

export function ClerkCreateOrganization() {
  return <CreateOrganization />;
}

export function ClerkOrganizationProfile() {
  return (
    <div className="p-4">
      <OrganizationProfile />
    </div>
  );
}
