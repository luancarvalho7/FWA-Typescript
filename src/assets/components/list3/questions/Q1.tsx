import { useRef } from 'react';

interface MyComponentProps {
    setArray: (value: React.SetStateAction<any[]>) => void;


}


export function Q1({ setArray }: MyComponentProps) {
    const q1FirstInput = useRef<HTMLInputElement>(null)
    const q1SecondInput = useRef<HTMLInputElement>(null)

    



    function q1() {
        

        let firstV = q1FirstInput.current?.value.split(' ').map(current => Number(current)) ?? []
        let secondV = q1SecondInput.current?.value.split(' ').map(current => Number(current)) ?? []


        const arrayConcat = [...firstV, ...secondV]

        const withoutHL = arrayConcat.slice(0, arrayConcat.length)
        withoutHL.sort((a, b) => a - b).pop()
        withoutHL.shift()

        setArray(arrayConcat)

        alert(`
        Primeiro array: ${firstV}
        Segundo array: ${secondV}
        Concatenado: ${arrayConcat}
        Sem maior & menor valor: ${withoutHL}`)



    }


    return (

        <div id="q1" className='question'>
            <h1>Questão 1</h1>
            <p>Digite 3 números separados por espaço</p>
            <input type='text' placeholder='' ref={q1FirstInput}></input>
            <p>Digite outros 3 números separados por espaço</p>
            <input type='text' placeholder='' ref={q1SecondInput}></input>
            <button onClick={q1}>Run</button>
        </div>

    )
}