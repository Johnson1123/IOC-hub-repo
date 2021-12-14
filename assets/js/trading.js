var asdCon = document.getElementById("asd-con");
// asdCon.style.display = "none";
var dpdBtn = document.getElementsByClassName("dpd-btn");
var asdOpen = document.getElementById("asd-open");

asdOpen.addEventListener("click", function () {
  if (asdCon.style.display == "block") {
    asdCon.style.display = "none";
  } else {
    asdCon.style.display = "block";
  }
});

for (let i = 0; i < dpdBtn.length; i++) {
  dpdBtn[i].addEventListener("click", function () {
    var dpdDiv = this.nextElementSibling;
    if (dpdDiv.style.display == "block") {
      dpdDiv.style.display = "none";
    } else {
      dpdDiv.style.display = "block";
    }
  });
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => {
    console.log(error);
  });

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "johnson",
    body: "akin",
    userId: 1,
  })
  .then((resp) => {
    console.log(resp);
  });

axios.get("https://jsonplaceholder.typicode.com/posts",{
  headers:{
    
  }
}).then((resp) => {
  console.log(resp.data);
});
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
// const book = {
//   title: "book one",
//   author: "john doe",
//   year: 2018,
//   getSummary: function () {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   },
// };
// function book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function () {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   };
// }
// function magazine(title, author, month) {
//   book.call(this, title, author);
//   this.month = month;
// }
// const book1 = new book("book two", "john smith", 2018);
// const book2 = new book("book three", "john smith", 2019);
// const book3 = new magazine("book three", "john smith", 2019);
// console.log(book1.author.toUpperCase());
// console.log(book1.getSummary());
// console.log(book2.author.toUpperCase());
// console.log(book2.getSummary());
// console.log(book3);
