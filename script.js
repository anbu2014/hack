let main_URL = "https://cataas.com/api/cats";
let json_arry=[];
( async()=>
{
    try
    {
          const responce = await fetch(main_URL);
          const data = await responce.json();
          for(let cat in data)
          {
            json_arry.push(data[cat])
          }

    }
    catch(err)
    {
       
    }  

})();

let table_head = document.getElementById("table_head");
let err_msg = document.getElementById("err_msg");

function tableHead(){
     table=`<tr>
     <th scope="col">sno</th>
     <th scope="col">ID</th>
     <th scope="col">Tag name</th>
     <th scope="col">view</th>
   </tr>`
   table_head.innerHTML=table;
}

let all_cat_list = document.getElementById("all_cat_list")
all_cat_list.addEventListener("click",()=>{
    displayDetails(json_arry)
})

let displayDetails =(json_arry)=>{
    let table_body = document.getElementById("table_body")
    let tablerow=""
    tableHead();
    for(let arr of json_arry){
        tablerow +=`
        <tr value="${arr.id}" class="img_2">
        <td>${arr.tags}</td>
        <td >${arr.id}</td>
        <td>${arr.tags}</td>
        <td>
        <button id="myBtn" onclick=popup(this)>Open Modal</button>
        <img src="https://cataas.com/cat/${arr.id}"> 
        
        </td>
      </tr> 
     
       
          `;
        table_body.innerHTML=tablerow
    }
}

let search_txt_Box = document.getElementById("search_Box")
let search = document.getElementById("search")
search.addEventListener("click" , ()=>{
       let enteredValue = search_txt_Box.value;
       let table_body = document.getElementById("table_body")
    let tablerow=""
    tableHead();
    if(enteredValue!=""){
       for(let arr of json_arry){
           for(let filter of arr.tags){
               if(filter==enteredValue){
                tablerow +=`
                <tr value="${arr.id}" class="img_2">
              <td>${arr.tags}</td>
              <td >${arr.id}</td>
              <td>${arr.tags}</td>
              <td>
              <button id="myBtn" onclick=popup(this)>Open Modal</button>
              <img src="https://cataas.com/cat/${arr.id}"> 
              
              </td>
            </tr> 
           
             
                `;
                table_body.innerHTML=tablerow
            }

               }
           }
        } 
       
})




var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal


var model_content = document.getElementById("res")

// When the user clicks the button, open the modal 
function popup(r) {
  var i = r.parentNode.parentNode.rowIndex;
 let ans= document.getElementsByClassName("img_2")[i-1].getAttribute("value")
  //console.log(ans)
  var a = `   <span class="close" id ="span">
  &times;</span>
  <img src="https://cataas.com/cat/${ans}" style="width: 300px;height: 300px;">;`
  
  model_content.innerHTML= a;
  modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
let span = document.getElementById("span")
 span.onclick=()=>{
  modal.style.display = "none";
 }
 
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
