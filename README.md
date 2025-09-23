# ML Coursework Web App

A comprehensive Next.js web application designed to support students learning Machine Learning, featuring course materials, interactive learning paths, and AI-assisted learning tools.

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-blue)
![React](https://img.shields.io/badge/React-Latest-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-Latest-06B6D4)

## 📋 Project Overview

The ML Coursework Web Application is an educational platform designed to help students learn machine learning concepts through interactive content, organized course materials, and an AI-powered chatbot assistant. The application serves as a comprehensive learning management system specifically tailored for machine learning education, providing access to course materials, videos, learning paths, notes, and an intelligent chatbot for answering student questions.

### Key Objectives

- Provide structured access to machine learning course materials
- Offer guided learning paths for different ML specializations
- Integrate intelligent assistance through multi-model chatbot capabilities
- Enable note-taking and knowledge management for ML students
- Support learning with interactive content and assessments

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
- ✅ Multi-model selection (Default LLM, Gemini 1.5 Flash, and Local ML Model)
- ✅ Local LLM integration with RAG capabilities
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
- 🔄 Enhanced AI chat capabilities with RAG implementation
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

## 🔧 Technical Architecture

### Frontend Framework
- **Next.js 15.5.3**: A React framework providing server-side rendering, static site generation, and API routes
- **React**: Used for building the user interface with functional components and hooks
- **TypeScript**: For type-safe code development

### UI Components
- **Shadcn/UI**: A component library built on top of Tailwind CSS for consistent UI elements
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide Icons**: For consistent iconography across the application

### State Management
- **React Hooks**: For component-level state management
- **Context API**: For global state management where needed

### Authentication
- **NextAuth.js**: For handling user authentication and session management
- **Supabase Auth**: Integration with Supabase for authentication services

### Database
- **Supabase**: Provides PostgreSQL database with real-time capabilities
- **SQL Migration Scripts**: For database schema management and seeding

### AI Integration
- **Multi-model Chatbot**: Supporting three distinct AI models:
  1. **Default LLM**: Basic rule-based responses for common ML questions
  2. **Gemini 1.5 Flash**: Integration with Google's Gemini API for advanced ML queries
  3. **Local LLM**: Custom ML model running on a local server with RAG (Retrieval-Augmented Generation) capabilities

### API Architecture
- **Next.js API Routes**: For serverless backend functionality
- **RESTful APIs**: For communication between frontend and backend
- **Fetch API**: For making HTTP requests

### Retrieval-Augmented Generation (RAG)
- **Local ML Server**: A Python-based FastAPI server running on port 8000
- **Vector Database**: For storing document embeddings
- **Cross-Encoder Model**: For re-ranking search results
- **Document Processing Pipeline**: For chunking and embedding documents

### File Storage
- **Local Storage**: For PDF files, presentations, and other course materials
- **Public Directory**: For static assets and downloadable resources

### Deployment & Infrastructure
- **Vercel**: For hosting the Next.js application
- **GitHub**: For version control and code management

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
   # Authentication Configuration
   NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_AUTH_PROJECT_ID=your_project_id
   
   # Database Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Gemini AI API
   GEMINI_API_KEY=your_gemini_api_key
   
   # Local LLM Server
   LOCAL_LLM_SERVER=http://localhost:8000
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Setting up the Local LLM Server (Optional)

To use the Local ML Model option in the chatbot:

1. Clone the RAG server repository:
   ```bash
   git clone https://github.com/yourusername/ml-rag-server.git
   cd ml-rag-server
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the server:
   ```bash
   python main.py
   ```

4. The server will be available at http://localhost:8000

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                          Client Browser                          │
└───────────────────────────────┬─────────────────────────────────┘
                                │
┌───────────────────────────────▼─────────────────────────────────┐
│                         Next.js Frontend                         │
│   ┌───────────────┐    ┌───────────────┐    ┌───────────────┐   │
│   │     Pages     │    │  Components   │    │    Hooks      │   │
│   └───────────────┘    └───────────────┘    └───────────────┘   │
└───────────────────────────────┬─────────────────────────────────┘
                                │
┌───────────────────────────────▼─────────────────────────────────┐
│                        Next.js API Routes                        │
│   ┌───────────────┐    ┌───────────────┐    ┌───────────────┐   │
│   │  Auth Routes  │    │  Chat Routes  │    │ Content Routes│   │
│   └───────────────┘    └───────┬───────┘    └───────────────┘   │
└───────────────────────────────┬┼─────────────────────────────────┘
                               ┌▼┘
┌──────────────────────────────▼──────────────────────────────────┐
│                          AI Services                             │
│   ┌───────────────┐    ┌───────────────┐    ┌───────────────┐   │
│   │  Default LLM  │    │ Gemini 1.5    │    │   Local LLM   │   │
│   │  (Rule-based) │    │    Flash      │    │  (RAG-based)  │   │
│   └───────────────┘    └───────────────┘    └───────┬───────┘   │
└──────────────────────────────────────────────────────┼──────────┘
                                                       │
┌──────────────────────────────────────────────────────▼──────────┐
│                      Local FastAPI Server                        │
│   ┌───────────────┐    ┌───────────────┐    ┌───────────────┐   │
│   │Vector Database│    │ Cross-Encoder │    │Document Proc. │   │
│   └───────────────┘    └───────────────┘    └───────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

## 📱 Screenshots

(Screenshots will be added soon)

## 👥 Contributors

- Shashikumar Ezhilarasu - Project Lead and Developer

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
