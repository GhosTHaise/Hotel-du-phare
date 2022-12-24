import styles from "../style"
const Availabilities = () => {
  return (
    <div className={`${styles.flexStart} translate-y-[-90px] sm:h-[150px] h-[auto]  sm:flex-row flex-col bg-black-gradient`}>
        <div className="grid sm:grid-cols-4 grid-cols-1 h-[100%] sm:w-[75%] w-full sm:py-6 py-10 px-6">
            <div className="flex flex-col   px-4 py-2">
                  <h4 className="font-poppins text-[16px] text-white">Debut :</h4>
                  <input type="date" className="mt-4 bg-[transparent] border py-2 px-4 outline-none text-[white] " />
            </div>
            <div className="flex flex-col   px-4 py-2">
                  <h4 className="font-poppins text-[16px] text-white">Fin :</h4>
                  <input type="date" className="mt-4 bg-[transparent] border py-2 px-4 outline-none text-[white] " />
            </div>
            <div className=" flex flex-col  px-4 py-2">
                  <h4 className="font-poppins text-[16px] text-white">Adulte(s) :</h4>
                  <input type="number" className="mt-4 bg-[transparent] border py-2 px-4 outline-none text-[white] " />
            </div>
            <div className="flex flex-col px-4 py-2">
                  <h4 className="font-poppins text-[16px] text-white">Enfant(s) :</h4>
                  <input type="number" className="mt-4 bg-[transparent] border py-2 px-4 outline-none text-[white] " />
            </div>
        </div>
        <div className={`${styles.flexCenter} h-[100%] px-10`}>
                <button className="font-poppins text-white text-[18px] border-[white] border px-6 py-4 sm:mb-0 mb-6">
                    Verifier
                </button>
        </div>
    </div>
  )
}

export default Availabilities
