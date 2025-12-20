import React, { useState, Suspense, lazy } from "react";

// LandingPage imported normally
import LandingPage from "./components/LandingPage";

// Lazy load MainDashboard
const MainDashboard = lazy(() => import("./components/MainDashboard"));

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  // Switch pages immediately on "Get Started"
  const handleGetStarted = () => {
    setShowDashboard(true);
  };

  return (
    <>
      {/* Show LandingPage first */}
      {!showDashboard && <LandingPage onGetStarted={handleGetStarted} />}

      {/* Lazy load MainDashboard */}
      {showDashboard && (
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen text-2xl text-gray-700 dark:text-white">
              Loading Dashboard...
            </div>
          }
        >
          <MainDashboard />
        </Suspense>
      )}
    </>
  );
}

export default App;
