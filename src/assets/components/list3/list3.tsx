import { useEffect, useState } from 'react'
import './list3.css'
import { Q1 } from './questions/Q1'
import { Q2 } from './questions/Q2'
import { Q3 } from './questions/Q3'
import { Q4 } from './questions/Q4'
import { Q5 } from './questions/Q5'

export function List3() {

    const [Q1Array, setQ1Array] = useState([10, 20])   
    
    const produtos = [
        { id: 1, categoria: "limpeza", name: "Amaciante" },
        { id: 2, categoria: "limpeza", name: "Detergente" },
        { id: 3, categoria: "alimento", name: "ovo" },
        { id: 4, categoria: "alimento", name: "alface" },
    ]

    return (
        <section id="list3">
            <Q1 setArray={setQ1Array}/>
            <Q2 Q1Array={Q1Array} />
            <Q3 />
            <Q4 produtos={produtos}/>
            <Q5 produtos={produtos}/>
        </section>
    )
}