import React from 'react';

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10 text-center grid grid-cols-3">
      <div>
        <h2 className="text-2xl font-bold">50K+</h2>
        <p>Users</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">200+</h2>
        <p>Tools</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">4.9</h2>
        <p>Rating</p>
      </div>
    </div>
  );
};

export default Stats;