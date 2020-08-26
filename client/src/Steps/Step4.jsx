import React, { useContext } from 'react';
import { StepContext } from '../Context';

function Step4() {
  const { setStep } = useContext(StepContext);

  return (
    <div className="step step-4">
      <h2>и да бъдеш тук от 19ч:</h2>
      <div className="map-responsive">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1046.172977627064!2d27.64607004479373!3d42.44030250374175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f29f91a55f6ab25!2sCamping%20Chernomorets!5e0!3m2!1sen!2sbg!4v1597779510726!5m2!1sen!2sbg"
          width="600"
          height="450"
          allowFullScreen={true}
          style={{ border: 0 }}
          aria-hidden="false"
        ></iframe>
      </div>
      <button onClick={setStep}>Там съм!</button>
    </div>
  );
}

export default Step4;
