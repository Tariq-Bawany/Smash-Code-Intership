const startBtn = document.getElementById('start-btn')
const input = document.querySelector('.box input')
const valid = document.querySelector('.box .valid')
const questionDetails = document.querySelector(".question-details")
const container = document.querySelector(".container")
const question = document.querySelector(".question")
const stdName = document.querySelector(".std-name")
const nextBtn = document.getElementById("next-btn")
const qsNo = document.querySelector(".qs-no h3")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const resultSheet = document.querySelector(".result-sheet")
const totalQs = document.getElementById("tq-no")
const correctQs = document.getElementById("cq-no")
const wrongQs = document.getElementById("wq-no")
const percentage = document.getElementById("perc")
const remarks = document.getElementById("remarks")



let username;

// quizes data
let quizes = [
    {
        question: 'What is the full form of DOM?',
        answer: 'Document Object Model',
        opt1: 'Data Object Model',
        opt2: 'Document Object Model',
        opt3: 'Delete Object Model',
        opt4: 'Design Object Model'
    },
    {
        question: `The external JavaScript file must contain the &ltscript&gt tag?`,
        answer: 'False',
        opt1: 'True',
        opt2: 'False',
        opt3: 'All of Above',
        opt4: 'None of these'
    },
    {
        question: 'What is the full form of RAM?',
        answer: 'Random access memory',
        opt1: 'Read only memory',
        opt2: 'Random access memory',
        opt3: 'Remove all memory',
        opt4: 'Run all memory '
    }, {
        question: 'What is 7*5 = ?',
        answer: '35',
        opt1: '35',
        opt2: '49',
        opt3: '37',
        opt4: '42'
    },
    {
        question: 'Which is the capital city of Pakistan?',
        answer: 'Islamabad',
        opt1: 'Karachi',
        opt2: 'Lahore',
        opt3: 'Islamabad',
        opt4: 'Peshawar'
    },
    {
        question: 'What does HTML stand for?',
        answer: 'Hyper Text Markup Language',
        opt1: 'HperLinks Markup Language',
        opt2: 'Home Tool Markup Language',
        opt3: 'Hyper Tool Markup Language',
        opt4: 'Hyper Text Markup Language'
    },
]

// it would run on start btn and input value condition. and will render questions and timer
function showData() {
    if (input.value.length > 3) {
        // alert("habibi")
        container.style.display = "none"
        question.style.display = "block"
        stdName.textContent = input.value;
        username = input.value
        renderQuestion()
        nextBtn.disabled = true;
        nextBtn.style.cursor = "not-allowed"
        nextBtn.style.opacity = '.7'
        timeCounter()

    } else if (input.value.length <= 3) {
        valid.style.display = "block";
    }
}

// render Qusetion will render questions one by one according to the index no
// every time render question is called it will update to the new question.
let index = 0;
function renderQuestion() {
    if (index != quizes.length) {
        qsNo.innerHTML = `Question ${index + 1} Out of ${quizes.length}`
        questionDetails.innerHTML = `
        <h3>${quizes[index].question}</h3>
        <ul onClick="questionEventDelegation(event)">
            <li id="${index}-opt1" value="${quizes[index].opt1}">${quizes[index].opt1}</li>
            <li id="${index}-opt2" value="${quizes[index].opt2}">${quizes[index].opt2}</li>
            <li id="${index}-opt3" value="${quizes[index].opt3}">${quizes[index].opt3}</li>
            <li id="${index}-opt4" value="${quizes[index].opt4}">${quizes[index].opt4}</li>
        </ul>
        `
        index++


    } else {

    }
    // console.log(quizes[0].answer)
    // console.log(quizes[0].question)
}


// it is timer , it will count the remaining time to complete the quiz , the initial time will be 1min 60 sec
let min = 1;
let sec = 60;
let timer;
async function timeCounter() {
    // setInterval(timer,1000)
    timer = setInterval(() => {
        if (sec != 0) {
            sec--;
        } else if (min > 0) {
            min = 0
            sec = 59
            seconds.style.color = 'red'
        } else {
            seconds.style.color = '#1e4933'
            clearInterval(timer)
            let wq;
            try {
                let marks = marksChecker()
                if (marks[0] != 0) {
                    wq = quizes.length - marks[0] + 1
                    let percen = (marks[0] - 1) / quizes.length * 100
                    displayResult(marks[0] - 1, wq, quizes.length, percen)

                } else {
                    displayResult(6, 0, 0, 0,)
                }

            } catch (error) {

                displayResult(0, quizes.length, quizes.length, 0,)
                remarks.innerHTML = "You missed Your Exam"
            }
        }
        minutes.innerHTML = `${min}m`
        seconds.innerHTML = `${sec}s`
    }, 1000);
    setInterval(timer, 1000)
}

let lis = document.getElementsByTagName("LI")
let targetElem;
let targetId;
let targetdata;
function questionEventDelegation(event) {
    if (event.target.tagName == 'LI') {
        for (const val of lis) {
            val.classList.remove("checked-li")
        }
        nextBtn.disabled = false;
        nextBtn.style.opacity = "1";
        nextBtn.style.cursor = "pointer";
        targetElem = event.target;
        targetdata = event.target.getAttribute("value")


        targetId = event.target.id;
        targetElem.classList.add("checked-li")


    }

}
let marks = 0;
let wq_no = 0
let perc = 0
let tq_no = quizes.length

function marksChecker() {
    if (index != quizes.length) {
        if (targetdata == quizes[targetId[0]].answer) {
            marks++
        }

    } else {
        if (targetdata == quizes[targetId[0]].answer) {
            marks++;

        }

        perc = Math.round((marks / tq_no) * 100)
        wq_no = tq_no - marks;
        displayResult(marks, wq_no, tq_no, perc)
    }
    nextBtn.disabled = true
    nextBtn.style.cursor = "not-allowed"

    // console.log(document.getElementById(targetId).getAttribute("value"));

    // quizes[targetId[0]] 
    renderQuestion()
    return [marks, wq_no,]
}

function displayResult(marks, wq_no, tq_no, perc) {
    clearInterval(timer)
    min = 1;
    sec = 60;
    question.style.display = 'none'
    resultSheet.style.display = 'block'
    totalQs.innerHTML = Number(tq_no);
    correctQs.innerHTML = marks;
    wrongQs.innerHTML = wq_no;
    percentage.innerHTML = perc
    if (perc >= 50) {
        remarks.innerHTML = `Congratulations! You Passed => ${username}`
        remarks.classList.add("passed")
    } else {
        remarks.innerHTML = `Bad Luck! You Failed => ${username}`
        remarks.classList.add("failed")
    }

}

function reset() {
    remarks.classList.remove("passed")
    remarks.classList.remove("failed")
    index = 0;
    marks = 0
    showData()
    resultSheet.style.display = "none"
    // question.style.display = "block"
    // setInterval(timer,1000)
    // renderQuestion()
}
function goToHome() {
    resultSheet.style.display = "none"
    remarks.classList.remove("passed")
    remarks.classList.remove("failed")
    index = 0;
    marks = 0
    question.style.display = "none"
    container.style.display = "block"
    input.value = ""
}
// all event listeners

nextBtn.addEventListener('click', marksChecker)
startBtn.addEventListener('click', showData)



