

/*ЛУПА*/
function toggleSearchInput() {
  var searchInput = document.getElementById("searchInput");
  searchInput.style.display = (searchInput.style.display === 'none' || searchInput.style.display === '') ? 'block' : 'none';
  searchInput.focus();
}




/*ПОИСК*/
 const searchInput = document.querySelector("#search");
 const divs = document.querySelectorAll (".room");
 
 searchInput.addEventListener ("keyup",function(event){
     const word = event.target.value.toLowerCase ();
     divs.forEach(item => {
         item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
     })
 })

 /* Плюсики*/
 /* Plus signs */
 function toggleContent(contentId, position) {
  var content = document.getElementById(contentId);

  // Toggle the content display
  content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";

  if (content.style.display === "block") {
      // If content is displayed, hide other contents
      hideOtherContents(contentId);
  }

  // Set z-index to cover plus sign
  document.querySelectorAll('.plus-sign').forEach(function (plusSign) {
      plusSign.style.zIndex = (plusSign.id === position && content.style.display === "block") ? "0" : "2";
  });
}

// Function to hide the content when clicking on the picture
function hideContent(contentId, plusSignId) {
  var content = document.getElementById(contentId);

  // Hide the content
  content.style.display = "none";

  // Set z-index to show plus sign
  document.getElementById(plusSignId).style.zIndex = "2";
}

// Function to hide other contents when one is displayed
function hideOtherContents(currentContentId) {
  document.querySelectorAll('.content').forEach(function (content) {
      if (content.id !== currentContentId && content.style.display === "block") {
          content.style.display = "none";
      }
  });
}