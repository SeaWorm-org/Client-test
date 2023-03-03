const btnLeft = document.querySelector("#button-left");
const sidebarLeft = document.querySelector(".panel-left");
const btnRight = document.querySelector("#button-right");
const sidebarRight = document.querySelector(".panel-right");

btnLeft.addEventListener("click", function () {
  sidebarLeft.classList.toggle("panel-left-open");
  btnLeft.style.zIndex = "2";
  btnRight.style.zIndex = "0";
});

btnRight.addEventListener("click", function () {
  sidebarRight.classList.toggle("panel-right-open");
  btnRight.style.zIndex = "2";
  btnLeft.style.zIndex = "0";
});

/*Le système de machie registable */
let maxMachines = 50;
let savedMachines = 0;

function registerCompute() {
  var elem = document.getElementById("bar1");
  let percent = (savedMachines / maxMachines) * 100;
  elem.style.width = percent + "%";
  let remainingMachines = maxMachines - savedMachines;

  document.getElementById("reamingComputer").innerHTML = remainingMachines;
  document.getElementById("machineNumber").innerHTML =
    savedMachines + "/" + maxMachines;
}

window.addEventListener("load", function () {
  registerCompute();
});

/**Le système de machine utilisable */
let max_Machines = 30;
let usedMachines = 0;

function usableComputer() {
  var elem = document.getElementById("bar2");
  let percent = (usedMachines / max_Machines) * 100;
  elem.style.width = percent + "%";

  document.getElementById("limitComputer").innerHTML = max_Machines;
  document.getElementById("machines_Number").innerHTML =
    usedMachines + "/" + max_Machines;
}

window.addEventListener("load", function () {
  usableComputer();
});

/*Liste des devices dispo */
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", function () {
  const subMenu = document.querySelector(".dropdown-menu");
  if (subMenu.style.display === "flex") {
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "flex";
  }
});

const devices = [
  /*{
    name: "Punchnox",
    date: "2022-01-01",
    status: "Hors-ligne",
    country: "France",
    data: "Données 1",
  },*/
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

const logs = [
  /*{
    nom: "Utilisateur 1",
    ip: "192.168.0.1",
    action: "Ouverture de session",
    réponse: "Succès",
    date: "2022-01-01 12:34:56",
    données: "Données 1",
    résultat: "Réussi",
  },*/
];

const logsBody = document.querySelector("#logs-body");

for (const log of logs) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${log.nom}</td>
      <td>${log.ip}</td>
      <td>${log.action}</td>
      <td>${log.réponse}</td>
      <td>${log.date}</td>
      <td>${log.données}</td>
      <td>${log.résultat}</td>
  `;
  tr.addEventListener("click", () => {
    console.log(log);
  });
  logsBody.appendChild(tr);
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
    const visibleTrs = Array.from(trs).filter(
      (tr) => tr.style.display !== "none"
    );
    if (visibleTrs.length > 0) {
      visibleTrs[0].click();
    }
  }
});
