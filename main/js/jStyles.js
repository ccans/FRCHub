
window.onload = startup();

function startup() {
  $(".load-container").hide();
}

$(document).ready(function() {
  // $(".title-container").hide();
  $(".title-container").animate({opacity:1}, 1000);
  setTimeout(function () {
    $(".subheading-container").animate({opacity:1}, 1000);
      setTimeout(function () {
      $(".section-1").animate({opacity:1}, 1000);
      $(".subbtn-container").animate({opacity:1}, 3000);

      }, 500);
  }, 1000);

});

function checkFilled() {
   if($('.input-3').val().length > 0) {
     var teamEntered = teamNameArray[teamNumberArray.indexOf(parseInt($('.input-3').val()))];
     if(teamEntered == undefined) {
        document.getElementById("adj-button").value = "That's not a team >:(";
        $("#adj-button").addClass("expanded");
     } else {
       document.getElementById("adj-button").value="My team is " + teamEntered;
       $("#adj-button").addClass("expanded");
    }
   } else {
     document.getElementById("adj-button").value="Skip";
     $("#adj-button").removeClass("expanded");
   }
}

var teamNameArray =[];
var teamNumberArray =[];
// ONLY SUPPORTS 9k FRC teams

for(p=0; p < 30; p++) {


var teamNameRequest = new XMLHttpRequest();
teamNameRequest.open("GET", "https://www.thebluealliance.com/api/v3/teams/" + p + "/simple", true);
teamNameRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
teamNameRequest.send();

teamNameRequest.onload = function() {
  if (this.readyState == 4 && this.status == 200){
      var teamNameRequestObj = JSON.parse(this.responseText);
      var i;
      if(teamNameRequestObj.length < 1) {
      } else {
      for (i = 0; i < teamNameRequestObj.length; i++) {
          teamNameArray.push(teamNameRequestObj[i].nickname);
          teamNumberArray.push(teamNameRequestObj[i].team_number);
        }
      }
  }
  }



}






$(document).ready(function() {
  var inputs = $("input");

  inputs.on("focus", function() {
    var inp_val = $(this).val();

    $(this)
      .parent()
      .addClass("filled");
  });

  inputs.on("blur", function() {
    var inp_val = $(this).val();

    if (inp_val == "") {
      $(this)
        .parent()
        .removeClass("filled");
    }
  });
});