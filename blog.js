
const posts=document.querySelectorAll(".post-template");


// see more text function

posts.forEach(postsTextCntrl);

function postsTextCntrl(post){

const x= post.querySelector(".txt").textContent;

function postTextControl(){

const textBox = post.querySelector(".text");
const fullText = post.querySelector(".txt");
fullText.textContent = x;

if(textBox.offsetHeight < textBox.scrollHeight){
  
  let words = fullText.textContent.split(" ");
  let newText = " ";
  while(textBox.offsetHeight < textBox.scrollHeight){
    words.pop();
    newText = words.join(" ");
    fullText.innerHTML = newText + "..." + "<span class='seeMore-btn' style= 'color:#599495;cursor:pointer;'> <b>See More</b> </span>" ;
    }
    
    }  }

    document.addEventListener("DOMContentLoaded",postTextControl);
    window.addEventListener("resize",postTextControl);

  }

                   
  //text swap seeMore 

    posts.forEach(function(post){

    let textBox = post.querySelector(".seeMoreTextBox > p");
    let text = post.querySelector(".txt");
    textBox.textContent=" ";
    textBox.textContent=text.textContent;
     
    });  
    
    //see more button click
    
    function clickMeText(btns){
       
    btns.forEach(function(btn){
    
      btn.addEventListener("click",function(e){
    
        let correspPost = e.target.closest(".post-template");
        let seeMoretxtbox = correspPost.querySelector(".seeMoreTextBox");
        seeMoretxtbox.classList.toggle("visible"); 
         //closing post etc details boxs
        closeEtc(correspPost);
        
          });   
                });    }    


//getting seeMore Btns after DOM Loaded
    document.addEventListener("DOMContentLoaded",getSeeMoreBtns);
    window.addEventListener("resize",getSeeMoreBtns);

    function getSeeMoreBtns(){

      const seeMoreBtns = document.querySelectorAll(".seeMore-btn");
      
      clickMeText(seeMoreBtns);
    }

    //close Etc
    function closeEtc(post){
    post.querySelector(".postReviewBox").classList.remove("visible");
    post.querySelector(".postLocationBox").classList.remove("visible");
    post.querySelector(".postShareBox").classList.remove("visible");
    post.querySelector(".reaction-data").classList.remove("visible");
    }
    
    // Gallery 

    const galleryImgs = [
      {
        image: "img/h.jpg",
        description: "Should I Leave?",
        alt: "Best place to spend time"
      },
      {
        image: "img/b.jpg",
        description: "I dont need woolen cloth, though I look cool",
        alt: "Friend to make in Manali"
      },
      {
        image: "img/c.jpeg",
        description: "Comfortable Ride",
        alt: "Best ride to take in India"
      },
      {
        image: "img/d.jpg",
        description: "Take a nice picture tourist",
        alt: "Street dog "
      },
      {
        image: "img/g.jpg",
        description: "Barf Hi Barf",
        alt: "A place to see snowfall"
      }
    ];
    

    let currentIndex = 0;
    const slideshowImage = document.querySelector("#gallery-container img");
    const slideDescription = document.querySelector("#caption p");
    
    function updateSlide() {
      const currentSlide = galleryImgs[currentIndex];
      slideshowImage.src = currentSlide.image;
      slideshowImage.alt=currentSlide.alt;
      slideDescription.textContent = currentSlide.description;
    }
    
    function nextSlide() {
      currentIndex = (currentIndex + 1) % galleryImgs.length;
      updateSlide();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
      updateSlide();
    }
    
    
let timer = setInterval(nextSlide, 2000); 

document.getElementById("nxtBtn").addEventListener("click", function() {
  clearInterval(timer); 
  nextSlide();
  timer = setInterval(nextSlide, 2000); 
});

document.getElementById("prevBtn").addEventListener("click", function() {
  clearInterval(timer);
  prevSlide();
  timer = setInterval(nextSlide, 2000); 
});

updateSlide();

const galleryContainer = document.getElementById("gallery-container");

function handleMouseEnter() {
  clearInterval(timer); 
}

function handleMouseLeave() {
  timer = setInterval(nextSlide, 2000); 
}

galleryContainer.addEventListener("mouseenter", handleMouseEnter);
galleryContainer.addEventListener("mouseleave", handleMouseLeave);


//post etc function pop up box



posts.forEach(etcDetails);

function etcDetails(post){
  const postReviewBox = post.querySelector(".postReviewBox");
  const postLocationBox = post.querySelector(".postLocationBox");
  const postShareBox = post.querySelector(".postShareBox");
  const reactionBox = post.querySelector(".reaction-data");

  post.addEventListener("click", function(e){

          if(e.target.classList =="reviewBtn"){
            postReviewBox.classList.toggle("visible");
            closeOtherBox(postLocationBox,postShareBox,reactionBox);

          }
          else if(e.target.classList =="locationBtn"){
            postLocationBox.classList.toggle("visible");
            closeOtherBox(postReviewBox,postShareBox,reactionBox);
          }
          else if(e.target.classList =="shareBtn"){
            postShareBox.classList.toggle("visible");
            closeOtherBox(postReviewBox,postLocationBox,reactionBox);
          }
          else if(e.target.classList =="reaction-btn" ){
            reactionBox.classList.toggle("visible");
            closeOtherBox(postReviewBox,postLocationBox,postShareBox);
          }
  });

}

function closeOtherBox(x,y,z){

x.classList.remove("visible");
y.classList.remove("visible");
z.classList.remove("visible");
x.closest(".post-template").querySelector(".seeMoreTextBox").classList.remove("visible")
  
}


//closing all on scroll

const postsContainer = document.querySelector("#post-container");

postsContainer.addEventListener("scroll" ,closeAll);

function closeAll(){
 posts.forEach(function(post){
  post.querySelector(".seeMoreTextBox").classList.remove("visible");
  closeEtc(post);
 })

}


// select a place 

const selectPlaceBtn = document.getElementById("choosePlace");
const placeListBox = document.querySelector(".placeslist");


selectPlaceBtn.addEventListener("click",function(){
  if( !placeListBox.classList.contains("visible") ){
    placeListBox.classList.add("visible");
    selectPlaceBtn.textContent = "Click to Clear";
  } else{
    placeListBox.classList.remove("visible");
    placeRslt.innerHTML=" ";
    selectPlaceBtn.textContent = "Click to Select";
  }
  
 
})


//Thingd to do inn that place

const listOfThings = {
  Manali:["Paragliding", "River Rafting","Riverside Camping","Hot Air Baloon Ride","Igloo Stay"],
  Shimla:["Toy Train Ride","Ice skating","Chadwick Waterfall","Cycling","Kiala Forest"],
  Lucknow:["Bara Imambara","Lucknawi quintessential items","local dishes"],
  Delhi:["Street Food","Dilli Haat","Pandara Road","Majnu Ka Tila"]
};


let placeLists = document.querySelectorAll("#pList li");
let placeRslt = document.querySelector("#placeRslt");

placeLists.forEach(function(place){
  place.addEventListener("click", selectedPlace)
})

function selectedPlace(e){
  let place = " ";
  placeRslt.innerHTML = " ";

  if(e.target.textContent == "Manali"){ 
    place = "Manali";
    showResults(place);
  } 
  else if (e.target.textContent == "Shimla"){
    place = "Shimla";
    showResults(place);
  }
  else if (e.target.textContent == "Lucknow"){
    place = "Lucknow";
    showResults(place);
  }
  else if (e.target.textContent == "Delhi"){
    place = "Delhi";
    showResults(place);
  }
}

function showResults(x){
  const thingsToDoLists = listOfThings[x];
 for( let thing of thingsToDoLists ){
  const newEl = document.createElement("li");
  const newTxt = document.createTextNode(thing);
  newEl.appendChild(newTxt);
  placeRslt.appendChild(newEl);

 }
  
}

//media small screen

const leftContBtn = document.getElementById("leftContOpen");
const postContainer = document.getElementById("post-container");
const leftContainer = document.getElementById("left-container");

function toggleLeftContainer() {
  const cssObj1 = window.getComputedStyle(postContainer);

  if (cssObj1.getPropertyValue("display") === "block") {
    postContainer.style.display = "none";
    leftContainer.style.display = "block";
    
  } else if (cssObj1.getPropertyValue("display") === "none") {
    postContainer.style.display = "block";
    leftContainer.style.display = "none";
    
  }
}

function checkWindowSize() {
  if (window.innerWidth < 762) {
    leftContBtn.addEventListener("click", toggleLeftContainer);
  } else {
    postContainer.style.display = "block";
    leftContainer.style.display = "block";
    leftContBtn.removeEventListener("click", toggleLeftContainer);
  }
}

checkWindowSize();
window.addEventListener("resize", checkWindowSize);

//loader
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector(".custom-loader").style.visibility = "visible";
  } else {
      document.querySelector(".custom-loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
};
