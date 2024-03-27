import React from 'react';

function Details({ title, description }) {
  return (
    <div className="flex justify-between gap-x-8">
      <p>{title}</p>
      <p className="font-bold w-20">{description}</p>
    </div>
  );
}

export default Details;
