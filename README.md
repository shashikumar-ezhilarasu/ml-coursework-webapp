# ML Coursework Web App

A Next.js web application designed to support students learning Machine Learning, featuring course materials, interactive learning paths, and AI-assisted learning tools.

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-blue)
![React](https://img.shields.io/badge/React-Latest-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-Latest-06B6D4)

## 🌟 Features

### Completed Features

#### Core Features
- ✅ Responsive landing page with modern UI
- ✅ Course catalog and browsing
- ✅ Dashboard for tracking progress
- ✅ Navigation system with dynamic routing
- ✅ Learning paths visualization
- ✅ SRMIST-specific content integration
- ✅ PDF resources and downloads
- ✅ Notes management system

#### SRMIST Integration
- ✅ SRMIST-specific navigation in navbar
- ✅ Machine Learning syllabus display
- ✅ Unit-based course structure
- ✅ PDF lecture notes access
- ✅ Sidebar navigation for different resource types
- ✅ Home button for easy navigation

#### AI and Learning Tools
- ✅ AI-powered chatbot for ML-related questions
- ✅ Model selection between Default LLM and Gemini 1.5 Flash
- ✅ Educational content focus for all AI responses
- ✅ Topic-specific responses for ML, AI, and data science

#### UX/UI
- ✅ Mobile-responsive design
- ✅ Dark mode support
- ✅ Accessible UI components
- ✅ Loading states and error handling

### 🚧 In Progress Features

- 🔄 Advanced user authentication and profiles
- 🔄 Progress tracking across learning paths
- 🔄 Integration with more ML resources
- 🔄 Enhanced AI chat capabilities
- 🔄 Interactive coding exercises
- 🔄 Video lecture integration

### 📝 Planned Future Features

- 📌 Personalized learning recommendations
- 📌 Interactive ML model playground
- 📌 Social features and discussion forums
- 📌 Assignment submission and grading system
- 📌 Integration with external ML platforms and APIs
- 📌 Data visualization tools for learning analytics

## 📚 Project Structure

```
ml-coursework-webapp/
├── app/                 # Next.js app directory with routes
│   ├── api/             # API routes
│   ├── auth/            # Authentication routes
│   ├── courses/         # Course pages
│   ├── dashboard/       # User dashboard
│   ├── learning-paths/  # Learning paths
│   ├── notes/           # Notes system
│   ├── srmist/          # SRMIST specific pages
│   └── videos/          # Video content
├── components/          # React components
│   ├── chatbot/         # AI chatbot components
│   ├── courses/         # Course-related components
│   ├── dashboard/       # Dashboard components
│   ├── learning-paths/  # Learning path components
│   ├── notes/           # Notes components
│   ├── srmist/          # SRMIST-specific components
│   ├── ui/              # UI component library
│   └── videos/          # Video components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and shared code
├── public/              # Static assets and resources
│   └── notes/           # PDF lecture notes
└── styles/              # Global styles and themes
```

## 🔧 Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn UI
- **Backend**: Next.js API Routes
- **Authentication**: Firebase Authentication
- **Database**: Firebase/Supabase
- **AI Integration**: Gemini 1.5 Flash API
- **Deployment**: Vercel/Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shashikumar-ezhilarasu/ml-coursework-webapp.git
   cd ml-coursework-webapp
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   
   # Gemini AI API
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Screenshots

(Screenshots will be added soon)

## 👥 Contributors

- Shashikumar Ezhilarasu - Project Lead and Developer

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.