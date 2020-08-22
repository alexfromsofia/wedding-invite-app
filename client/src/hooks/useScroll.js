import { useEffect } from 'react';

export default function useScroll(step) {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const stepNode = document.querySelector(`.step-${step}`);

    if (stepNode) {
      stepNode.classList.add('visible');
    }

    if (step === 1) {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    window.scroll({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth',
    });
  }, [step]);
}
