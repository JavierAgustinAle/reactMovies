import React from 'react';
// Style
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bulma/css/bulma.css'

// Component
import AppRoutes from './AppRoutes'
// Provider
import CartVistoProvider from './Context/CartVistoProvider';

const App = () => (
  <CartVistoProvider>
    <AppRoutes />
    <p>
    </p>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>EN</strong> This page was designed by Javier Ale in June 2020, applying his first knowledge on React Js.
        </p>
        <p>
          <strong>ES</strong> Esta web fue realizada por Javier Ale en Junio 2020, aplicando sus primeros conocimientos en React Js.
        </p>

      </div>
    </footer>
  </CartVistoProvider>

)

export default App;
