let RatedNumber;

function selectRate(element) {
    const circles = document.querySelectorAll(".rate-container .circle");

    // Remove 'selected' class from all elements
    for (let i = 0; i < circles.length; i++) {
        circles[i].classList.remove("selected");
    }

    // Add 'selected' class to the clicked element
    element.classList.add("selected");
    
    RatedNumber = element.innerText;
    console.log("Clicked rate: " + RatedNumber);

}

function submit() {
    if (RatedNumber) {

        const result = document.getElementById("result");
        result.innerHTML = RatedNumber;

        const page_main = document.getElementById("page-main");
        page_main.style.display = "none";

        const page_result = document.getElementById("page-result");
        page_result.style.display = "flex";

    } else {
        alert(`Please rate before click submit.`);
    }
}

