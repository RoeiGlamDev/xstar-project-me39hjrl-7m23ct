import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the luxury LRP cosmetics website.
 * This hook provides a way to animate elements with a luxury feel, using
 * 3D effects and transitions that align with the high-end cosmetics brand.
 * 
 * @param {boolean} isVisible - Determines if the element should be animated.
 * @param {string} animationType - The type of animation to apply (e.g., 'fade', 'slide').
 * @returns {object} - Contains ref for the animated element and animation styles.
 */
export interface AnimationStyles {
  transform: string;
  opacity: number;
  transition: string;
}

export const useAnimation = (isVisible: boolean, animationType: string): AnimationStyles => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      if (isVisible) {
        // Apply luxury 3D animation effects
        ref.current.style.transform = 'translateZ(0) scale(1.05)';
        ref.current.style.opacity = '1';
      } else {
        ref.current.style.transform = 'translateZ(0) scale(0.95)';
        ref.current.style.opacity = '0';
      }
      ref.current.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    }
  }, [isVisible]);

  return {
    transform: ref.current ? ref.current.style.transform : '',
    opacity: isVisible ? 1 : 0,
    transition: 'transform 0.5s ease, opacity 0.5s ease',
  };
};

export default useAnimation;