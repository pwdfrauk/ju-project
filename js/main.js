/*mobile menu sliding menu  */
var mobileNav = document.getElementById('mobilenav');
function openNav() {
  if(mobileNav.style.display==="block") {
    mobileNav.style.display="none";
  } else {
     mobileNav.style.display="block";
  }
  console.log('openNave is clicking')
};

function clossNav() {
  mobileNav.style.display = "none";
};

/* desktop dropdown menu  */
var desktopDropdown1 = document.getElementsByClassName('navbarDropdown1');
  function desktopDropdownOne() {
    if (desktopDropdown1[0].style.display === "block") {
      desktopDropdown1[0].style.display = "none";
    } else {
      desktopDropdown1[0].style.display = "block";
      desktopDropdown2[0].style.display = "none";
    }
  }
  var desktopDropdown2 = document.getElementsByClassName('navbarDropdown2');
  function desktopDropdownTwo() {
    if (desktopDropdown2[0].style.display === "block") {
     desktopDropdown2[0].style.display = "none";
    } else {
      desktopDropdown2[0].style.display = "block";
    }
  }
/*mobile drop dwon menu */
var mobileDropdownMenu = document.getElementsByClassName("mobile-drop-down-menu");

  function mobileMenuDropDown() {
    if (mobileDropdownMenu[0].style.display === "block") {
      mobileDropdownMenu[0].style.display = "none";
    } else {
      mobileDropdownMenu[0].style.display = "block";
    }
  }



//Aleart message 
var alertsuccess = document.getElementsByClassName('alert-success');
var alertwarning = document.getElementsByClassName('alert-warning');

      // add this:   onclick="alertSuccessClose()" inside boostrap Alert-Success button for 
      //close  the Success Alert message   
      function alertSuccessClose() {
       alertsuccess[0].style.display = 'none';
    }
    // add this:   onclick="alertwarningClose()" inside boostrap alert-warning button for 
    //close  the Warning Alert message  
    function alertwarningClose() {
       alertwarning[0].style.display = 'none';
    }





// Accordion js 
var accrodionBody = document.getElementsByClassName("pannel");
var buttonIcon = document.getElementsByClassName("Accordion-icon");
var accrodionBody2 = document.getElementsByClassName("pannel2");
var buttonIcon2 = document.getElementsByClassName("accordion-icon2");
var accrodionBody3 = document.getElementsByClassName("pannel3");
var buttonIcon3 = document.getElementsByClassName("accordion-icon3");
var alertBox = document.getElementsByClassName('alert-container')

  function accordionFun() {
  if(accrodionBody[0].style.display === "none") {
     accrodionBody[0].style.display = "flex";
     accrodionBody[0].style.transition = ".5s"
     } else {
    accrodionBody[0].style.display ="none";
   }
  }
  function accordionBtnIcon() {
  if (buttonIcon[0].style.transform === "rotate(180deg)") {
      buttonIcon[0].style.transform = "rotate(0deg)";
    } else {
    buttonIcon[0].style.transform = "rotate(180deg)";
    }
  }

   function accordionFun2() {
  if(accrodionBody2[0].style.display === "flex") {
    accrodionBody2[0].style.display = "none";
     } else {
    accrodionBody2[0].style.display ="flex";
   }
  }
    function accordionBtnIcon2() {
  if (buttonIcon2[0].style.transform === "rotate(180deg)") {
      buttonIcon2[0].style.transform = "rotate(0deg)";
    } else {
    buttonIcon2[0].style.transform = "rotate(180deg)";
    }
  }
  function accordionFun3() {
        if(accrodionBody3[0].style.display === "flex") {
          accrodionBody3[0].style.display = "none";
           } else {
          accrodionBody3[0].style.display ="flex";
         }
        }
          function accordionBtnIcon3() {
        if (buttonIcon3[0].style.transform === "rotate(180deg)") {
           buttonIcon3[0].style.transform = "rotate(0deg)";
          } else {
          buttonIcon3[0].style.transform = "rotate(180deg)";
          }
        }


/* modal pop up for payment method  */
var modals = document.querySelectorAll('[data-modal]');
modals.forEach(function(trigger) {
  trigger.addEventListener('click', function(event) {
    event.preventDefault();
    var modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    var exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function(exit) {
      exit.addEventListener('click', function(event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});