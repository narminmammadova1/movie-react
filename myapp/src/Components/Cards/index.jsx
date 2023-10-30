

import React from 'react';
import data from '../data';
import { Card } from '../Card';
export const Cards = () => {
  return (
    <div className='d-flex row'>
      {data.Search.map((item) => (
        <Card key={item.Title} item={item} />
      ))}
    </div>
  );
};
