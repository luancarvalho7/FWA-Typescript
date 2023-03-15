/* 
Imagine a situação onde você tem uma lista de produtos e precisa extrair apenas o id de
cada um. */

interface MyComponentProps{
    produtos: {id: number, categoria: string, name: string}[]
}
export function Q4({produtos}: MyComponentProps) {
    function q4() {
        
        
        let idsArray: number[] = []
        produtos.map((current) => idsArray.push(current.id))
        alert(`Array contendo apenas os IDs ${idsArray}`)
        
    }
    return (
        <div id="q4" className='question'>
            <h1>Questão 4</h1>
            <button onClick={q4}> Extract IDS </button>
        </div>
    )

}