import React, { useState } from "react";
import './style/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navigation from './components/UI/navigation/Navigation';
import { AuthContext } from './context';





function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ isUserLogin, setIsUserLogin }}>
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
