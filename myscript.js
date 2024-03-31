var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){


    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-200+"px"
    blur.style.top=dets.y-200+"px"

})


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
   backgroundColor:"#000",
  
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true
        start:"top -25%" ,
        end:"top -70%",
        scrub :1
    }
})
document.addEventListener("DOMContentLoaded", function() {
    const surahListContainer = document.getElementById("surahList");
    const surahTextContainer = document.getElementById("qariList");
    const fontSizeControl = document.getElementById("fontSize");
    const bookmarkBtn = document.getElementById("bookmarkBtn");
  
    // Fetch surahs list from API
    fetch("https://api.quran.com/api/v4/resources/recitations")
      .then(response => response.json())
      .then(data => {
        data.chapters.forEach(surah => {
          const surahName = surah.translated_name.name;
          const surahId = surah.id;
          const surahElement = document.createElement("div");
          surahElement.classList.add("surah");
          surahElement.textContent = surahName;
          surahElement.addEventListener("click", function() {
            fetchSurahText(surahId);
          });
          surahListContainer.appendChild(surahElement);
        });
      });
  
    // Function to fetch surah text from API
    function fetchQariList(surahId) {
      fetch('https://api.quran.com/api/v4/chapter_recitations/<qari id>')
        .then(response => response.json())
        .then(data => {
          data.recitations.forEach(qari=>{
            const qariElement=document.createElement("div");
            qari.classList.add("qari");
            qariElement.textContent=qari.name;
            qariListContainer.appendChild(qariElement);

          });
        });
    }
  
    // Event listener for font size control
    fontSizeControl.addEventListener("input", function() {
      surahTextContainer.style.fontSize = this.value + "px";
    });
  
    // Bookmark feature
    bookmarkBtn.addEventListener("click", function() {
      // Add bookmark logic here
      alert("Bookmark added!");
    });
  });