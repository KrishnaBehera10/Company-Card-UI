const user = [
  {
    id: 1,
    usericon: "https://cdn-icons-png.flaticon.com/128/14079/14079391.png",
    company: "Amazon",
    time: "5 day",
    role: "Senior UI/UX Designer",
    work: ["part-time", "senior leve"],
    amount: "120/hr",
  },
  {
    id: 2,
    usericon: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
    company: "Google",
    time: "30 day",
    role: "Graphic Designer",
    work: ["full-time", "flexible schedule"],
    amount: "150-220/hr",
  },
  {
    id: 3,
    usericon: "https://cdn-icons-png.flaticon.com/128/4401/4401391.png",
    company: "Dribbble",
    time: "18 day",
    role: "Senior Motion Designer",
    work: ["Contact", "remote"],
    amount: "85/hr",
  },
  {
    id: 4,
    usericon: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
    company: "Meta",
    time: "3 months",
    role: "UX Designer",
    work: ["Full-time", "in-office"],
    amount: "200-250/hr",
  },
  {
    id: 5,
    usericon: "https://cdn-icons-png.flaticon.com/128/4494/4494647.png",
    company: "Airbnb",
    time: "1 day",
    role: "Junior UX/UI Designer",
    work: ["Contact", "remote"],
    amount: "100/hr",
  },
  {
    id: 6,
    usericon: "https://cdn-icons-png.flaticon.com/128/2175/2175370.png",
    company: "Apple",
    time: "6 day",
    role: "Graphic Designer",
    work: ["Full-time", "flexible schedule"],
    amount: "85-120/hr",
  },
];

let card = document.querySelector(".card");

let sum = "";
user.forEach((element) => {
  sum += `    <div class="inner-card">
        <div class="head-section">
          <div class="logo-section">
            <img
              src=${element.usericon}
              alt=""
            />
            <p>Save</p>
          </div>
          <p class="time-age">${element.company} <span>${element.time}</span></p>
          <h1 class="heading">${element.role}</h1>
          <div class="schedule">
            <p>${element.work[0]}</p>
            <p>${element.work[1]}</p>
          </div>
        </div>
        <div class="footer">
          <hr />
          <div class="amount-section">
            <h4 class="final-amount">$${element.amount}</h4>
            <button class="apply">Apply now</button>
          </div>
        </div>
      </div>`;
});

card.innerHTML = sum;
