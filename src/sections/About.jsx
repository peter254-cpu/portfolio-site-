import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('peterslap67@gmail.com')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 20000);
    }
    const copyPhoneNumber = () => {
        navigator.clipboard.writeText('+254 113316552')
        setPhoneNumber(true)
        
        setTimeout(() => {
            setPhoneNumber(false)
        }, 20000);
    }

  return (
    <section className='c-space my-20' id="about">
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-0 h-fit'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid1.png' className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Hi, I'm Peter</p>
                        <p className='grid-subtext'>
                            I am a versatile Developer and UI Designer with 5 years of experience specializing in creating seamless, user-friendly web applications. Skilled in Figma, Django, Node.js, Express, Tailwind CSS, and React, I bring a unique blend of design and development expertise to every project. My goal is to transform complex ideas into intuitive, visually appealing digital experiences that captivate users and drive engagement
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
            <div className='grid-container'>
                <img src='/assets/grid2.png' alt='grid-2' className='w-full sm:w-[276px] h-fit object-contain' />
                <div>
                    <p className='grid-headtext'>Tech Stack</p>
                    <p className='grid-subtext'>
                        I specialize in designing user-friendly interfaces with Figma and building robust web applications using Django, Node.js, and Express. I also style with Tailwind CSS and create dynamic UIs with React.
                    </p>
                </div>
            </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor='rgba(0,0,0,0)'
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 40, lng: -100,
                                text: "I'm here!",
                                color: "white",
                                size: 20
                            }]}
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>I work remotely across timezones</p>
                        <p className='grid-subtext'>I'm based in Kenya with remote work available</p>
                        <Button  name="Contact Me" isBeam containerClass="w-full w-full" />
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid3.jpg' alt='grid2 img' className='min-w-full sm:h-[266px] h-fit object-contain rounded-lg' />
                    <div>
                        <p className='grid-headtext'>
                            My passion for Coding
                        </p>
                        <p className='grid-subtext'>
                         My passion for technology transcends the mere act of coding—it's about solving complex problems and creating seamless digital experiences that connect people. This deep-rooted love for innovation drives me to constantly refine my skills and embrace new challenges, ultimately delivering exceptional solutions that stand out in a rapidly evolving tech landscape.
                        </p>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container flex items-center'>
                    <img src='assets/grid4.png' alt='grid4' className='w-full md:h-[126px] sm:h-[276px] h-fit  object-cover sm:object-top' />
                    <div className='space-y-2'>
                            <p className='grid-subtext text-center text-underline'>
                                Contact Me
                            </p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy email' />
                                <p className='grid-headtext'>peterslap67@gmail.com</p>
                            </div>
                            <div className='copy-container' onClick={copyPhoneNumber}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy email' />
                                <p className='grid-headtext'>
                                    +254-113,331,552
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
