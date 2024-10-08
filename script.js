var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var container = document.querySelector('#container');
var yyy = document.querySelector('#yyy');
var baseUrl = "https://66ea8cd455ad32cda4795e68.mockapi.io/api/v1/korkinet";
function getAllKorkinet() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(baseUrl)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    showAllKorkinet(data);
                    return [2 /*return*/, data];
            }
        });
    });
}
getAllKorkinet();
var table = document.querySelector("#tableKorkinet");
var tbody = document.createElement("tbody");
table.appendChild(tbody);
function showAllKorkinet(korkinet) {
    korkinet.forEach(function (k) {
        var trow = document.createElement("tr");
        var tImg = document.createElement("td");
        var tModel = document.createElement("td");
        var tBattery = document.createElement("td");
        var tLocation = document.createElement("td");
        var tColor = document.createElement("td");
        var tStatus = document.createElement("td");
        var tBtn = document.createElement("td");
        var btnRemove = document.createElement("button");
        var btnEdit = document.createElement("button");
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
function renderLocation() { }
function createKorkinet(korkinet) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(baseUrl, {
                        method: "POST",
                        body: JSON.stringify(korkinet),
                        headers: { "Content-type": "application/json; charset=UTF-8" },
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var newK = {
    serialNumber: "string",
    model: "string",
    batteryLevel: 0,
    imgUrl: "string",
    color: "string",
    status: 1,
};
createKorkinet(newK);
var addBtn = document.querySelector("#btnAdd");
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", openPageAddKorkinet);
function openPageAddKorkinet() {
    container.style.display = 'none';
    var addDiv = document.createElement("div");
    var serialNumber = document.createElement("input");
    serialNumber.type = "text";
    serialNumber.placeholder = "serialNumber";
    var model = document.createElement("input");
    model.type = "text";
    model.placeholder = "model";
    var batteryLevel = document.createElement("input");
    batteryLevel.type = "text";
    batteryLevel.placeholder = "batteryLevel";
    var imgUrl = document.createElement("input");
    imgUrl.type = "text";
    imgUrl.placeholder = "imgUrl";
    var color = document.createElement("input");
    color.type = "text";
    color.placeholder = "color";
    var status = document.createElement("input");
    status.type = "text";
    status.placeholder = "status";
    var buttonSend = document.createElement("button");
    buttonSend.textContent = "Add Korkinet";
    buttonSend.id = "buttonSend";
    // let filterButton = document.createElement("button");
    // filterButton.textContent = "סנן לפי משימות שהושלמו";
    // filterButton.id = "filterButton";
    addDiv.appendChild(serialNumber);
    addDiv.appendChild(model);
    addDiv.appendChild(batteryLevel);
    addDiv.appendChild(imgUrl);
    addDiv.appendChild(color);
    addDiv.appendChild(status);
    addDiv.appendChild(buttonSend);
    yyy.appendChild(addDiv);
}
