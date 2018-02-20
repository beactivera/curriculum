/////// interactive nav   ////////

let introBtn = document.getElementById('intro-nav');
let programBtn = document.getElementById('program-nav');
let admBtn = document.getElementById('adm-nav');
let abroadBtn = document.getElementById('abroad-nav');
let studentBtn = document.getElementById('student-nav');
let careerBtn = document.getElementById('career-nav');
let contactBtn = document.getElementById('contact-nav');

//introduction
introBtn.addEventListener('click', showIntro)

function showIntro(){
    // highlight buttom
    introBtn.classList.add('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color'); 
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.remove('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//study program
programBtn.addEventListener('click', showProgram)

function showProgram(){
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.add('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color'); 
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.remove('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//admission
admBtn.addEventListener('click', showAdmission)

function showAdmission(){
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.add('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color'); 
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.remove('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//abroad
abroadBtn.addEventListener('click', showAbroad)

function showAbroad(){
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.add('active-color');
    studentBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color'); 
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.remove('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//student life
studentBtn.addEventListener('click', showStudent)

function showStudent(){
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.add('active-color');
    careerBtn.classList.remove('active-color'); 
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.remove('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.add('hide');
}

//career
careerBtn.addEventListener('click', showCareer)

function showCareer(){
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    careerBtn.classList.add('active-color'); 
    contactBtn.classList.remove('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("career").classList.remove('hide');
    document.getElementById("contact").classList.add('hide');
}

//contact
contactBtn.addEventListener('click', showContact)

function showContact(){
    // highlight buttom
    introBtn.classList.remove('active-color');
    programBtn.classList.remove('active-color');
    admBtn.classList.remove('active-color');
    abroadBtn.classList.remove('active-color');
    studentBtn.classList.remove('active-color');
    careerBtn.classList.remove('active-color'); 
    contactBtn.classList.add('active-color');
    //change sites
    document.getElementById("front").classList.add('hide');
    document.getElementById("introduction").classList.add('hide');
    document.getElementById("program").classList.add('hide');
    document.getElementById("admission").classList.add('hide');
    document.getElementById("abroad").classList.add('hide');
    document.getElementById("student").classList.add('hide');
    document.getElementById("career").classList.add('hide');
    document.getElementById("contact").classList.remove('hide');
}


/////// modals plus json ////////


/////// admission buttoms ///////

let admBtn1 = document.querySelector('.adm-elem1');
admBtn1.addEventListener('click', showMoreAdm1);
function showMoreAdm1(){
    admBtn1.nextElementSibling.classList.toggle('hide');
    admBtn1.classList.toggle('change-color');
}


let admBtn2 = document.querySelector('.adm-elem2');
admBtn2.addEventListener('click', showMoreAdm2);
function showMoreAdm2(){
    admBtn2.nextElementSibling.classList.toggle('hide');
    admBtn2.classList.toggle('change-color');
}


let admBtn3 = document.querySelector('.adm-elem3');
admBtn3.addEventListener('click', showMoreAdm3);
function showMoreAdm3(){
    admBtn3.nextElementSibling.classList.toggle('hide');
    admBtn3.classList.toggle('change-color');
}


let admBtn4 = document.querySelector('.adm-elem4');
admBtn4.addEventListener('click', showMoreAdm4);
function showMoreAdm4(){
    admBtn4.nextElementSibling.classList.toggle('hide');
    admBtn4.classList.toggle('change-color');
}


let admBtn5 = document.querySelector('.adm-elem5');
admBtn5.addEventListener('click', showMoreAdm5);
function showMoreAdm5(){
    admBtn5.nextElementSibling.classList.toggle('hide');
    admBtn5.classList.toggle('change-color');
}


let admBtn6 = document.querySelector('.adm-elem6');
admBtn6.addEventListener('click', showMoreAdm6);
function showMoreAdm6(){
    admBtn6.nextElementSibling.classList.toggle('hide');
    admBtn6.classList.toggle('change-color');
}


let admBtn7 = document.querySelector('.adm-elem7');
admBtn7.addEventListener('click', showMoreAdm7);
function showMoreAdm7(){
    admBtn7.nextElementSibling.classList.toggle('hide');
    admBtn7.classList.toggle('change-color');
}


let admBtn8 = document.querySelector('.adm-elem8');
admBtn8.addEventListener('click', showMoreAdm8);
function showMoreAdm8(){
    admBtn8.nextElementSibling.classList.toggle('hide');
    admBtn8.classList.toggle('change-color');
}


let admBtn9 = document.querySelector('.adm-elem9');
admBtn9.addEventListener('click', showMoreAdm9);
function showMoreAdm9(){
    admBtn9.nextElementSibling.classList.toggle('hide');
    admBtn9.classList.toggle('change-color');
}


let admBtn10 = document.querySelector('.adm-elem10');
admBtn10.addEventListener('click', showMoreAdm10);
function showMoreAdm10(){
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

