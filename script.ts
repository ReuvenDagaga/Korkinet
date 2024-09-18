interface Korkinet {
  serialNumber: string;
  model: string;
  batteryLevel: number;
  imgUrl: string;
  color: string;
  status: number;
}


const container = document.querySelector('#container') as HTMLDivElement;
const yyy = document.querySelector('#yyy') as HTMLDivElement;
const baseUrl = "https://66ea8cd455ad32cda4795e68.mockapi.io/api/v1/korkinet";


async function getAllKorkinet(): Promise<Korkinet> {
  const response = await fetch(baseUrl);
  const data = await response.json();
  showAllKorkinet(data);
  return data;
}
getAllKorkinet();


const table = document.querySelector("#tableKorkinet") as HTMLTableElement;
const tbody = document.createElement("tbody") as HTMLTableSectionElement;
table.appendChild(tbody);


function showAllKorkinet(korkinet: Korkinet[]): void {
  korkinet.forEach((k) => {
    const trow = document.createElement("tr") as HTMLTableRowElement;
    const tImg = document.createElement("td");
    const tModel = document.createElement("td");
    const tBattery = document.createElement("td");
    const tLocation = document.createElement("td");
    const tColor = document.createElement("td");
    const tStatus = document.createElement("td");
    const tBtn = document.createElement("td");

    const btnRemove = document.createElement("button") as HTMLButtonElement;
    const btnEdit = document.createElement("button") as HTMLButtonElement;

    btnRemove.classList.add("btnRemove");
    btnEdit.classList.add("btnEdit");

    btnRemove.textContent = "Remove";
    btnEdit.textContent = "Edit";

    tImg.textContent = k.imgUrl;
    tModel.textContent = k.model;
    tBattery.textContent = k.batteryLevel;
    tLocation.textContent = renderLocation();
    tColor.textContent = k.color;
    tStatus.textContent = k.status;

    tbody.appendChild(trow);
    trow.appendChild(tImg);
    trow.appendChild(tModel);
    trow.appendChild(tBattery);
    trow.appendChild(tLocation);
    trow.appendChild(tColor);
    trow.appendChild(tStatus);
    tBtn.appendChild(btnRemove);
    tBtn.appendChild(btnEdit);
    trow.appendChild(tBtn);
  });
}


// function renderLocation(): string {}


async function createKorkinet(korkinet: Korkinet): Promise<Korkinet> {
  await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(korkinet),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
}


function addK() {

    
    
    const addDiv = document.createElement("div");
    
    let serialNumber = document.createElement("input");
    serialNumber.type = "text";
    serialNumber.textContent = "";
    serialNumber.classList.add('serialNumber')
    serialNumber.placeholder = "serialNumber";
    
    let model = document.createElement("input");
    model.type = "text";
    model.classList.add('model')
    model.placeholder = "model";
    
    let batteryLevel = document.createElement("input");
    batteryLevel.type = "text";
    batteryLevel.classList.add('batteryLevel')
    batteryLevel.placeholder = "batteryLevel";
    
    let imgUrl = document.createElement("input");
    imgUrl.type = "text";
    imgUrl.classList.add('imgUrl')
    imgUrl.placeholder = "imgUrl";

    let color = document.createElement("input");
    color.type = "text";
    color.classList.add('color')
    color.placeholder = "color";
    
    let status = document.createElement("input");
    status.type = "text";
    status.classList.add('status')
    status.placeholder = "status";
    
    let buttonSend = document.createElement("button");
    buttonSend.textContent = "Add Korkinet";
    buttonSend.classList.add('buttonSend')
    buttonSend.id = "buttonSend";
    
    const newK: Korkinet = {
        serialNumber: serialNumber.textContent,
        model: "",
        batteryLevel: 0,
        imgUrl: "",
        color: "",
        status: 1,
    }; 
    
    

    addDiv.appendChild(serialNumber);
    addDiv.appendChild(model);
    addDiv.appendChild(batteryLevel);
    addDiv.appendChild(imgUrl);
    addDiv.appendChild(color);
    addDiv.appendChild(status);
    addDiv.appendChild(buttonSend);
    yyy.appendChild(addDiv)
    
    
  createKorkinet(newK);

}




















const addBtn = document.querySelector("#btnAdd") as HTMLButtonElement;
addBtn?.addEventListener("click", openPageAddKorkinet);



function openPageAddKorkinet() {

  container.style.display = 'none'
  yyy.style.display = 'block'

}


