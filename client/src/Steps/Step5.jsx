import React, { useContext } from 'react';
import { StepContext, GuestContext } from '../Context';
import useGuest from '../hooks/useGuest';
import MrMrs from '../assets/mrmrs.svg';

function Step4() {
  const { setStep } = useContext(StepContext);
  const { invitations } = useContext(GuestContext);
  const { guest } = useGuest(invitations);
  const handleConfirm = (e) => {
    console.log(guest);
  };
  const handleReject = (e) => {};

  return (
    <div className="step step-5">
      <h2>Сватба е!</h2>
      <h3>
        Да, {guest?.name}, Лачето и Яси се женят и те канят на сватбата си. Ще
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

export default Step4;
