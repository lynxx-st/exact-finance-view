import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nsostjcskmszdunoxidd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zb3N0amNza21zemR1bm94aWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3MTk5MzIsImV4cCI6MjA3MDI5NTkzMn0.0PWGBtKZUY9z86OiER_PEqbdVrRbpCvpbdBJ4W13B_I'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Transaction = {
  id: string
  user_id: string
  type: 'income' | 'expense' | 'transfer'
  category: string
  amount: number
  description: string
  date: string
  created_at: string
}

export type User = {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  created_at: string
}