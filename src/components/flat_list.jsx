import React from 'react';
import Flat from './flat';
import flatsData from '../data/flats';

const FlatList = ({ renderFlat, selectedFlat }) => {
  const flats = flatsData;
  return (
    <div className="flat-list">
      {flats.map((flat, index) => <Flat flat={flat} renderFlat={renderFlat} selectedFlat={selectedFlat} key={index}/> )}
    </div>
  );
};
export default FlatList;
