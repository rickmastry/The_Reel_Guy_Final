let showWidget = true;
const btn = document.querySelector(".btn-post");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
const rateHeading = document.querySelector(".rate-heading");
let inputName = document.getElementById('input-name');
const form = document.getElementById('form');


btn.addEventListener('click', toggleWidget, false);


function toggleWidget(event){
  event.preventDefault();
  if(showWidget){
    if(widget.style.display = 'block');
    widget.style.display = 'none';
    post.style.display = 'block';
    rateHeading.style.display = 'none';
   
     //Set Menu state
      showWidget = false;
  }else{
    widget.style.width = 'block';
    post.style.display = 'none';
    rateHeading.style.display = 'block';
   

  
      //Set Menu State
      showWidget = true;

  }
}


btn.addEventListener('click', displayReview, false);


  function displayReview(event){
    const displayDescription = document.querySelector('.description').value;
    const reviewDisplay = document.querySelector('.review-display');
    const displayInputName = document.querySelector('.name').value;
    event.preventDefault();
    if (displayDescription==null || displayDescription==""){  
      alert("Description can't be blank");

      
      
    } else if(displayInputName==null || displayInputName==""){
      alert("Name can't be blank");
      

    } else{
     
    const markup = `
    <div class="review-display-output">
      <div class="name-output">
          <h1>${displayInputName}<span class="name-output-side"> says:</span></h1>
      </div>
      <div class="review-output">
        <p class="description">
         "${displayDescription}"
        </p>
       
      </div>
  </div>
  `;
  
  reviewDisplay.innerHTML = markup;
    }
  
  
} 





