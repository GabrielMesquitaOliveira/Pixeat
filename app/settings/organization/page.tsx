"use client";

import * as React from "react";
import { ClerkOrganizationProfile } from "@/components/clerk/ClerkWidgets";

export default function OrganizationSettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Configurações da Empresa</h1>
      <ClerkOrganizationProfile />
    </div>
  );
}
