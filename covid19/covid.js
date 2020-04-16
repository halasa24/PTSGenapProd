// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const counter = document.getElementById("counter");
//const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Saya pergi keluar rumah",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya menggunakan transportasi umum: online, angkot, bus, taxi, kereta api",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya memakai masker pada saat berkumpul dengan orang lain",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya berjabat tangan dengan orang lain",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya membersihkan tangan dengan hand sanitizer/tissue basah sebelum pegang kemudi mobil/motor",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya menyentuh benda/uang yang juga disentuh orang lain",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya menjaga jarak 1,5 meter dengan orang lain ketika : belanja, bekerja, belajar, ibadah",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya makan diluar rumah (warung / restaurant)",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya minum hangat & cuci tangan dengan sabun setelah tiba di tujuan",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya berada di wilayah kelurahan tempat pasien tertular",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya pasang hand sanitizer di depan pintu masuk, untuk bersihkan tangan sebelum pegang gagang (handle) pintu masuk rumah",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya mencuci tangan dengan sabun setelah tiba di rumah",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya menyediakan : tissue basah / antiseptic, masker, sabun antiseptic bagi keluarga di rumah",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya segera merendam baju & celana bekas pakai di luar rumah kedalam air panas / sabun",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya segera mandi keramas setelah saya tiba di rumah",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya mensosialisasikan check list penilaian resiko pribadi ini kepada keluarga dirumah",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya dalam sehari kena cahaya matahari minimal 15 menit",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya jalan kaki / berolah raga minimal 30 menit setiap hari",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "B"
    },{
        question : "Saya jarang minum vitamin C & E, kurang tidur",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Usia saya diatas 60 tahun",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    },{
        question : "Saya mempunyai penyakit : jantung/diabetes/gangguan pernapasan kronik",
        imgSrc : "img/5.jpg",
        choiceA : "Ya",
        choiceB : "Tidak",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
//const questionTime = 20; // 20s
//const gaugeWidth = 150; // 150px
//const gaugeUnit = gaugeWidth / questionTime;
//let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    //TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

/*function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}
#timer{
    position: absolute;
    height : 100px;
    width : 200px;
    bottom : 0px;
    text-align: center;
}
#counter{
    font-size: 3em;
}
#btimeGauge{
    width : 150px;
    height : 10px;
    border-radius: 10px;
    background-color: lightgray;
    margin-left : 25px;
}
#timeGauge{
    height : 10px;
    border-radius: 10px;
    background-color: mediumseagreen;
    margin-top : -10px;
    margin-left : 25px;
}*/

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        //clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor =  "#0f0";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 70) ? "img/3.jpg" :
              (scorePerCent >= 40) ? "img/2.png" :
              "img/1.jpg";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}