import styles from "../style"
import { contacts } from "../constants"
const Contact = () => {
  return (
    <section className={`flex flex-col ${styles.paddingY}`}>
          <div className="flex flex-col items-center gap-8">
              <h5 className="font-poppins text-center font-regular xs:text-[28px] text-[20px] text-black xs:leading-[26.8px] leading-[16.8px]">Nos Adresses</h5>
              <h2 className="font-poppins text-center font-semibold xs:text-[38px] text-[30px] text-black xs:leading-[46.8px] leading-[66.8px]">Où vous pouvez nous trouver</h2>
              <div className="w-[10%] h-1 bg-[#C1B086] rounded-full my-2" />
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 justify-between">
              {contacts.map((contact,index)=>(
                <div key={contact.id} className="flex flex-col gap-2 my-4">
                        {/* <img src="" alt={contact.id}  /> */}
                        <div className="flex flex-col">
                            <h5 className="font-poppins text-center font-semibold xs:text-[18px] text-[16px] text-black xs:leading-[46.8px] leading-[36.8px]">{contact.title}</h5>
                            <div className="flex flex-col justify-center items-center">
                                  {contact.descriptions.map((description,index)=>(
                                      <p className="font-poppins text-center font-regular xs:text-[16px] text-[14px] text-[#595959] xs:leading-[26.8px] leading-[16.8px]">{description}</p>
                                  ))}
                            </div>
                        </div>
                </div>
              ))}
          </div>
    </section>
  )
}

export default Contact