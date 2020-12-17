import {showList} from './achievement.js';
import {countdown, stopCountdown} from '../countdown.js';
import {easy, medium, hard} from '../questions/questionDB.js';


let levelArrow = 0;
let questionTypePointer;
const selectAnswer = document.querySelectorAll('.answer');

document.addEventListener('DOMContentLoaded', ()=> {
    render()
})

const render = () => {
    showList();
    countdown();
    startPosition();  
    levelQuestion();
    addAnswerEvents();
}
// start points for each new question
const startPosition = () => {
    const levelListItem = document.querySelector(`#item-${levelArrow}`);
    levelListItem.style.background = '#FFC107';
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

// sorting questions due to levels and pass them to display
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
        stopCountdown();
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
   const itemAnswer = document.querySelector(`#${id}`)
    if(id === questionTypePointer[levelArrow].rightAnswer) {
        checkAnswerTimeout( itemAnswer,"#5cb85c");
        levelArrow++;
        setNewQuestion(itemAnswer, "#1060b1d2");
        return
    } 
    checkAnswerTimeout(itemAnswer, "#d9534f");
}
// waiting 2 seconds for getting specific answer color to display right or wrong answer
const checkAnswerTimeout = (itemAnswer, color) => {
    setTimeout(() => {
        itemAnswer.style.background = color;
    }, 2000);
}
// if answer is right set the new question
const setNewQuestion = ( itemAnswer,color) => {
    setTimeout(() => {
        render();
        itemAnswer.style.background = color
    }, 3000);
}