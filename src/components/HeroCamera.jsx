import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

const HeroCamera = ({ children }) => {
  const groupRef = useRef();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseDown = (event) => {
      setIsMouseDown(true);
      setMouseX(event.clientX);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const handleMouseMove = (event) => {
      if (isMouseDown) {
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
  }, [isMouseDown, mouseX]);

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
};

export default HeroCamera;


