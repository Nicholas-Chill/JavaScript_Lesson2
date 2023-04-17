/* Page content */
const homePageContent = `
<h1>Welcome!</h1>
<p id="my-id">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus itaque qui et suscipit! In, quis! Eveniet, odit iste! Minima placeat asperiores incidunt dolorem deserunt dolorum laborum explicabo magni non iure!</p>
<p class="my-class">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ab aliquam quam quos quae laboriosam sequi dolor exercitationem minima natus? Mollitia obcaecati quae fuga eligendi consequuntur. Impedit labore animi laboriosam?</p>
<p class="two classes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique dolore minima tempore eligendi quis odit dicta sapiente. Molestias, asperiores exercitationem iure voluptatem magni totam quisquam ipsum cupiditate id rerum?</p>
`;

const aboutPageContent = `
    <h1>About Me</h1>
    <p>Here you can write a little bit about yourself</p>
`;

const hobbiesPageContent = `
    <h1>Hobbies</h1>
    <p>My Hobbies</p>
`;

const contactPageContent = `
    <h1>Contact</h1>
    <p>Contact Me</p>
`;

/* Functions */
//Grad elements
const mainContent = document.querySelector("#main-content");
const navLinks = document.querySelectorAll("nav a");

// Add event listeners to all elements in navLinks
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Prevent page reload
        const page = link.dataset.page; // Get the string from each data-page attribute
        setActiveNavLink(link); // Move the "active" class
        updatePageContent(page); // Render new page
    });
});

// Set the "active" class on the page we are currently on
// Way 1
/*function setActiveNavLink(link) {
    for(nav of navLinks) {
        nav.classList.remove("active");
    }
        link.classList.add("active");
}*/
// Way 2
function setActiveNavLink(link) {
    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
}

// Update page content
function updatePageContent(page) {
    switch(page) {
        case "home":
            mainContent.innerHTML = homePageContent;
            break;
        case "about":
            mainContent.innerHTML = aboutPageContent;
            break;
        case "hobbies":
            mainContent.innerHTML = hobbiesPageContent;
            break;
        case "contact":
            mainContent.innerHTML = contactPageContent;
            break;
        default:
            mainContent.innerHTML = homePageContent;
            break;
    }
}

// Since we do not have an empty div and need some defult content
// We run this function once without a proberty to get the defult case of the switch
updatePageContent(); 