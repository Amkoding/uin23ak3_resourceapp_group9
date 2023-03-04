const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


const displayHtmlNow = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");

function displayHtml()
{
    let sources = resources[0].sources;
    let sourceLinks = "";
    for (let i = 0; i < sources.length; i++) {
        sourceLinks += "<a href='" + sources[i].url + "' target='_blank'>" + sources[i].title + "</a><br>";
    }
displayHtmlNow.innerHTML=   resources[0].text + "<br>" + sourceLinks; 
}
changeBtn.addEventListener("click", displayHtml);



const displayCssNow = document.getElementById("change");
const changeCss = document.getElementById("change-css");

function displayCss()
{
    let sources = resources[1].sources;
    let sourceLinks = "";
    for (let i = 0; i < sources.length; i++) {
        sourceLinks += "<a href='" + sources[i].url + "' target='_blank'>" + sources[i].title + "</a><br>";
    }
displayCssNow.innerHTML= resources[1].text + "<br>" + sourceLinks; 
}
changeCss.addEventListener("click", displayCss);



const displayJaNow = document.getElementById("change");
const changeJa = document.getElementById("change-ja");

function displayJa()
{
    let sources = resources[2].sources;
    let sourceLinks = "";
    for (let i = 0; i < sources.length; i++) {
        sourceLinks += "<a href='" + sources[i].url + "' target='_blank'>" + sources[i].title + "</a><br>";
    }
displayJaNow.innerHTML= resources[2].text + "<br>" + sourceLinks; 
}
changeJa.addEventListener("click", displayJa);



const displayReactNow = document.getElementById("change");
const changeReact = document.getElementById("change-React");

function displayReact()
{
    let sources = resources[3].sources;
    let sourceLinks = "";
    for (let i = 0; i < sources.length; i++) {
        sourceLinks += "<a href='" + sources[i].url + "' target='_blank'>" + sources[i].title + "</a><br>";
    }
    displayReactNow.innerHTML= resources[3].text + "<br>" + sourceLinks; 
}
changeReact.addEventListener("click", displayReact);


const displaySanityNow = document.getElementById("change");
const changeSanity = document.getElementById("change-Sanity");

function displaySanity()
{
    let sources = resources[4].sources;
    let sourceLinks = "";
    for (let i = 0; i < sources.length; i++) {
        sourceLinks += "<a href='" + sources[i].url + "' target='_blank'>" + sources[i].title + "</a><br>";
    }
    displaySanityNow.innerHTML= resources[4].text + "<br>" + sourceLinks; 
}
changeSanity.addEventListener("click", displaySanity);

