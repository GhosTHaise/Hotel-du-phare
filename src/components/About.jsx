import React from 'react'
import styles, { layout } from '../style'
const About = () => {
  return (
    <section
        className={layout.sectionReverse}
    >
        <div className={layout.sectionImgReverse}>

        </div>
        <div className={layout.sectionInfo}>
            <div className='w-[40px] h-[10px] background-[#C1B086]' />
            <p className='font-poppins font-normal text-[#C1B086] text-[18px] leading-[30.8px] max-w-[470px] mt-5'>RISING CONFORT TO THE HIGHTEST LEVEL</p>
            <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full`}>Bienvenue a<br className="sm:block hidden" /> l'Hotel du Phare</h2>
            <p className={`font-poppins font-normal text-primary text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Unde, quidem vel. Sit dignissimos optio voluptates, 
                sed perspiciatis sunt tenetur possimus.
            </p>
            </div>
    </section>
  )
}

export default About