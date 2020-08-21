import React from 'react';
import Loader from 'react-loader-spinner';

export default function () {
  return (
    <div className="loader">
      <Loader type="Hearts" color="#f27979" height={80} width={80} />
    </div>
  );
}
