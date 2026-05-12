document.getElementById("menu").innerHTML = `

<nav class="navbar navbar-expand-sm navbar-dark japan-navbar">

  <div class="container-fluid">

    <a class="navbar-brand japan-logo" href="index.html">
      <img src="kepek/flag.png" class="logo-kep">
      <span class="logo-szoveg">日本</span>
    </a>

    <button class="navbar-toggler japan-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#menuNav">

      <span class="navbar-toggler-icon"></span>

    </button>

    <div class="collapse navbar-collapse" id="menuNav">

      <ul class="navbar-nav ms-auto japan-menu">

        <li class="nav-item">
          <a class="nav-link japan-link" href="index.html">
            ⛩ Japán
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link japan-link" href="istenek.html">
            🌸 Hitvilág
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link japan-link" href="japan.html">
            🍜 Szokások
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link japan-link" href="latnivalok.html">
            🗻 Látnivalók
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link japan-link" href="manga_anime.html">
            📖 Manga / Anime
          </a>
        </li>

      </ul>

    </div>

  </div>

</nav>

`;