/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  function openTab(evt, tab) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("content__inner");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tab");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(tab).style.display = "block";
      evt.currentTarget.className += " active";
  }

//   $('#productList').on('click', function () {
//     $('#productView').attr('class', 'product-list');
//   });
  
//   $('#productGrid').on('click', function () {
//     $('#productView').attr('class', 'product-grid');
//   });

//   document.getElementById("productList").addEventListener('click', (e) => {
//     document.getElementById("productView").attr('class', 'product-list');
//   });
  
//   document.getElementById("productGrid").addEventListener('click', (e) => {
//     document.getElementById("productView").attr('class', 'product-grid');
//   });


  
  // Table data
  var data = [
    {id : 1,  name : " Static Website Design Layout", price : 100, Image : './backmockup.png'},
    {id : 2, name : " CMS Website Design Layout", price : 150,},
    {id : 3, name : " Domain Name Registration (Yearly)",  price :100,},
    {id : 4, name : " Website Hosting (Yearly)", price : 500,},
    {id : 5, name : " SEO Search Engine Optimization", price : 100,},
    {id : 6, name : " Social Media Creation", price : 100,},
    {id : 7, name : " Email Services", price : 100,},
    {id : 8, name : " Support (FREE for 3 months)", price : 150,}

];

// Total price 
let sum = 0;

for(let i = 0; i < data.length; i++){
    sum += data[i].price
    }

// Table for pricing 
var k = '<tbody>'


for(i = 0;i < data.length; i++){
    k+= '<tr>';
    k+= '<td>' + data[i].id + '. ' + data[i].name + data[i].Image + '</td>';
    k+= '<td>' + data[i].price + '</td>';
    k+= '</tr>';
}
k+='</tbody>';



document.getElementById('tableData').innerHTML = k;
document.getElementById('total').innerHTML = sum;

  
  //Horizontal scroll for the tabs on mousewheel. If tabs are longer than the content section, there's a scroll bar but it's hidden to retain the design.
  if (window.innerWidth > 800) {
      const scrollContainer = document.querySelector(".tabs");
  
      scrollContainer.addEventListener("wheel", (evt) => {
          evt.preventDefault();
          scrollContainer.scrollLeft += evt.deltaY;
      });
  }


  
  
  
  // function formatDate(dateObject){
  // 	const parts = {
  // 		date: dateObject.getDate(),
  // 		date: dateObject.getMonth() + 1,
  // 		date: dateObject.getFullYear(), 
  // 		date: (dateObject.getHours() % 12) || 12,
  // 		date: dateObject.getMinutes().toString().padStart(2, "0"),
  // 		date: dateObject.getHours() < 12 ? "AM" : "PM"
  // 	};
  // 	console.log(parts);
  // }
  const myDate = new Date();
  console.log(myDate);
  // const myDateFormatted = formatDate(myDate);
  
  document.getElementsByClassName("candy").innerHTML = myDate;


  
  
  