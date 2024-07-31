# Project related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

[MY CODE] (https://stackblitz.com/edit/stackblitz-starters-gsksvu?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)


``` javascript
//console.log("SONAL GHINAIYA")
```

## Project 1
```javascript
//console.log("Sonal Ghinaiya")
const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  //console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'grey'){
        //body.style.backgroundColor = 'grey'
        body.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'white'){
        body.style.backgroundColor = 'white'
    }

    if(e.target.id === 'blue'){
        body.style.backgroundColor = 'blue'
    }

    if(e.target.id === 'yellow'){
        body.style.backgroundColor = 'yellow'
    }

    if(e.target.id === 'purple'){
        body.style.backgroundColor = 'purple'
    }
  })
});
```