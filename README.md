# e-plant-shopping 

# Paradise Nursery Website for Coursera Project

## Features

- **Landing Page**: Beautiful hero section with company information and call-to-action
- **Product Listing**: Organized plant categories (Aromatic Plants, Medicinal Plants, Succulents) with detailed product cards
- **Shopping Cart**: Full cart management with quantity controls, item removal, and total calculations
- **Navigation**: Persistent header with dynamic shopping cart icon showing item count
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Project Structure

```
NurseryApp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── PlantCard.jsx
│   │   ├── PlantCard.css
│   │   ├── CartItem.jsx
│   │   └── CartItem.css
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Landing.css
│   │   ├── ProductListing.jsx
│   │   ├── ProductListing.css
│   │   ├── ShoppingCart.jsx
│   │   └── ShoppingCart.css
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── plants.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## License

This project is open source and available under the MIT License.

