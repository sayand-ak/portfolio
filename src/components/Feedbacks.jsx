import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';


const FeedbackCard = ({ index, testimonial, name, designation, company, image, portfolio_link }) => {
    return (
        <motion.div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full min-h-[400px]'
        >
            <p className='text-white font-black text-[48px] flex-1'>"</p>
            <div className='mt-1 flex flex-col justify-between flex-2 h-3/4'>
                <p className='ext-white tracking-wider text-[18px]'>{testimonial}</p>
                <div className='mt-7 flex justify-between items-center gap-1'>
                    <div className='flex-1 flex flex-col'>

                        <p className='text-white font-medium text-[16px]'>
                            <a href={`${portfolio_link}`}>
                                <span className='blue-text-gradient'>@</span> {name}
                            </a>
                        </p>

                        <p className='mt-1 text-secondary text-[12px]'>
                            {designation}
                        </p>

                    </div>

                    <img
                        src={image}
                        alt={`feedback by ${name}`}
                        className='w-10 h-10 rounded-full object-cover'
                    />

                </div>
            </div>
        </motion.div>
    )
}


const Feedbacks = () => {
    return (
        <div className='mt-12 bg-black-200 rounded-[20px]'>
            <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                <motion.div
                    variants={textVariant()}
                >
                    <p className={`${styles.sectionSubText}`}>What other's say.</p>
                    <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
                </motion.div>
            </div>
            <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                {
                    testimonials.map((item, index) => (
                        <motion.div
                            variants={fadeIn('right', 'tween', index * 0.5, 0.75)}
                            className='flex flex-col items-center'
                            key={index}
                        >
                            <FeedbackCard
                                key={item.name}
                                index={index}
                                {...item}
                            />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default SectionWrapper(Feedbacks, "feedback");