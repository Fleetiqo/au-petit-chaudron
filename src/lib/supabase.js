import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Client lazy — évite un crash si les variables ne sont pas encore configurées
let _client = null

export function getSupabase() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase non configuré. Copier .env.example vers .env et remplir les clés.')
  }
  if (!_client) {
    _client = createClient(supabaseUrl, supabaseAnonKey)
  }
  return _client
}
