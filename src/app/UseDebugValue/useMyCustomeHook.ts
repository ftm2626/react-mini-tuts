import { useDebugValue, useState } from "react";

export function useMyCustomeHook() {
    const [input, setInput] = useState('')

    useDebugValue('the input is :')
    useDebugValue(input)
    // useDebugValue(getValueSlowly(input)) //this slows down our code
    useDebugValue(input,v=>getValueSlowly(v))// this function tells react only if i'm in development AND i have react devtools open
    return {input,setInput}
}

function getValueSlowly (value:string){
    for (let i = 0; i < 300000000; i++) {}
    return value
}