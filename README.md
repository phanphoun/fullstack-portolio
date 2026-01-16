# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design using Tailwind CSS
- **Smooth Navigation**: Sticky header with smooth scrolling between sections
- **Interactive Components**: Hover effects, animations, and transitions
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Display of featured projects with details
- **Skills Section**: Visual representation of technical skills
- **Social Links**: Links to GitHub, LinkedIn, and other social profiles

## Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal information and background
3. **Skills**: Technical skills with progress bars
4. **Projects**: Featured projects with descriptions and links
5. **Contact**: Contact form and contact information
6. **Footer**: Additional links and social media

## Technologies Used

- **React 18**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript ES6+**: Modern JavaScript features
- **HTML5**: Semantic markup
- **CSS3**: Advanced styling with animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build files will be created in the `build` directory.

## Project Structure

```
portfolio-website/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Favicon
│   └── images/             # Static images
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Hero section
│   │   ├── About.js        # About section
│   │   ├── Skills.js       # Skills section
│   │   ├── Projects.js     # Projects section
│   │   ├── Contact.js      # Contact section
│   │   └── Footer.js       # Footer
│   ├── pages/
│   │   └── Home.js         # Home page component
│   ├── styles/
│   │   └── tailwind.css    # Custom CSS with Tailwind
│   ├── App.js              # Main App component
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
└── README.md               # This file
```

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.js` - Update name, title, and description
- `src/components/About.js` - Update personal story and skills
- `src/components/Projects.js` - Add your projects
- `src/components/Contact.js` - Update contact information
- `src/components/Footer.js` - Update footer information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Custom CSS classes in `src/styles/tailwind.css`
- Component-specific styles within each component

### Adding Projects

To add new projects, update the `projects` array in `src/components/Projects.js`:

```javascript
{
  id: unique_id,
  title: 'Project Title',
  description: 'Project description',
  image: '/images/project-image.jpg',
  technologies: ['React', 'Node.js', 'MongoDB'],
  features: ['Feature 1', 'Feature 2'],
  liveUrl: 'https://project-demo.com',
  githubUrl: 'https://github.com/username/project'
}
```

## Deployment

### Netlify

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Vercel

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Vercel will automatically detect and deploy your React app

### GitHub Pages

1. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add the following to `package.json`:
   ```json
   "homepage": "https://username.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- Email: john.doe@example.com
- GitHub: https://github.com/username
- LinkedIn: https://linkedin.com/in/username
