
$(function () {


    /*
     * International Telephone Input v16.0.0
     * https://github.com/jackocnr/intl-tel-input.git
     * Licensed under the MIT license
    */
    var input = document.querySelectorAll("input[name=leyka_donor_phone]");
    var iti_el = $('.iti.iti--allow-dropdown.iti--separate-dial-code');
    if(iti_el.length){
        iti.destroy();
        
        // Get the current number in the given format

        

    }
   for(var i = 0; i < input.length; i++){
        iti = intlTelInput(input[i], {
            autoHideDialCode: false,
            autoPlaceholder: "aggressive" ,
            initialCountry: "auto",
            separateDialCode: true,
            preferredCountries: ['ru','th'],
            customPlaceholder:function(selectedCountryPlaceholder,selectedCountryData){
                return ''+selectedCountryPlaceholder.replace(/[0-9]/g,'X');
            },
            geoIpLookup: function(callback) {
                $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                  var countryCode = (resp && resp.country) ? resp.country : "";
                  callback(countryCode);
              });
            },
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js" // just for 
    });

       
    $('input[name="leyka_donor_phone"]').on("focus click countrychange", function(e, countryData) {

        var pl = $(this).attr('placeholder') + '';
        var res = pl.replace( /X/g ,'9');
        if(res != 'undefined'){
            $(this).inputmask(res, {placeholder: "X", clearMaskOnLostFocus: true});
        }
        
        


    });
       
       $('input[name="leyka_donor_phone"]').on("focusout", function(e, countryData) {
           var intlNumber = iti.getNumber();
           console.log(intlNumber);   
       });
       
}


})






// $("#basic").flagStrap();

// $(".select-country").flagStrap({
// 	countries: {
// 		US: "USD",
// 		AU: "AUD",
// 		CA: "CAD",
// 		SG: "SGD",
// 		GB: "GBP"
// 	},
// 	buttonSize: "btn-sm",
// 	buttonType: "btn-info",
// 	labelMargin: "10px",
// 	scrollable: false,
// 	scrollableHeight: "350px"
// });

// $("#advanced").flagStrap({
// 	buttonSize: "btn-lg",
// 	buttonType: "btn-primary",
// 	labelMargin: "20px",
// 	scrollable: false,
// 	scrollableHeight: "350px"
// });

$("#country_selector").countrySelect({
    // defaultCountry: "jp",
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // responsiveDropdown: true,
    preferredCountries: ['ca', 'gb', 'us']
});



































function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



var counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 4){
counter = 1;
}
}, 2000);

window.onload = function() {
    function dateTime() {
        var date = new Date();
        document.getElementById("clock").innerText = date.toLocaleTimeString();
    };
    setInterval(dateTime, 1000);
};




var a = new Date();
var addressArray = new Array();
addressArray[0] = "0333-333333";
addressArray[1] = "0332-333333";
addressArray[2] = "0331-333333";
addressArray[3] = "0333-222222";
for(a = 0; a <= 3; a++) {
    var optn = document.createElement("OPTION");
    optn.text = addressArray[a];
    // server side month start from one
    optn.value = (a+1);

    // if june selected
    if ( a == 5) {
        optn.selected = true;
    }

    document.getElementById('address').options.add(optn);
}





// slider //


function supernova_slider() {
    let nextBtn = document.querySelector(".gallery .buttons .next"),
        prevBtn = document.querySelector(".gallery .buttons .prev"),
        slide = document.querySelectorAll(".gallery .photos .block"),
        i = 0;

    prevBtn.onclick = (event) => {
        event.preventDefault();

        slide[i].classList.remove("active");
        i--;

        if (i < 0) {
            i = slide.length - 1;
        }
        slide[i].classList.add("active");
    };

    nextBtn.onclick = (event) => {
        event.preventDefault();

        slide[i].classList.remove("active");
        i++;

        if (i >= slide.length) {
            i = 0;
        }

        slide[i].classList.add("active");
    };

    slider_callback();
    let sliderInterval = window.setInterval(slider_callback, 3000);

    function slider_callback() {
        nextBtn.click();
    }
}

supernova_slider();


// email validation 

function validation()
{
    var form = document.getElementById("form"); 
    var email = document.getElementById("email").value; 
    var text = document.getElementById("text"); 
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid.";
        text.style.color = "#828282";
    }
    else
    {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "Enter Valid Email Address";
        text.style.color = "#828282";
    }
    if(email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#828282";
    }
}

// time clock






// phone input


// accordian

const accordion = document.getElementsByClassName('contentBx');
for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

//   clock


var tp = {
    // (A) INIT - GENERATE TIME PICKER HTML
    hwrap : null, // entire html time picker
    hhr : null,   // html hour value
    hmin : null,  // html min value
    hap : null,   // html am/pm value
    init : () => {
      // (A1) ADD TIME PICKER TO BODY
      tp.hwrap = document.createElement("div");
      tp.hwrap.id = "tp-wrap";
      document.body.appendChild(tp.hwrap);
  
      // (A2) TIME PICKER INNER HTML
      tp.hwrap.innerHTML =
      `<div id="tp-box">
        <div class="tp-cell" id="tp-hr">
          <div class="tp-up">&#65087;</div> <div class="tp-val">0</div> <div class="tp-down">&#65088;</div>
        </div>
        <div class="tp-cell" id="tp-min">
          <div class="tp-up">&#65087;</div> <div class="tp-val">0</div> <div class="tp-down">&#65088;</div>
        </div>
        <div class="tp-cell" id="tp-ap">
          <div class="tp-up">&#65087;</div> <div class="tp-val">AM</div> <div class="tp-down">&#65088;</div>
        </div>
        <button id="tp-close" onclick="tp.hwrap.classList.remove('show')">Close</button>
        <button id="tp-set" onclick="tp.set()">Set</button>
      </div>`;
  
      // (A3) GET VALUE ELEMENTS + SET CLICK ACTIONS
      for (let segment of ["hr", "min", "ap"]) {
        let up = tp.hwrap.querySelector(`#tp-${segment} .tp-up`),
            down = tp.hwrap.querySelector(`#tp-${segment} .tp-down`);
        tp["h"+segment] = tp.hwrap.querySelector(`#tp-${segment} .tp-val`);
  
        if (segment=="ap") {
          up.onclick = () => { tp.spin(true, segment); };
          down.onclick = () => { tp.spin(true, segment); };
        } else {
          up.onmousedown = () => { tp.spin(true, segment); };
          down.onmousedown = () => { tp.spin(false, segment); };
          up.onmouseup = () => { tp.spin(null); };
          down.onmouseup = () => { tp.spin(null); };
          up.onmouseleave = () => { tp.spin(null); };
          down.onmouseleave = () => { tp.spin(null); };
        }
      }
    },
  
    // (B) SPIN HOUR/MIN/AM/PM
    //  direction : true (up), false (down), null (stop)
    //  segment : "hr", "min", "ap" (am/pm)
    timer : null, // for "continous" time spin
    minhr : 1,    // min spin limit for hour
    maxhr : 12,   // max spin limit for hour
    minmin : 0,   // min spin limit for minute
    maxmin : 59,  // max spin limit for minute
    spin : (direction, segment) => {
      // (B1) CLEAR TIMER
      if (direction==null) { if (tp.timer!=null) {
        clearTimeout(tp.timer);
        tp.timer = null;
      }}
  
      // (B2) SPIN FOR AM/PM
      else if (segment=="ap") { tp.hap.innerHTML = tp.hap.innerHTML=="AM" ? "PM" : "AM"; }
  
      // (B3) SPIN FOR HR/MIN
      else {
        // (B3-1) INCREMENT/DECREMENT
        let next = +tp["h"+segment].innerHTML;
        next = direction ? next+1 : next-1;
  
        // (B3-2) MIN/MAX
        if (segment=="hr") {
          if (next > tp.maxhr) { next = tp.maxhr; }
          if (next < tp.minhr) { next = tp.minhr; }
        } else {
          if (next > tp.maxmin) { next = tp.maxmin; }
          if (next < tp.minmin) { next = tp.minmin; }
        }
  
        // (B3-3) SET VALUE
        if (next<10) { next = "0"+next; }
        tp["h"+segment].innerHTML = next;
  
        // (B3-4) KEEP ROLLING - LOWER TIMEOUT WILL SPIN FASTER
        tp.timer = setTimeout(() => { tp.spin(direction, segment); }, 100);
      }
    },
  
    // (C) ATTACH TIME PICKER TO HTML FIELD
    //  target : html field to attach to
    //  24 : 24 hours time? default false.
    //  after : optional, function to run after selecting time
    attach : (instance) => {
      // (C1) READONLY FIELD + NO AUTOCOMPLETE
      // IMPORTANT, PREVENTS ON-SCREEN KEYBOARD
      instance.target.readOnly = true;
      instance.target.setAttribute("autocomplete", "off");
  
      // (C2) DEFAULT 12 HOURS MODE
      if (instance["24"]==undefined) { instance["24"] = false; }
  
      // (C3) CLICK TO OPEN TIME PICKER
      instance.target.addEventListener("click", () => { tp.show(instance); });
    },
  
    // (D) SHOW TIME PICKER
    setfield : null, // set selected time to this html field
    set24 : false,   // 24 hours mode? default false.
    setafter : null, // run this after selecting time
    show : (instance) => {
      // (D1) INIT FIELDS TO SET + OPTIONS
      tp.setfield = instance.target;
      tp.setafter = instance.after;
      tp.set24 = instance["24"];
      tp.minhr = tp.set24 ? 0 : 1 ;
      tp.maxhr = tp.set24 ? 23 : 12 ;
  
      // (D2) READ CURRENT VALUE
      let val = tp.setfield.value;
      if (val=="") {
        tp.hhr.innerHTML = "0"+tp.minhr;
        tp.hmin.innerHTML = "0"+tp.minmin;
        tp.hap.innerHTML = "AM";
      } else {
        tp.hhr.innerHTML = val.substring(0, 2);
        if (tp.set24) {
          tp.hmin.innerHTML = val.substring(2, 4);
        } else {
          tp.hmin.innerHTML = val.substring(3, 5);
          tp.hap.innerHTML = val.substring(6, 8);
        }
      }
  
      // (D3) SHOW TIME PICKER
      if (tp.set24) { tp.hwrap.classList.add("tp-24"); }
      else { tp.hwrap.classList.remove("tp-24"); }
      tp.hwrap.classList.add("show");
    },
  
    // (E) SET TIME
    set : () => {
      // (E1) TIME TO FIELD
      if (tp.set24) {
        tp.setfield.value = tp.hhr.innerHTML + tp.hmin.innerHTML;
      } else {
        tp.setfield.value = tp.hhr.innerHTML + ":" + tp.hmin.innerHTML + " " + tp.hap.innerHTML;
      }
      tp.hwrap.classList.remove("show");
  
      // (E2) RUN AFTER, IF SET
      if (tp.setafter) { tp.setafter(tp.setfield.value); }
    }
  };
  
  // (F) ATTACH ON PAGE LOAD
  document.addEventListener("DOMContentLoaded", () => {
    tp.init();
    tp.attach({
      target: document.getElementById("demoA")
    });
    tp.attach({
      target: document.getElementById("demoB"),
      "24" : true
    });
  });




//   photo slider




