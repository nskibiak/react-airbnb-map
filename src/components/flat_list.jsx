import React from 'react';
import Flat from './flat';
import flats from '../data/flats';

const FlatList = () => {
  const apts = flats;
  return (
    <div className="flat-list">
      {apts.map((apt) => <Flat/> )}
    </div>
  );
};
export default FlatList;
