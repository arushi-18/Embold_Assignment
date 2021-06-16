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
  if(navWidth=="65px")
    sidebar.style.width="250px";
  else if(navWidth=="250px")
    sidebar.style.width="65px"
  //toggling span elements visiblility
  let tag=document.getElementsByTagName("span");
  for(let i=1;i<6;i++)
  {
    tag[i].classList.toggle("d-none");
  }
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
    let people = "<tr>" + "<td>" + v.user[i].first_name + " " + v.user[i].last_name + "</td>" + "<td>" + v.user[i].role + "</td>"+ "<td class=\"ele_pos\"><a href=\"#\" class=\"fixed_color\"><i class=\"fas fa-pen\"></i></a></td>" + "</tr>";
    table.innerHTML=table.innerHTML+people;
  }
  
});