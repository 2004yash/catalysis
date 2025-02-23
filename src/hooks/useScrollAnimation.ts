import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScroll = window.pageYOffset;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setScrollY(currentScroll);
      setIsScrollingUp(currentScroll < lastScroll);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrollingUp };
};
