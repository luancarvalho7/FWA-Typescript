interface MyComponentProps{
    produtos: {id: number, categoria: string, name: string}[]
}
export function Q5({produtos}: MyComponentProps) {
    function q5() {
       const alimentos =  produtos.filter((current)=>current.categoria=="alimento")
       let result: string[] = []
       alimentos.map((current) => result.push(
        `
        ${current.id} ${current.name}`))
       alert(result)
    }
    return (
        <div id="q5" className='question'>
            <h1>Questão 5 / 6</h1>
            <button onClick={q5}> Filtrar + Map </button>
        </div>
    )

}