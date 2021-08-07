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