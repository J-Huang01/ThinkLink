import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eaemktspnzwpzvvbmrac.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZW1rdHNwbnp3cHp2dmJtcmFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxNDQzMjQsImV4cCI6MjAwMjcyMDMyNH0.sCYuZQCIGBUaJTGter9xlZh-24PXi8E0yxD5e5a7L_k";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
