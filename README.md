![Predo Logo](/public/predo-logo.jpg)

# Predo | Solana AI Hackathon

**Predo** is an innovative platform designed to transform casual predictions made in group chats into engaging and friendly wagers. Whether it's sports outcomes or cryptocurrency price predictions, Predo allows users to make bold claims, create wagers, and settle bets seamlessly using cryptocurrency.

### Key Features

- **AI-Powered Wagering**: Automatically generates wagers based on user predictions.
- **Instant Verification**: Utilizes AI to verify outcomes and ensure fairness.
- **Crypto Integration**: Supports USDC stakes for easy and secure transactions.
- **User-Friendly Interface**: Clean and intuitive design for a smooth user experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

To set up the Predo project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/predofun/predo-web.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd predo-web
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` to view the application.

## Usage

Once the application is running, you can start making predictions in your Telegram group chat:

1. Make a bold claim (e.g., "Arsenal's definitely winning the league this year").
2. Tag [@predofun_bot](https://t.co/FtP1JAWtEC) with your prediction.
3. The AI will create a wager and pin it to the chat.
4. Friends can join with their USDC stakes.
5. The AI will verify the outcome of the wager.
6. Winners receive their payouts instantly.

## Project Structure

Here's a brief overview of the key files and directories in the project:

```
predo/
├── public/
│   ├── index.html          # Main HTML file
│   └── assets/             # Static assets (images, etc.)
├── src/
│   ├── components/         # React components
│   ├── hooks/              # Custom hooks
│   ├── pages/              # Page components
│   ├── App.jsx             # Main application component
│   └── index.jsx           # Entry point for React
├── package.json             # Project metadata and dependencies
└── vite.config.ts           # Vite configuration file
```

## Contact

- Bot: [@predofun_bot](https://t.co/FtP1JAWtEC)
- Twitter: [@predofun](https://x.com/predofun)

Thank you for checking out **Predo**! We hope you enjoy turning casual banter into fun wagers with friends!
