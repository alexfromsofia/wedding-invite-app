import React, { useContext } from 'react';

import { GuestContext } from '../Context';

function Guests() {
  const { invitations } = useContext(GuestContext);

  return (
    <div className="guests">
      <table className="guests-table">
        <thead>
          <tr>
            <th>Име</th>
          </tr>
        </thead>
        <tbody>
          {invitations.map(({ name, completed, confirmed }) => {
            const isConfimed = completed && confirmed;

            return (
              <tr className={isConfimed ? 'confirmed' : ''}>
                <td>
                  <div>{name}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Guests;
