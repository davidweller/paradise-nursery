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

## Features in Detail

### Landing Page
- Full-screen hero section with background image
- Company name and description
- "Get Started" button linking to products

### Product Listing Page
- Header with navigation and cart icon
- Plants organized by categories
- Each plant card shows:
  - Thumbnail image
  - Plant name
  - Description
  - Price
  - "Add to Cart" button

### Shopping Cart Page
- Header with navigation and cart icon
- List of cart items with:
  - Thumbnail image
  - Plant name
  - Unit price
  - Quantity controls (increase/decrease)
  - Total price for that item
  - Delete button
- Cart summary showing:
  - Total number of items
  - Total cost
- "Continue Shopping" and "Checkout" buttons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

