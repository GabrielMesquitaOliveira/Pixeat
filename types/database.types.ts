export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5";
  };
  public: {
    Tables: {
      AUDIT_LOG: {
        Row: {
          action: string | null;
          changes: Json | null;
          created_at: string;
          entity_id: string | null;
          entity_type: string | null;
          id: number;
          ip_address: string | null;
          metadata: Json | null;
          restaurant_id: string;
          user_agent: string | null;
          user_id: string | null;
        };
        Insert: {
          action?: string | null;
          changes?: Json | null;
          created_at?: string;
          entity_id?: string | null;
          entity_type?: string | null;
          id?: number;
          ip_address?: string | null;
          metadata?: Json | null;
          restaurant_id: string;
          user_agent?: string | null;
          user_id?: string | null;
        };
        Update: {
          action?: string | null;
          changes?: Json | null;
          created_at?: string;
          entity_id?: string | null;
          entity_type?: string | null;
          id?: number;
          ip_address?: string | null;
          metadata?: Json | null;
          restaurant_id?: string;
          user_agent?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "AUDIT_LOG_restaurant_id_fkey";
            columns: ["restaurant_id"];
            isOneToOne: false;
            referencedRelation: "RESTAURANTS";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "AUDIT_LOG_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "USERS";
            referencedColumns: ["id"];
          },
        ];
      };
      MENU_CATEGORIES: {
        Row: {
          created_at: string;
          description: string | null;
          display_order: number | null;
          id: string;
          image_url: string | null;
          is_active: boolean;
          name: string;
          restaurant_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          display_order?: number | null;
          id?: string;
          image_url?: string | null;
          is_active?: boolean;
          name: string;
          restaurant_id: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          display_order?: number | null;
          id?: string;
          image_url?: string | null;
          is_active?: boolean;
          name?: string;
          restaurant_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "MENU_CATEGORIES_restaurant_id_fkey";
            columns: ["restaurant_id"];
            isOneToOne: false;
            referencedRelation: "RESTAURANTS";
            referencedColumns: ["id"];
          },
        ];
      };
      MENU_ITEMS: {
        Row: {
          allergens: string[] | null;
          category_id: string | null;
          created_at: string;
          description: string | null;
          display_order: number | null;
          id: string;
          image_thumbnail_url: string | null;
          image_url: string | null;
          is_active: boolean;
          is_available: boolean;
          is_featured: boolean;
          name: string;
          options: Json | null;
          price: number;
          restaurant_id: string;
          tags: string[] | null;
          updated_at: string | null;
        };
        Insert: {
          allergens?: string[] | null;
          category_id?: string | null;
          created_at?: string;
          description?: string | null;
          display_order?: number | null;
          id?: string;
          image_thumbnail_url?: string | null;
          image_url?: string | null;
          is_active?: boolean;
          is_available?: boolean;
          is_featured?: boolean;
          name: string;
          options?: Json | null;
          price: number;
          restaurant_id: string;
          tags?: string[] | null;
          updated_at?: string | null;
        };
        Update: {
          allergens?: string[] | null;
          category_id?: string | null;
          created_at?: string;
          description?: string | null;
          display_order?: number | null;
          id?: string;
          image_thumbnail_url?: string | null;
          image_url?: string | null;
          is_active?: boolean;
          is_available?: boolean;
          is_featured?: boolean;
          name?: string;
          options?: Json | null;
          price?: number;
          restaurant_id?: string;
          tags?: string[] | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "MENU_ITEMS_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "MENU_CATEGORIES";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "MENU_ITEMS_restaurant_id_fkey";
            columns: ["restaurant_id"];
            isOneToOne: false;
            referencedRelation: "RESTAURANTS";
            referencedColumns: ["id"];
          },
        ];
      };
      ORDER_ITEMS: {
        Row: {
          created_at: string;
          id: string;
          menu_item_id: string;
          name: string | null;
          notes: string | null;
          order_id: string;
          price: number | null;
          quantity: number | null;
          restaurant_id: string;
          selected_options: Json | null;
          status: string | null;
          subtotal: number;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          menu_item_id: string;
          name?: string | null;
          notes?: string | null;
          order_id: string;
          price?: number | null;
          quantity?: number | null;
          restaurant_id: string;
          selected_options?: Json | null;
          status?: string | null;
          subtotal: number;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          menu_item_id?: string;
          name?: string | null;
          notes?: string | null;
          order_id?: string;
          price?: number | null;
          quantity?: number | null;
          restaurant_id?: string;
          selected_options?: Json | null;
          status?: string | null;
          subtotal?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "ORDER_ITEMS_menu_item_id_fkey";
            columns: ["menu_item_id"];
            isOneToOne: false;
            referencedRelation: "MENU_ITEMS";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "ORDER_ITEMS_order_id_fkey";
            columns: ["order_id"];
            isOneToOne: false;
            referencedRelation: "ORDERS";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "ORDER_ITEMS_restaurant_id_fkey";
            columns: ["restaurant_id"];
            isOneToOne: false;
            referencedRelation: "RESTAURANTS";
            referencedColumns: ["id"];
          },
        ];
      };
      ORDERS: {
        Row: {
          cancellation_reason: string | null;
          cancelled_at: string | null;
          completed_at: string | null;
          confirmed_at: string | null;
          created_at: string;
          customer_id: string | null;
          customer_info: Json | null;
          discount: number | null;
          id: string;
          notes: string | null;
          order_number: string;
          payment_metadata: Json | null;
          payment_method: string | null;
          payment_status: string | null;
          prepared_at: string | null;
          restaurant_id: string;
          service_fee: number | null;
          special_requests: string | null;
          status: string | null;
          subtotal: number;
          table_id: string | null;
          tax: number | null;
          total: number;
          type: string | null;
          updated_at: string | null;
        };
        Insert: {
          cancellation_reason?: string | null;
          cancelled_at?: string | null;
          completed_at?: string | null;
          confirmed_at?: string | null;
          created_at?: string;
          customer_id?: string | null;
          customer_info?: Json | null;
          discount?: number | null;
          id?: string;
          notes?: string | null;
          order_number: string;
          payment_metadata?: Json | null;
          payment_method?: string | null;
          payment_status?: string | null;
          prepared_at?: string | null;
          restaurant_id: string;
          service_fee?: number | null;
          special_requests?: string | null;
          status?: string | null;
          subtotal: number;
          table_id?: string | null;
          tax?: number | null;
          total: number;
          type?: string | null;
          updated_at?: string | null;
        };
        Update: {
          cancellation_reason?: string | null;
          cancelled_at?: string | null;
          completed_at?: string | null;
          confirmed_at?: string | null;
          created_at?: string;
          customer_id?: string | null;
          customer_info?: Json | null;
          discount?: number | null;
          id?: string;
          notes?: string | null;
          order_number?: string;
          payment_metadata?: Json | null;
          payment_method?: string | null;
          payment_status?: string | null;
          prepared_at?: string | null;
          restaurant_id?: string;
          service_fee?: number | null;
          special_requests?: string | null;
          status?: string | null;
          subtotal?: number;
          table_id?: string | null;
          tax?: number | null;
          total?: number;
          type?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "ORDERS_customer_id_fkey";
            columns: ["customer_id"];
            isOneToOne: false;
            referencedRelation: "USERS";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "ORDERS_restaurant_id_fkey";
            columns: ["restaurant_id"];
            isOneToOne: false;
            referencedRelation: "RESTAURANTS";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "ORDERS_table_id_fkey";
            columns: ["table_id"];
            isOneToOne: false;
            referencedRelation: "TABLES";
            referencedColumns: ["id"];
          },
        ];
      };
      QR_CODES: {
        Row: {
          code: string;
          created_at: string | null;
          expires_at: string | null;
          id: string;
          image_url: string | null;
          is_active: boolean;
          last_scanned_at: string | null;
          metadata: Json | null;
          restaurant_id: string;
          scan_count: number | null;
          table_id: string;
          type: string;
          updated_at: string | null;
          url: string;
        };
        Insert: {
          code: string;
          created_at?: string | null;
          expires_at?: string | null;
          id?: string;
          image_url?: string | null;
          is_active?: boolean;
          last_scanned_at?: string | null;
          metadata?: Json | null;
          restaurant_id: string;
          scan_count?: number | null;
          table_id: string;
          type: string;
          updated_at?: string | null;
          url: string;
        };
        Update: {
          code?: string;
          created_at?: string | null;
          expires_at?: string | null;
          id?: string;
          image_url?: string | null;
          is_active?: boolean;
          last_scanned_at?: string | null;
          metadata?: Json | null;
          restaurant_id?: string;
          scan_count?: number | null;
          table_id?: string;
          type?: string;
          updated_at?: string | null;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: "QR_CODES_restaurant_id_fkey";
            columns: ["restaurant_id"];
            isOneToOne: false;
            referencedRelation: "RESTAURANTS";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "QR_CODES_table_id_fkey";
            columns: ["table_id"];
            isOneToOne: false;
            referencedRelation: "TABLES";
            referencedColumns: ["id"];
          },
        ];
      };
      RESERVATIONS: {
        Row: {
          cancellation_reason: string | null;
          cancelled_at: string | null;
          completed_at: string | null;
          confirmed_at: string | null;
          created_at: string;
          customer_id: string;
          customer_info: Json | null;
          date: string;
          datetime: string;
          id: string;
          party_size: number;
          reminder_sent: boolean | null;
          restaurant_id: string;
          seated_at: string | null;
          special_requests: string | null;
          status: string | null;
          table_id: string | null;
          time: string;
          updated_at: string | null;
        };
        Insert: {
          cancellation_reason?: string | null;
          cancelled_at?: string | null;
          completed_at?: string | null;
          confirmed_at?: string | null;
          created_at?: string;
          customer_id: string;
          customer_info?: Json | null;
          date: string;
          datetime: string;
          id?: string;
          party_size: number;
          reminder_sent?: boolean | null;
          restaurant_id: string;
          seated_at?: string | null;
          special_requests?: string | null;
          status?: string | null;
          table_id?: string | null;
          time: string;
          updated_at?: string | null;
        };
        Update: {
          cancellation_reason?: string | null;
          cancelled_at?: string | null;
          completed_at?: string | null;
          confirmed_at?: string | null;
          created_at?: string;
          customer_id?: string;
          customer_info?: Json | null;
          date?: string;
          datetime?: string;
          id?: string;
          party_size?: number;
          reminder_sent?: boolean | null;
          restaurant_id?: string;
          seated_at?: string | null;
          special_requests?: string | null;
          status?: string | null;
          table_id?: string | null;
          time?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "RESERVATIONS_customer_id_fkey";
            columns: ["customer_id"];
            isOneToOne: false;
            referencedRelation: "USERS";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "RESERVATIONS_restaurant_id_fkey";
            columns: ["restaurant_id"];
            isOneToOne: false;
            referencedRelation: "RESTAURANTS";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "RESERVATIONS_table_id_fkey";
            columns: ["table_id"];
            isOneToOne: false;
            referencedRelation: "TABLES";
            referencedColumns: ["id"];
          },
        ];
      };
      RESTAURANT_MEMBERS: {
        Row: {
          clerk_membership_id: string;
          created_at: string;
          id: string;
          is_active: boolean | null;
          permissions: Json | null;
          restaurant_id: string;
          role: string;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          clerk_membership_id: string;
          created_at?: string;
          id?: string;
          is_active?: boolean | null;
          permissions?: Json | null;
          restaurant_id?: string;
          role: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Update: {
          clerk_membership_id?: string;
          created_at?: string;
          id?: string;
          is_active?: boolean | null;
          permissions?: Json | null;
          restaurant_id?: string;
          role?: string;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "RESTAURANT_MEMBERS_restaurant_id_fkey";
            columns: ["restaurant_id"];
            isOneToOne: false;
            referencedRelation: "RESTAURANTS";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "RESTAURANT_MEMBERS_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "USERS";
            referencedColumns: ["id"];
          },
        ];
      };
      RESTAURANTS: {
        Row: {
          address: Json | null;
          avatar_url: string | null;
          clerk_org_id: string;
          created_at: string;
          email: string | null;
          id: string;
          is_active: boolean | null;
          metadata: Json | null;
          name: string;
          owner_id: string;
          phone: string | null;
          settings: Json | null;
          slug: string | null;
          subscription_ends_at: string | null;
          subscription_plan: string | null;
          subscription_status: string | null;
          trial_ends_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          address?: Json | null;
          avatar_url?: string | null;
          clerk_org_id: string;
          created_at?: string;
          email?: string | null;
          id?: string;
          is_active?: boolean | null;
          metadata?: Json | null;
          name: string;
          owner_id?: string;
          phone?: string | null;
          settings?: Json | null;
          slug?: string | null;
          subscription_ends_at?: string | null;
          subscription_plan?: string | null;
          subscription_status?: string | null;
          trial_ends_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          address?: Json | null;
          avatar_url?: string | null;
          clerk_org_id?: string;
          created_at?: string;
          email?: string | null;
          id?: string;
          is_active?: boolean | null;
          metadata?: Json | null;
          name?: string;
          owner_id?: string;
          phone?: string | null;
          settings?: Json | null;
          slug?: string | null;
          subscription_ends_at?: string | null;
          subscription_plan?: string | null;
          subscription_status?: string | null;
          trial_ends_at?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "RESTAURANTS_owner_id_fkey";
            columns: ["owner_id"];
            isOneToOne: false;
            referencedRelation: "USERS";
            referencedColumns: ["id"];
          },
        ];
      };
      TABLES: {
        Row: {
          capacity: number | null;
          created_at: string;
          id: string;
          is_active: boolean;
          location: Json | null;
          number: number | null;
          qr_code: string | null;
          qr_code_url: string | null;
          restaurant_id: string | null;
          status: string | null;
          updated_at: string | null;
        };
        Insert: {
          capacity?: number | null;
          created_at?: string;
          id?: string;
          is_active?: boolean;
          location?: Json | null;
          number?: number | null;
          qr_code?: string | null;
          qr_code_url?: string | null;
          restaurant_id?: string | null;
          status?: string | null;
          updated_at?: string | null;
        };
        Update: {
          capacity?: number | null;
          created_at?: string;
          id?: string;
          is_active?: boolean;
          location?: Json | null;
          number?: number | null;
          qr_code?: string | null;
          qr_code_url?: string | null;
          restaurant_id?: string | null;
          status?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "TABLES_restaurant_id_fkey";
            columns: ["restaurant_id"];
            isOneToOne: false;
            referencedRelation: "RESTAURANTS";
            referencedColumns: ["id"];
          },
        ];
      };
      USAGE_TRACKING: {
        Row: {
          api_calls_count: number | null;
          created_at: string;
          id: string;
          menu_items_count: number | null;
          metadata: Json | null;
          orders_count: number | null;
          period: string;
          reservations_count: number | null;
          restaurant_id: string;
          revenue: number | null;
          storage_used_bytes: number | null;
          tables_count: number | null;
          updated_at: string | null;
        };
        Insert: {
          api_calls_count?: number | null;
          created_at?: string;
          id?: string;
          menu_items_count?: number | null;
          metadata?: Json | null;
          orders_count?: number | null;
          period: string;
          reservations_count?: number | null;
          restaurant_id: string;
          revenue?: number | null;
          storage_used_bytes?: number | null;
          tables_count?: number | null;
          updated_at?: string | null;
        };
        Update: {
          api_calls_count?: number | null;
          created_at?: string;
          id?: string;
          menu_items_count?: number | null;
          metadata?: Json | null;
          orders_count?: number | null;
          period?: string;
          reservations_count?: number | null;
          restaurant_id?: string;
          revenue?: number | null;
          storage_used_bytes?: number | null;
          tables_count?: number | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "USAGE_TRACKING_restaurant_id_fkey";
            columns: ["restaurant_id"];
            isOneToOne: false;
            referencedRelation: "RESTAURANTS";
            referencedColumns: ["id"];
          },
        ];
      };
      USERS: {
        Row: {
          avatar_url: string | null;
          clerk_user_id: string;
          created_at: string;
          email: string | null;
          first_name: string;
          id: string;
          last_name: string;
          metadata: Json | null;
          phone: string | null;
          updated_at: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          clerk_user_id: string;
          created_at?: string;
          email?: string | null;
          first_name: string;
          id?: string;
          last_name: string;
          metadata?: Json | null;
          phone?: string | null;
          updated_at?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          clerk_user_id?: string;
          created_at?: string;
          email?: string | null;
          first_name?: string;
          id?: string;
          last_name?: string;
          metadata?: Json | null;
          phone?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      show_limit: { Args: never; Returns: number };
      show_trgm: { Args: { "": string }; Returns: string[] };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema =
  DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  } ? keyof (
      & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]][
        "Tables"
      ]
      & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]][
        "Views"
      ]
    )
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
} ? (
    & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]][
      "Tables"
    ]
    & DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]][
      "Views"
    ]
  )[TableName] extends {
    Row: infer R;
  } ? R
  : never
  : DefaultSchemaTableNameOrOptions extends keyof (
    & DefaultSchema["Tables"]
    & DefaultSchema["Views"]
  ) ? (
      & DefaultSchema["Tables"]
      & DefaultSchema["Views"]
    )[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    } ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]][
      "Tables"
    ]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]][
    "Tables"
  ][TableName] extends {
    Insert: infer I;
  } ? I
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    } ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]][
      "Tables"
    ]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]][
    "Tables"
  ][TableName] extends {
    Update: infer U;
  } ? U
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    } ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]][
      "Enums"
    ]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][
    EnumName
  ]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[
      PublicCompositeTypeNameOrOptions["schema"]
    ]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]][
    "CompositeTypes"
  ][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends
    keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
