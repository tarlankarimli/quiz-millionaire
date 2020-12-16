import {showList} from './achievement.js';
import {countdown, timer} from '../countdown.js';
import {easy, medium, hard} from '../questions/questionDB.js';


let levelArrow = 0;
let questionTypePointer;
const selectAnswer = document.querySelectorAll('.answer');

document.addEventListener('DOMContentLoaded', ()=> {
    render()
})

const render = () => {
    showList()
    countdown()
    const levelListItem = document.querySelector(`#item-${levelArrow}`);
    levelListItem.classList.add('selected')
    // levelListItem.style.background = '#FFC107';
    levelQuestion();
    addAnswerEvents();
//     var a = easy
// var res = a.sort(function() {
//   return 0.5 - Math.random();
// });
// console.log(res.slice(a,1))
// console.log(Math.floor(Math.random() * easy.length));
}


//  display questions
const showQuestion = (questionType) => {
const randomQuestion = Math.floor(Math.random() * questionType.length);

    const questionContent = document.querySelector('.question');
    const itemA = document.querySelector('.itemA');
    const itemB = document.querySelector('.itemB');
    const itemC = document.querySelector('.itemC');
    const itemD = document.querySelector('.itemD');

    questionContent.textContent = questionType[randomQuestion].question;
    itemA.textContent = questionType[randomQuestion].a;
    itemB.textContent = questionType[randomQuestion].b;
    itemC.textContent = questionType[randomQuestion].c
    itemD.textContent = questionType[randomQuestion].d;
}

// level of question
const levelQuestion = () => {
    switch (true) {
        case levelArrow < 6:
            showQuestion(easy);
            questionTypePointer = easy;
            break;
        case levelArrow < 11:
            showQuestion(medium)
            questionTypePointer = medium;
            break;
            case levelArrow < 16:
            showQuestion(hard)
            questionTypePointer = hard;
            break;
        default:
            break;
    }
}
//  adding events to answers
const addAnswerEvents = () => {
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
    selectAnswer.forEach(item => {
        item.addEventListener('mousedown', myFunc)
        item.addEventListener('mouseup', ()=> {
            selectAnswer.forEach(e => {
                e.removeEventListener('mousedown', myFunc)
            })
        })
    })
}
//  check answer
const checkAnswer = (id) => {
    if(id === questionTypePointer[levelArrow].rightAnswer) {
        levelArrow++;
        render();
        return
    } 
    console.log("noooo")
}