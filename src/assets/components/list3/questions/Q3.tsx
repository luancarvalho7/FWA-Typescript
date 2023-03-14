
import { useRef } from "react"

export function Q3() {
    const q3Input = useRef<HTMLInputElement>(null)
    function q3() {
        let inputValue = q3Input.current?.value
        let array = inputValue?.split(' ').map((current)=>Number(current) * 2)
        alert(`Array*2 com .map():
[${array}]`)
    }
    return (
        <div id="q3" className='question'>
            <h1>Questão 3</h1>
            <p>Insira um array de 10 números</p>
            <input type='text' placeholder='' ref={q3Input}></input>
            <button onClick={q3}> Run </button>
        </div>
    )

}