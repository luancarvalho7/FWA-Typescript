import './list3.css'
import { useRef } from 'react'

export function List3() {

    /* Question 1 
    1- Crie 2 arrays numéricos com dados sendo preenchidos pelo usuário, utilizando o push para
popular, concatene os mesmos, exclua o maior e menor valor, ao final exiba:
1) Os dois arrays originais preenchidos,
2) O array concatenado ;
3) O array concatenado sem o maior e menor valores.
    */

    const q1FirstInput = useRef<HTMLInputElement>(null)
    const q1SecondInput = useRef<HTMLInputElement>(null)

    function q1() {

        let firstV = q1FirstInput.current?.value.split(' ').map(current => Number(current)) ?? []
        let secondV = q1SecondInput.current?.value.split(' ').map(current => Number(current)) ?? []

        
        const arrayConcat = [...firstV, ...secondV]
        
        const withoutHL = arrayConcat.slice(0, arrayConcat.length)
        withoutHL.sort((a, b) => a-b).pop()
        withoutHL.shift()

        alert(`
        Primeiro array: ${firstV}
        Segundo array: ${secondV}
        Concatenado: ${arrayConcat}
        Sem maior & menor valor: ${withoutHL}`)
        
        
        
    }


    return (
        <section id="list3">
            <div id="q1" className='question'>
                <h1>Questão 1</h1>
                <p>Digite 3 números separados por espaço</p>
                <input type='text' placeholder='' ref={q1FirstInput}></input>
                <p>Digite outros 3 números separados por espaço</p>
                <input type='text' placeholder='' ref={q1SecondInput}></input>
                <button onClick={q1}>Run</button>
            </div>
        </section>
    )
}