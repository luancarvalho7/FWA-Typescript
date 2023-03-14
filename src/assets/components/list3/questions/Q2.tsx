import { useRef } from "react"

interface MyComponentProps {
    Q1Array: number[]
}
export function Q2({ Q1Array }: MyComponentProps) {
    const q2Input = useRef<HTMLInputElement>(null)

    function q2() {
        let result: number = Number(q2Input.current?.value)
        let hasNumber = Q1Array.indexOf(result)
        if (hasNumber != -1) {
            alert(`Número encontrado na posição ${hasNumber}`)
        }
        else { alert('Número não encontrado no array') }
    }
    return (
        <div id="q2" className='question'>
            <h1>Questão 2</h1>
            <p>Consulte um número</p>
            <input type='text' placeholder='' ref={q2Input}></input>
            <button onClick={q2}> Run </button>
        </div>
    )
}