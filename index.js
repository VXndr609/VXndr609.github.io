const inputGroupFile01 = document.getElementById("inputGroupFile01");
const preview = document.getElementById("imageGoesHere");
const captSelect = document.getElementById("exampleSelect");
const prettyCard = document.getElementById("prettyCard");
const defaultCard = document.getElementById("defaultCard");
const newsCard = document.getElementById("newsCard");
const customPretty = document.getElementById("customPretty");
const customDefault = document.getElementById("customDefault");
const customNews = document.getElementById("customNews");
const title = document.getElementById("floatingTitle");
const titlerarXD = document.getElementById("rarXD");
const caption = document.getElementById("floatingPassword");
const defaultCTA1 = document.getElementById("floatingCTA1");
const defaultCTA2 = document.getElementById("floatingCTA2");
const newsSect = document.getElementById("floatingNewsSec");
const newsColor = document.getElementById("myColor");
const newsDate = document.getElementById("floatingNewsDate");
const newsDateOut = document.getElementById("newsDateOut");
const newsSectionOut = document.getElementById("myColorEffected");
const prettyLocation = document.getElementById("prettyLocation");
const prettyTime = document.getElementById("prettyTime");
const prettyTimeVal = document.getElementById("prettyDateVal");
const prettyLocVal = document.getElementById("prettyLocVal");
const badgePredDisplay = document.getElementById("badgePred");
const badgePredCheckbox = document.getElementById("badgePredCheckbox");
const badgePreyDisplay = document.getElementById("badgePrey");
const badgePreyCheckbox = document.getElementById("badgePreyCheckbox");
const badgeOralDisplay = document.getElementById("badgeOral");
const badgeOralCheckbox = document.getElementById("badgeOralCheckbox");
const badgePermDisplay = document.getElementById("badgePerm");
const badgePermCheckbox = document.getElementById("badgePermCheckbox");
const badgeMultDisplay = document.getElementById("badgeMult");
const badgeMultCheckbox = document.getElementById("badgeMultCheckbox");
const badgeSoloDisplay = document.getElementById("badgeSolo");
const badgeSoloCheckbox = document.getElementById("badgeSoloCheckbox");
const badgeSoftDisplay = document.getElementById("badgeSoft");
const badgeSoftCheckbox = document.getElementById("badgeSoftCheckbox");
const badgeButtDisplay = document.getElementById("badgeButt");
const badgeButtCheckbox = document.getElementById("badgeButtCheckbox");
let captionStyle = 0;

badgePredCheckbox.addEventListener("change", function() {
    if (badgePredCheckbox.checked) {
        badgePredDisplay.style.display = "block";
    } else {
        badgePredDisplay.style.display = "none";
    }
});
badgePreyCheckbox.addEventListener("change", function() {
    if (badgePreyCheckbox.checked) {
        badgePreyDisplay.style.display = "block";
    } else {
        badgePreyDisplay.style.display = "none";
    }
});
badgeOralCheckbox.addEventListener("change", function() {
    if (badgeOralCheckbox.checked) {
        badgeOralDisplay.style.display = "block";
    } else {
        badgeOralDisplay.style.display = "none";
    }
});
badgePermCheckbox.addEventListener("change", function() {
    if (badgePermCheckbox.checked) {
        badgePermDisplay.style.display = "block";
    } else {
        badgePermDisplay.style.display = "none";
    }
});
badgeMultCheckbox.addEventListener("change", function() {
    if (badgeMultCheckbox.checked) {
        badgeMultDisplay.style.display = "block";
    } else {
        badgeMultDisplay.style.display = "none";
    }
});
badgeSoloCheckbox.addEventListener("change", function() {
    if (badgeSoloCheckbox.checked) {
        badgeSoloDisplay.style.display = "block";
    } else {
        badgeSoloDisplay.style.display = "none";
    }
});
badgeSoftCheckbox.addEventListener("change", function() {
    if (badgeSoftCheckbox.checked) {
        badgeSoftDisplay.style.display = "block";
    } else {
        badgeSoftDisplay.style.display = "none";
    }
});
badgeButtCheckbox.addEventListener("change", function() {
    if (badgeButtCheckbox.checked) {
        badgeButtDisplay.style.display = "block";
    } else {
        badgeButtDisplay.style.display = "none";
    }
});

prettyTimeVal.addEventListener("change", function() {
    prettyTime.innerText = prettyTimeVal.value;
});
prettyLocVal.addEventListener("change", function() {
    prettyLocation.innerText = prettyLocVal.value;
});

newsColor.addEventListener("focusout", function() {
    console.log("RAR");
    newsSectionOut.style.color = newsColor.value;
});
newsSect.addEventListener("change", function() {
    newsSectionOut.textContent = newsSect.value;
});
newsDate.addEventListener("change", function() {
    newsDateOut.textContent = newsDate.value;
});

document.getElementById('inputGroupFile01').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;
    
    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            let elements = document.getElementsByClassName("THISNEEDSANIMAGE");
            for (let i=0; i < elements.length;i++) {
                elements[i].src = fr.result;
            }
        }
        fr.readAsDataURL(files[0]);
    }
    else {
        alert("An error occurred. Womp womp");
    }
}

defaultCTA1.addEventListener("change", function(){
    document.getElementById("THISISACTA1").textContent = defaultCTA1.value;
});
defaultCTA2.addEventListener("change", function(){
    document.getElementById("THISISACTA2").textContent = defaultCTA2.value;
});

document.getElementById("downloadContent").addEventListener("click", function() {
    html2canvas(document.querySelector("#capture"), {
        windowWidth: document.querySelector("#capture").scrollWidth,
        windowHeight: document.querySelector("#capture").scrollHeight,
        width: document.querySelector("#capture").width,
        height: document.querySelector("#capture").height,
        scale: window.devicePixelRatio
    }).then(canvas => {
        // document.body.appendChild(canvas);
        let link = document.createElement("a");
        link.href = structuredClone(canvas.toDataURL("image/png"));
        link.download = document.getElementById("floatingInput").value;
        link.click();
    });
});

title.addEventListener("change", function() {
    let elements = document.getElementsByClassName("THISISATITLE");
    for (let i=0; i < elements.length;i++) {
        elements[i].textContent = title.value;
    }
});

caption.addEventListener("change", function() {
    let elements = document.getElementsByClassName("THISISACAPTION");
    for (let i=0; i < elements.length;i++) {
        elements[i].textContent = caption.value;
    }
});

captSelect.addEventListener("change", function() {
    if (captSelect.value == "0") { // Default
        captionStyle = 0;
        prettyCard.style.display = "none";
        defaultCard.style.display = "block";
        newsCard.style.display = "none";

        customPretty.style.display = "none";
        customDefault.style.display = "block";
        customNews.style.display = "none";

        titlerarXD.style.display = "block";
    } else if (captSelect.value == "1") { // Pretty
        captionStyle = 1;
        prettyCard.style.display = "block";
        defaultCard.style.display = "none";
        newsCard.style.display = "none";

        customPretty.style.display = "block";
        customDefault.style.display = "none";
        customNews.style.display = "none";

        titlerarXD.style.display = "none";
    } else if (captSelect.value == "2") { // News Article
        captionStyle = 2;
        prettyCard.style.display = "none";
        defaultCard.style.display = "none";
        newsCard.style.display = "block"
        
        customPretty.style.display = "none";
        customDefault.style.display = "none";
        customNews.style.display = "block";

        titlerarXD.style.display = "block";
    }
});

document.getElementById("dropZone").addEventListener("drop", function(event) {
    event.preventDefault();
    console.log("Dawg");
    document.getElementById("outPic").src = URL.createObjectURL(event.dataTransfer.files[0]);
});
