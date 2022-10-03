import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import loadable from '@loadable/component';

const ErrorPage = loadable(() => import('../../pages/ErroPage'));

const ErrorBoundaryFallback = ({ error, resetErrorBoundary }) => {
  const location = useLocation();
  const errorLocation = useRef(location.pathname);
  useEffect(() => {
    if (location.pathname !== errorLocation.current) {
      resetErrorBoundary();
    }
  }, [location.pathname, resetErrorBoundary]);

  return <ErrorPage />;
};

export default ErrorBoundaryFallback;
