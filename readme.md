# 📊 IBKR Portfolio Analyzer

<p align="center">
  <strong>Turn your Interactive Brokers activity statement into a powerful decision-making tool.</strong>
  <br />
  Visualize your gains, manage portfolio risk, and trade with confidence.
</p>

---

## ✨ Overview

The **IBKR Portfolio Analyzer** is a sophisticated, privacy-focused web application designed for traders who want to gain deeper insights from their Interactive Brokers activity statements. While beneficial for all investors, it has a special focus on visualizing and calculating key performance and risk metrics for short option strategies, particularly **The Wheel**.

This tool processes your entire activity statement CSV file directly in your browser, ensuring your financial data remains completely private and never leaves your computer.

## 🚀 Key Features

-   **Privacy First**: All data processing is done client-side. Your statement is **never** uploaded to any server.
-   **Comprehensive Dashboard**: Get a 360-degree view of your portfolio's performance with key metrics like Net Asset Value (NAV), Time-Weighted Return (TWR), and detailed P/L summaries.
-   **Advanced Options Analysis**:
    -   **Wheel Strategy Tracking**: Automatically identifies and analyzes completed and pending Wheel cycles, calculating total P/L, premiums, duration, and annualized returns.
    -   **Short Put Risk Management**: Visualizes your potential collateral requirements for short puts, separating them by risk (In-the-Money vs. Out-of-the-Money) and calculating potential cash shortfalls.
    -   **Performance Metrics**: Track your options win rate, assignment rate, premium capture, and Annualized Return on Capital (AROC).
-   **Stunning Visualizations**:
    -   **NAV Flow Sankey Chart**: Understand exactly what contributed to the change in your portfolio's value over the period.
    -   **Interactive Charts**: Analyze monthly income/P&L, cost breakdowns, and P&L contribution by ticker with beautiful bar and pie charts.
-   **Multi-Language & Multi-Currency**: View your dashboard in multiple languages and convert all financial data to your preferred currency with a single click.
-   **Public Shareable View**: Generate a clean, anonymized, and shareable snapshot of your portfolio's key metrics to share your performance with others.

## ⚙️ How to Use

1.  **Log in to Interactive Brokers** and navigate to the **"Performance & Reports"** > **"Statements"** tab.
2.  Find the **"Activity"** statement type and click the **"Run"** button (the arrow icon).
3.  In the pop-up window:
    -   Choose your desired **Period** (e.g., "Monthly", "Year to Date"). "Year to Date" is recommended for comprehensive analysis.
    -   Set the **Format** to **CSV**.
    -   Click the **"Download"** button.
4.  **Open the IBKR Portfolio Analyzer** web app.
5.  **Drag and drop** the downloaded CSV file onto the upload area, or click to select it from your computer.
6.  Your interactive dashboard will be generated instantly!

**Important**: Do not open and re-save the CSV file in spreadsheet software like Excel, as it may alter the date/number formatting and cause parsing errors.

## 🛠️ Tech Stack

-   **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Charting**: [Recharts](https://recharts.org/)
-   **Client-side Processing**: Standard browser APIs (FileReader) for parsing the CSV.

## 🖥️ Getting Started (For Developers)

This project is a static web application with no backend dependencies. You can run it locally with any simple HTTP server.

### Prerequisites

-   A modern web browser.
-   A simple local web server. If you have Python installed, you can use its built-in server.

### Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ibkr-portfolio-analyzer.git
    cd ibkr-portfolio-analyzer
    ```

2.  **Start a local server:**
    If you have Python 3, you can run:
    ```bash
    python -m http.server
    ```
    Alternatively, you can use other tools like `live-server` for Node.js:
    ```bash
    npm install -g live-server
    live-server .
    ```

3.  **Open the application:**
    Navigate to `http://localhost:8000` (or the address provided by your server) in your web browser.

## 🚀 Deployment

Since this is a client-side only application, you can deploy it to any static site hosting service.

1.  Simply upload the contents of the repository to your hosting provider.
2.  Popular free options include:
    -   [GitHub Pages](https://pages.github.com/)
    -   [Netlify](https://www.netlify.com/)
    -   [Vercel](https://vercel.com/)
3.  No build step is required due to the use of `es-modules` and `import-maps` directly in the browser.

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features, bug fixes, or improvements, please feel free to:

1.  **Fork** the repository.
2.  Create a new **branch** for your feature (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

## ⚖️ Disclaimer

This application is provided for informational and educational purposes only. It is not financial advice. The app is still under development and may contain bugs or inaccuracies. We are not responsible for any financial decisions made based on the analysis provided by this tool. Always conduct your own research and consult with a qualified financial professional.

## 📄 License

This project is licensed under the MIT License.
