const List = document.querySelector('.ul-List')
const MyListProduct = document.querySelector('.ShowAll')
const MapProduct = document.querySelector('.MapProductor')
const ReduceValue = document.querySelector('.ReduceTotal')
const ListVegan = document.querySelector('.FilterVegano')

function ShowProduct(ProductArray) {

    let myLi = ''
    ProductArray.forEach(Product => {
        myLi +=
            `
                     <li>
                        <img src="${Product.src}">
                        <p>${Product.name}</p>
                        <p id="Value"> R$ ${Product.price.toFixed(2)}</p>
                    </li>
                `
    })

    List.innerHTML = myLi
}

function DescountProduct() {
    const PriceDescount = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    ShowProduct(PriceDescount)
}

function TotalPriceValue() {

    const TotalCurrency = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    List.innerHTML =

        `
    <li>
    <p id="Value">O valor total da compra foi R$ ${TotalCurrency.toFixed(2)}</p>
    </li>
         `
}

function VeganChoice() {

    const ChoiceVegan = menuOptions.filter((product) => product.vegan)
    ShowProduct(ChoiceVegan)
}



MyListProduct.addEventListener('click', () => ShowProduct(menuOptions))
MapProduct.addEventListener('click', DescountProduct)
ReduceValue.addEventListener('click', TotalPriceValue)
ListVegan.addEventListener('click', VeganChoice)

