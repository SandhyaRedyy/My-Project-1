const product = [
    {
        id: 0,
        image: './assets/breakfast/1111.jpg',
        title: 'Idly sambar',
        price: 40,
    },
    {
        id: 1,
        image: './assets/breakfast/222.jpg',
        title: 'Dosa Chetney',
        price: 60,
    },
    {
        id: 2,
        image: './assets/breakfast/10.jpg',
        title: 'Chapathi',
        price: 30,
    },
    {
        id: 3,
        image: './assets/breakfast/poori.jpg',
        title: 'Poori',
        price: 50,
    },
    {
        id: 4,
        image: './assets/breakfast/upm1.jpg',
        title: 'Upma',
        price: 50,
    },
    {
        id: 5,
        image: './assets/breakfast/Upma.jpg',
        title: 'Samiya Upma',
        price: 100,
    },
    {
        id: 6,
        image: './assets/breakfast/555.jpg',
        title: 'Lemon Rice',
        price: 120,
    },
    {
        id: 7,
        image: './assets/breakfast/777.jpg',
        title: 'Curd Rice',
        price: 80,
    },
    {
        id: 8,
        image: './assets/breakfast/999.jpg',
        title: 'Pulihora',
        price: 100,
    },
    {
        id: 9,
        image: './assets/breakfast/333.jpg',
        title: 'Pongal',
        price: 70,
    },
    {
        id: 10,
        image: './assets/breakfast/0000.jpg',
        title: 'Parota',
        price: 90,
    },
    {
        id: 11,
        image: './assets/breakfast/sandwich.jpg',
        title: 'Sandwich',
        price: 120,
    },
    {
        id: 12,
        image: './assets/breakfast/jam.jpg',
        title: 'Bread Jam',
        price: 20,
    },
    {
        id: 13,
        image: './assets/breakfast/444.jpg',
        title: 'Sambar Vada',
        price: 50,
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
