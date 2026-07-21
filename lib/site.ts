export const site = {
  name: "Ellen Cakes",
  tagline: "Celebration cakes, baked with care.",
  email: "hello@ellencakes.com",
  whatsapp: "https://wa.me/15551234567",
  phoneDisplay: "(555) 123-4567",
  location: "Made fresh to order · Local pickup & delivery",
  hours: "Orders by appointment · Reply within 24 hours",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#cakes", label: "Cakes" },
  { href: "#how", label: "How to order" },
  { href: "#order", label: "Order" },
] as const;

export const socialLinks = [
  {
    label: "Instagram",
    handle: "@ellencakes",
    href: "https://instagram.com/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    handle: "Ellen Cakes",
    href: "https://facebook.com/",
    icon: "facebook",
  },
  {
    label: "TikTok",
    handle: "@ellencakes",
    href: "https://tiktok.com/",
    icon: "tiktok",
  },
  {
    label: "WhatsApp",
    handle: "Chat with us",
    href: "https://wa.me/15551234567",
    icon: "whatsapp",
  },
] as const;

export const signatureCakes = [
  {
    name: "Berry Blush",
    tagline: "Soft, bright, unforgettable",
    description: "Vanilla sponge, soft cream, and seasonal berries.",
    note: "Perfect for birthdays & garden parties",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1488477187110-9ed8a2cfe6f0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    name: "Cocoa Velvet",
    tagline: "Deep chocolate, silk finish",
    description: "Rich chocolate layers with a silk ganache finish.",
    note: "A showstopper for evening celebrations",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    name: "Lemon Petal",
    tagline: "Citrus light, petal soft",
    description: "Bright citrus curd wrapped in a light buttercream.",
    note: "Made for sunny afternoons",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519914217596-78a4b2c6d8b0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1527481138388-31827a7c94d5?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    name: "Classic Celebration",
    tagline: "Your vision, finished by hand",
    description: "Custom designs for birthdays, weddings, and more.",
    note: "Fully custom — colors, tiers & details",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=1600&q=80",
    ],
  },
] as const;

export type SignatureCake = (typeof signatureCakes)[number];
