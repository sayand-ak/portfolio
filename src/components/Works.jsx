import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { livelink } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            <Tilt
                options={{ max: 45, scale: 1.1, speed: 450 }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xl'
                    />
                    <div className='absolute inset-0 flex flex-col gap-2 items-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'
                        >
                            <img src={github} alt="github" className='w-5 h-5' />
                        </div>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'
                        >
                            <img src={livelink} alt="github" className='w-5 h-5' />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-bold text-[24px] text-white'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-row gap-2'>
                    {
                        tags.map((tag, index) => (
                            <p key={index} className={`${tag.color} text-[14px]`}>#{tag.name}</p>
                        ))
                    }
                </div>

            </Tilt>
        </motion.div>
    )
}



const Works = () => {
    return (
        <>

            <motion.div
                variants={textVariant}
            >
                <p className={styles.sectionSubText}>My achievements</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] w-full leading-[30px]'
                >
                    Over the years, I have worked on a variety of projects that showcase my expertise in web development and software engineering.
                    From building scalable web applications with modern technologies like React and Node.js to developing innovative solutions for real-world problems, I have consistently demonstrated my ability to deliver high-quality results. My work includes creating dynamic user interfaces, implementing robust backend systems, and optimizing performance to ensure seamless user experiences.
                    Each project has contributed to honing my skills and expanding my knowledge, driving me to continually push the boundaries of what’s possible in the tech world.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {
                    projects.map((project, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            {...project}
                            index={index}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default SectionWrapper(Works, "works")