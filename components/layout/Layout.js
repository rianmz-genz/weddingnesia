// components/Layout.js

import { useEffect } from "react";
import { initGA, logPageView } from "../../utils/GoogleAnalytics";

const Layout = ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div>
      {/* Konten Anda */}
      {children}
    </div>
  );
};

export default Layout;
