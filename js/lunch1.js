const product = [
    {
        id: 0,
        image: './assets/lunch/nonveg2.jpg',
        title: 'Chicken Biryani',
        price: 200,
    },
    {
        id: 1,
        image: './assets/lunch/nonveg3.jpg',
        title: 'Mutton Biryani',
        price: 250,
    },
    {
        id: 2,
        image: './assets/lunch/nonveg9.jpg',
        title: 'Fish Biryani',
        price: 300,
    },
    {
        id: 3,
        image: './assets/lunch/nonveg3.jpg',
        title: 'Dhamm Biryani',
        price: 350,
    },
    {
        id: 4,
        image: './assets/lunch/nonveg6.jpg',
        title: 'Chicken Curry',
        price: 150,
    },
    {
        id: 5,
        image: './assets/lunch/nonveg55.jpg',
        title: 'Mutton Curry',
        price: 180,
    },
    {
        id: 6,
        image: './assets/lunch/nonveg1.jpg',
        title: 'Chicen 65',
        price: 100,
    },
    {
        id: 7,
        image: './assets/lunch/chicken65.jpg',
        title: 'Chicken Kabab',
        price: 90,
    },
    {
        id: 8,
        image: './assets/lunch/nonveg88.jpg',
        title: 'Fish Curry',
        price: 200,
    },
    {
        id: 9,
        image: './assets/lunch/kfc.jpg',
        title: 'KFC',
        price: 350,
    },
    {
        id: 10,
        image: './assets/lunch/ragi.jpg',
        title: 'Ragi Sangati',
        price: 50,
    },
    {
        id: 11,
        image: './assets/lunch/fishkabab.jpg',
        title: 'Fish kabab',
        price: 120,
    },
    {
        id: 12,
        image: './assets/lunch/666.jpg',
        title: 'Egg Rice',
        price: 110,
    },
    {
        id: 13,
        image: './assets/lunch/special0.jpg',
        title: 'Pepper Chicken',
        price: 150,
    }

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Select</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
