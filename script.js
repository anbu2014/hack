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
        <tr>
      <td>${arr.tags}</td>
      <td>${arr.id}</td>
      <td>${arr.tags}</td>
      <td>
      <a href="https://cataas.com/cat/${arr.id}" id ="aTag" target="_blank" onclick="myPopup()">click to view</a>
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
                <tr>
              <td>${arr.tags}</td>
              <td>${arr.id}</td>
              <td>${arr.tags}</td>
              <td>
              <a href="https://cataas.com/cat/${arr.id}" id ="aTag" target="_blank" onclick="myPopup()">click to view</a>
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

function myPopup(){
     alert("hi")
}