# Street Food Cotonou

Site officiel de **Street Food Cotonou** — mobile-first, pensé pour convertir le
trafic TikTok / Instagram / Google / WhatsApp en commandes.

**En ligne :** https://street-sepia.vercel.app

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (tokens dans `src/app/globals.css`)
- Structure shadcn/ui (`components.json`, `src/components/ui`, `@/lib/utils`)
- framer-motion pour les animations
- lucide-react pour les icônes

## Structure

```
src/
├── app/                # routes : / /menu /commander /experience /contact
│   ├── globals.css     # design system (rouge/noir/off-white/jaune) + tokens shadcn
│   ├── layout.tsx      # polices Anton + Inter, SEO, CartProvider
│   ├── robots.ts / sitemap.ts
├── components/
│   ├── ui/             # composants 21st.dev + shadcn (voir plus bas)
│   ├── sections/       # sections de la landing (hero, marquee, menu, promo…)
│   ├── menu/           # MenuCard, MenuBrowser (filtres par catégorie)
│   ├── cart/           # panier global (localStorage) + panier flottant
│   ├── checkout/       # formulaire de commande → WhatsApp
│   └── layout/         # Navbar, Footer
└── lib/
    ├── site.ts         # ⚙️ infos à éditer : WhatsApp, adresse, horaires, réseaux
    ├── menu-data.ts    # ⚙️ le menu (plats, prix, catégories, images)
    └── utils.ts        # cn(), unsplash(), formatFcfa()
```

## Composants 21st.dev intégrés (`src/components/ui/`)

| Fichier | Rôle |
| --- | --- |
| `button.tsx` | Bouton shadcn (base) |
| `gallery.tsx` | `PhotoGallery` — galerie draggable → section « Bienvenue chez Street Food » |
| `scroll-expansion-hero.tsx` | `ScrollExpandMedia` — page immersive `/experience` |
| `zoom-parallax.tsx` | `ZoomParallax` — section « Fais défiler, ça zoome » |
| `design-testimonial.tsx` | `Testimonial` — section avis clients |

Les URLs d'images 21st ont été remplacées par des photos Unsplash ; les couleurs
et textes sont passés à l'identité Street Food.

## Personnaliser

- **Coordonnées / WhatsApp / réseaux** → `src/lib/site.ts` (numéro WhatsApp au
  format international, chiffres uniquement).
- **Menu et prix** → `src/lib/menu-data.ts`.
- **Couleurs / typo** → variables `--street-*` dans `src/app/globals.css`.

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Déploiement

```bash
vercel deploy --prod
```

## Suite possible

- Back-office Supabase (tables `menu_items`, `orders`, `promotions`, `reviews`…)
  pour gérer le menu et recevoir les commandes sans passer par WhatsApp.
- Feed Instagram/TikTok réel dans la galerie.
- Domaine personnalisé.
