let sz = "";for (const elem of latnivalokTomb) {
        sz += `
        <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="kartya2">
                        <img class="kep" src="kepek/${elem.kep}" alt="${elem.nev}">            
                        <p class="nev">${elem.nev}</p>            
                        <p class="leirasSzoveg">${elem.leiras}</p>        
                    </div>    
                </div>        
            `
}
document.getElementById("foDiv3").innerHTML = sz;