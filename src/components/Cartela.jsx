import { useEffect, useState } from "react";
import Numero from "./Numero";

const Cartela = () => {
    


    const [confirm, setConfirm] = useState(false)
    const [numbersList, setNumbersList] = useState([])

    useEffect(()=>{
        botaoConfirm()
    },[numbersList])
    
    function botaoConfirm() {
        if(numbersList.length > 0){
            setConfirm(true)
        }else{
            setConfirm(false)
        }
    }
    const data = ["04", "40", "49", "32", "55", "08", "23", "53", "58", "02", "18", "26", "39", "33", "27", "46", "35", "30", "03", "56", "21", "43", "38", "01", "37", "25", "07", "20", "31", "22", "17", "11", "14", "50", "44", "45", "34"]
    return (
        <div className="w-[26%] min-w-[300px] p-0 flex flex-col">
            <ul className="list-none flex flex-wrap p-0">
                {data.map((el)=>(
                    <Numero number={el} numbersList={numbersList} setNumbersList={setNumbersList}/>
                ))}
            </ul>
            <button onClick={() => setNumbersList([])} className={` text-[#BC0706] p-2 rounded-full mb-5 font-bold mt-5 mx-auto bg-[#FBEFCE] ${confirm ? "flex" : "hidden"}`}>Confirmar</button>
            <div className="flex gap-1 flex-wrap max-w-lg">
                {numbersList.map((el)=>(
                            <>
                                <span>{el}</span>
                                <span>-</span>
                            </>
                    ))}
            </div>
        </div>
    );
}

export default Cartela;