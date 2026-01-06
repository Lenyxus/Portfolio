document.addEventListener('DOMContentLoaded', () => {
    initSoftware();
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    const icon = hamburger.querySelector("i");
    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        const icon = hamburger.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

/*PŘEPÍNÁNÍ KATEGORIÍ*/
function zmenKategorii(kategorie) {
    document.querySelectorAll('.grid-kontejner').forEach(grid => grid.classList.remove('zobrazit'));
    document.querySelectorAll('.projekt-link-seznam li').forEach(li => li.classList.remove('aktivni-kategorie'));
    const grid = document.getElementById('grid-' + kategorie);
    if(grid) grid.classList.add('zobrazit');
    const link = document.getElementById('link-' + kategorie);
    if(link) link.classList.add('aktivni-kategorie');
}

/*VIDEO PřŘEHRÁVAČ*/
const seznamVidei = [
    { typ: 'video', src: 'video/Káva prezentace.mp4', nadpis: 'UI design' },
    { typ: 'video', src: 'video/statistiky.mp4', nadpis: 'Školní projekt' }, /*Tattooweb.mp4 Tattoo Website Design*/
    { typ: 'video', src: 'video/Tattooweb.mp4', nadpis: 'Tattoo web design' }
];

let aktualniIndex = 0;

function zmenVideo(smer) {
    aktualniIndex += smer;
    if (aktualniIndex >= seznamVidei.length) aktualniIndex = 0;
    if (aktualniIndex < 0) aktualniIndex = seznamVidei.length - 1;

    const videoElem = document.getElementById('hlavni-video');
    const placeholderElem = document.getElementById('placeholder-box');
    const nadpisElem = document.getElementById('nazev-videa');
    const pocitadloElem = document.getElementById('video-pocitadlo');
    
    if(!videoElem) return;

    const data = seznamVidei[aktualniIndex];

    if(nadpisElem) nadpisElem.innerText = data.nadpis;
    if(pocitadloElem) pocitadloElem.innerText = `${aktualniIndex + 1} / ${seznamVidei.length}`;

    if (data.typ === 'video') {
        videoElem.style.display = 'block';
        placeholderElem.style.display = 'none';
        videoElem.src = data.src;
        videoElem.play();
    } else {
        videoElem.style.display = 'none';
        placeholderElem.style.display = 'flex';
        videoElem.pause();
    }
}

/*KAROUSEL*/
const softwareList = [
    { img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', name: 'VS Code' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', name: 'Figma' },
    { img: 'img/logo-blender.webp', name: 'Blender' },
    { img: 'img/logo-office.webp', name: 'Office' },
    { img: 'img/logo-canva.webp', name: 'Canva' },
    { img: 'img/logo-obs.webp', name: 'OBS' },
    { img: 'img/logo-animate.webp', name: 'Animate' },
    { img: 'img/logo-filmora.webp', name: 'Filmora' }, 
    { img: 'img/logo-sai.webp', name: 'SAI 2' } 
];

let swIndex = 0;

function initSoftware() {
    const track = document.getElementById('software-track');
    if(track) rotujSoftware(0);
}

function rotujSoftware(smer) {
    swIndex += smer;
    if (swIndex < 0) swIndex = softwareList.length - 1;
    if (swIndex >= softwareList.length) swIndex = 0;

    const track = document.getElementById('software-track');
    if(!track) return;
    
    track.innerHTML = '';

    const indices = [
        (swIndex - 2 + softwareList.length) % softwareList.length,
        (swIndex - 1 + softwareList.length) % softwareList.length,
        swIndex,
        (swIndex + 1) % softwareList.length,
        (swIndex + 2) % softwareList.length
    ];

    const classes = ['sw-left-2', 'sw-left-1', 'sw-center', 'sw-right-1', 'sw-right-2'];

    indices.forEach((idx, i) => {
        const item = softwareList[idx];
        const div = document.createElement('div');
        div.className = `sw-item ${classes[i]}`;
        div.innerHTML = `<img src="${item.img}" alt="${item.name}"><span>${item.name}</span>`;
        track.appendChild(div);
    });
}


/*JAZYKY*/
const slovnik = {
    en: {
        nav_domu: "Home", nav_o_mne: "About me", nav_projekty: "Projects", nav_kontakt: "Get in touch",
        uvod_nadpis: "Hello,<br>I'm Veronika !",
        uvod_popis: "I combine creativity with code. Self-taught graphic designer and computer science student at <br>VŠB – Technical University of Ostrava.</br>",
        stitek_datum: "CS student", stitek_lokace: "First year",
        kontakt_nadpis: "Contact",
        sekce_vzdelani: "Education", sekce_zkusenosti: "Experience", sekce_dovednosti: "Skills", sekce_jazyk: "Language",
        datum_vs: "2025 - Present", role_stredni: "Student", skola_vs: "VŠB - Technical University of Ostrava", skola_gymnazium: "Grammar School",
        datum_grafika: "2014 - Present", role_grafika: "Graphic Design & Illustration", popis_grafika: "Personal Projects",
        datum_web: "2023 - Present", role_web: "Web Development", popis_web: "Creating websites",
        tag_kreativita: "#Creativity", tag_komunikace: "#Communication", tag_logika: "#Logic", tag_matematika: "#Mathematics", tag_analyza: "#Analysis",
        jaz_cz: "Czech", jaz_en: "English", prace_nadpis: "My Work", prace_podnadpis: "Selected projects.",
        proj1_nadpis: "Portfolio", proj1_popis: "Responsive design.", proj2_nadpis: "Illustrations", proj2_popis: "Digital art and design.",
        kat_digital: "Digital Art", kat_3d: "3D Models", kat_uiux: "UI/UX Design", kat_skola: "School Projects",
        tlacitko_linkedin: '<i class="fa-brands fa-linkedin"></i> My LinkedIn',
        kon_nadpis: "Let's create something together!", kon_podtext: "Have an idea? I'm open for new opportunities.",
        bio_nadpis: "Who am I?", 
        bio_text: "Computer science student. I have experience with visual design and 2D animation, and I am currently developing my knowledge of programming and software development at VŠB-TUO. I’m eager to learn, grow, and take on new challenges in IT — especially in technology and cybersecurity.",
        skill_text: "With programs like SAI2, Canva, and Office 365, I work at an advanced level. I am currently actively learning tools like Blender, Onshape, and Figma.",
        
        // PŘEKLADY PRO PROJECTS.HTML
        nadpis_showcase: "Creative Showcase",
        proj_concept: "Concept Art",
        proj_char: "Character Design",
        proj_webdes: "Web Design",
        proj_illus: "Illustration",
        proj_sketch: "Sketch",
        proj_3dmod: "3D Model",
        proj_3drender: "3D Render",
        proj_uiux_short: "UI/UX",
        proj_anim: "Animation",
        proj_details: "Details",
        proj_portrait: "Portrait",
        proj_fantasy: "Fantasy",
        proj_logo: "Logo",
        proj_db: "Database Schema"
    },
    cz: {
        nav_domu: "Domů", nav_o_mne: "O mně", nav_projekty: "Projekty", nav_kontakt: "Kontakt",
        uvod_nadpis: "Ahoj,<br>Já jsem Verun !",
        uvod_popis: "<br>Kombinuji kreativitu s kódováním.</br> Samouk grafického designu a studentka informatiky na <br>Vysoké škole báňské – Technické univerzitě Ostrava.</br>",
        stitek_datum: "INF studentka", stitek_lokace: "První ročník",
        kontakt_nadpis: "Kontakt",
        sekce_vzdelani: "Vzdělání", sekce_zkusenosti: "Zkušenosti", sekce_dovednosti: "Dovednosti", sekce_jazyk: "Jazyky",
        datum_vs: "2025 - Současnost", role_stredni: "Studentka", skola_vs: "VŠB - Technická univerzita Ostrava", skola_gymnazium: "Všeobecné gymnázium",
        datum_grafika: "2014 - Současnost", role_grafika: "Grafický design & Ilustrace", popis_grafika: "Osobní projekty",
        datum_web: "2023 - Současnost", role_web: "Tvorba webů", popis_web: "Tvorba webových stránek",
        tag_kreativita: "#Kreativita", tag_komunikace: "#Komunikace", tag_logika: "#Logika", tag_matematika: "#Matematika", tag_analyza: "#Analýza",
        jaz_cz: "Čeština", jaz_en: "Angličtina", prace_nadpis: "Moje práce", prace_podnadpis: "Vybrané projekty.",
        proj1_nadpis: "Portfolio", proj1_popis: "Responzivní design.", proj2_nadpis: "Ilustrace", proj2_popis: "Digitální umění a design.",
        kat_digital: "Digitální umění", kat_3d: "3D Modely", kat_uiux: "UI/UX Design", kat_skola: "Školní projekty",
        tlacitko_linkedin: '<i class="fa-brands fa-linkedin"></i> Můj LinkedIn',
        kon_nadpis: "Pojďme společně něco vytvořit!", kon_podtext: "Máte nápad? Jsem otevřená novým příležitostem.",
        bio_nadpis: "Kdo jsem?", 
        bio_text: "Studentka informatiky. Mám zkušenosti s vizuálním designem a 2D animací a v současné době rozšiřuji své znalosti v oblasti programování a vývoje softwaru na VŠB-TUO. Ráda se učím a přijímám nové výzvy v oblasti IT, zejména v oblasti technologií a kybernetické bezpečnosti.",
        skill_text: "S programy jako SAI2, Canva a Office 365 pracuji na pokročilé úrovni. Momentálně se aktivně zdokonaluji v nástrojích Blender, Onshape a Figma.",

        // PŘEKLADY PRO PROJECTS.HTML
        nadpis_showcase: "Moje tvorba",
        proj_concept: "Koncept art",
        proj_char: "Návrh postav",
        proj_webdes: "Web design",
        proj_illus: "Ilustrace",
        proj_sketch: "Skica",
        proj_3dmod: "3D Model",
        proj_3drender: "3D Render",
        proj_uiux_short: "UI/UX",
        proj_anim: "Animace",
        proj_details: "Detaily",
        proj_portrait: "Portrét",
        proj_fantasy: "Fantasy",
        proj_logo: "Logo",
        proj_db: "Databázové schéma"
    }
};

const tlacitkoTema = document.getElementById('tlacitko-tema');
const tlacitkoJazyk = document.getElementById('tlacitko-jazyk');
const htmlElement = document.documentElement;

let aktualniJazyk = localStorage.getItem('jazyk') || 'en';
let aktualniTema = localStorage.getItem('tema') || 'light';

nastavTema(aktualniTema);
nastavJazyk(aktualniJazyk);

if(tlacitkoTema) {
    tlacitkoTema.addEventListener('click', () => {
        aktualniTema = aktualniTema === 'light' ? 'dark' : 'light';
        nastavTema(aktualniTema);
    });
}

if(tlacitkoJazyk) {
    tlacitkoJazyk.addEventListener('click', () => {
        aktualniJazyk = aktualniJazyk === 'en' ? 'cz' : 'en';
        nastavJazyk(aktualniJazyk);
    });
}

function nastavTema(tema) {
    htmlElement.setAttribute('data-theme', tema);
    localStorage.setItem('tema', tema);
    if(tlacitkoTema) {
        if (tema === 'dark') {
            tlacitkoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            tlacitkoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

function nastavJazyk(jazyk) {
    if(tlacitkoJazyk) {
        if (jazyk === 'en') {
            tlacitkoJazyk.textContent = 'CZ';
        } else {
            tlacitkoJazyk.textContent = 'EN';
        }
    }
    
    localStorage.setItem('jazyk', jazyk);
    
    const prvkyKPrekladu = document.querySelectorAll('[data-preklad]');
    prvkyKPrekladu.forEach(prvek => {
        const klic = prvek.getAttribute('data-preklad');
        if(slovnik[jazyk][klic]) {
            prvek.innerHTML = slovnik[jazyk][klic];
        }
    });
}