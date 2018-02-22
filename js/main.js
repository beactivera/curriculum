/////// interactive nav   ////////

let introBtn = document.getElementById('intro-nav');
let programBtn = document.getElementById('program-nav');
let admBtn = document.getElementById('adm-nav');
let abroadBtn = document.getElementById('abroad-nav');
let studentBtn = document.getElementById('student-nav');
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

function showProgram() {
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

function showAdmission() {
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

function showAbroad() {
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

function showStudent() {
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

function showCareer() {
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

function showContact() {
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


/////// modals from json ////////
const modal = document.getElementById('core-modal');
const businessBtn = document.getElementById('business-btn');
businessBtn.addEventListener("click", showModal);
const commBtn = document.getElementById('comm-btn');
commBtn.addEventListener("click", showModal);
const designBtn = document.getElementById('design-btn');
designBtn.addEventListener("click", showModal);
const devBtn = document.getElementById('dev-btn');
devBtn.addEventListener("click", showModal);

function showModal(e) {
    console.log()
    fetch("cores.json").then(result => result.json()).then(data => show(data, e.target.id));
}

function show(cores, which) {
    console.log(which);
    if (which == "business-btn") {
        modal.querySelector('.modal-title').textContent = cores[0].title;
        modal.querySelector('.ects-points').textContent = cores[0].ects + " ECTS";
        modal.querySelector('.description').textContent = cores[0].description;
        for (let i = 0; i < cores[0].knowledge.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[0].knowledge[i];
            modal.querySelector('.knowledge').appendChild(li);
        }
        for (let i = 0; i < cores[0].skills.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[0].skills[i];
            modal.querySelector('.skills').appendChild(li);
        }
        for (let i = 0; i < cores[0].competencies.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[0].competencies[i];
            modal.querySelector('.competencies').appendChild(li);
        }
    }
    if (which == "comm-btn") {
        modal.querySelector('.modal-title').textContent = cores[1].title;
        modal.querySelector('.ects-points').textContent = cores[1].ects + " ECTS";
        modal.querySelector('.description').textContent = cores[1].description;
        for (let i = 0; i < cores[1].knowledge.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[1].knowledge[i];
            modal.querySelector('.knowledge').appendChild(li);
        }
        for (let i = 0; i < cores[1].skills.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[1].skills[i];
            modal.querySelector('.skills').appendChild(li);
        }
        for (let i = 0; i < cores[1].competencies.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[1].competencies[i];
            modal.querySelector('.competencies').appendChild(li);
        }
    }
    if (which == "design-btn") {
        modal.querySelector('.modal-title').textContent = cores[2].title;
        modal.querySelector('.ects-points').textContent = cores[2].ects + " ECTS";
        modal.querySelector('.description').textContent = cores[2].description;
        for (let i = 0; i < cores[2].knowledge.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[2].knowledge[i];
            modal.querySelector('.knowledge').appendChild(li);
        }
        for (let i = 0; i < cores[2].skills.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[2].skills[i];
            modal.querySelector('.skills').appendChild(li);
        }
        for (let i = 0; i < cores[2].competencies.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[2].competencies[i];
            modal.querySelector('.competencies').appendChild(li);
        }
    }
    if (which == "dev-btn") {
        modal.querySelector('.modal-title').textContent = cores[3].title;
        modal.querySelector('.ects-points').textContent = cores[3].ects + " ECTS";
        modal.querySelector('.description').textContent = cores[3].description;
        for (let i = 0; i < cores[3].knowledge.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[3].knowledge[i];
            modal.querySelector('.knowledge').appendChild(li);
        }
        for (let i = 0; i < cores[3].skills.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[3].skills[i];
            modal.querySelector('.skills').appendChild(li);
        }
        for (let i = 0; i < cores[3].competencies.length; i++) {
            const li = document.createElement('li');
            li.textContent = cores[3].competencies[i];
            modal.querySelector('.competencies').appendChild(li);
        }
    }

    modal.classList.remove('hide');
}

document.getElementById('close').addEventListener('click', closeModal);

function closeModal() {
    modal.classList.add('hide');
}


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
