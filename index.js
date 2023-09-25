
const inpt = document.getElementById("inpt");

inpt.addEventListener('keypress', function (event) {
    if (event.keyCode === 13){

        event.preventDefault();
        const enteredName = inpt.value;

        // const  birthday = inpt.value;
         
        const birthday = new Date(enteredName);


const Counter = ()=>{
    
    const today = new Date();

    const age = (today.getFullYear() -  birthday.getFullYear());


    const age1 = document.getElementById("age");
    age1.innerHTML =  "<div id=\"timer\"></div>\
    \
    <div class=\"days\"> \
  <div class=\"numbers\">" + age + "</div>Saal ki Ho gayi ho</div> \
<div class=\"year\">";  

    const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

    if(nextBirthday < today){
        nextBirthday.setFullYear(today.getFullYear()+1);
    }

    const birthdayTime = (nextBirthday - today);

    const days = Math.floor(birthdayTime/(1000 * 60 * 60 * 24));
    const hours = Math.floor(birthdayTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor((birthdayTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((birthdayTime % (1000 * 60)) / 1000);

    document.getElementById("container").innerHTML =` <div class="balloon white">
    <div class="star-red"></div>
  <div class="face">
    <div class="eye"></div>
    <div class="mouth happy"></div>
  </div>
  <div class="triangle"></div>
  <div class="string"></div>
</div>

<div class="balloon red">
  <div class="star"></div>
  <div class="face">
    <div class="eye"></div>
    <div class="mouth happy"></div>
  </div>
  <div class="triangle"></div>
  <div class="string"></div>
</div>

<div class="balloon blue">
  <div class="star"></div>
  <div class="face">
    <div class="eye"></div>
    <div class="mouth happy"></div>
  </div>
  <div class="triangle"></div>
  <div class="string"></div>
</div>` +
    "<div id=\"timer\"></div>\
    \
    <div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";



}

setInterval(Counter, 1000);

    }

});









