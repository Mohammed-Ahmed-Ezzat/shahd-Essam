import React, { useState, useEffect } from 'react';

export default function Preloader({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 25 + 10;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            setIsHidden(true);
            if (onLoaded) onLoaded();
          }, 400);
        }, 300);
      } else {
        setProgress(Math.floor(current));
      }
    }, 100);

    // Fallback timer
    const safetyTimer = setTimeout(() => {
      setProgress(100);
      setIsDone(true);
      setTimeout(() => {
        setIsHidden(true);
        if (onLoaded) onLoaded();
      }, 400);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, [onLoaded]);

  if (isHidden) return null;

  return (
    <div className={`preloader ${isDone ? 'hidden' : ''}`} id="preloader" aria-hidden={isDone}>
      <div className="preloader__inner">
        <div className="preloader__logo">
          <span className="preloader__text" data-text="shahd.ic">shahd.ic</span>
        </div>
        <div className="preloader__bar">
          <span style={{ width: `${progress}%` }}></span>
        </div>
      </div>
    </div>
  );
}
