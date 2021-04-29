import React from 'react';

function PiratesList({ pirates }) {
  return (
    <div>
      {pirates.map((person, index) => {
        const { name, image, bounty } = person;
        return (
          <article className='person' key={index}>
            <img src={image} alt='' />
            <div>
              <h4>{name}</h4>
              <p>$ {bounty}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default PiratesList;
