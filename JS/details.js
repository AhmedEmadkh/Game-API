import UI from "./UI.js";
const ui = new UI();
class details {
  displayed = false;
  // Display the details
  display(res) {
    let box = `
      <header class="hstack justify-content-between">
        <h1 class="text-center h3 py-4">Details Game</h1>
        <button class="btn-close btn-close-white" id="btnClose"></button>
      </header>
      <div class="row g-4" id="detailsContent">
        <div class="col-md-4">
          <img src="${res.thumbnail}" class="w-100" alt="image details">
        </div>
        <div class="col-md-8">
          <h3>Title: ${res.title}</h3>
          <p>Category: <span class="badge text-bg-info">${res.genre}</span></p>
          <p>Platform: <span class="badge text-bg-info">${res.platform}</span></p>
          <p>Status: <span class="badge text-bg-info">${res.status}</span></p>
          <p class="small">${res.description}</p>
          <a class="btn btn-outline-warning" target="_blank" href="${res.game_url}">Show Game</a>
        </div>
      </div>
    `;
    $(".container-details").html(box);
    $(".games, .details").toggleClass("d-none");
    this.displayed = true;
    console.log("Heeee details");
    // Updated event listener for hiding details
    console.log("asdfasd", this.displayed);
    if (this.displayed) {
      console.log("Display", this.displayed);
      this.hide();
    }
  }

  // *********************************************************************
  // Hide the details
  hide() {
    // Remove previous click event listeners before adding a new one
    $(document).off("click", "#btnClose");

    // Using arrow function to maintain the context of 'this'
    $(document).on("click", "#btnClose", () => {
      this.displayed = false;
      $(".games, .details").toggleClass("d-none");
      console.log("Heeee hide");
    });
  }
}

export default details;
