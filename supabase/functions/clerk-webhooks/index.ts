import { createClient } from "npm:@supabase/supabase-js";
import { verifyWebhook } from "npm:@clerk/backend/webhooks";
Deno.serve(async (req) => {
  // Verify webhook signature
  const webhookSecret = Deno.env.get("CLERK_WEBHOOK_SECRET");
  if (!webhookSecret) {
    return new Response("Webhook secret not configured", {
      status: 500,
    });
  }
  const event = await verifyWebhook(req, {
    signingSecret: webhookSecret,
  });
  // Create supabase client
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !supabaseServiceKey) {
    return new Response("Supabase credentials not configured", {
      status: 500,
    });
  }
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  switch (event.type) {
    case "user.created": {
      const { data: user, error } = await supabase
        .from("USERS")
        .insert({
          clerk_user_id: event.data.id,
          email: event.data.email_addresses?.[0]?.email_address || null,
          first_name: event.data.first_name || null,
          last_name: event.data.last_name || null,
          avatar_url: event.data.image_url || null,
          created_at: new Date(event.data.created_at).toISOString(),
          updated_at: new Date(event.data.updated_at).toISOString(),
        })
        .select()
        .single();

      if (error) {
        console.error("Error creating user:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true, user }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    case "user.updated": {
      const { data: user, error } = await supabase
        .from("USERS")
        .update({
          email: event.data.email_addresses?.[0]?.email_address || null,
          first_name: event.data.first_name || null,
          last_name: event.data.last_name || null,
          avatar_url: event.data.image_url || null,
          updated_at: new Date(event.data.updated_at).toISOString(),
        })
        .eq("clerk_user_id", event.data.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating user:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true, user }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    case "user.deleted": {
      const { error } = await supabase
        .from("USERS")
        .delete()
        .eq("clerk_user_id", event.data.id);

      if (error) {
        console.error("Error deleting user:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    case "organization.created": {
      // Get the user UUID from clerk_id
      const { data: userData, error: userError } = await supabase
        .from("USERS")
        .select("id")
        .eq("clerk_user_id", event.data.created_by)
        .single();

      if (userError || !userData) {
        console.error("Error finding user:", userError);
        return new Response(
          JSON.stringify({ error: "User not found for organization owner" }),
          {
            status: 404,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      const { data: restaurant, error } = await supabase
        .from("RESTAURANTS")
        .insert({
          clerk_org_id: event.data.id,
          owner_id: userData.id, // UUID do usuário
          name: event.data.name,
          slug: event.data.slug || null,
          avatar_url: event.data.image_url || null,
          created_at: new Date(event.data.created_at).toISOString(),
          updated_at: new Date(event.data.updated_at).toISOString(),
        })
        .select()
        .single();

      if (error) {
        console.error("Error creating restaurant:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true, restaurant }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    case "organization.updated": {
      const { data: restaurant, error } = await supabase
        .from("RESTAURANTS")
        .update({
          name: event.data.name,
          slug: event.data.slug || null,
          avatar_url: event.data.image_url || null,
          updated_at: new Date(event.data.updated_at).toISOString(),
        })
        .eq("clerk_org_id", event.data.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating restaurant:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true, restaurant }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    case "organization.deleted": {
      const { error } = await supabase
        .from("RESTAURANTS")
        .delete()
        .eq("clerk_org_id", event.data.id);

      if (error) {
        console.error("Error deleting restaurant:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    case "organizationMembership.created": {
      // Get user UUID from clerk_id
      const { data: userData, error: userError } = await supabase
        .from("USERS")
        .select("id")
        .eq("clerk_user_id", event.data.public_user_data?.user_id)
        .single();

      if (userError || !userData) {
        console.error("Error finding user for membership:", userError);
        return new Response(JSON.stringify({ error: "User not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Get restaurant UUID from clerk_org_id
      const { data: restaurantData, error: restaurantError } = await supabase
        .from("RESTAURANTS")
        .select("id")
        .eq("clerk_org_id", event.data.organization?.id)
        .single();

      if (restaurantError || !restaurantData) {
        console.error("Error finding restaurant:", restaurantError);
        return new Response(JSON.stringify({ error: "Restaurant not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      const clerkRole = event.data.role;
      console.log("Clerk role received:", clerkRole);

      let mappedRole = "staff"; // default para membros normais

      if (clerkRole === "org:admin" || clerkRole === "admin") {
        mappedRole = "admin";
      } else if (clerkRole === "org:member" || clerkRole === "member") {
        mappedRole = "staff";
      } else if (clerkRole === "manager") {
        mappedRole = "manager";
      } else if (clerkRole === "waiter") {
        mappedRole = "waiter";
      } else if (clerkRole === "owner") {
        mappedRole = "owner";
      }

      const { data: member, error } = await supabase
        .from("RESTAURANT_MEMBERS")
        .insert({
          clerk_membership_id: event.data.id,
          user_id: userData.id, // UUID
          restaurant_id: restaurantData.id, // UUID
          role: mappedRole,
          created_at: new Date(event.data.created_at).toISOString(),
          updated_at: new Date(event.data.updated_at).toISOString(),
        })
        .select()
        .single();

      if (error) {
        console.error("Error creating member:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true, member }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    case "organizationMembership.updated": {
      const { data: member, error } = await supabase
        .from("RESTAURANT_MEMBERS")
        .update({
          role: event.data.role || "member",
          updated_at: new Date(event.data.updated_at).toISOString(),
        })
        .eq("clerk_membership_id", event.data.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating member:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true, member }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    case "organizationMembership.deleted": {
      const { error } = await supabase
        .from("RESTAURANT_MEMBERS")
        .delete()
        .eq("clerk_membership_id", event.data.id);

      if (error) {
        console.error("Error deleting member:", error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    default: {
      console.log("Unhandled event type:", event.type);
      return new Response(JSON.stringify({ success: true, unhandled: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
});
