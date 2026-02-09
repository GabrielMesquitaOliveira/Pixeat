"use client";

import * as React from "react";
import { ClerkProvider as ClerkReactProvider } from "@clerk/clerk-react";

export function ClerkProviderClient({ children }: { readonly children: React.ReactNode }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
  return (
    <ClerkReactProvider publishableKey={publishableKey}>
      {children}
    </ClerkReactProvider>
  );
}
