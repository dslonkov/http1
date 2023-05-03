import React, { useState } from 'react';

import ItemSingle from '../ItemSingle/ItemSingle';

export default function ItemList(props) {
  const { records } = props;

  const handleRemove = (id) => {
    props.onRemove(id);
  };

  return (
    <div className="items">
      {records.map((obj) => (
        <ItemSingle
          title={obj.title}
          hoursGMT0={obj.hoursGMT0}
          hoursDiff={obj.hoursDiff}
          onRemove={() => handleRemove(obj.id)}
          id={obj.id}
          key={obj.id}
        />
      ))}
    </div>
  );
}
