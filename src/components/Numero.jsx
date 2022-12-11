import { useEffect, useState } from "react";

const Numero = ({number, numbersList, setNumbersList}) => {
    const [ativo, setAtivo] = useState(false)

    useEffect(()=> {
        ativarNumero()
    },[numbersList])

    function ativarNumero() {
        let contains = numbersList.includes(number)
        if(contains) {
            setAtivo(true)
        }else{
            setAtivo(false)
        }
    }

    function addNumberList() {

        let numberExists = numbersList.includes(number)

        if(!numberExists) {
            setNumbersList([...numbersList, number])
        }else {
            let filtered = numbersList.filter((el)=> el !== number)
            setNumbersList(filtered)
        }
    }

    function handleClick() {
        ativarNumero()
        addNumberList()

    }
    return (
        <li onClick={handleClick} className={`${ativo? "bg-[#e0b643]" : "bg-[#FBEFCE]"} m-[5px] px-[10px] py-[5px] text-[#BC0706] font-bold rounded-full cursor-pointer`}>{number}</li>
    )
}

export default Numero;