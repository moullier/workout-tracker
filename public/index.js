init();

async function init() {
  console.log(location.search.split("=")[1]);
  if (location.search.split("=")[1] === undefined) {
    console.log("in the if");
    const workout = await API.getLastWorkout();
    console.log("workout = ");
    console.log(workout);
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

