//DOM Targets
const start = $("#start");
const quiz = $("#quiz");
const question = $("#question");
const qImg = $("#qImg");
const choiceA = $("#A");
const choiceB = $("#B");
const choiceC = $("#C");
const choiceD = $("#D");
const counter = $("#counter");
const timeGauge = $("#timeGauge");
const progress = $("#progress");
const score = $("#score");

//Questions
let questions= [
{
    question:"In 45 A.D., this fruit was originally called “ida” after the mountain it was grown on.",
    imgSrc:"",
    ChoiceA:"Raspberry",
    choiceB:"Orange",
    choiceC:"Grape",
    choiceD:"Pear",
    correct:"Raspberry",
},
{
    question:"",
    imgSrc:"",
    ChoiceA:"",
    choiceB:"",
    choiceC:"",
    choiceD:"",
    correct:"",
},
{
    question:"",
    imgSrc:"",
    ChoiceA:"",
    choiceB:"",
    choiceC:"",
    choiceD:"",
    correct:"",
},
{
    question:"",
    imgSrc:"",
    ChoiceA:"",
    choiceB:"",
    choiceC:"",
    choiceD:"",
    correct:"",
},
{
    question:"",
    imgSrc:"",
    ChoiceA:"",
    choiceB:"",
    choiceC:"",
    choiceD:"",
    correct:"",
}
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

//Render Questions
const renderQuestion = () => {
    let q = questions[runningQuestion];

    question.html = "<p>" + q.question + "</p>";
    qImg.html = "<img src" + q.imgSrc + ">";
    ChoiceA.html = q.choiceA;
    ChoiceB.html = q.choiceB;
    ChoiceC.html = q.choiceC;
    ChoiceD.html = q.choiceD;
}


// renderQuestion();
