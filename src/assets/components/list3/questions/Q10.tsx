import { useRef } from "react"

export function Q10() {

    const input = useRef<HTMLInputElement>(null)

function q10() {
    const numbers = input.current?.value.split(' ').map(current => Number(current)) ?? []
    
    let negatives =numbers.filter((c => c<0))

    alert(`Todos números negativos: [${negatives}]`)
}
return (
    <div id="q10" className='question'>
        <h1>Questão 10</h1>
        <p>Digite números positivos e negativos</p>
        <input type='text' placeholder='' ref={input}></input>
        <button onClick={q10}> Run </button>
    </div>
)
}