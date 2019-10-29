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
    {
        question:"In the culinary world, what does MSG stand for?",
        imgSrc:"https://www.thehealthy.com/wp-content/uploads/2018/08/What-is-MSG%E2%80%94And-How-Bad-Is-It-Really-760x506.jpg",
        choiceA:"Massage",
        choiceB:"Mmm, so good",
        choiceC:"Monosodium glutamate",
        choiceD:"Message",
        correct:"Monosodium glutamate",
    },
    {
        question:"Who was the 35th president of the United States?",
        imgSrc:"https://i.imgflip.com/12wxqp.jpg",
        choiceA:"Abraham Lincoln",
        choiceB:"John F. Kennedy",
        choiceC:"Herbert Hoover",
        choiceD:"Ronald Reagan",
        correct:"John F. Kennedy",
    },
    
    ];
    
//Variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let timer;
let score = 0;


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

const renderProgress = () => {
    for (let i = 0; i < lastQuestion; i++) {
        progress.html += "<div class='prog' id = " + i + "</div>";
    }
}

const renderCounter = () => {
    if(count <= questionTime){
        counter.html = count;
        timeGauge.css("width", count * gaugeUnit +"px");
        count++;
    }else{
        count = 0;
    }
}

const checkAnswer = (answer) => {
 if(answer === question.correct){
     score++;
     answerCorrect();
 }else{

 }
 
 count = 0;
 if(runningQuestion < lastQuestion){
     runningQuestion++;
     renderQuestion();
 }else{
     clearInterval(timer);
     scoreRender();
 }
}

const answerCorrect = () => {

}

//Start the quiz
$("#start").on("click", function(){
    start.css("display", "none");
    renderQuestion();
    quiz.css("display", "block");
    renderProgress();
    renderCounter();
    timer = setInterval(renderCounter, 1000);
});
// renderQuestion();
