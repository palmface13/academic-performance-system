# Academic Performance Management System

A comprehensive system for managing academic performance, tracking student progress, and analyzing educational data.

## Features

- **User Authentication**
  - Role-based access control (Admin, Teacher, Student, Parent)
  - Secure login system
  - Protected routes

- **Dashboard**
  - Key performance metrics
  - Performance charts and analytics
  - Recent activity tracking
  - Quick access to important features

- **Student Management**
  - Comprehensive student list
  - Advanced filtering and search
  - Student profile management
  - Enrollment tracking

- **Discipline Management**
  - Course and subject tracking
  - Teacher assignments
  - Credit management
  - Student enrollment tracking

- **Grade Management**
  - Grade entry and updates
  - Performance tracking
  - Historical grade data
  - Grade analytics

- **Settings**
  - Profile management
  - System preferences
  - Notification settings
  - User interface customization

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Default Login Credentials

- Email: admin@example.com
- Password: password123

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── dashboard/      # Dashboard widgets
│   ├── disciplines/    # Discipline management
│   ├── grades/         # Grade management
│   └── students/       # Student management
├── hooks/              # Custom React hooks
├── pages/              # Main application pages
├── providers/          # Context providers
├── types/              # TypeScript type definitions
└── config/             # Configuration files
```

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code linting
- Modular component structure
- Consistent naming conventions

## Security Features

- Protected routes with authentication
- Role-based access control
- Secure credential handling
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.