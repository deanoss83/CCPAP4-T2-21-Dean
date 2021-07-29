/* this is to open the nav*/

function openNav() {
  
    let toggler = document.querySelector('.nav-prompt')
    
    let navigation = document.querySelector('.navigation')
    
    toggler.onclick = function () {
      navigation.classList.toggle('open')
      
    }
    
  }
  
  
  openNav()