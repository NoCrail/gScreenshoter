//for support Grafana 6.x 
var gr_ver6_1 = document.getElementsByClassName("dashboard-container") 
var gr_ver6_2 = document.getElementsByClassName("scroll-canvas")
//for support Grafana 8.x 9.x
var gr_ver8_1 = document.getElementsByClassName("scrollbar-view")
var gr_ver8_2 = document.getElementsByClassName("css-12b7m5k")



try {
    gr_ver6_1[0].setAttribute("style", "position: absolute")
    gr_ver6_2[0].setAttribute("style", "overflow: visible")
  } catch (err) {}
//try-catch for both version support 
try {
    gr_ver8_1[0].setAttribute("style", "overflow: scroll")
    gr_ver8_2[0].setAttribute("style", "overflow: hidden")
  } catch (err) {}
