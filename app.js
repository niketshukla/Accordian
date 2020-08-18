//using selectors inside the element
const questions = document.querySelectorAll(".question");
console.log(questions);
questions.forEach(function (accord) {
    const btn = accord.querySelector(".question-btn");
    console.log(btn);

    btn.addEventListener("click", function () {

    questions.forEach(function (item) {
        console.log(item);
        if (item !== accord) {
        item.classList.remove("show-text");
        }
    });
    accord.classList.toggle("show-text");
  });
});
