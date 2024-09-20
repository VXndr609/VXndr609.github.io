function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
document.getElementById("perm").addEventListener("click", function() {setCookie("ref",JSON.stringify(["Permanant Digestion", "$0", "forever."]));window.location.href = "checkout.html";});
document.getElementById("econ").addEventListener("click", function() {setCookie("ref",JSON.stringify(["Economy Digestion", "$20", "for 3 years."]));window.location.href = "checkout.html";});
document.getElementById("long").addEventListener("click", function() {setCookie("ref",JSON.stringify(["Long Term Digestion", "$60", "for 1 year."]));window.location.href = "checkout.html";});
document.getElementById("short").addEventListener("click", function() {setCookie("ref", JSON.stringify(["Short Term Digestion", "$200", "for a month."]));window.location.href = "checkout.html";});
document.getElementById("quick").addEventListener("click", function() {setCookie("ref", JSON.stringify(["Quick Digestion", "$500", "for a week. She has acid reduction pills if you would like to request them."]));window.location.href = "checkout.html";});
