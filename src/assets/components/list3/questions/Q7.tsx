export function Q7() {
    const products = [
        {
            name: "Etherium",
            price: 1715
        },
        {
            name: "Bitcoin",
            price: 24997
        },
        {
            name: "BNB",
            price: 311
        },
        {
            name: "Monero",
            price: 151
        }
    ]
    function q7() {
        function discount(current: { name: string; price: number }): { name: string; price: number } {
            current.price = Math.floor(current.price * 0.9)
            return current
        }

        let wDiscount = products.map((current) => discount(current))

        let keys = Object.keys(wDiscount[0])

        

        alert(`Cryptos com 10% desconto:
        ${wDiscount.map((c) => `
        ${c.name} > ${c.price}`)}
        
        Keys: ${keys}`)

    }

    return (
        <div id="q7" className='question'>
            <h1>Questão 7</h1>
            <button onClick={q7}> 10% discount </button>
        </div>
    )
}