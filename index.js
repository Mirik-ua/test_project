function Func () {
  var menu = document.querySelector('.drop_wrapper');
  if(menu.style.display === 'none'){
    menu.style.display = 'grid';
  }else{
    menu.style.display = 'none' ;
  }
}
