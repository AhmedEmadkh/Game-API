import details from "./details.js";
const detailsClass = new details();
class games {
  
  // Hiding the section
  hide() {
    let id;
    $(document).on("click", ".card", function () {
      id = $(this).data("id");
      console.log($(this).data("id"));
    });
    $(document).on("click", ".card", () => {
      if(!details.displayed){
        this.getDetails(id);
      }

    });
  }
  // *********************************************************************
  // Get the Details from the API
  async getDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "95759b6d5amsh6f586fc8b24b7dep1297a3jsnf3e0fe94f625",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const url = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await url.json();
    console.log(response);
    // details.displayed = true;
    if(!details.displayed){
      detailsClass.display(response);
    }
    console.log("games",details.displayed);
  }
}
export default games;
