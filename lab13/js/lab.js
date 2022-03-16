/**
 * Author:    Leonardo Sanchez
 * Created:   2.09.2022
 *
 * (c) Copyright by Blub Corp.
 **/

for(let i=0;i<$("rainbow-toggle").length;i++) {
  $(".ranbow-toggle").eg(i).click(function () {
    $(".rainbow-toggle").eq(i).parent().toggleClass("rainbow-text");
  });
}

// Changed the color of the buttons
function updateButtonColor() {
  let color = $("body").css("background-color");
  $(".rainbow-toggle").css("background-color", color);
  return;
};
setInterval(updateButtonColor, 40);
