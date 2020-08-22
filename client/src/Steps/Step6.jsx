import React, { useContext } from 'react';
import happy from '../assets/happy.gif';
import howdareyou from '../assets/howdareyou.gif';
import { StepContext } from '../Context';

const Step6 = () => {
  const { confirmed } = useContext(StepContext);

  return (
    <div className="step step-6">
      {confirmed && <h2>Благодарим и до скоро!</h2>}
      {confirmed ? <img src={happy} alt="" /> : <img src={howdareyou} alt="" />}
    </div>
  );
};

export default Step6;
