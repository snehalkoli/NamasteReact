import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
