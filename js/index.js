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
  
  document.getElementById("date").innerHTML = myDate;
  
  
  
  