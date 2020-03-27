import React from 'react';
import Flat from './flat';
import flatsData from '../data/flats';

const FlatList = ({ renderFlat }) => {
  const flats = flatsData;
  return (
    <div className="flat-list">
      {flats.map((flat, index) => <Flat flat={flat} renderFlat={renderFlat} key={index}/> )}
    </div>
  );
};
export default FlatList;
