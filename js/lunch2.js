const product = [
    {
        id: 0,
        image: './assets/lunch/veg4.jpg',
        title: 'Aavakaya Biryani',
        price: 140,
    },
    {
        id: 1,
        image: './assets/lunch/tomatorice.jpg',
        title: 'Tomato Rice',
        price: 100,
    },
    {
        id: 2,
        image: './assets/lunch/veg2.jpg',
        title: 'Guthi Vankaya Biryani',
        price: 200,
    },
    {
        id: 3,
        image: './assets/lunch/veg6.jpg',
        title: 'Mango Rice',
        price: 180,
    },
    {
        id: 4,
        image: './assets/lunch/mirchi.jpg',
        title: 'Mirchi Rice',
        price: 100,
    },
    {
        id: 5,
        image: './assets/lunch/kurma1.jpg',
        title: 'Kurma',
        price: 80,
    },
    {
        id: 6,
        image: './assets/lunch/veg1.jpg',
        title: 'Veg Biryani',
        price: 200,
    },
    {
        id: 7,
        image: './assets/lunch/veg0.jpg',
        title: 'Bitter Guard Curry',
        price: 80,
    },
    {
        id: 8,
        image: './assets/lunch/vegp.jpg',
        title: 'Dal Rice',
        price: 70,
    },
    {
        id: 9,
        image: './assets/lunch/special2.gif',
        title: 'Full Meals',
        price: 300,
    },
    {
        id: 10,
        image: './assets/lunch/1.jpg',
        title: 'Guthi vankaya Curry',
        price: 90,
    },
    {
        id: 11,
        image: './assets/lunch/special.gif',
        title: 'Special',
        price: 20,
    },
    {
        id: 12,
        image: './assets/lunch/veg5.jpg',
        title: 'Tomato Pappu Curry',
        price: 40,
    },
    {
        id: 13,
        image: './assets/lunch/100.jpg',
        title: 'Curd Rice',
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
