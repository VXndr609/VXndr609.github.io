function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
let name = cname + "=";
let decodedCookie = decodeURIComponent(document.cookie);
let ca = decodedCookie.split(';');
for(let i = 0; i <ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
  }
}
return "";
}

fetch('dataset.json')
  .then((response) => response.json())
  .then((json) => {
    cardStack = document.getElementById("cardStack");
    for (pred in json['Preds']) {
      console.log(json['Preds'][pred]);
      if (Object.keys(json['Preds'][pred]).includes('Index Text')) {
        cardStack.innerHTML = cardStack.innerHTML + "<div class=\"col\"><div class=\"card shadow-sm\"><img src=\" " + json['Preds'][pred]["Photo Link"] + " \"><div class=\"card-body\"><p class=\"card-text\">" + json['Preds'][pred]['Index Text'] +"</p><div class=\"d-flex justify-content-between align-items-center\"><div class=\"btn-group\"><button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" id=\"L\'Kenna Zumini\" data-bs-toggle=\"modal\" data-bs-target=\"#staticBackdrop\">Contact!</button></div></div></div></div></div>";
      } else {
        cardStack.innerHTML = cardStack.innerHTML + "<div class='col'><div class='card shadow-sm'><img src='" + json['Preds'][pred]["Photo Link"] + "'><div class='card-body'><p class='card-text'>Hi, my name is " + json['Preds'][pred]["Name"] + " and I'm " + json['Preds'][pred]["Age"] + ". I'm a pred from " + json['Preds'][pred]["Lives"] + " and I work as a " + json['Preds'][pred]["Profession"] + " at " + json['Preds'][pred]["Place of Work"] + ". " + json['Preds'][pred]["Index Hook"] + ".</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button type='button' class='btn btn-sm btn-outline-secondary' id='" + json['Preds'][pred]["Name"] + "'data-bs-toggle='modal' data-bs-target='#staticBackdrop'>Contact!</button></div></div></div></div></div>";
      }
    }
    var buttons = document.getElementsByClassName("btn-outline-secondary");
  var checkoutList = [];
    
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    console.log(button.id);
    button.addEventListener("click", function(e) {
        checkoutList.push(e.target.id);
        console.log(e.target.id);
        setCookie("People", JSON.stringify(checkoutList), 2);
    });
  }
  
  document.getElementById("packages").addEventListener("click", function(){
  if (checkoutList.length > 0) {
    window.location.href = "reformationPlan.html";
  }
  })
  
});