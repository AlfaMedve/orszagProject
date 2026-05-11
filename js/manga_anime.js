let sz = "";

for (const elem of mangaTomb) {
  sz += `
    <div class="col-md-4 d-flex justify-content-center">
      <div class="manga-card text-center">

        <a href="${elem.link}" target="_blank">
          <img src="${elem.kep}" class="manga-kep" alt="${elem.nev}">
        </a>

        <h2 class="manga-cim">${elem.nev}</h2>
        <p class="manga-leiras">${elem.leiras}</p>
        <p class="manga-extra">✍ ${elem.szerzo} | 📅 ${elem.ev}</p>

      </div>
    </div>
  `;
}

document.getElementById("foDivManga").innerHTML = sz;