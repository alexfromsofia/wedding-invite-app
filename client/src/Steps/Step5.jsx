import React, { useContext } from 'react';
import axios from 'axios';

import { StepContext, GuestContext } from '../Context';
import useGuest from '../hooks/useGuest';
import MrMrs from '../assets/mrmrs.svg';

function Step5() {
  const { setStep } = useContext(StepContext);
  const { invitations } = useContext(GuestContext);
  const { guest } = useGuest(invitations);
  const request = async (confirmed) => {
    try {
      const { status } = await axios.patch(`/api/v1/invitations/${guest._id}`, {
        completed: true,
        confirmed,
      });

      if (status === 200) {
        // TODO: Add logic for resign!!
        setStep();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirm = async () => request(true);
  const handleReject = () => request(false);

  return (
    <div className="step step-5">
      <h2>Сватба е!</h2>
      <h3>
        Да, {guest?.name}, Яси и Лачето се женят и те канят на сватбата си. Ще
        се радваме да потвърдиш и много скоро да се видим на живо.
      </h3>
      <img className="mr-mrs-img" src={MrMrs} alt="" />
      <p className="gradient-text">Георгиеви</p>
      <div className="confirm-buttons">
        <button onClick={handleConfirm}>Потвърждавам</button>
        <button onClick={handleReject}>Няма да дойда</button>
      </div>
    </div>
  );
}

export default Step5;
