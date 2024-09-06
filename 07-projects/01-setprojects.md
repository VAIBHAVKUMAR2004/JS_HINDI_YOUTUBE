# Projects related to DOM

## project link
[click here](https://stackblitz.com/~/github.com/VAIBHAVKUMAR2004/JS_HINDI_YOUTUBE?file=07-projects/01-setprojects.md&view=editor)

# solution code

## project 1
```javascript
console.log("vaibahv")
```

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e){
    console.log(e)
    console.log(e.target);
  if(e.target.id === 'grey'){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === 'white'){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === 'blue'){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === 'yellow'){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === 'violet'){
    body.style.backgroundColor = e.target.id;
  }
  })
});


## project 2 solution

const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#result');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`
  } else {
    const bmi =(weight /((height*height)/10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`
  }
});


## project 3 solution

const clock = document.getElementById('clock');


setInterval(function(){
let date =  new Date();
//console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000);

# project 4 solution

``` javascript

// generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
   for(let i =0;i<6;i++){
     color += hex[Math.floor(Math.random()*16)]
   }
   return color;
};

let intervalId ;
const startChangingColor = function(){
  if(!intervalId){intervalId=setInterval(changeBgColor,1000)}
    

function changeBgColor(){document.body.style.backgroundColor = randomColor()};
}
  
const stopChangingColor  = function(){
 clearInterval(intervalId)
 intervalId = null;
};

document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)

```


# project 5 solution

``` javascript
const insert = document.getElementById('insert')


window.addEventListener('keydown',(e) => insert.innerHTML = `
<div class = 'color' 
<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.Key === ' ' ? 'space' :e.key}</td>
    <td>${e.Keycode}</td>
    <td>${e.Code}</td>
  </tr>
 
</table>
>`)

```