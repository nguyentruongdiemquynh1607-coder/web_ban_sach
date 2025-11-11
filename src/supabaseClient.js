import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://uwivihxbxtbpjuxruxex.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3aXZpaHhieHRicGp1eHJ1eGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MTUzODIsImV4cCI6MjA3ODM5MTM4Mn0.57ZyTzYwWv-ly-bJVDfAJY1ahE1Za7CdSuMTzaDRjjQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
