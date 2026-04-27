let sz=""
for (const elem of japanTomb) {
    sz+=`
        <div class="col-sm-3">
            <div class="kartya">
                <p class="text-center cimecske">${elem.szokas}</p>
                <p class="leirasSzoveg">${elem.mondat}</p>
                <p class="text-center"><img class="img-fluid kep" src="kepek/${elem.kep}" alt=""></p>
            </div>
        </div>
    `
}
document.getElementById("foDiv").innerHTML=sz
