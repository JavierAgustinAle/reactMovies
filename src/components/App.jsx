import React from 'react';

// Style
import '../assets/css/App.css';
import 'bulma/css/bulma.css'

// Component
import AppRoutes from './AppRoutes'
// Provider
import CartVistoProvider from './Context/CartVistoProvider';

const App = () => (
  <CartVistoProvider>
    <AppRoutes />
  </CartVistoProvider>

)

export default App;
