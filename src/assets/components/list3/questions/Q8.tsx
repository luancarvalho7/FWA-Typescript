export function Q8() {

    const funcionarios = [{
        Nome: "Han Solo",
        Departamento: "Financeiro",
        Salario: 5000
    },
    {
        Nome: "Luke",
        Departamento: "Financeiro",
        Salario: 15000
    },
    {
        Nome: "Ben",
        Departamento: "Marketing",
        Salario: 2000
    },
    {
        Nome: "Leia",
        Departamento: "Marketing",
        Salario: 10000
    },
    {
        Nome: "Rey",
        Departamento: "Financeiro",
        Salario: 2500
    }]

    /* Faça um scprit que retorne o valor que o Departamento Financeiro iria receber ao todo se
déssemos 50% de aumento para eles. Para saber essa informação, nós precisaríamos:
1) filtrar do array quais são os funcionários do Departamento Financeiro,
2) adicionar 50% de aumento em seus salários e
3) fazer a somatória total desses salários. */

    function q8() {
        const Financeiro = funcionarios.filter((current) => current.Departamento=="Financeiro")
        let total = 0
        Financeiro.map((current)=>{current.Salario+=Math.floor(current.Salario*0.5); total+=current.Salario})
        alert(`
        O valor total seria ${total}.
        Array com os salários do departamento financeiro no console`)
        console.log(Financeiro)
        }
    return (
        <div id="q8" className='question'>
            <h1>Questão 8</h1>
            <button onClick={q8}> Run </button>
        </div>
    )
}