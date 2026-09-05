import { unsplash } from "@/lib/utils";

export type MenuCategory =
  | "PÂTES"
  | "SPAGHETTI"
  | "COQUILLETTES"
  | "INDOMIE"
  | "BURGERS"
  | "BOISSONS"
  | "PROMOTIONS";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  bestSeller?: boolean;
}

export const CATEGORIES: MenuCategory[] = [
  "PÂTES",
  "SPAGHETTI",
  "COQUILLETTES",
  "INDOMIE",
  "BURGERS",
  "BOISSONS",
  "PROMOTIONS",
];

export const MENU: MenuItem[] = [
  {
    id: "spaghetti-maison",
    name: "Spaghetti sauce maison",
    description: "Spaghetti mijotés dans notre sauce tomate épicée, oignons frais.",
    price: 1000,
    category: "SPAGHETTI",
    image: unsplash("photo-1621996346565-e3dbc646d9a9"),
    bestSeller: true,
  },
  {
    id: "spaghetti-boeuf",
    name: "Spaghetti bœuf",
    description: "La grande assiette : spaghetti, émincé de bœuf, sauce généreuse.",
    price: 1800,
    category: "SPAGHETTI",
    image: unsplash("photo-1551183053-bf91a1d81141"),
  },
  {
    id: "coquillettes-maison",
    name: "Coquillettes sauce maison",
    description: "Coquillettes crémeuses, sauce maison, une touche de piment doux.",
    price: 1500,
    category: "COQUILLETTES",
    image: unsplash("photo-1473093226795-af9932fe5856"),
    bestSeller: true,
  },
  {
    id: "coquillettes-poulet",
    name: "Coquillettes poulet",
    description: "Coquillettes, morceaux de poulet grillé, sauce onctueuse.",
    price: 2000,
    category: "COQUILLETTES",
    image: unsplash("photo-1598103442097-8b74394b95c6"),
  },
  {
    id: "pates-legumes",
    name: "Pâtes légumes",
    description: "Pâtes sautées aux légumes croquants, sauce soja maison.",
    price: 1500,
    category: "PÂTES",
    image: unsplash("photo-1563379926898-05f4575a45d8"),
  },
  {
    id: "indomie-oeuf",
    name: "Indomie œuf",
    description: "Indomie sautée, œuf, oignons, piment — le classique de la rue.",
    price: 1000,
    category: "INDOMIE",
    image: unsplash("photo-1612929633738-8fe44f7ec841"),
    bestSeller: true,
  },
  {
    id: "indomie-speciale",
    name: "Indomie spéciale",
    description: "Indomie, œuf, poulet, saucisse et légumes. Pour les grosses faims.",
    price: 2200,
    category: "INDOMIE",
    image: unsplash("photo-1626804475297-41608ea09aeb"),
  },
  {
    id: "burger-street",
    name: "Street Burger",
    description: "Steak haché maison, cheddar, sauce Street, oignons caramélisés.",
    price: 2500,
    category: "BURGERS",
    image: unsplash("photo-1568901346375-23c9450c58cd"),
    bestSeller: true,
  },
  {
    id: "burger-poulet",
    name: "Chicken Burger",
    description: "Poulet croustillant, salade, tomate, sauce blanche maison.",
    price: 2300,
    category: "BURGERS",
    image: unsplash("photo-1550547660-d9450f859349"),
  },
  {
    id: "frites",
    name: "Frites maison",
    description: "Frites fraîches, dorées, servies bien chaudes.",
    price: 800,
    category: "BURGERS",
    image: unsplash("photo-1573080496219-bb080dd4f877"),
  },
  {
    id: "jus-bissap",
    name: "Bissap maison",
    description: "Jus d'hibiscus frais, menthe, pas trop sucré.",
    price: 500,
    category: "BOISSONS",
    image: unsplash("photo-1497534446932-c925b458314e"),
  },
  {
    id: "soda",
    name: "Soda 33 cl",
    description: "Coca, Fanta, Sprite — bien frais.",
    price: 500,
    category: "BOISSONS",
    image: unsplash("photo-1581636625402-29b2a704ef13"),
  },
  {
    id: "eau",
    name: "Eau minérale",
    description: "Bouteille 50 cl.",
    price: 300,
    category: "BOISSONS",
    image: unsplash("photo-1560023907-5f339617ea30"),
  },
  {
    id: "deal-du-jour",
    name: "Deal du jour",
    description: "1 plat au choix + 1 boisson. L'offre qui fait revenir tout le monde.",
    price: 2500,
    category: "PROMOTIONS",
    image: unsplash("photo-1504674900247-0877df9cc836"),
    bestSeller: true,
  },
];

export const BEST_SELLERS = MENU.filter((item) => item.bestSeller);
