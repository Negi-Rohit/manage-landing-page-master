function dropdown(obj , linksShow){
    if (linksShow === 'show'){
    document.querySelector(".nav-items").classList.toggle("dropdown-links-show");
    document.querySelector(".hamburger-icon").style.display="none";
    document.querySelector(".close-icon").style.display="inline";
  }
  else
  if (linksShow === 'close'){
    document.querySelector(".nav-items").classList.toggle("dropdown-links-show");
    document.querySelector(".hamburger-icon").style.display="inline";
    document.querySelector(".close-icon").style.display="none";
  }
  }
  