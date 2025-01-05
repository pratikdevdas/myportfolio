import React from 'react';

function Tools() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-900 to-black text-light">
      <h2 className="text-3xl mb-8">I like working with....</h2>
      <div className="flex flex-wrap justify-center mb-12">
        {/* Add your icons or placeholders here */}
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="w-16 h-16 bg-white m-2 rounded shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Tools;
