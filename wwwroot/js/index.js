$(document).ready(function () {
    var i = 0;
    var j = "ghsdjkhsd";
    console.log("welcome");

    var form = $("#TheForm");
    form.hide();

    var button = $("#buy");
    button.on("click", function () {
        console.log("Buying Items");
    });
    button.hide();

    var productInfo = $(".ProductProp li");
    productInfo.on("click", function () {
        console.log("you clicked on" + $(this).text())
    })
    var $toggleLogin = $("#LoginToggle");
   
    var $popupForm = $(".PopupForm");
    $toggleLogin.on("click", function () {
        $popupForm.toggle(1000);
    })
    $toggleLogin.hide();
    $popupForm.hide();

}
)
