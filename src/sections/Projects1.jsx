import React, { Suspense, useState } from 'react'
import { myProjects } from '../contants'
import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import DemoComputer from '../components/DemoComputer'
import CanvasLoader from '../components/CanvasLoader'
import ProjectsKeyboard from '../components/ProjectsKeyboard'
import ProjectsTable from '../components/ProectsTable'
import ProjectsLamp from '../components/ProjectsLamp'

const projectCount = myProjects.length

const Projects = () => {
    const [selectedProjectIndex, setselectedProjectIndex] = useState(0)
    const currentProject = myProjects[selectedProjectIndex]

    const handleNavigation = (direction) => {
        setselectedProjectIndex((prevIndex) => {
            if(direction === 'previous'){
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            } else {
                return prevIndex === projectCount -1 ? 0 : prevIndex + 1 
            }
        })
    }
  return (
    <section className='c-space my-20'>
        <div className='flex items-center flex-col text-center '>
        <p className='head-text underline'>
            Notable Recent Solo Projects
        </p>
        <p className='text-white  mt-2  '>
            Please note that most of this projects are hosted on free hosting site hence the server sleeps with inactivity 
            <span className='underline'> (has a downtime of about 50 seconds)</span>
            {"  "}Kindly be patient as the server loads for full experience
        </p>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
            <div className='text-white flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-gray-900'>
                <div className='absolute top-0 right-0'>
                    <img src={currentProject.spotlight} alt='spotlight'  className='w-full h-96 object-cover rounded-xl'/>
                </div>
                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt='logo' className='w-10 h-10 shadow-sm' />
                </div>
                <div className='flex flex-col gap-5 my-5 text-white'>
                    <p className='text-white text-2xl font-semibold animatedText'>
                        {currentProject.title}
                    </p>
                    <p className='animatedText'>
                        {currentProject.desc}
                    </p>
                    <p className='animatedText'>
                        {currentProject.subdesc}
                    </p>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className='flex items-center flex-wrap gap-3'>
                        {currentProject.tags.map((tag, index) => (
                            <div key={index} className='tech-logo'>
                                <img src={tag.path}  alt={tag.name} />
                            </div>
                        ))}
                    </div>
                    <a className='flex items-center gap-2 cursor-pointer text-white-600' target='_blank' rel='noreferrer' href={currentProject.href}>
                        <p>Check Live Site</p>
                        <img src='/assets/arrow-up.png' className='w-3 h-3' alt='arrow' />
                    </a>
                </div>
                <div className='flex justify-between items-center mt-7'>
                    <button className='arrow-button' onClick={() => handleNavigation('previous')}>
                        <img src='/assets/left-arrow.png' alt='right arrow' className='w-4 h-4' />
                    </button>
                    <button className='arrow-button' onClick={() => handleNavigation('next')}>
                        <img src='/assets/right-arrow.png' alt='right arrow' className='w-4 h-4' />
                    </button>
                </div>
            </div>
            <div className="border border-gray-600 bg-gray-900 rounded-lg h-96 md:h-full ">
                <Canvas>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} />
                    <Center>
                        <Suspense fallback={<CanvasLoader />}>
                            <group 
                                
                            >
                                <DemoComputer 
                                    scale={2.3}
                                    position={[0, -0.80, 1.2]}
                                    rotation={[-0.09, -1.6, 0.01]}
                                />
                                <ProjectsKeyboard
                                    scale={1.5}
                                    position={[-0.1, -0.9, 1.8 ]}
                                    rotation={[0.95, -0.01, 0.1]}
                                />
                                <ProjectsTable 
                                    scale={7.2}
                                    position={[-13, -19, 11]}
                                    rotation={[-0.45, 1.7, 1.5]}
                                />
                                <ProjectsLamp
                                    scale={0.045}
                                    position={[-4.2, -2.6, -1]}
                                    rotation={[0.35, 1.5, 0.15]}
                                />
                            </group>
                        </Suspense>
                    </Center>
                </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Projects