import {useState} from 'react'
import {close,menu} from "../assets"
import {navLinks} from "../constants"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  //2:17"01
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <div className='font-semibold w-[124px] h-[32px]'>LOGO</div>
      <ul  className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks?.map((nav,index)=>(
            
              <li key={nav.id} className={`font-poppins 
              font-normal 
              cursor-pointer 
              text-[16px]
               text-black
               ${index == navLinks.length -1 ? "mr-0" : "mr-10"}`}>
                    <a href={`#${nav.id}`}>
                      {nav.title} { console.log(index)}
                    </a>
              </li>
            ))}
      </ul>
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
              <img src={toggle ? close : menu } 
                      alt="menu" 
                      className="w-[28px] h-[28px] object-contain cursor-pointer" 
                      onClick={()=> setToggle((prev) => !prev)}
              />

              <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[1000]`}>
                  <ul  className='list-none flex justify-end flex-col items-center flex-1'>
                      {navLinks?.map((nav,index)=>(
                      
                        <li key={nav.id} className={`font-poppins 
                        font-normal 
                        cursor-pointer 
                        text-[16px]
                        text-white
                        ${index == navLinks.length -1 ? "mb-0" : "mb-10"}`}>
                              <a href={`#${nav.id}`}>
                                {nav.title} { console.log(index)}
                              </a>
                        </li>
                      ))}
                  </ul>
              </div>
      </div>
    </nav>
  )
}

export default Navbar