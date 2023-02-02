/**Animation du link général */
const circle = document.querySelector('#circle')
const db = document.querySelector('.fa-database')
const link = document.querySelector('#first-link')

circle.addEventListener('click', function () {
  circle.style.backgroundColor = "#FFFFFF";
  circle.style.transition = "0.5s";

  db.style.color = "#E55934"
  db.style.transition = "0.5s";

  link.style.color = "#FFFFFF"
  link.style.transition = "0.5s";

  setTimeout(function () {
    circle.style.backgroundColor = "#E55934";
    circle.style.transition = "0.8s";

    db.style.color = "#FFFFFF"
    db.style.transition = "0.9s";

    link.style.color = "#E55934"
    link.style.transition = "0.8s";
  }, 700);
})

link.addEventListener('click', function () {

  circle.style.backgroundColor = "#FFFFFF";
  circle.style.transition = "0.5s";

  db.style.color = "#E55934"
  db.style.transition = "0.5s";

  link.style.color = "#FFFFFF"
  link.style.transition = "0.5s";


  setTimeout(function () {
    circle.style.backgroundColor = "#E55934";
    circle.style.transition = "0.8s";

    db.style.color = "#FFFFFF"
    db.style.transition = "0.9s";

    link.style.color = "#E55934"
    link.style.transition = "0.8s";
  }, 700);
})

/*Le système de machie registable */
let maxMachines = 50;
let savedMachines = 47;

function registerCompute() {
  var elem = document.getElementById("bar1");
  let percent = (savedMachines / maxMachines) * 100;
  elem.style.width = percent + '%';
  if (percent < 50) {
    elem.style.backgroundColor = "#4caf50";
  }
  let remainingMachines = maxMachines - savedMachines;

  document.getElementById("reamingComputer").innerHTML = remainingMachines;
  document.getElementById("machineNumber").innerHTML = savedMachines + "/" + maxMachines;
}

window.addEventListener("load", function () {
  registerCompute();

});


/**Le système de machine utilisable */
let max_Machines = 30;
let usedMachines = 12;

function usableComputer() {
  var elem = document.getElementById("bar2");
  let percent = (usedMachines / max_Machines) * 100;
  elem.style.width = percent + '%';
  if (percent < 50) {
    elem.style.backgroundColor = "#4caf50";
  }

  document.getElementById("limitComputer").innerHTML = max_Machines;
  document.getElementById("machines_Number").innerHTML = usedMachines + "/" + max_Machines;
}

window.addEventListener("load", function () {
  usableComputer();

});

/*Système pour faire apparaitre les option de la box abonnement */
const subButton = document.querySelector('#subscription')

subButton.addEventListener('click', function () {
  const subOptions = document.querySelector('.subscription-option');
  if (subOptions.style.display === "block") {
    subOptions.style.display = "none"
  } else {
    subOptions.style.display = "block"
  }
})


/*Liste des devices dispo */
const dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', function () {
  const subMenu = document.querySelector('.dropdown-menu');
  if (subMenu.style.display === "flex") {
    subMenu.style.display = "none"
  } else {
    subMenu.style.display = "flex"
  }
})

const devices = [
  {
    name: "Punchnox",
    date: "2022-01-01",
    status: "Hors-ligne",
    country: "France",
    data: "Données 1"
  },
  {
    name: "Lavette",
    date: "2022-02-01",
    status: "Hors ligne",
    country: "Allemagne",
    data: "Données 2"
  },
  {
    name: "RamokProut",
    date: "2022-03-01",
    status: "Hors-ligne",
    country: "Espagne",
    data: "Données 3"
  },
];


const logBody = document.querySelector("#log-body");

for (const device of devices) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${device.name}</td>
      <td>${device.date}</td>
      <td>${device.status}</td>
      <td>${device.country}</td>
      <td>${device.data}</td>
  `;
  tr.addEventListener("click", () => {
    console.log(device);
    document.querySelector("#search-input").value = device.name;
  });
  logBody.appendChild(tr);
}

document.querySelector("#search-input").addEventListener("input", (event) => {
  const searchValue = event.target.value.toLowerCase();
  const trs = logBody.getElementsByTagName("tr");
  Array.from(trs).forEach((tr) => {
    const nameTd = tr.getElementsByTagName("td")[0];
    if (nameTd.innerHTML.toLowerCase().includes(searchValue)) {
      tr.style.display = "";
    } else {
      tr.style.display = "none";
    }
  });
});

document.querySelector("#search-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const trs = logBody.getElementsByTagName("tr");
    const visibleTrs = Array.from(trs).filter((tr) => tr.style.display !== "none");
    if (visibleTrs.length > 0) {
      visibleTrs[0].click();
    }
  }
});

/**Cache les div quand je clique ailleurs */
document.addEventListener("click", function (event) {

  let dropdownMenu = document.querySelector(".dropdown-menu");
  let subscriptionMenu = document.querySelector(".subscription-option")

  if (!dropdown.contains(event.target)) {
    dropdownMenu.style.display = "none";
  }

  if (!subscription.contains(event.target)) {
    subscriptionMenu.style.display = "none";
  }

});