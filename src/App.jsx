import React from 'react'
import styles from './style';

//COMPONENTS
import {Navbar,Hero, Footer,Availabilities} from "./components"

const App = () => (
    <div className='bg-white w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-white ${styles.flexStart}`}>
              <div className={`w-full`}>
                <Hero />
              </div>
        </div>  
        <div className={`bg-white w-full ${styles.flexCenter}`}>
              <Availabilities />
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Footer />
              </div>
        </div>  
    </div>
  );


export default App