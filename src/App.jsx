import React from 'react'
import styles from './style';

//COMPONENTS
import {Navbar,Hero, Footer,Availabilities,About, Services, RoomsSuites, Contact} from "./components"

const App = () => (
    <div className='bg-white w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-white ${styles.flexStart}`}>
              <div className={`w-full`}>
                <Hero />
              </div>
        </div>  
        <div className={`bg-white ${styles.flexCenter}`}>
            <div className={`sm:w-[1000px] w-full`}>
              <Availabilities />
            </div>
        </div>
        <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                  <About />
                  <Services />
                  <RoomsSuites />
                  <Contact />
              </div>
        </div>  
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Footer />
              </div>
        </div>  
    </div>
  );


export default App