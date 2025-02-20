import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './components/pages/Home.jsx';
import { AboutPage } from './components/pages/About.jsx';
import { ServicesPage } from './components/pages/Services.jsx';
import { ContactPage } from './components/pages/Contact.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/services',
      element: <ServicesPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/contact',
      element: <ContactPage />
    }
  ]);
  return <RouterProvider router={router} />
}

export default App;
