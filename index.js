
const para = document.querySelector("p");
const html = document.querySelector("html");
const h1 = document.querySelector('h1');
const dateTime = document.getElementById("date-time");

dateTime.innerHTML = Date();




const select = document.getElementById("mySelect");
const display = document.getElementById("display");
select.addEventListener("change", function() {
    if (select.value === "horse-sized duck") {
        display.textContent = "Good answer. That way you only have to focus on one enemy. Don't get me wrong, one wrong move and you are done for. But, if you can get around it and jump on it's back then you can ride it like horse.";
    } else if (select.value === "one-hundred horses") {
        display.textContent = "Wrong! Why would you choose a hundred duck-sized horses? 'But I could just kick them' you might say. Have you ever tried to kick 100 of anything? You're leg would be worn out by the 5th duck-sized horse. Plus, once one of those horses bites your achilles tendon off, it's all over. They will swarm like a pack of ravenous 5-pound bees that can't fly.";
    } else if (select.value === "peace") {
        display.textContent = "Peace was never an option. The duck allies with the horses and attack you, stealing you of all of your bread. You die penniless."; 

    }
});


function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

const veggieChoices = ['esparagus', 'brocolli', 'french green beans', 'peas']
const starchChoices = ['rice', 'salt potatoes', 'baked oldbay potatoes'] // include riceChoices
const riceChoices = ['cheddar broccoli rice', 'jasmine rice']


function randomFoodChoice(arr) {
  //get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);
  //get random item
  let item = arr[randomIndex];
  if (item === "rice") {
    item = randomFoodChoice(riceChoices);
    return item;
  }
  var resultElement = document.getElementById("veggieResult");
  resultElement.innerHTML = item;
}
