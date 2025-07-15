# coding-club-webdev1

> **Innovators' Coding Club** — Static Website  
> _Web Development 1: Web Design for Beginners_  
> University of Moratuwa

## 🚀 Project Overview
A responsive, static web page for the Innovators' Coding Club featuring a dark, futuristic "Midnight Neon" theme with vivid accent glows and subtle animations. Built as part of the **Web Development 1 – Web Design for Beginners** course, this site showcases club information, meeting schedule, upcoming events, gallery, and interactive features like dark/light mode toggle and animations.

## 📝 Table of Contents
- [coding-club-webdev1](#coding-club-webdev1)
  - [🚀 Project Overview](#-project-overview)
  - [📝 Table of Contents](#-table-of-contents)
  - [⭐ Features](#-features)
  - [🛠 Technologies Used](#-technologies-used)
  - [🎬 Demo](#-demo)
  - [🏁 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [🔧 Usage](#-usage)
  - [📁 Folder Structure](#-folder-structure)
  - [🤝 Contributing](#-contributing)
  - [📜 License](#-license)

## ⭐ Features
- **Responsive Design**  
  Mobile-first layout using Flexbox & CSS Grid + media queries
- **Dark/Light Mode Toggle**  
  Switch between dark "Midnight Neon" and light themes; preference saved in `localStorage`
- **Interactive Animations**  
  Digital rain effect, glowing elements, fade-in animations on scroll
- **Meeting Schedule Table**  
  Weekly club meetings with day, time, venue, and topic
- **Upcoming Events List**  
  Chronologically ordered list of 5 future workshops/events
- **Image Gallery**  
  4 event photos with fade-in animation on scroll
- **Responsive Navigation**  
  Full navbar on desktop, hamburger menu on mobile
- **Back to Top Button**  
  Smooth scrolling to the top of the page with an animated button
- **Semantic Structure**  
  Proper HTML5 semantic elements for improved accessibility and SEO
- **🎨 Midnight Neon Theme**  
  - Dark Background: Rich dark indigo (#0A0A0F) base
  - Vibrant Accents: Electric cyan (#00D1FF) and neon magenta (#FF3DCC)
  - Typography: 
    - Headings: Exo 2 (square, techno-style) in uppercase
    - Body: Inter (clean sans-serif) for readability
    - Code/Buttons: Source Code Pro (monospaced) for coding aesthetics
  - Glowing Elements: Soft neon glow effects on buttons, headings, and interactive elements
  - Animated Transitions: Smooth animations for hover states and page scrolling
  - Digital Rain Effect: Matrix-inspired subtle digital rain in the hero section

## 🛠 Technologies Used
- **HTML5** (Semantic Elements)  
- **CSS3** (Flexbox, Grid, Custom Properties, Animations, Media Queries)  
- **JavaScript** (ES6+, DOM Manipulation, Intersection Observer, Local Storage)
- **FontAwesome** (Icons via CDN)
- **Google Fonts** (Exo 2, Inter, and Source Code Pro)

## 🎬 Demo
Live demo (GitHub Pages):  
```
https://r-tharanka.github.io/coding-club-webdev1/
```

## 🏁 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) Live server extension for local development

### Installation
1. **Clone the repository**  
   ```bash
   git clone https://github.com/R-Tharanka/coding-club-webdev1.git
   cd coding-club-webdev1
   ```

2. **Open index.html in your browser or use a live server**
   ```bash
   # If you have npx/npm installed
   npx live-server
   ```

## 🔧 Usage
- **Theme Toggle**: Click the moon/sun icon in the top-right to switch between dark and light modes
- **Navigation**: Use the navbar links to jump between sections
- **Mobile Menu**: On smaller screens, click the hamburger icon to open the navigation menu
- **Gallery**: Scroll down to see images fade in with animation
- **Digital Rain**: Observe the Matrix-style digital rain effect in the hero section
- **Back to Top**: Click the arrow button in the footer to scroll smoothly to the top

## 📁 Folder Structure
```
coding-club-webdev1/
├── index.html              # Main HTML document
├── styles/                 # CSS styles directory
│   └── style.css           # CSS styles with Midnight Neon theme
├── scripts/                # JavaScript directory
│   ├── script.js           # Main JavaScript for interactivity and animations
│   └── backToTop.js        # Separate script for back-to-top button functionality
├── assets/
│   └── images/             # Website images
│       ├── logo.png                   # Club logo
│       ├── favicon.ico                # Website favicon
│       ├── Coding Workshop.jpg        # Event photo
│       ├── Guest Speaker Event.jpg    # Event photo
│       ├── Hackathon Presentations.jpeg # Event photo
│       └── Tech Conference Trip.jpg   # Event photo
├── LICENSE                 # License file
└── README.md               # Project documentation
```

## 🤝 Contributing
Contributions are welcome!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Please feel free to submit a Pull Request.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/R-Tharanka/coding-club-webdev1/blob/4980b9603a3385132840f22c67fd39093563e70f/LICENSE) file for details.

