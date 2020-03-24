import React from 'react';
import Flat from './flat';
import flatsData from '../data/flats';

const FlatList = ({ renderFlat }) => {
  const flats = flatsData;
  return (
    <div className="flat-list">
      {flats.map((flat) => <Flat flat={flat} renderFlat={renderFlat} /> )}
    </div>
  );
};
export default FlatList;
