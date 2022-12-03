import React from 'react'
import styles from '../style'
import { home } from '../assets'
const Hero = () => (
    <div>
        <section id="home" className={`flex md:flex-row flex-col min-h-[570px] h-[85vh] polygon-effect relative overflow-hidden`}>
                    <img src={home} alt="home" className='w-[100%] h-[100%]  z-[1] object-cover absolute top-[0]' />
                    <div className={`${styles.flexCenter} flex-col z-[2] h-[100%] sm:w-[50%]  w-[100%]  bg-[#0000007f]`}>
                            <div className={`${styles.flexStart} flex-col`}>
                                    <h1 className='text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
                                        HOTEL DU PHARE
                                    </h1>
                                    <p className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-4`}>
                                        Séjourner dans l'un des hôtes parmis les plus luxieux de la côte Ouest de Madagascar.
                                    </p>
                                    <a style={{border : "solid 1px #ffffff",padding : " 12px 20px 12px 20px "}} href='#presentation' className='text-white text-[20px]  py-4 rounded-full mt-10'>
                                            En savoir plus
                                    </a>
                            </div>
                    </div>
        </section>
    </div>
)

export default Hero
