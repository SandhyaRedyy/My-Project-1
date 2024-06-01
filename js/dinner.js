const product = [
    {
        id: 0,
        image: './assets/dinner/chapathi22.jpg',
        title: 'Chapathi',
        price: 40,
    },
    {
        id: 1,
        image: './assets/dinner/100.jpg',
        title: 'Curd Rice',
        price: 30,
    },
    {
        id: 2,
        image: './assets/dinner/200.jpg',
        title: 'Pea Nut Rice',
        price: 80,
    },
    {
        id: 3,
        image: './assets/dinner/300.jpg',
        title: 'Plain Biryani',
        price: 100,
    },
    {
        id: 4,
        image: './assets/dinner/kuska.jpg',
        title: 'Kuska',
        price: 70,
    },
    {
        id: 5,
        image: './assets/dinner/400.jpg',
        title: 'Ghee Rice',
        price: 120,
    },
    {
        id: 6,
        image: './assets/dinner/500.jpg',
        title: 'Coconut Milk Rice',
        price: 120,
    },
    {
        id: 7,
        image: './assets/dinner/gobi22.jpg',
        title: 'Gobi Rice',
        price: 80,
    },
    {
        id: 8,
        image: './assets/dinner/gobi11.jpg',
        title: 'Gobi Manchura',
        price: 100,
    },
    {
        id: 9,
        image: './assets/dinner/masal.jpg',
        title: 'Pani Poori',
        price: 70,
    },
    {
        id: 10,
        image: './assets/dinner/600.jpg',
        title: 'Masala Poori',
        price: 80,
    },
    {
        id: 11,
        image: './assets/dinner/potbiryani.jpg',
        title: 'Pot Biryani',
        price: 150,
    },
    {
        id: 12,
        image: './assets/dinner/700.jpg',
        title: 'Ice Cream',
        price: 50,
    },
    {
        id: 13,
        image: './assets/dinner/kheer.jpg',
        title: 'Rice kheer',
        price: 60,
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
