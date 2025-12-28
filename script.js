// Highlight service boxes with full grid blur
const boxes = document.querySelectorAll('.grid-box');
const grid = document.getElementById('serviceGrid');

function highlightBox(){
  grid.classList.add('blur');
  const randomIndex = Math.floor(Math.random()*boxes.length);
  boxes.forEach(box=>box.classList.remove('highlight'));
  boxes[randomIndex].classList.add('highlight');
  setTimeout(()=>{
    boxes[randomIndex].classList.remove('highlight');
    grid.classList.remove('blur');
  },2000);
}
setInterval(highlightBox,3000);

// Modal logic
const modal = document.getElementById("signupModal");
const btn = document.getElementById("signupBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function(){ modal.style.display = "block"; }
span.onclick = function(){ modal.style.display = "none"; }
window.onclick = function(event){ if(event.target == modal) modal.style.display = "none"; }

// Category button toggle
const categoryBtn = document.getElementById('categoryBtn');
categoryBtn.onclick = function(){ alert("Category dropdown simulated!"); }

// Send button logic → goes to search page
const sendBtn = document.getElementById('sendBtn');
sendBtn.onclick = function(){
  const query = document.getElementById('searchInput').value;
  if(query){
    localStorage.setItem("searchQuery", query);
    window.location.href = "search.html";
  }
}

// Microphone button
const micBtn = document.getElementById('microphoneBtn');
micBtn.onclick = function(){ alert("Voice input simulated!"); }
