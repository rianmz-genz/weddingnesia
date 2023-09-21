// lib/googleAnalytics.js

import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-Y506LY6FE2"); // Ganti dengan ID Analytics Anda
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
