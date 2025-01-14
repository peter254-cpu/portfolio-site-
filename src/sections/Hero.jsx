import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../contants";
import Cube from "../components/Cube";
import Ring from "../components/Ring";
import Target from "../components/Target"
import ReactLogo from "../components/ReactLogo";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import HeroDesktop from "../components/HeroDesktop";

const Hero = () => {
  const isSmall = useMediaQuery({maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet)
 
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col mt-36 md:mt-40 xl:mt-28 xsl:mt-22 c-space gap-3">
        <p className="sm:text-3xl text-2xl text-white text-center z-10 font-medium font-generalSans">
          Hello,<span className="waving-hand"> 👋</span> I'm  <span className="text-blue-100 hover:text-blue-200 cursor-pointer underline text-bold">{"  "}Peter</span>
          <span className="hidden xl:block">Your Businesse's Digital Experience Solution</span>
        </p>
        <p className="hero_tag text-gray_gradient z-10">
          Building & Enhancing Brands/Products
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
       {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera>
              <HeroDesktop 
                position={sizes.deskPosition} 
                rotation={[0, 300, 0]}
                scale={sizes.deskScale}                
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position = {sizes.cubePosition} />
              <Ring position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit sm:min-w-96"  />
        </a>
      </div>
    </section>
  );
};

export default Hero;
