import React from 'react';

const Navbar = () => {
    return (
    <div className="flex justify-between items-center px-8 py-4 shadow-sm">
      <h1 className="text-xl font-bold text-purple-600">DigiTools</h1>

      <div className="hidden md:flex gap-6">
        <p>Products</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>FAQ</p>
      </div>

      <div className="flex items-center gap-4">
        <button>Login</button>

        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full">
          Get Started
        </button>

        <div className="relative">
          
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 rounded-full">
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;