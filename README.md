# 🚀 MERN Stack Portfolio Website

A modern, brutalist-terminal aesthetic portfolio website built with the MERN stack. Features a unique design inspired by terminal interfaces with glitch effects, scanlines, and cyberpunk vibes.

## ✨ Features

- **Unique Design**: Brutalist-terminal aesthetic with glitch effects and scanlines
- **Fully Responsive**: Works seamlessly on all devices
- **Project Showcase**: 12 projects driven by a single data file (`client/src/data/projects.js`) with category filters, search and a tech-usage cloud
- **Contact Form**: Integrated email notifications with Nodemailer
- **Smooth Animations**: Framer Motion for buttery-smooth transitions
- **SEO Friendly**: Optimized metadata and structure

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Axios** - HTTP requests
- **CSS3** - Custom styling with terminal aesthetics

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email functionality

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the Repository
\`\`\`bash
git clone <your-repo-url>
cd portfolio-mern
\`\`\`

### 2. Backend Setup
\`\`\`bash
cd server
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/portfolio
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
\`\`\`

### 3. Frontend Setup
\`\`\`bash
cd ../client
npm install
\`\`\`

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Backend:**
\`\`\`bash
cd server
npm run dev
\`\`\`

**Terminal 2 - Frontend:**
\`\`\`bash
cd client
npm start
\`\`\`

The frontend will run on `http://localhost:3000` and proxy API requests to `http://localhost:5000`.

### Production Build

**Backend:**
\`\`\`bash
cd server
npm start
\`\`\`

**Frontend:**
\`\`\`bash
cd client
npm run build
\`\`\`

## 📁 Project Structure

\`\`\`
portfolio-mern/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── pages/          # Page components
│   │   │   ├── Home.js
│   │   │   ├── Home.css
│   │   │   ├── Projects.js
│   │   │   ├── Projects.css
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── styles/         # Global styles
│   │   │   └── App.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── server/                 # Express backend
    ├── config/             # Configuration files
    │   └── db.js
    ├── controllers/        # Route controllers
    │   ├── projectController.js
    │   └── contactController.js
    ├── models/             # Mongoose models
    │   ├── Project.js
    │   └── Contact.js
    ├── routes/             # API routes
    │   ├── projects.js
    │   └── contacts.js
    ├── .env.example
    ├── server.js
    └── package.json
\`\`\`

## 🎨 Customization

### Personal Information

**Home Page (`client/src/pages/Home.js`):**
- Replace "JOHN DOE" with your name
- Update role/title text
- Modify skills array
- Update about section content

**Contact Page (`client/src/pages/Contact.js`):**
- Update social links and URLs
- Modify availability information
- Update location and timezone

### Styling

All styling uses CSS variables defined in `client/src/styles/App.css`:

\`\`\`css
:root {
  --bg-primary: #0a0a0a;        /* Main background */
  --bg-secondary: #111111;       /* Secondary background */
  --text-primary: #00ff41;       /* Primary text color */
  --text-secondary: #ffffff;     /* Secondary text color */
  --text-muted: #666666;         /* Muted text */
  --accent: #ff0080;             /* Accent color */
  --border: #333333;             /* Border color */
}
\`\`\`

Modify these to match your brand colors!

## 📊 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contacts
- `POST /api/contacts` - Send contact message
- `GET /api/contacts` - Get all messages (admin)
- `PATCH /api/contacts/:id/read` - Mark as read

## 🔐 Email Configuration

To enable contact form email notifications:

1. **Gmail Setup:**
   - Enable 2-factor authentication
   - Generate an App Password
   - Use this password in `.env`

2. **Environment Variables:**
\`\`\`env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
\`\`\`

## 🗃️ Database Seeding

Create sample projects in MongoDB:

\`\`\`javascript
// Using MongoDB Shell or MongoDB Compass
db.projects.insertMany([
  {
    title: "Your Project Name",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "https://via.placeholder.com/600x400",
    projectUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-repo",
    featured: true,
    order: 1
  }
  // Add more projects...
]);
\`\`\`

## 🚢 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `build` folder
3. Set environment variable: `REACT_APP_API_URL=your-backend-url`

### Backend (Heroku/Railway/Render)
1. Push to Git repository
2. Connect to hosting platform
3. Set environment variables
4. Deploy

### MongoDB Atlas
1. Create a cluster at mongodb.com/cloud/atlas
2. Get connection string
3. Update `MONGODB_URI` in `.env`

## 🎯 Features to Add

- [ ] Blog section with CMS
- [ ] Dark/light theme toggle
- [ ] Admin dashboard for managing projects
- [ ] Resume download functionality
- [ ] Image upload for projects
- [ ] Google Analytics integration
- [ ] Progressive Web App (PWA)
- [ ] Multi-language support

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- Terminal aesthetics inspired by cyberpunk and brutalist design
- Fonts: JetBrains Mono, Space Mono
- Icons: Custom terminal-style characters

---

**Made with ⚡ by [Your Name]**

*Remember to star ⭐ this repo if you found it helpful!*
\`\`\`
