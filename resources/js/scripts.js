/* this is to open the nav*/

function openNav() {
  
    let toggler = document.querySelector('.nav-prompt')
    
    let navigation = document.querySelector('.main-nav')
    
    toggler.onclick = function () {
      navigation.classList.toggle('open')
      
    }
    
  }
  
  
  openNav()


  /*this is for the lightbox gallery*/

  var lightbox = new SimpleLightbox('.gallery a', { /* options */ });



  /* Video pop up */


  $( document ).ready(function() {
    $('#headerVideoLink').magnificPopup({
     type:'inline',
     midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
   });
     
   });
