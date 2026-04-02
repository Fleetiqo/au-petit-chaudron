# Au Petit Chaudron — Site vitrine

Site Vue 3 + Vite + Tailwind CSS pour le restaurant Au Petit Chaudron à Sainte-Adèle, QC.

## Stack

- **Vue 3** + **Vite**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Vue Router 4**
- **Supabase** (formulaire de réservation)

---

## Installation locale

```bash
cd au-petit-chaudron
npm install
```

Copier le fichier d'environnement :

```bash
cp .env.example .env
```

Remplir les variables dans `.env` :

```
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-cle-anon-publique
```

Lancer le serveur de développement :

```bash
npm run dev
```

---

## Configuration Supabase

### 1. Créer la table `reservations`

Dans l'éditeur SQL de Supabase :

```sql
create table reservations (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  nom text not null,
  telephone text not null,
  nb_personnes text not null,
  date_souhaitee text not null,
  message text,
  lu boolean default false
);

-- Activer Row Level Security
alter table reservations enable row level security;

-- Permettre les insertions publiques (formulaire de contact)
create policy "Insertions publiques" on reservations
  for insert with check (true);
```

### 2. Notifications par courriel (optionnel — via Supabase Edge Functions + Resend)

Créer une Edge Function `notify-reservation` qui écoute les insertions dans la table `reservations` et envoie un courriel via l'API Resend.

Variables d'environnement à ajouter dans Supabase :
- `RESEND_API_KEY` — votre clé API Resend
- `RESTAURANT_EMAIL` — courriel du propriétaire

---

## Mettre à jour le menu

Le menu est entièrement géré dans un seul fichier :

```
src/data/menu.json
```

Structure d'un item :

```json
{
  "nom": "Nom du plat",
  "description": "Description courte",
  "prix": "9.99",
  "vedette": true  // optionnel — affiche le badge "Signature"
}
```

---

## Déploiement

### Vercel

```bash
npm install -g vercel
vercel
```

Ajouter les variables d'environnement dans le dashboard Vercel :
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Netlify

```bash
npm run build
# Déployer le dossier dist/
```

Fichier `netlify.toml` recommandé pour le routing Vue Router :

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Remplacer les photos placeholder

Les sections avec photos placeholder utilisent des fonds colorés avec icônes SVG.
Pour remplacer par de vraies photos :

1. Ajouter les images dans `public/images/`
2. Remplacer les `<div>` placeholder par `<img src="/images/nom-photo.jpg" alt="Description" />`

---

## Domaine

Mettre à jour `https://aupetitchaudron.ca` dans :
- `index.html` (balises Open Graph + canonical)
- `public/sitemap.xml`
- `public/robots.txt`
