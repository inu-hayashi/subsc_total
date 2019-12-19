// console.log(document.subscription.length);
function total(){
  yen = 0;
  for(i=0;i<document.subscription.length-1;i++){
    if(document.subscription.elements[i].checked){
      yen += eval(document.subscription.elements[i].value);
    }
  }
  document.subscription._total.value = yen;
}
