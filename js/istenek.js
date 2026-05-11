let sz = "";

for (const elem of vallasTomb) {
    sz += `
        <div class="col-md-3 col-sm-6 mb-4">
            <div class="kartya">

                <div class="cimecske">${elem.nev}</div>

                <img src="kepek/${elem.kep}" class="kep">

                <div class="leirasSzoveg">
                    ${elem.feladat}
                </div>

            </div>
        </div>
    `;
}