# Slot Machine Anniversary App

## Overview

This is a mobile-friendly celebratory slot machine website dedicated to Crina's 10-year anniversary. Built with pure HTML, CSS, and JavaScript, the application features a festive casino-style slot machine with red, black, and gold theme. The site is fully translated to Romanian and optimized for mobile devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **January 14, 2025**: Converted from React/Express full-stack to standalone HTML/CSS/JS slot machine
- **January 14, 2025**: Translated entire application to Romanian language
- **January 14, 2025**: Implemented rigged slot machine that never allows 5 matching symbols
- **January 14, 2025**: Added Romanian consolation messages and anniversary celebration theme

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for database management
- **UI Framework**: shadcn/ui components with Radix UI primitives and Tailwind CSS
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **React Router**: Uses Wouter for lightweight client-side routing
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **State Management**: TanStack Query for server state, React hooks for local state

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Authentication**: Basic user schema with username/password (ready for expansion)

### Database Schema
- **Users Table**: Basic user authentication with id, username, and password fields
- **Migration System**: Drizzle Kit for database migrations in `./migrations` directory

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend via TanStack Query
2. **API Processing**: Express routes handle requests and interact with database through Drizzle ORM
3. **Database Operations**: PostgreSQL stores and retrieves data using the defined schema
4. **Response Handling**: API responses are processed by TanStack Query and update React components

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for Neon PostgreSQL integration
- **ORM**: drizzle-orm and drizzle-zod for type-safe database operations
- **UI Components**: Comprehensive Radix UI component collection
- **Form Handling**: React Hook Form with Zod validation
- **Date Utilities**: date-fns for date manipulation
- **Carousel**: embla-carousel-react for image/content carousels

### Development Tools
- **Build Tool**: Vite with React plugin and TypeScript support
- **CSS**: Tailwind CSS with PostCSS processing
- **TypeScript**: Full TypeScript configuration with path aliases
- **Linting**: ESBuild for production bundling

## Deployment Strategy

### Development
- **Dev Server**: Uses Vite dev server with HMR for frontend
- **Backend**: tsx for running TypeScript server in development with hot reload
- **Database**: Drizzle Kit push command for development schema changes

### Production
- **Build Process**: 
  1. Vite builds React frontend to `dist/public`
  2. ESBuild bundles server code to `dist/index.js`
- **Server**: Node.js serves static files and API routes
- **Database**: Uses DATABASE_URL environment variable for PostgreSQL connection
- **Session Storage**: PostgreSQL-backed sessions for scalability

### Configuration
- **Environment Variables**: DATABASE_URL required for database connection
- **Path Aliases**: Configured in both Vite and TypeScript for clean imports
- **Asset Handling**: Static assets served from build directory in production

The application is designed to be deployed on platforms that support Node.js with PostgreSQL, with the current setup optimized for Replit deployment with built-in database provisioning.