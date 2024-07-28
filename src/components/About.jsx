import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from '../styles';

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 25,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-tertiary rounded-[20px] px-12 py-5 min-h-[200px] flex justify-evenly items-center flex-col"
                >
                   <img 
                        src={icon} 
                        alt={title} 
                        className='h-16 w-16 object-contain' 
                    />

                   <h3 className='text-white text-[20px] text-bold text-center'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] leading-[30px] max-w-[3xl]'
            >
                I’m Sayand AK, a passionate software developer with expertise in TypeScript, Node.js, Next, and other modern technologies. 
                I focus on building robust web applications and creating engaging user experiences. 
                Explore my work and connect with me to discuss opportunities or collaborations!
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

        </>

    )
}

export default SectionWrapper(About, "about");