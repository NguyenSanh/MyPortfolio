/** Resize to mobile screen */
const resizeOps = () => {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);


const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls"); // Parent div; container of the buttons
const sectBtn = document.querySelectorAll(".control"); // Actual individul buttons
const allSections = document.querySelector(".main-content"); // body element

function PageTransitions() {
  /* Button click active class */
  for (let i = 0; i < sectBtn.length; i++) {
    // Loop through all the buttons .control
    sectBtn[i].addEventListener("click", function () {
      // When a btn is clicked, let that btn becomes the active button
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  /* Alternate active-btn class across each section upon clicking on it */
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id; // dataset refers to the data-id of the element I clicked on
    if (id) {
      // Remove selected from the other buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove("active"); // remove active class from other buttons
      });
      e.target.classList.add("active"); // Only assign target button to active class

      // Hide other sections ??
      sections.forEach((section) => {
        section.classList.remove("active"); // classList allows for adding & removing styling classes for elements
      });

      const element = document.getElementById(id); // Target id of the current elemeent
      element.classList.add("active");
    }
  });

  // Theme Toggle Icon Button
  const themeButton = document.querySelector(".theme-btn"); // Create a var and set it to target the HTML class theme-btn
  // themeButton will 'listen' for a click event
  themeButton.addEventListener("click", () => {
    // We wanr to target the ENTIRE HTML body element to change the entire theme display of the websit
    let element = document.body; // 'let' keyword is always block-scoped;
    element.classList.toggle("light-mode"); // Will add 'light-mode' to the HTML body's list of CSS classes
  });
}

PageTransitions();

/* Create a function to autofill mailto href link in Contact section */
function email() {
  // Get name
  var fullName =
    "Hello, my name is " + document.getElementById("name").value + ". ";
  var emailSubject = document.getElementById("Subject").value; // Set to equal text written inside subject input
  var emailBody = document.getElementById("Body").value; // Set to equal text written inside body textarea input
  window.location.href =
    "mailto:jsn006@ucsd.edu?subject=" +
    emailSubject +
    "&body=" +
    fullName +
    emailBody;
}
