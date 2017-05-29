function main() {
          var mijnlinks = document.getElementsByTagName("a");
          var teller = 0;
          while (teller < mijnlinks.length){
            mijnlinks[teller].onclick = function (){
              document.getElementsByTagName("li")[0].className = "";
              document.getElementsByTagName("li")[1].className = "";
              document.getElementsByTagName("li")[2].className = "";
              this.parentElement.className = "geselecteerd";

              document.getElementsByTagName("p")[0].className = "onzichtbaar";
              document.getElementsByTagName("p")[1].className = "onzichtbaar";
              document.getElementsByTagName("p")[2].className = "onzichtbaar";
              var deJuisteParagraaf = this.getAttribute("data-floep");
              document.getElementById(deJuisteParagraaf).className = "";
            };
            teller ++;
          }
}

window.onload = function() {
       main();
}
