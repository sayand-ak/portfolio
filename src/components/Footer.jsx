import React from 'react';
import { styles } from "../styles"; // Importing styles if needed
import { giticon, leetcode, linkedin, twitter } from '../assets';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-6 text-center min-h-[300px] flex justify-center items-center">
            <div className="container mx-auto">
                <div className="flex flex-col items-center space-y-4">
                    
                    {/* Contact Information */}
                    <div className='flex w-full justify-between items-center'>
                        <hr className='border-[1px] w-full'/>
                        
                        <ul className='w-full flex justify-around items-center'>
                            <li className='size-16'>
                                <img src={linkedin} alt="linkedin" className='object-fit' />
                            </li>

                            <li className='size-12'>
                                <img src={giticon} alt="git" className='object-fit' />
                            </li>
                           
                            <li className='size-12'>
                                <img src={twitter} alt="twitter" className='object-fit' />
                            </li>
                            
                            <li className='size-11'>
                                <img src={leetcode} alt="leetcode" className='object-fit' />
                            </li>

                        </ul>
                        
                        <hr className='border-[1px] w-full'/>
                    </div>
                    
                    
                    {/* Quick Links with Contact Details */}
                    <div className="space-y-1">
                        <p className="text-white">Contact Details:</p>
                        <p>Email: <a href="mailto:your.email@example.com" className="text-teal-400 hover:underline">your.email@example.com</a></p>
                        <p>Phone: <a href="tel:+1234567890" className="text-teal-400 hover:underline">+123 456 7890</a></p>
                    </div>
                    
                    {/* Legal Information */}
                    <div className="space-x-4">
                        <a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a>
                        <span>|</span>
                        <a href="/terms-of-service" className="text-white hover:underline">Terms of Service</a>
                    </div>
                    
                    {/* Copyright Notice */}
                    <div>
                        <p>&copy; 2024 Sayand AK. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
