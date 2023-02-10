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
// function onlyNumberKey(evt) {
          
//   // Only ASCII character in that range allowed
//   var ASCIICode = (evt.which) ? evt.which : evt.keyCode
//   if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
//       return false;
//   return true;}

//   function detailssubmit() {
//     alert("Your details were Submitted");
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const firstname = form.elements.firstname.value.trim();
//   const lastname = form.elements.lastname.value.trim();
//   const email = form.elements.email.value.trim();
//   const phone = form.elements.tel.value.trim();
//   if (!firstname || !lastname || !email || !phone) {
//     alert("Please fill out all fields");
//   } else {
//     form.submit();
//   }
// });