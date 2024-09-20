var timeTicsRemaining = 24;
var timeTicLength = [1500, 3000];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
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
    document.getElementById("message1").textContent = JSON.parse(getCookie("People")).slice(-1)[0] + "is on the way to eat you! Get ready to be part of her " + JSON.parse(getCookie("ref"))[2];

    var realTime = 0;

    realTime = realTime + getRandomInt(timeTicLength[0], timeTicLength[1]);
    setTimeout(function() {
        document.getElementById("quickTip").textContent = "Quick Tip: You should be nice and clean if you want your pred to be nice.";
        document.getElementById("timeRemaining").textContent = "20 Minutes";
    }, realTime);
    realTime = realTime + getRandomInt(timeTicLength[0], timeTicLength[1]);
    setTimeout(function() {
        document.getElementById("quickTip").textContent = "Quick Tip: You should probably use the bathroom before you're eaten!";
        document.getElementById("timeRemaining").textContent = "15 Minutes";
    }, realTime);
    realTime = realTime + getRandomInt(timeTicLength[0], timeTicLength[1]);
    setTimeout(function() {
        document.getElementById("quickTip").textContent = "Quick Tip: Don't forget to tell people where you're going.";
        document.getElementById("timeRemaining").textContent = "10 Minutes";
    }, realTime);
    realTime = realTime + getRandomInt(timeTicLength[0], timeTicLength[1]);
    setTimeout(function() {
        document.getElementById("quickTip").textContent = "Quick Tip: Take your valubles and put them in a safe place. Do not have anything you don't want digested.";
        document.getElementById("timeRemaining").textContent = "5 Minutes";
    }, realTime);
    realTime = realTime + getRandomInt(timeTicLength[0], timeTicLength[1]);
    setTimeout(function() {
        document.getElementById("quickTip").textContent = "Quick Tip: Take all your clothes off!";
        document.getElementById("timeRemaining").textContent = "1 Minute";
    }, realTime);
    for (pred in json["Preds"]) {
      if (json["Preds"][pred]['Name'] == JSON.parse(getCookie("People")).slice(-1)[0]) {
        if (Object.keys(json["Preds"][pred]).includes("Journey")) {
          realTime = realTime + getRandomInt(timeTicLength[0], timeTicLength[1]);
          setTimeout(function() {
              document.getElementById("quickTip").textContent = "Your pred is here please answer the door!";
              document.getElementById("timeRemaining").textContent = "0 Minutes";
              document.getElementById("buttonLocation").innerHTML = '<a href="door.html" class="btn btn-primary">Answer the Door</a>';
          }, realTime);
        } else {
          realTime = realTime + getRandomInt(timeTicLength[0], timeTicLength[1]);
          setTimeout(function() {
              document.getElementById("quickTip").textContent = "Your pred is here please answer the door!";
              document.getElementById("timeRemaining").textContent = "0 Minutes";
              document.getElementById("buttonLocation").innerHTML = '<a class="btn btn-primary disabled">Answer the Door (Locked)</a>';
          }, realTime);
        }
      }
    }
});