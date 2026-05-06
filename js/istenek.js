let sz=""
for (const elem of vallasTomb) {
    sz+=`
        <div class="col-md-4 mb-4">
            <div class="card japan-card h-100">
                <img src="kepek/${elem.kep}" class="card-img-top japan-img" alt="">
                <div class="card-body">
                    <h5 class="card-title text-center">${elem.nev}</h5>
                    <p class="card-text">${elem.feladat}</p>
                </div>
            </div>
        </div>
    `
}
document.getElementById("foDiv2").innerHTML=sz