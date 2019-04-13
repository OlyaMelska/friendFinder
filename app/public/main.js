let submitBtn = document.getElementById("submit");
let answers = document.getElementsByClassName("answers");
let arrOfNumb = [];
console.log(answers);
for (let i = 0; i < 10; i++) {
  console.log(answers[i]);
  let value = answers[i].options[answers[i].selectedIndex].value;
  console.log(`value ${i} = ${value}`);
  arrOfNumb.push(value);
}
arrOfNumb.forEach(element => {
  console.log(element);
});
let arrOfNumb2 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];

submitBtn.addEventListener("click", () => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let photo = document.getElementById("photo").value;
  let newFriend = {
    name: name,
    photo: photo,
    scores: arrOfNumb2
  };
  console.log(name, photo);
  $.post("/api/friends", newFriend).then(response => {
    console.log("Response" + response);
    alert("Successfully");
  });
});
$.get("/api/friends").then(response => {
  console.log("ok", response);
  response.forEach(element => {
    let name = document.createElement("h2");
    name.innerHTML = element;
    $("#result-div").append(name);
  });
});

// let friends = [
//   {
//     name: "Ahmed",
//     photo:
//       "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
//   },
//   {
//     name: "Tom",
//     photo:
//       "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     scores: [1, 1, 1, 6, 1, 1, 1, 6, 1, 1]
//   },
//   {
//     name: "Billy",
//     photo:
//       "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     scores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
//   }
// ];

// let newUser = {
//   name: "Olya",
//   photo:
//     "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   scores: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
// };
// let findMatch = (data, currentUser) => {
//   //Function that finds a user with the smallest difference in answerder questions
//   let arr = []; //to store total diffrences and name
//   let totalDifferenceArr = []; //to store just total difference
//   let friendResult = ""; //function will return the name
//   data.forEach(element => {
//     let sum = 0;
//     let obj = {}; //to save name and total difference for each element of data array
//     for (let i = 0; i < element.scores.length; i++) {
//       let numb = Math.abs(element.scores[i] - currentUser.scores[i]);
//       sum += numb; //calculating an absolute diffrence
//       obj = {
//         name: element.name,
//         url: element.photo,
//         totalDifference: sum
//       };
//     }
//     arr.push(obj); //saving names & sums
//     totalDifferenceArr.push(sum); //saving just sums
//   });

//   let result = Math.min.apply(null, totalDifferenceArr); //looking for the smallest value
//   arr.forEach(element => {
//     if (element.totalDifference === result) {
//       friendResult = element;
//       console.log("Element ", friendResult);
//     } else {
//       friendResult = "No match found";
//     }
//   });
//   return friendResult;
// };

// let foundFriend = findMatch(friends, newUser);
// let h2 = $("<h2>");
// let img = $("<img>");
// let imgDiv = $("<div>");
// h2.text(foundFriend.name);
// img.attr("src", foundFriend.url);
// imgDiv.append(img);
// $(".result-div").append(h2, imgDiv);
// console.log(`your match:\nname: ${foundFriend.name} photo: ${foundFriend.url}`);
