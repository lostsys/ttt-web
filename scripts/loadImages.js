const mount = document.querySelector(".gallery-img-container");
const load = document.querySelector(".load-images");

load.addEventListener('click', () => {
    mount.innerHTML = `<div class="g-row">

    <div class="g-col">

        <img src='images/1.jpg' alt='clean car' width=>
        <img src='images/2.jpg' alt='clean car'>
        <img src='images/3.jpg' alt='clean car'>
        <img src='images/4.jpg' alt='clean car'>
        <img src='images/5.jpg' alt='clean car'>

    </div>

    <div class="g-col">

        <img src='images/6.jpg' alt='clean car'>
        <img src='images/7.jpg' alt='clean car'>
        <img src='images/8.jpg' alt='clean car'>
        <img src='images/9.jpg' alt='clean car'>

    </div>

    <div class="g-col">

        <img src='images/10.jpg' alt='clean car'>
        <img src='images/11.jpg' alt='clean car'>
        <img src='images/12.jpg' alt='clean car'>
        <img src='images/13.jpg' alt='clean car'>

    </div>

    <div class="g-col">

        <img src='images/5.jpg' alt='clean car'>
        <img src='images/9.jpg' alt='clean car'>
        <img src='images/2.jpg' alt='clean car'>
        <img src='images/6.jpg' alt='clean car'>                    

    </div>

    
  </div>`;

});