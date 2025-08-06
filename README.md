# Andrew Jay Consulting - Vite React App

This is the Vite-based React version of the Andrew Jay Consulting website, converted from Next.js for deployment to Azure Static Web Apps.

## 🚀 Features

- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router DOM** for client-side routing
- **Mantine UI** components and theming
- **Tailwind CSS** for utility-first styling
- **React Helmet Async** for SEO management
- **Tabler Icons** for beautiful icons

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`.

## 🏗️ Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized static files ready for deployment.

## 🚀 Deployment

The built files in the `dist` folder are ready for deployment to Azure Static Web Apps or any static hosting service.

### Azure Static Web Apps

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Azure Static Web Apps
3. Configure routing to handle React Router (see below)

### Routing Configuration for Azure Static Web Apps

Create a `staticwebapp.config.json` file in the `dist` folder:

```json
{
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html"
    }
  ]
}
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppLayout.tsx   # Main layout wrapper
│   ├── Navigation.tsx  # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Services.tsx    # Services page
│   ├── About.tsx       # About page
│   └── Contact.tsx     # Contact page
├── theme.ts            # Mantine theme configuration
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Mantine**: React component library with theming
- **Custom CSS Variables**: For consistent theming
- **Google Fonts**: Nunito and Nunito Sans

## 🔧 Key Differences from Next.js Version

1. **Routing**: React Router DOM instead of Next.js App Router
2. **Images**: Regular `<img>` tags instead of `next/image`
3. **Links**: React Router `<Link>` instead of `next/link`
4. **SEO**: React Helmet Async instead of `next/head`
5. **Build**: Vite instead of Next.js build system
6. **No SSR**: Client-side only rendering

## 📝 Environment Variables

Create a `.env` file for environment variables:

```env
VITE_API_URL=your_api_url_here
VITE_SITE_URL=https://yourdomain.com
```

Access them in code with `import.meta.env.VITE_API_URL`.

## 🧪 Testing

```bash
npm run lint
```

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions about this conversion or the original Next.js version, contact Andrew Jay.
