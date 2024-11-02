const apikey = "d8ed13aebc939766513a9c3e1b0db7ac";
const forecastDays = 5;

const search = document.getElementById("search");
const btn = document.querySelector(".btn");
const dataHeading = document.querySelector(".data-heading h1");
const dataInfo = document.querySelector(".data-info");
// const dataBox = document.querySelector(".data-box")

const date0 = document.getElementById("date-0");
const heading0 = document.getElementById("heading-0");
const heading0p = document.getElementById("heading-0-p");
const heading0p1 = document.getElementById("heading-0-p-1");
const heading0p2 = document.getElementById("heading-0-p-2");

const date1 = document.getElementById("date-1");
const heading1 = document.getElementById("heading-1");
const heading1p = document.getElementById("heading-1-p");
const heading1p1 = document.getElementById("heading-1-p-1");
const heading1p2 = document.getElementById("heading-1-p-2");

const date2 = document.getElementById("date-2");
const heading2 = document.getElementById("heading-2");
const heading2p = document.getElementById("heading-2-p");
const heading2p1 = document.getElementById("heading-2-p-1");
const heading2p2 = document.getElementById("heading-2-p-2");

const date3 = document.getElementById("date-3");
const heading3 = document.getElementById("heading-3");
const heading3p = document.getElementById("heading-3-p");
const heading3p1 = document.getElementById("heading-3-p-1");
const heading3p2 = document.getElementById("heading-3-p-2");

const date4 = document.getElementById("date-4");
const heading4 = document.getElementById("heading-4");
const heading4p = document.getElementById("heading-4-p");
const heading4p1 = document.getElementById("heading-4-p-1");
const heading4p2 = document.getElementById("heading-4-p-2");

btn.addEventListener("click", () => {
  if (search.value == "") {
    alert("Please Enter City");
  } else {
    const loc = search.value;
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${apikey}&cnt=${forecastDays}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { name } = data.city;
        dataHeading.innerHTML = name;
        for (let i = 0; i <= 4; i++) {
          const { dt_txt } = data.list[i];
          const { feels_like } = data.list[i].main;
          const { description } = data.list[i].weather[0];
          const { speed } = data.list[i].wind;
          const { humidity } = data.list[i].main;
          console.log(feels_like, description, speed, humidity, dt_txt);
          if (i == 0) {
            date0.innerText = dt_txt;
            heading0.innerText = Math.round(`${feels_like}` - 273) +"	° c";
            heading0p.innerText = description;
            heading0p1.innerText = `${speed}kmph`;
            heading0p2.innerText = `${humidity}%`;
          }
          if (i == 1) {
            date1.innerText = dt_txt;
            heading1.innerText = Math.round(`${feels_like}` - 273) +"	° c";
            heading1p.innerText = description;
            heading1p1.innerText = `${speed}kmph`;
            heading1p2.innerText = `${humidity}%`;
          }
          if (i == 2) {
            date2.innerText = dt_txt;
            heading2.innerText = Math.round(`${feels_like}` - 273) +"	° c";
            heading2p.innerText = description;
            heading2p1.innerText = `${speed}kmph`;
            heading2p2.innerText = `${humidity}%`;
          }
          if (i == 3) {
            date3.innerText = dt_txt;
            heading3.innerText = Math.round(`${feels_like}` - 273) +"	° c";
            heading3p.innerText = description;
            heading3p1.innerText = `${speed}kmph`;
            heading3p2.innerText = `${humidity}%`;
          }
          if (i == 4) {
            date4.innerText = dt_txt;
            heading4.innerText = Math.round(`${feels_like}` - 273) +"	° c";
            heading4p.innerText = description;
            heading4p1.innerText = `${speed}kmph`;
            heading4p2.innerText = `${humidity}%`;
          }
        }
      });
    search.value = "";
  }
});
