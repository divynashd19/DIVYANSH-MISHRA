# Divyansh Mishra - Data Analytics Portfolio

A professional, responsive React portfolio website showcasing Divyansh Mishra's data analytics expertise, projects, certifications, and skills.

## 📁 Project Structure

```
divyansh/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/             # React components
│   │   ├── Header.js          # Navigation header
│   │   ├── Hero.js            # Hero section
│   │   ├── About.js           # About section
│   │   ├── Education.js       # Education details
│   │   ├── Certifications.js  # Certifications showcase
│   │   ├── Projects.js        # Projects portfolio
│   │   ├── Skills.js          # Technical & soft skills
│   │   ├── Contact.js         # Contact information
│   │   └── Footer.js          # Footer
│   ├── styles/                # CSS files for each component
│   │   ├── index.css          # Global styles
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Education.css
│   │   ├── Certifications.css
│   │   ├── Projects.css
│   │   ├── Skills.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── assets/                # Images and other assets
│   ├── App.js                 # Main App component
│   ├── App.css                # App styles
│   └── index.js               # React entry point
├── package.json               # Project dependencies
├── .gitignore                 # Git ignore file
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd divyansh
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   The app will automatically open at `http://localhost:3000`

## 📝 Available Scripts

### `npm start`
Runs the app in development mode with hot reload.

### `npm build`
Builds the app for production in the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm eject`
Ejects from Create React App (irreversible action).

## 🎨 Features

✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
✅ **React Components** - Modular, reusable component architecture
✅ **SVG Graphics** - Decorative rectangle shapes throughout
✅ **Smooth Animations** - Hover effects and transitions
✅ **Sticky Navigation** - Easy access to all sections
✅ **Mobile Menu** - Hamburger menu for mobile devices
✅ **Modern UI** - Gradient colors, clean typography, professional layout

## 📚 Sections Included

1. **Header** - Sticky navigation with smooth scrolling
2. **Hero** - Welcome section with call-to-action buttons
3. **About** - Personal introduction with statistics
4. **Education** - B.Tech degree information
5. **Certifications** - Deloitte, Tata, and IBM certifications
6. **Projects** - Real-world data analysis and visualization projects
7. **Skills** - Technical skills, tools, and soft skills
8. **Contact** - Email, phone, location, and LinkedIn links
9. **Footer** - Copyright and navigation links

## 🎯 Customization

### Update Content
Edit the content directly in component files:
- Update profile info in `src/components/About.js`
- Modify project details in `src/components/Projects.js`
- Change certifications in `src/components/Certifications.js`
- Update skills in `src/components/Skills.js`

### Change Colors
Modify the CSS variables in `src/styles/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  --cyan-color: #06b6d4;
}
```

### Add Images
Place images in `src/assets/` folder and import them in components:
```javascript
import profileImage from '../assets/profile.jpg';
<img src={profileImage} alt="Profile" />
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px
- **Extra Large**: 1400px and above

## 🔧 Technologies Used

- **React 18** - UI library
- **CSS3** - Styling with flexbox and grid
- **HTML5** - Semantic markup
- **SVG** - Vector graphics
- **JavaScript ES6+** - Modern JavaScript

## 📧 Contact Information

- **Email**: divyanshmishra.d19@gmail.com
- **Phone**: +91-7080715106
- **Location**: Kanpur Nagar, Uttar Pradesh, India
- **LinkedIn**: [Your LinkedIn Profile]

## 📄 Deployment

### Deploy to Netlify
1. Build the project: `npm build`
2. Connect your GitHub repo to Netlify
3. Deploy from the `build` folder

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Vercel will auto-deploy on push

### Deploy to GitHub Pages
1. Add to `package.json`: `"homepage": "https://yourusername.github.io/portfolio"`
2. Run: `npm run build`
3. Push `build` folder to `gh-pages` branch

## 📝 License

This project is created for personal use. Feel free to customize and modify as needed.

## 💡 Tips

- Use DevTools (F12) to test responsiveness
- Test on multiple browsers for compatibility
- Update social links before deployment
- Optimize images for better performance
- Consider adding a dark mode toggle

## 🤝 Support

For questions or issues, feel free to reach out through the contact section or email.

---

**Created with ❤️ for Divyansh Mishra**
**Last Updated: 2025**
