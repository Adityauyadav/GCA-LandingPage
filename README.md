This repository contains my implementation of the GCA landing page based on the provided Figma design. It is built as a responsive Single Page Application (SPA).

## 🚀 Key Features
- **Pixel-perfect implementation** of the Figma design.
- **Responsive Layout** adapting mobile, tablet, and desktop views.
- **Animations** using Framer Motion for smooth component entry and interactions.
- **Modern Styling** with Tailwind CSS v4.
- **Icons** provided by Lucide React.

## 🛠 Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Linting:** ESLint

## 💻 Getting Started

### Prerequisites
Ensure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adityauyadav/GCA-LandingPage
   cd GCA-LandingPage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 🏗 Build for Production

To create a production-ready build:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

## 📝 Design Decisions & Notes

- **Tailwind CSS:** Chosen for utility-first styling to maintain consistency with the specific spacing and typography in the Figma file.
- **Component Structure:** The UI is broken down into small, reusable components (Hero, Features, Footer) to maintain clean code separation.
- **Framer Motion:** Used to add subtle entrance animations that enhance user experience without compromising performance.
