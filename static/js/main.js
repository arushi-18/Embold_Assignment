//Function to expand and collapse the sidenav
function navClick(){
  //getting button to control
  let openbtn=document.getElementsByClassName("openbtn")[0];
  //toggling button icons 
  if(openbtn.textContent=="\u2630")
    openbtn.textContent="\u2A2F";
  else if(openbtn.textContent=="\u2A2F")
    openbtn.textContent="\u2630";
  //toggling width of sidenav
  let sidebar=document.getElementById("mySidebar");
  let cStyle = getComputedStyle(sidebar);
  let navWidth = cStyle.getPropertyValue("width"); 
  if(navWidth=="80px")
    sidebar.style.width="280px";
  else if(navWidth=="280px")
    sidebar.style.width="80px"
  //toggling span elements visiblility
  let tag=document.getElementsByTagName("span");
  for(let i=1;i<6;i++)
  {
    tag[i].classList.toggle("d-none");
  }
}

function pic_validate(){
  let image=document.getElementById('id_profile_pic');
  let img=image.files[0].size;
  let imgsize=img/1024; 
  if(imgsize<1)
    document.getElementById('user_image').src = window.URL.createObjectURL(image.files[0]);
  else 
  {
    let error=document.getElementById('error_parent');
    error.classList.remove("d-none");
    error.innerHTML=error.innerHTML+"<strong>Max file size is 1KB</strong>";
    document.getElementById('id_profile_pic').value=null;
  }
}

function search(input){
  const filtered = v.user.filter(element => {
     for (const value of Object.values(element)) {
       if (value.toString().toLowerCase().includes(input.value.toLowerCase())) return true;
     }
  })
  let obj=filtered;
  let table=document.querySelector("#userdata tbody");
  table.innerHTML="";
  if(this!=="")
  {
    for(let i=0;i<obj.length;i++)
    {
      let people = "<tr>" + "<td class=\"td1\">" + obj[i].first_name + " " + obj[i].last_name + "</td>" + "<td class=\"td2\">" + obj[i].role + "</td>"+ "<td class=\"ele_pos td3\"><a href=\"#\" class=\"fixed_color\" id=\""+i+"\" onclick=\"populate(this.id)\"><i class=\"fas fa-pen\"></i></a></td>" + "</tr>";
      table.innerHTML=table.innerHTML+people;
    }
  }
  else 
  {
    for(let i=0;i<v.user.length;i++)
    {
      let people = "<tr>" + "<td class=\"td1\">" + v.user[i].first_name + " " + v.user[i].last_name + "</td>" + "<td class=\"td2\">" + v.user[i].role + "</td>"+ "<td class=\"ele_pos td3\"><a href=\"#\" class=\"fixed_color\" id=\""+i+"\" onclick=\"populate(this.id)\"><i class=\"fas fa-pen\"></i></a></td>" + "</tr>";
      table.innerHTML=table.innerHTML+people;
    }
  }
}
function populate(id){
  let form_fields=["username","first_name","role","email","last_name"]
  let field_names=["id_username","id_first_name", "id_role", "id_email","id_last_name"];
  for(let i=0;i<field_names.length;i++)
  {    if(field_names[i]!=="id_" && field_names[i]!==null)
           document.getElementById(field_names[i]).value=v.user[id][form_fields[i]];
  }
  document.getElementById('user_image').src =v.user[id].image;
  document.getElementById('id_notif').checked=true;
}
$(document).ready(function(){
  //To display placeholder on select menu
  let select=document.getElementsByTagName("select")[0][0];
  select.disabled=true;
  select.hidden=true;
  //Fetching data from json file and populating the user list table
  let table=document.querySelector("#userdata tbody");
  for(let i=0;i<v.user.length;i++)
  {
    let people = "<tr>" + "<td class=\"td1\">" + v.user[i].first_name + " " + v.user[i].last_name + "</td>" + "<td class=\"td2\">" + v.user[i].role + "</td>"+ "<td class=\"ele_pos td3\"><a href=\"#\" class=\"fixed_color\" id=\""+i+"\" onclick=\"populate(this.id)\"><i class=\"fas fa-pen\"></i></a></td>" + "</tr>";
    table.innerHTML=table.innerHTML+people;
  }
  /*let space=document.getElementsByClassName("outer")[0];
  let cStyle = getComputedStyle(space);
  let sHeight = cStyle.getPropertyValue("height"); 
  if(sHeight>"306px")
  {
    space.classList.remove("pr-4");
  }*/
});