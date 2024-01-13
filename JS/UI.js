class UI {
  // Get the data
  async getData(cat) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "95759b6d5amsh6f586fc8b24b7dep1297a3jsnf3e0fe94f625",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
      options
    );
    const response = await api.json();
    this.display(response);
  }
  // *********************************************************************
  // Display the data
  display(res) {
    let box = "";
    for (const element of res) {
      box += `
      <div class="col">
      <div data-id="${element.id}" class="card h-100 bg-transparent" role="button" "="">
       <div class=" card-body">
        <figure class="position-relative">
          <img class="card-img-top object-fit-cover h-100" src="${element.thumbnail}">
  
        </figure>
  
        <figcaption>
  
          <div class="hstack justify-content-between">
            <h3 class="h6 small text-white">${element.title}</h3>
            <span class="badge text-bg-primary p-2">Free</span>
          </div>
  
          <p class="card-text small text-center opacity-50 text-white">
            ${element.short_description}
          </p>
  
        </figcaption>
      </div>
  
      <footer class="card-footer small hstack justify-content-between">
  
        <span class="badge badge-color">${element.genre}</span>
        <span class="badge badge-color">${element.platform}</span>
  
      </footer>
    </div>
  </div>
      `;
    }
    document.querySelector(".row").innerHTML = box;
    $(".details").addClass("d-none");
  }
}

export default UI;
