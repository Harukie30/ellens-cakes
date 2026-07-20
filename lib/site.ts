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
    description: "Vanilla sponge, soft cream, and seasonal berries.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cocoa Velvet",
    description: "Rich chocolate layers with a silk ganache finish.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lemon Petal",
    description: "Bright citrus curd wrapped in a light buttercream.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21275adf4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Classic Celebration",
    description: "Custom designs for birthdays, weddings, and more.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  },
] as const;
