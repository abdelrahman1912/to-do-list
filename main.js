document.querySelector('#formy').addEventListener('submit',function(event){

var works=document.querySelector('#works').value;
var mylist=document.querySelector('#mylist');
var listy=document.createElement('li');
if(works==""){
  alert('enter value');
  event.preventDefault();

}
else{

  listy.innerHTML=works;
  mylist.append(listy);
  document.querySelector('#works').value="";
  event.preventDefault();
}

})