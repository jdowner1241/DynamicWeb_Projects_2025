
 /*

   const pa = 
   document.getElementsByTagName('p');

   var list = document.getElementsByTagName("p");

var count=list.lenght;
const pElement = document.querySelector('p');
for(i=0;i<list.length;i++){
   if(i==0){

   }
   else{
    const temp = pa[i];
            let val = 'pid'+i;
            temp.setAttribute('id', val);
           // alert('ID Added successfully!');


               // alert(i);


   const hoverParagraph = document.getElementById("pid"+i);


   hoverParagraph.addEventListener("mouseover", () => {
    //  alert('asdasdsad');
      hoverParagraph.classList.add("hovered");
});



hoverParagraph.addEventListener("mouseleave", () => {
    hoverParagraph.classList.remove("hovered");
 });

   }
  
        
  


}

*/
   
let showP="";
const pa = 
document.querySelector('p'); 


pa.addEventListener("mouseover", () => {
    //  alert('asdasdsad');
      pa.classList.add("hovered");
});

let items=document.querySelectorAll("p");

//console.log(x);

//[0].childNodes[0].textContent
items.forEach((item, index)=>{ 
   
    item.addEventListener("mouseover", () => {
        //  alert('asdasdsad');
          item.classList.add("hovered");
    });
    // display.innerHTML= items[index];
   //console.log(item["innerText"]);
   showP=item["innerText"];
   console.log(showP);

    });