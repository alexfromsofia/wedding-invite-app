import React, { useContext } from 'react';

import { GuestContext } from '../Context';

function Guests() {
  const { invitations } = useContext(GuestContext);
  const totalAdults = invitations.reduce((acc, { adultsCount, confirmed }) => {
    if (confirmed) {
      acc += adultsCount;
    }

    return acc;
  }, 0);
  const totalChildren = invitations.reduce(
    (acc, { childrenCount, confirmed }) => {
      if (confirmed) {
        acc += childrenCount;
      }

      return acc;
    },
    0
  );

  return (
    <div className="guests">
      <table className="guests-table">
        <thead>
          <tr>
            <th>Име</th>
          </tr>
        </thead>
        <tbody>
          {invitations.map(({ name, alias, completed, confirmed }) => {
            const isConfimed = completed && confirmed;

            return (
              <tr className={isConfimed ? 'confirmed' : ''} key={alias}>
                <td>
                  <div>{name}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="summary">
        <div className="adults">Общо Млади: {totalAdults + 2}</div>
        <div className="children">Общо Деца: {totalChildren + 1}</div>
      </div>
    </div>
  );
}

export default Guests;
