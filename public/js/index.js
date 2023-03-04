/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
  
 



//   function openTab(evt, tab) {
//       var i, tabcontent, tablinks;
//       tabcontent = document.getElementsByClassName("content__inner");
//       for (i = 0; i < tabcontent.length; i++) {
//           tabcontent[i].style.display = "none";
//       }
//       tablinks = document.getElementsByClassName("tab");
//       for (i = 0; i < tablinks.length; i++) {
//           tablinks[i].className = tablinks[i].className.replace(" active", "");
//       }
//       document.getElementById(tab).style.display = "block";
//       evt.currentTarget.className += " active";
//   }

// //   $('#productList').on('click', function () {
// //     $('#productView').attr('class', 'product-list');
// //   });
  
// //   $('#productGrid').on('click', function () {
// //     $('#productView').attr('class', 'product-grid');
// //   });

// //   document.getElementById("productList").addEventListener('click', (e) => {
// //     document.getElementById("productView").attr('class', 'product-list');
// //   });
  
// //   document.getElementById("productGrid").addEventListener('click', (e) => {
// //     document.getElementById("productView").attr('class', 'product-grid');
// //   });


  
  // Table data
  const data = [
    {id : 1,  name : "Static Website Design Layout", price : 100, Image : './backmockup.png'},
    {id : 2, name : "CMS Website Design Layout", price : 150},
    {id : 3, name : "Domain Name Registration (Yearly)",  price : 100},
    {id : 4, name : "Website Hosting (Yearly)", price : 500},
    {id : 5, name : "SEO Search Engine Optimization", price : 100},
    {id : 6, name : "Social Media Creation", price : 100},
    {id : 7, name : "Email Services", price : 100},
    {id : 8, name : "Support (FREE for 3 months)", price : 150}
  ];
  
  const sum = data.reduce((total, item) => total + item.price, 0);
  
  const tableData = `
    <table style="width:100%">
      <thead>
        <tr>
         
        </tr>
      </thead>
      <tbody>
        ${data.map(item => `
          <tr>
            <td>${item.id}. ${item.name}${item.Image ? `<img src="${item.Image}" alt="${item.name}" style="width:50px;">` : ''}</td>
            <td>${item.price}</td>
          </tr>
        `).join('')}
      </tbody>
      <thead>
        <tr>
         <th> <div class="numbers">
         <h1 id="tots">Total</h1>
         <h1 id="total"></h1> </div></th>
        </tr>
      </thead>


    </table>
  `;
  
  document.getElementById('tableData').innerHTML = tableData;
  document.getElementById('total').innerHTML = sum;

  


// // const product = [
   
    
// //     {
// //       title: "Creation",
// //       price: 48.,


// //     }

// // ];
// // const categories = [...new Set(product.map((item)=>
// //   {return item}))]
// //   let s = 0;
// //   document.getElementById('root').innerHTML = categories.map((item)=>
// //   {
// //     var {image, title, price} = item;
// //     return(
// //       `<div class='box'>

// //       </div>
// //       <div class='bottom'>
// //       <p>${title}</p>
// //       <h2>$ ${price}.00</h2>`+
// //       "<button onclick='addtocart("+(s++)+")'>Add To Cart</button>"+`</div>
// //       </div>`


// //     )
// //   }).join('')

// //   var cart = [];

// //   function addtocart(a){
// //     cart.push({...categories});
// //     displaycart();

// //   }

// //   function delElement(a){
// //     cart.splice(a, 1);
// //     displaycart();
// //   }
  
// //   function displaycart(a){
// //     let j = 0, total=0; 
// //     document.getElementById("count").innerHTML=cart.length;
// //     if(cart.length==0){
// //       document.getElementById('cartItem').innerHTML = "Your cart is ready ";
// //       document.getElementById("total").innerHTML= "$ "+0+" .00";
      
// //     }
// //     else {
// //       document.getElementById("cartItem").innerHTML = cart.map((items)=>
// //       {
// //         var{image, title, price} = items;
// //         total=total+price;
// //         document.getElementById("total").innerHTML = "$ "+total+".00";
// //         return(
// //           `<div class='cart-item'>
// //           <div class='row-img'>
// //           <img class='rowing' src=${image}>
// //           </div
// //           <p style='font-siize:12px; '"${title}</p>
// //           <h2 style='font-size: 15px; '>$ ${price}.00</h2> +
// //           "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"`
// //         );

// //       }).join('')
      
// //     }
// //   }

// //   const count = document.getElementById("count");

// // count.addEventListener("click", function() {
// //   count.classList.toggle("clicked");
// // });

  

  
//   //Horizontal scroll for the tabs on mousewheel. If tabs are longer than the content section, there's a scroll bar but it's hidden to retain the design.
//   if (window.innerWidth > 800) {
//       const scrollContainer = document.querySelector(".tabs");
  
//       scrollContainer.addEventListener("wheel", (evt) => {
//           evt.preventDefault();
//           scrollContainer.scrollLeft += evt.deltaY;
//       });
//   }


  
  
  
//   // function formatDate(dateObject){
//   // 	const parts = {
//   // 		date: dateObject.getDate(),
//   // 		date: dateObject.getMonth() + 1,
//   // 		date: dateObject.getFullYear(), 
//   // 		date: (dateObject.getHours() % 12) || 12,
//   // 		date: dateObject.getMinutes().toString().padStart(2, "0"),
//   // 		date: dateObject.getHours() < 12 ? "AM" : "PM"
//   // 	};
//   // 	console.log(parts);
//   // }
//   const myDate = new Date();
//   console.log(myDate);
//   // const myDateFormatted = formatDate(myDate);
  
//   document.getElementsByClassName("candy").innerHTML = myDate;

//   let cart = [];

// function addToCart() {
//   const item = this.closest('.item');
//   const price = item.querySelector('.item-price').textContent;
//   cart.push(price);
//   document.querySelector('#cartItem').textContent = `${cart.length} item(s) - $${cart.reduce((total, current) => total + parseFloat(current), 0)}`;
// }

// document.querySelectorAll('.add-to-cart-button').forEach(button => {
//   button.addEventListener('click', addToCart);
// });

// const cartButton = document.querySelector('#count');
// cartButton.addEventListener('click', () => {
//   const dropdown = document.querySelector('#cartDropdown');
//   if (dropdown.style.display === 'block') {
//     dropdown.style.display = 'none';
//   } else {
//     dropdown.style.display = 'block';
//   }
// });


const products = [
  {
    id: 1,
    name: 'T-Shirt 1',
    price: 20,
    description: ['Limited edition collectable', '100% cotton', 'Unisex sizing'],
    image: 'tshirt1.jpg'
  },
  {
    id: 2,
    name: 'T-Shirt 2',
    price: 25,
    description: ['Limited edition collectable', '100% cotton', 'Unisex sizing'],
    image: 'tshirt2.jpg'
  },
  {
    id: 3,
    name: 'T-Shirt 3',
    price: 30,
    description: ['Limited edition collectable', '100% cotton', 'Unisex sizing'],
    image: 'tshirt3.jpg'
  },
  {
    id: 4,
    name: 'T-Shirt 4',
    price: 35,
    description: ['Limited edition collectable', '100% cotton', 'Unisex sizing'],
    image: 'tshirt4.jpg'
  }
];

const productsDiv = document.getElementById('products');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let cart = [];

function createProductElement(product, hoverColor) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  const productImg = document.createElement('img');
  productImg.classList.add('item-img');
  const productName = document.createElement('p');
  productName.classList.add('item-date')
  const productPrice = document.createElement('p');
  productPrice.classList.add('item-price')
  const productDescription = document.createElement('ul');
  const addToCartBtn = document.createElement('button');
  addToCartBtn.classList.add('button1');
  addToCartBtn.document.getElementByClassName('button1');


  productImg.src = `images/${product.image}`;
  productName.innerText = product.name;
  productPrice.innerText = `$${product.price}`;
  product.description.forEach(detail => {
    const detailItem = document.createElement('li');
    detailItem.innerText = detail;
    productDescription.appendChild(detailItem);
  });
  addToCartBtn.innerText = 'Add to cart';
  addToCartBtn.addEventListener('mouseenter',  () => {
    cart.push(product);
    updateCart();
  });

  const colors = ['#FF5733', '#8A2BE2', '#1E90FF', '#7CFC00', '#FF1493', '#FFD700'];

addToCartBtn.addEventListener('mouseover', () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  addToCartBtn.style.backgroundColor = randomColor;
  cart.push(product);
  updateCart();
});


  addToCartBtn.addEventListener('mouseenter', () => {
    addToCartBtn.style.backgroundColor = randomColor;
  });
  
  addToCartBtn.addEventListener('mouseleave', () => {
    addToCartBtn.style.backgroundColor = '';
  });

  productDiv.appendChild(productImg);
  productDiv.appendChild(productName);
  productDiv.appendChild(productPrice);
  productDiv.appendChild(productDescription);
  productDiv.appendChild(addToCartBtn);

  return productDiv;
}

function renderProducts() {
  products.forEach(product => {
    const productDiv = createProductElement(product, 'orange');
    productsDiv.appendChild(productDiv);
  });
}



function updateCart() {
  cartItems.innerText = `${cart.length} item(s)`;
  const total = cart.reduce((acc, product) => acc + product.price, 0);
  cartTotal.innerText = `$${total}`;
}

renderProducts();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var buttons = document.querySelectorAll('.button1');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = getRandomColor();
  });
  buttons[i].addEventListener('mouseout', function() {
    this.style.backgroundColor = '#4CAF50'; // set default background color on mouseout
  });
}









  


  
  
  