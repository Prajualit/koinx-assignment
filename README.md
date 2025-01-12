
# KoinX Assignment

Welcome to the **KoinX Assignment** project! This repository contains a cryptocurrency tracking application built with modern tools like **Next.js**, **React**, and the **CoinGecko API**. It provides users with insights into trending cryptocurrencies, live market data, and detailed analysis, all wrapped in a responsive, user-friendly interface.

---

## 🚀 Features

- **Trending Coins**: Displays the top trending cryptocurrencies fetched from the CoinGecko `/search/trending` API.
- **Live Market Data**: Provides real-time data for coins, including market cap, total volume, and price changes.
- **Responsive Carousel**: A dynamic carousel for trending coins using **Swiper.js**.
- **Detailed Charts**: Integrated advanced cryptocurrency charts with **TradingView Widget**.
- **Global Context Management**: Efficient data sharing between components using React Context API.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React.js](https://reactjs.org/)
- **Styling**: Tailwind CSS
- **APIs**: [CoinGecko API](https://www.coingecko.com/en/api)
- **Carousel**: Swiper.js
- **Charting**: TradingView Widget

---

## 📂 Folder Structure

```
koinx-assignment/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable React components
│   ├── context/           # React Context for global state management
│   ├── pages/             # Next.js pages
│   ├── styles/            # Tailwind CSS styles
│   ├── utils/             # Utility functions (e.g., formatters)
│   └── assets/            # Static image assets
├── .env.local             # Environment variables
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
└── next.config.js         # Next.js configuration
```

---

## ⚙️ Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Prajualit/koinx-assignment.git
   cd koinx-assignment
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add your API key for CoinGecko:
   ```env
   NEXT_PUBLIC_CG_API_KEY=YOUR_API_KEY
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 🌐 API Usage

### CoinGecko Endpoints:
- **Trending Coins**:
  ```plaintext
  https://api.coingecko.com/api/v3/search/trending
  ```
- **Market Data**:
  ```plaintext
  https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
  ```

---

## 🎨 Styling

The application uses **Tailwind CSS** for quick and responsive design. Custom styles are applied to components for a modern and clean UI.

---

## 🚧 Limitations and Future Enhancements

### Current Limitations:
- Limited data from CoinGecko due to free-tier API restrictions.
- Minimal error handling for network issues.

### Future Enhancements:
1. Implement server-side rendering (SSR) for improved SEO.
2. Add user authentication for personalized features.
3. Include additional charts and metrics for a comprehensive overview.
4. Enhance accessibility (ARIA tags, better color contrast).

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🧑‍💻 Author

Developed by **[Prajualit Tickoo](https://github.com/Prajualit)**.  
Feel free to reach out for questions or suggestions! 😊
