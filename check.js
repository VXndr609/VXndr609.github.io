
element = '<li class="list-group-item d-flex justify-content-between lh-sm"><div><h6 class="my-0">Third item</h6><small class="text-muted">Brief description</small></div><span class="text-muted">$5</span></li>'

function addItem(name, price) {
    toAdd = '<li class="list-group-item d-flex justify-content-between lh-sm"><div><h6 class="my-0">' + name + '</h6></div><span class="text-muted">' + price + '</span></li>';
    document.getElementById("cart").innerHTML = toAdd + document.getElementById("cart").innerHTML;
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

if (getCookie("ref") == '') {
    addItem("Permanant Digestion", "$0");
} else {
    items = JSON.parse(getCookie("ref"));
    addItem(items[0], items[1]);
}

document.getElementById('redeem').addEventListener("click", function() {
    console.log("Redeem: ");
    console.log(document.getElementById("redeemCode").value);
    if (document.getElementById("redeemCode").value == "FSFA") {
        toAdd = '<li class="list-group-item d-flex justify-content-between bg-light"><div class="text-success"><h6 class="my-0">Promo code</h6><small>FASFA</small></div><span class="text-success">−$20</span></li>'
        document.getElementById("cart").innerHTML = toAdd + document.getElementById("cart").innerHTML;
    } else {
        toAdd = '<li class="list-group-item d-flex justify-content-between bg-light"><div class="text-success"><h6 class="my-0">Promo code</h6><small>' + document.getElementById("redeemCode").value + '</small></div><span class="text-success">−$0</span></li>'
        document.getElementById("cart").innerHTML = toAdd + document.getElementById("cart").innerHTML;
    }
});
