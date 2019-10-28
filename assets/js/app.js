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
const scoreDiv = $("#score");

//Questions
let questions= [
    {
        question:"In 45 A.D., this fruit was originally called “ida” after the mountain it was grown on.",
        imgSrc:"https://andrewsfruitandproduce.com/files/2014/04/basket.png",
        choiceA:"Raspberry",
        choiceB:"Orange",
        choiceC:"Grape",
        choiceD:"Pear",
        correct:"Raspberry",
    },
    
    ];
    
//Variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
// let count = 0;
// const questionTime = 10;
// const gaugeWidth = 150;
// const gaugeUnit = gaugeUnit / questionTime;
// let timer;
// let score = 0;


//Render Questions
const renderQuestion = () => {
    let q = questions[runningQuestion];

    question.html("<p>" + q.question + "</p>");
    qImg.html("<img src=" + q.imgSrc + ">");
    choiceA.html(q.choiceA);
    choiceB.html(q.choiceB);
    choiceC.html(q.choiceC);
    choiceD.html(q.choiceD);
    console.log(q);
}

// const renderProgress = () => {
//     for (let i = 0; i < lastQuestion; i++) {
//         progress.html += "<div class='prog' id = " + i + "</div>";
//     }
// }

// const renderCounter = () => {
//     if(count <= questionTime){
//         counter.html = count;
//         timeGauge.css("width", count * gaugeUnit +"px");
//         count++;
//     }else{
//         count = 0;
//     }
// }


//Start the quiz
$("#start").on("click", function(){
    start.css("display", "none");
    renderQuestion();
    quiz.css("display", "block");
    // renderProgress();
    // renderCounter();
    // timer = setInterval(renderCounter, 1000);
});
// renderQuestion();
