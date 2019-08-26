/* 1. Use JavaScript to obtain a reference to the first section with the class of 
article_header and change its text with the textContent property 
to "Welcome to the {insert your name here} blog" */

const articleFooter = document.querySelector(".article__footer");

articleFooter.textContent = "Welcome to the James Blog!";

/*2. Use JavaScript to obtain a reference to all article__header
 elements and change their classList property value to article__header important. */
const articleHeaderArray = document.querySelectorAll(".article__header");

for(let i = 0; i < articleHeaderArray.length; i++){
    articleHeaderArray[i].classList.remove("article__header");
    articleHeaderArray[i].classList.add("article__header", "important");
}

/*3. Obtain a reference the element with a class of dashed and remove it.*/

const dashedStyle = document.querySelector(".dashed");
dashedStyle.classList.remove("dashed");

/*4. Obtain a reference the element 
with a class of article_footer and add the class of goldenrod it.*/

articleFooter.classList.add("goldenrod");

const headerContent = document.getElementsByTagName("HEADER");

console.log(headerContent);

for(let i = 0; i < headerContent.length; i++){
    headerContent[0].classList.add("header_color")
}

var day, month, year;
day = 24;
month = 04;
year = 2005;

function SetDate(_day, _month, _year){
    const webPageDay = document.querySelector(".day_date");
    const webPageMonth = document.querySelector(".month_date");
    const webPageYear = document.querySelector(".year_date");
    
    webPageDay.textContent = _day;
    webPageMonth.textContent = _month;
    webPageYear.textContent = _year;
}

SetDate(day,month,year);
