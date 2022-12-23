import styles,{layout} from "../style"
import { services } from "../constants"
const Services = () => (
    <section cclassName={`flex flex-col ${styles.paddingY}`}>
        <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px] text-black xs:leading-[66.8px] leading-[56.8px]" >Nos Offres :</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 flex-wrap">
                {services.map((service,index)=>(
                    <div className="flex gap-2 px-4 py-5 cursor-pointer transition-all duration-500  hover:bg-[#cccccc] rounded-md">
                        <img src="" alt="" />
                        <div className="flex flex-col">
                            <h2 className="font-poppins font-semibold xs:text-[20px] text-[18px] text-black xs:leading-[56.8px] leading-[46.8px]" >{service.title}</h2>
                            <p className={`font-poppins font-normal text-[#595959] text-[18px] leading-[30.8px] my-2`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Fugiat odio at laboriosam repellat consequatur temporibus, quam id reiciendis. 
                                Quo debitis nobis ad, facilis vitae ducimus 
                                repellendus animi cumque aliquid quisquam!
                            </p>
                        </div>
                    </div>  
                ))}
        </div>
    </section>
)

export default Services