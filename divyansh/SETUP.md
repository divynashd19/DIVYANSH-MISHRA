# Setup Instructions

## Complete Setup Guide for Divyansh Mishra's Portfolio

### Step 1: Install Node.js and npm

If you haven't already installed Node.js:
1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Navigate to Project Directory

Open PowerShell or Command Prompt and navigate to the project folder:
```bash
cd "c:\Users\nidhi\OneDrive\Desktop\divyansh"
```

### Step 3: Install Dependencies

Run the following command to install all project dependencies:
```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1
- Web Vitals

### Step 4: Start Development Server

Start the development server:
```bash
npm start
```

This will:
- Compile your React application
- Open the app in your default browser at `http://localhost:3000`
- Enable hot reload (changes auto-update in browser)

### Step 5: Build for Production

When ready to deploy, create an optimized production build:
```bash
npm build
```

This creates a `build/` folder with optimized files ready for deployment.

## Project Structure Explanation

### `/public` folder
Contains the main HTML file:
- `index.html` - Entry point for the React app

### `/src` folder
Contains all React components and styles:

**Components** (`/src/components`):
- `Header.js` - Navigation bar with menu toggle
- `Hero.js` - Welcome section
- `About.js` - Personal introduction
- `Education.js` - Education details
- `Certifications.js` - Certifications list
- `Projects.js` - Projects showcase
- `Skills.js` - Skills display
- `Contact.js` - Contact information
- `Footer.js` - Footer section

**Styles** (`/src/styles`):
- `index.css` - Global styles and CSS variables
- Component-specific CSS files for each component

**Other files**:
- `App.js` - Main application component
- `App.css` - App wrapper styles
- `index.js` - React entry point
- `/assets` - Place for images and media files

### Root Level Files
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration (optional)
- `.gitignore` - Files to ignore in Git
- `README.md` - Project documentation

## Customization Guide

### Update Profile Information

1. **Edit About Section**: `/src/components/About.js`
   ```javascript
   <p>Your personal description here...</p>
   ```

2. **Edit Skills**: `/src/components/Skills.js`
   ```javascript
   const skillsData = {
     Programming: ['Your skills here'],
     // ... more skills
   };
   ```

3. **Edit Projects**: `/src/components/Projects.js`
   ```javascript
   const projects = [
     {
       title: 'Your project title',
       date: 'Date',
       achievements: ['Achievement 1', 'Achievement 2']
     }
   ];
   ```

4. **Edit Contact Info**: `/src/components/Contact.js`
   - Update email address
   - Phone number
   - Location
   - LinkedIn profile link

### Change Color Scheme

Edit `/src/styles/index.css`:
```css
:root {
  --primary-color: #6366f1;      /* Main purple */
  --secondary-color: #8b5cf6;    /* Secondary purple */
  --accent-color: #ec4899;       /* Pink */
  --cyan-color: #06b6d4;         /* Cyan */
}
```

### Add Images

1. Create `/src/assets/` folder if not exists
2. Add your images (profile, project screenshots, etc.)
3. Import in components:
   ```javascript
   import profileImg from '../assets/profile.jpg';
   <img src={profileImg} alt="Profile" />
   ```

## Browser Compatibility

Works on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Port 3000 is already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
set PORT=3001 && npm start
```

### Dependencies installation fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -r node_modules package-lock.json

# Reinstall
npm install
```

### Changes not reflecting
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Restart development server

## Deployment

### Deploy to Netlify
1. Build: `npm build`
2. Connect GitHub repo to Netlify
3. Deploy the `build` folder

### Deploy to Vercel
1. Push code to GitHub
2. Import project on Vercel
3. Auto-deploy on every push

### Deploy to GitHub Pages
1. Add to package.json: `"homepage": "https://yourusername.github.io/divyansh"`
2. Run: `npm run build`
3. Install gh-pages: `npm install --save-dev gh-pages`
4. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
5. Run: `npm run deploy`

## Performance Tips

1. **Optimize Images**: Compress images before adding
2. **Code Splitting**: React automatically does this
3. **Lazy Loading**: Use React.lazy() for components
4. **Production Build**: Always use `npm build` for deployment
5. **CDN**: Consider using CDN for static files

## Security Considerations

- Keep dependencies updated: `npm update`
- Use HTTPS for production
- Don't commit sensitive data (API keys, credentials)
- Use environment variables for sensitive configs

## Next Steps

1. Customize all content with your information
2. Add your profile image to `/src/assets/`
3. Update contact links and social profiles
4. Test on different devices and browsers
5. Build and deploy to a hosting service
6. Set up a custom domain

---

For more help, visit:
- React Documentation: https://react.dev
- Create React App: https://create-react-app.dev
- Node.js: https://nodejs.org
