import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://smjguutojcvxlirvbocj.supabase.co"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtamd1dXRvamN2eGxpcnZib2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMDY2MDYsImV4cCI6MjA4ODc4MjYwNn0.AR_hrszeGU6s-q5RQhpEFihXvjRYDHU1lPo0Hs-b2EM"

export const supabase = createClient(supabaseUrl, supabaseKey)