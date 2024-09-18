interface Korkinet {
    serialNumber: string;
    model: string;
    batteryLevel: string;
    imgUrl: string;
    color: string;
    status: 'available' | 'inRepair' | 'unavailable';
}

const baseUrl = 'https://66ea8cd455ad32cda4795e68.mockapi.io/api/v1/korkinet'








async function getAllKorkinet() : Promise<Korkinet> {
    const response = await fetch(baseUrl)
    const data = await response.json();
    console.log(data);
    showAllKorkinet(data)
    return data;
}
getAllKorkinet()

const table = document.querySelector('#tableKorkinet') as HTMLTableElement;
const tbody = document.createElement('tbody') as HTMLTableSectionElement;
table.appendChild(tbody);

function showAllKorkinet(korkinet: Korkinet[]) : void {
    korkinet.forEach(k => {
        const trow = document.createElement('tr') as HTMLTableRowElement;
        const tImg = document.createElement('td');
        const tModel = document.createElement('td');
        const tBattery = document.createElement('td');
        const tLocation = document.createElement('td');
        const tColor = document.createElement('td');
        const tStatus = document.createElement('td');
        const tBtn = document.createElement('td');
        
        const btnRemove = document.createElement('button') as HTMLButtonElement;
        const btnEdit = document.createElement('button') as HTMLButtonElement;

        btnRemove.classList.add('btnRemove');
        btnEdit.classList.add('btnEdit');
        
        

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
        tBtn.appendChild(btnAdd);
        tBtn.appendChild(btnFilter);
        trow.appendChild(tBtn);
        
        
    })

    }



    function renderLocation() : string {

    }