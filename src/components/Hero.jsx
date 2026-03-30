import React from 'react';

const Hero = () => {

    const handleExplore = () => {
    console.log("Explore clicked");
  };

  const handleDemo = () => {
    console.log("Watch demo clicked");
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 px-8 py-16">
      <div>
        <h1 className="text-4xl font-bold">
          Supercharge Your Digital Workflow
        </h1>
        <p className="mt-4 text-gray-500">
          Access premium AI tools, templates, and assets.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full" onClick={handleExplore}>
            Explore Products
          </button>
          <button className="border border-purple-600 text-purple-600 px-5 py-2 rounded-full" onClick={handleDemo}>
            Watch Demo 
          </button>
        </div>
      </div>

      <img src="" />
    </div>
  );
};

export default Hero;