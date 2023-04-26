(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-BOFSTKFNWCGO-2");


function validateButton() {
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["password"].value;
    if (x === "" || x === null) {
        alert("Invalid User! " + "Try name@gmail.com in Username");
        return false;
    } else if(x ==='ssasi@gainsight.com' || x==='name@gmail.com' || x==='xyz@gmail.com'){
        alert("Valid User!");
        location.href="page1.html";

    }else if (y === "" || y === null) {
        alert("Enter Valid Password");
        return false;
    }
    else{
        alert("Invalid User! " + "Try name@gmail.com in Username");
    }
}


function forPage1(){
    alert("Hurry!! Added to Cart :)");
}

function contactSubmit(){
    alert("Thank you for your interest. Details Saved Successfully!");
    location.href="page1.html";
}