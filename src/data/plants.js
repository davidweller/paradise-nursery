export const plants = [
  // Aromatic Plants
  {
    id: 1,
    name: "Lavender",
    description: "Beautiful purple flowers with a calming, aromatic scent. Perfect for gardens and indoor spaces.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&h=400&fit=crop",
    category: "Aromatic Plants"
  },
  {
    id: 2,
    name: "Rosemary",
    description: "Aromatic herb with needle-like leaves. Great for cooking and natural air freshening.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1615485925511-ef4f6b8c8c0a?w=400&h=400&fit=crop",
    category: "Aromatic Plants"
  },
  {
    id: 3,
    name: "Mint",
    description: "Fresh, invigorating mint leaves perfect for teas, cocktails, and culinary uses.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1628426370907-c81a5c4b9b3c?w=400&h=400&fit=crop",
    category: "Aromatic Plants"
  },
  // Medicinal Plants
  {
    id: 4,
    name: "Aloe Vera",
    description: "Healing succulent with gel-filled leaves. Known for its skin-soothing properties.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1597848212624-e593beb7e4b0?w=400&h=400&fit=crop",
    category: "Medicinal Plants"
  },
  {
    id: 5,
    name: "Echinacea",
    description: "Beautiful purple coneflower with immune-boosting properties. A garden favorite.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=400&fit=crop",
    category: "Medicinal Plants"
  },
  {
    id: 6,
    name: "Chamomile",
    description: "Delicate white flowers perfect for making calming herbal tea. Easy to grow indoors.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1615485500705-5b0a8a8e5f0e?w=400&h=400&fit=crop",
    category: "Medicinal Plants"
  },
  // Succulents
  {
    id: 7,
    name: "Jade Plant",
    description: "Beautiful succulent with thick, glossy leaves. Symbol of good luck and prosperity.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=400&fit=crop",
    category: "Succulents"
  },
  {
    id: 8,
    name: "Snake Plant",
    description: "Hardy, low-maintenance plant perfect for beginners. Excellent air purifier.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1593691509546-c4bce2818fff?w=400&h=400&fit=crop",
    category: "Succulents"
  }
];

export const getPlantsByCategory = () => {
  const categories = {};
  plants.forEach(plant => {
    if (!categories[plant.category]) {
      categories[plant.category] = [];
    }
    categories[plant.category].push(plant);
  });
  return categories;
};

export const getPlantById = (id) => {
  return plants.find(plant => plant.id === id);
};

