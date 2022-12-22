import styles,{layout} from "../style"
import { rooms_Suites } from "../constants"
const RoomsSuites = () => (
    <section className={`flex flex-col ${styles.paddingY}`} >
        <p className='font-poppins font-normal text-[#C1B086] text-[18px] leading-[30.8px] max-w-[520px] mt-5'>RISING CONFORT TO THE HIGHTEST LEVEL</p>
        <div className={`flex justify-between items-center my-2`}>
            <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px] text-black xs:leading-[66.8px] leading-[56.8px]" >Rooms & Suites</h2>
            <button className={`bg-[#C1B086] text-white py-4 px-10 rounded-full font-poppins text-[16px] font-semibold  cursor-pointer`}>VIEW ALL</button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {rooms_Suites.map((room_suite,index)=>(
                <div key={room_suite.id}
                    className={"flex flex-col gap-2 "}
                >
                    <img className="w-full h-full object-cover my-6" src={room_suite.link} alt={room_suite.id}/>
                    <h5 className="font-poppins font-semibold xs:text-[18px] text-[16px] text-primary xs:leading-[36.8px] leading-[26.8px]">{room_suite.title}</h5>
                    <p className="xs:text-[16px] text-[14px] text-[#4d4d4d] xs:leading-[16.8px] leading-[26.8px]">Ar <span className="font-poppins font-semibold text-primary">{room_suite.price}</span> /par nuit</p>
                </div>
            ))}
        </div>
    </section>
  )
export default RoomsSuites