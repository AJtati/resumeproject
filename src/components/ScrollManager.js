import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollManager({ refs }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable the browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll the main window to the top
    window.scrollTo(0, 0);

    // Scroll the specific page's container to the top
    const pageRef = refs[pathname];
    if (pageRef && pageRef.current) {
      pageRef.current.scrollTop = 0;
    }
  }, [pathname, refs]);

  return null;
}

export default ScrollManager;