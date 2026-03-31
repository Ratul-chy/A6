import React from 'react';

const Steps = () => {
  return (
    <div className="px-8 py-12 text-center">
      <h2 className="text-2xl font-bold">Get Started In 3 Steps</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 border rounded-xl">Create Account</div>
        <div className="p-6 border rounded-xl">Choose Products</div>
        <div className="p-6 border rounded-xl">Start Creating</div>
      </div>
    </div>
  );
};

export default Steps;