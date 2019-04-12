let startBtn = document.getElementById("submit");

$(".dropdown-toggle").dropdown();

// $(".dropdown-item").on("click", element => {
//   console.log("clicked", element.value);

//   $(".btn-group").text("new");
// });

startBtn.addEventListener("click", () => {
  event.preventDefault();
  // {
  //     name: "Ahmed",
  //         photo:
  //     "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  //         scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  // }
  let name = document.getElementById("name").value;
  let photo = document.getElementById("photo").value;
  console.log(name, photo);
});
