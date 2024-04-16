import { useState } from 'react'

function getInicialValue(){
    console.log("Obtendo o valor inicial")
    return 1+1
}

export default function useCounter(){
    const [count, setCount] = useState(() => getInicialValue())

    const increment = () => {
        setCount(count + 1)
    }

    return{ count, increment }
}  