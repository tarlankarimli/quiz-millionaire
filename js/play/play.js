import {showList} from './achievement.js';
import {countdown, timer} from '../countdown.js';
import {easy} from '../questions/questionDB.js';

document.addEventListener('DOMContentLoaded', ()=> {
render()
})

const render = () => {
    showList()
    countdown()
    const levelListItem = document.querySelector('#item-0');
    levelListItem.style.background = '#FFC107';
    

//     var a = easy
// var res = a.sort(function() {
//   return 0.5 - Math.random();
// });
// console.log(res.slice(a,1))
// console.log(Math.floor(Math.random() * easy.length));

}



const showQuestion = (level) => {
const questionContent = document.querySelector('.question');
const itemA = document.querySelector('.itemA');
const itemB = document.querySelector('.itemB');
const itemC = document.querySelector('.itemC');
const itemD = document.querySelector('.itemD');

questionContent.textContent = level[0].question;
itemA.textContent = level[0].a;
itemB.textContent = level[0].b;
itemC.textContent = level[0].c
itemD.textContent = level[0].d;
}
let levelArrow = 1;

switch (levelArrow) {
    case 1:
        showQuestion(easy)
        break;

    default:
        break;
}

const myFunc =(e)=> {
    let id;
    if(e.target.tagName === 'SPAN') {
         e.target.parentElement.style.background = '#ffc10786';
         id = e.target.parentElement.id;
}  else {
        e.target.style.background = '#ffc10786';
        id = e.target.id;
    }
    checkAnswer(id);
}
const selectAnswer = document.querySelectorAll('.answer');
selectAnswer.forEach(item => {
    item.addEventListener('mousedown', myFunc)
    item.addEventListener('mouseup', ()=> {
        selectAnswer.forEach(e => {
            e.removeEventListener('mousedown', myFunc)
        })
    })
})

const checkAnswer = (id) => {
    if(id === easy[0].rightAnswer) {
        console.log("yessss")
        return
    } 
    console.log("noooo")
}