// init();

// function init() {
//     var elems = document.getElementsByClassName("dashboard-container");
//     var elems3 = document.getElementsByClassName("scrollbar-view");

//     //|| elems[0].style.position == "static"
    
//     console.log(elems3);
//     if(elems3[0].style.overflow == "scroll" ){
//         var t2 = document.getElementById("switch_ext_btn");
//         t2.firstChild.nodeValue = "Disable code changes"
//     }
// }

//Trying to fix bug with double click for disable when closed-openned


document.getElementById("switch_ext_btn").addEventListener("click", (e) => {
    var t2 = document.getElementById("switch_ext_btn");
    if(t2.firstChild.nodeValue == "Enable code changes")
        {
            t2.firstChild.nodeValue = "Disable code changes"
            browser.tabs.executeScript({
                file: "doChanges.js"
              });
        } else 
        {
            t2.firstChild.nodeValue = "Enable code changes"
            browser.tabs.executeScript({
                file: "undoChanges.js"
              });
        }
    
  });

