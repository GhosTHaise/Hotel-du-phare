import React from 'react'
import styles, { layout } from '../style'
import { hotel1 } from '../assets'
const About = () => {
  return (
    <section
        id='présentation'
        className={`${layout.sectionReverse} ${styles.paddingY}`}
    >
        <div className={layout.sectionImgReverse}>
              <img className="object-contain " src={hotel1} alt="about"  />
        </div>
        <div className={`${layout.sectionInfo} mx-6`}>
            <div className='w-[40px] h-[10px] background-[#C1B086]' />
            <p className='font-poppins font-normal text-[#C1B086] text-[18px] leading-[30.8px] max-w-[520px] mt-5'>RISING CONFORT TO THE HIGHTEST LEVEL</p>
            <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full`}>Bienvenue à<br className="block" /> l'Hotel du Phare</h2>
            <div className='mx-10'>
            <p className={`font-poppins font-normal text-primary text-[18px] leading-[30.8px] max-w-[470px] mt-5 `}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Unde, quidem vel. Sit dignissimos optio voluptates, 
                sed perspiciatis sunt tenetur possimus.Lorem ipsum dolor, 
                sit amet consectetur adipisicing elit. 
                Unde, quidem vel. Sit dignissimos optio voluptates, 
                sed perspiciatis sunt tenetur possimus.
            </p>
            <p className={`font-poppins font-normal text-primary text-[18px] leading-[30.8px] max-w-[470px] mt-5 `}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Unde, quidem vel. Sit dignissimos optio voluptates, 
                sed perspiciatis sunt tenetur possimus...
            </p>
            <button className='bg-[#C1B086] text-white py-4 px-10 rounded-full font-poppins text-[18px] font-semibold my-10 cursor-pointer'>
                  Lire la suite
            </button>
            </div>
            </div>
    </section>
  )
}

export default About