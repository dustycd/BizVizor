import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { getRouteName } from '../routesConfig';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-grey-50 border-b border-grey-200">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {/* Home Link */}
          <li>
            <Link 
              to="/" 
              className="flex items-center text-grey-600 hover:text-primary-red transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>

          {/* Path segments */}
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const routeName = getRouteName(routeTo);

            return (
              <li key={routeTo} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-grey-400 mx-2" />
                {isLast ? (
                  <span className="text-grey-800 font-medium">
                    {routeName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-grey-600 hover:text-primary-red transition-colors duration-200"
                  >
                    {routeName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;