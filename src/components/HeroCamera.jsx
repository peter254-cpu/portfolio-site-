import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery from the library

const HeroCamera = ({ children }) => {
  const groupRef = useRef();
  const [initialRotationCompleted, setInitialRotationCompleted] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  // Use media queries to determine device size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (!isSmall && !isMobile) { // Prevent event-driven rotation on small and mobile devices
        setIsMouseDown(true);
        setMouseX(event.clientX);
      }
    };

    const handleMouseUp = () => {
      if (!isSmall && !isMobile) { // Prevent event-driven rotation on small and mobile devices
        setIsMouseDown(false);
      }
    };

    const handleMouseMove = (event) => {
      if (isMouseDown && initialRotationCompleted && !isSmall && !isMobile) { // Prevent event-driven rotation on small and mobile devices
        const deltaX = event.clientX - mouseX;
        groupRef.current.rotation.y += deltaX * 0.01; // Adjust the sensitivity as needed
        setMouseX(event.clientX);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseDown, mouseX, initialRotationCompleted, isSmall, isMobile]);

  useFrame((state, delta) => {
    if (groupRef.current && !initialRotationCompleted) {
      groupRef.current.rotation.y += delta; // Adjust this value to control the rotation speed

      if (groupRef.current.rotation.y >= Math.PI * 2) { // Check if the model has completed a full rotation (360 degrees)
        groupRef.current.rotation.y = 0; // Reset to the start position if you want
        setInitialRotationCompleted(true); // Stop further rotations and switch to event-driven rotations
      }
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

export default HeroCamera;
