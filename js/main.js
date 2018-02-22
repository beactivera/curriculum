/////// interactive nav   ////////

let introBtn = document.getElementById('intro-nav');
let programBtn = document.getElementById('program-nav');
let admBtn = document.getElementById('adm-nav');
let abroadBtn = document.getElementById('abroad-nav');
let studentBtn = document.getElementById('student-nav');
let topBtn = document.getElementById('top-nav');
let careerBtn = document.getElementById('career-nav');
let contactBtn = document.getElementById('contact-nav');

//// reload website

let titleBtn = document.querySelector('.nav-title');
titleBtn.addEventListener('click', reloadPage)

function reloadPage() {
    location.reload();
}

//introduction
introBtn.addEventListener('click', showIntro)

function showIntro() {
    // highlight buttom
    introBtn.classList.add('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    topBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color');
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.remove('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("top").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//study program
programBtn.addEventListener('click', showProgram)

function showProgram() {
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.add('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    topBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color');
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.remove('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("top").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//admission
admBtn.addEventListener('click', showAdmission)

function showAdmission() {
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.add('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    topBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color');
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.remove('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("top").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//abroad
abroadBtn.addEventListener('click', showAbroad)

function showAbroad() {
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.add('active-color');
    studentBtn.classList.remove('active-color');
    topBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color');
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.remove('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("top").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//student life
studentBtn.addEventListener('click', showStudent)

function showStudent() {
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.add('active-color');
    topBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color');
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.remove('hide');
    document.getElementById("top").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//top
topBtn.addEventListener('click', showTop)

function showTop() {
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    topBtn.classList.add('active-color');
    careerBtn.classList.remove('active-color');
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("top").classList.remove('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//career
careerBtn.addEventListener('click', showCareer)

function showCareer() {
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    topBtn.classList.remove('active-color');
    careerBtn.classList.add('active-color');
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("top").classList.add('hide');
    document.getElementById("career").classList.remove('hide');
    document.getElementById("contact").classList.add('hide');
}

//contact
contactBtn.addEventListener('click', showContact)

function showContact() {
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    topBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color');
    contactBtn.classList.add('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("top").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.remove('hide');
}


/////// modals from json ////////

//fetch("cores.json").then(result => result.json()).then(data => show(data));
//
//function show(cores){
//    cores.forEach( core => {
//      console.log(core); 
//    });
//}


/////// modals ///////

//mmd1
let mmd1Btn = document.getElementById('mmd1-btn');
mmd1Btn.addEventListener('click', showMMD1)

function showMMD1() {
    document.getElementById('mmd1').classList.remove('hide');
}

let mmd1Close = document.getElementById('close-mmd1');
mmd1Close.addEventListener('click', closeMMD1)

function closeMMD1() {
    document.getElementById('mmd1').classList.add('hide');
}

//mmd2
let mmd2Btn = document.getElementById('mmd2-btn');
mmd2Btn.addEventListener('click', showMMD2)

function showMMD2() {
    document.getElementById('mmd2').classList.remove('hide');
}

let mmd2Close = document.getElementById('close-mmd2');
mmd2Close.addEventListener('click', closeMMD2)

function closeMMD2() {
    document.getElementById('mmd2').classList.add('hide');
}

//mmd3
let mmd3Btn = document.getElementById('mmd3-btn');
mmd3Btn.addEventListener('click', showMMD3)

function showMMD3() {
    document.getElementById('mmd3').classList.remove('hide');
}

let mmd3Close = document.getElementById('close-mmd3');
mmd3Close.addEventListener('click', closeMMD3)

function closeMMD3() {
    document.getElementById('mmd3').classList.add('hide');
}

//electives
let electBtn = document.getElementById('elect-btn');
electBtn.addEventListener('click', showElect)

function showElect() {
    document.getElementById('elect').classList.remove('hide');
}

let electClose = document.getElementById('close-elect');
electClose.addEventListener('click', closeElect)

function closeElect() {
    document.getElementById('elect').classList.add('hide');
}

//internship
let internBtn = document.getElementById('intern-btn');
internBtn.addEventListener('click', showIntern)

function showIntern() {
    document.getElementById('intern').classList.remove('hide');
}

let internClose = document.getElementById('close-intern');
internClose.addEventListener('click', closeIntern)

function closeIntern() {
    document.getElementById('intern').classList.add('hide');
}

//final exam
let finalBtn = document.getElementById('final-btn');
finalBtn.addEventListener('click', showFinal)

function showFinal() {
    document.getElementById('final').classList.remove('hide');
}

let finalClose = document.getElementById('close-final');
finalClose.addEventListener('click', closeFinal)

function closeFinal() {
    document.getElementById('final').classList.add('hide');
}


/////// admission buttoms ///////

let admBtn1 = document.querySelector('.adm-elem1');
admBtn1.addEventListener('click', showMoreAdm1);

function showMoreAdm1() {
    admBtn1.nextElementSibling.classList.toggle('hide');
    admBtn1.classList.toggle('change-color');
}


let admBtn2 = document.querySelector('.adm-elem2');
admBtn2.addEventListener('click', showMoreAdm2);

function showMoreAdm2() {
    admBtn2.nextElementSibling.classList.toggle('hide');
    admBtn2.classList.toggle('change-color');
}


let admBtn3 = document.querySelector('.adm-elem3');
admBtn3.addEventListener('click', showMoreAdm3);

function showMoreAdm3() {
    admBtn3.nextElementSibling.classList.toggle('hide');
    admBtn3.classList.toggle('change-color');
}


let admBtn4 = document.querySelector('.adm-elem4');
admBtn4.addEventListener('click', showMoreAdm4);

function showMoreAdm4() {
    admBtn4.nextElementSibling.classList.toggle('hide');
    admBtn4.classList.toggle('change-color');
}


let admBtn5 = document.querySelector('.adm-elem5');
admBtn5.addEventListener('click', showMoreAdm5);

function showMoreAdm5() {
    admBtn5.nextElementSibling.classList.toggle('hide');
    admBtn5.classList.toggle('change-color');
}


let admBtn6 = document.querySelector('.adm-elem6');
admBtn6.addEventListener('click', showMoreAdm6);

function showMoreAdm6() {
    admBtn6.nextElementSibling.classList.toggle('hide');
    admBtn6.classList.toggle('change-color');
}


let admBtn7 = document.querySelector('.adm-elem7');
admBtn7.addEventListener('click', showMoreAdm7);

function showMoreAdm7() {
    admBtn7.nextElementSibling.classList.toggle('hide');
    admBtn7.classList.toggle('change-color');
}


let admBtn8 = document.querySelector('.adm-elem8');
admBtn8.addEventListener('click', showMoreAdm8);

function showMoreAdm8() {
    admBtn8.nextElementSibling.classList.toggle('hide');
    admBtn8.classList.toggle('change-color');
}


let admBtn9 = document.querySelector('.adm-elem9');
admBtn9.addEventListener('click', showMoreAdm9);

function showMoreAdm9() {
    admBtn9.nextElementSibling.classList.toggle('hide');
    admBtn9.classList.toggle('change-color');
}


let admBtn10 = document.querySelector('.adm-elem10');
admBtn10.addEventListener('click', showMoreAdm10);

function showMoreAdm10() {
    admBtn10.nextElementSibling.classList.toggle('hide');
    admBtn10.classList.toggle('change-color');
}

//let admBtn = document.querySelectorAll('.adm-elem');
//
//admBtn.forEach(setupClick)
//function setupClick(admBtn){
//    admBtn.addEventListener('click', btnClicked);
//}
//
//function btnClicked(e){
//    e.target.nextElementSibling.classList.toggle('hide');
//}
//
//function btnClicked(e){
//    console.log(e.target.nextSibling)
//    let modal = e.target.nextSibling;
//    modal.style.display = "block"
//}
