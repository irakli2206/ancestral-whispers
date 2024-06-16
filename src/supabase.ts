
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nsgnforlqltuuebdvocw.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zZ25mb3JscWx0dXVlYmR2b2N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MjU4NTIsImV4cCI6MTk5NDIwMTg1Mn0.7D6cLLLjppPSUQX8FEUKDZnxYs8HaSDI45Isp9vhJPc')

export default supabase