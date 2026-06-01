const tagsHome = ["Mission", "Gallery", "Blog", 
    "Video Platform", "Who we are", "Reviews", 
    "Solutions", "Our Partners", "Social Networks", 
    "Games and Activities", "Partnership Programs"
];

const tagsVideo = ["New Social Networking Platform",  "Weather Watch", 
    "Product Reviews", "Online Contests", "Weekly Messages",
    "Honest Contractor Puppets", "Our Theme Song", "Reality TV Platform"
];

const tagsInvolve = ["Your Input Matters", "Contacts", ];

const who = document.getElementById("Who");
const section = document.getElementById("Whomessage");
const videos = document.getElementById("videos");
const Media = document.getElementById("VM");
const involve = document.getElementById("involve");
const your_involvement = document.getElementById("YI");

function CreateMenu (list, menuName, sectionType) {
    let timer;

    let popup1 = document.createElement("div");
    popup1.id = "popup1";
    sectionType.appendChild(popup1);

    function Home() {
        popup1.innerHTML = "";

        for (let i = 0; i < list.length; i++) {
            const newTag = document.createElement("a");
            newTag.textContent = list[i];
            popup1.appendChild(newTag);

            if (list === tagsHome && tagsHome[i] == "Mission") {
                newTag.href = "Mission.html";
            }

        }
    }

    menuName.addEventListener("mouseenter", () => {
        Home();
        clearTimeout(timer);
        popup1.classList.add("show");
    });

    menuName.addEventListener("mouseleave", () => {
        timer = setTimeout(() => {
            popup1.classList.remove("show");
        }, 170);
    });

    popup1.addEventListener("mouseenter", () => {
        clearTimeout(timer);
    });

    popup1.addEventListener("mouseleave", () => {
        timer = setTimeout(() => {
            popup1.classList.remove("show");
        }, 170);
    });
}


CreateMenu(tagsHome, who, section);
CreateMenu(tagsVideo, videos, Media);
CreateMenu(tagsInvolve, involve, your_involvement);
