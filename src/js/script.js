gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline()
  .from(".tv, .tv-layer", {
    duration: 0.8,
    scale: 0,
    opacity: 0,
    rotation: -45,
    stagger: 0.1,
    ease: "power2.out",
  })
  .to(".static", {
    duration: 0.3,
    opacity: 0.5,
    ease: "none",
  })
  .to(".tv-content", {
    duration: 0.3,
    opacity: 1,
    ease: "none",
    onComplete: enterWebsite,
  });

function showContent() {
  let content = document.getElementById("content");
  content.classList.remove = "hidden";
}

function enterWebsite() {
  const layers = gsap.utils.toArray(".tv-layer");
  const backtext = document.getElementById("background-text-content");
  const tl = gsap.timeline();
  
  // Determine if the screen is smaller and adjust transform origin dynamically
  const isSmallScreen = window.innerWidth < 600;

  // Adjust transformOrigin based on the screen size
  const transformOriginValue = isSmallScreen ? "50% 30%" : "50% 50%";

  tl.to(".tv-content", {
    duration: 0.3,
    scale: 0.8,
    opacity: 0,
    transformOrigin: transformOriginValue, // Adjusted for small screens
    ease: "power2.in",
  })
    .to(".tv", {
      duration: 1,
      scale: 4,
      z: 2000,
      opacity: 0,
      transformOrigin: transformOriginValue, // Adjusted for small screens
      ease: "power2.in",
    })
    .to(
      layers,
      {
        duration: 0.8,
        scale: 4,
        z: 1000,
        opacity: 0,
        stagger: 0.2,
        transformOrigin: transformOriginValue, // Fix for the bottom being empty
        ease: "power2.in",
      },
      "-=0.8"
    )
    .to("#intro", {
      duration: 0.3,
      opacity: 0,
      display: "none",
      ease: "power2.inOut",
      onComplete: () => {
        document.getElementsByTagName("body")[0].style.overflow = "visible";
        document.getElementById("content")?.classList.remove("hidden");
        document.getElementById('textBackground').classList.remove('opacity-80');
        document.getElementById('textBackground').classList.add('opacity-10');
      },
    });
}


//  CONTENT

const tvData = [
  {
    id: 1,
    label: "About Me",
    thumbnail: "SIGNAL SEARCHING...",
    content: ` 
          <h2 class="text-xl mb-4">About Me</h2>
          <p>I’m good at programming, web development, problem-solving, and fixing computer issues. I’ve also won a few local and regional competitions. I can work on my own or with a team, no problem.</p>
        `,
  },
  {
    id: 2,
    label: "Skills",
    thumbnail: "SIGNAL SEARCHING...",
    content: ` 
          <h2 class="text-xl mb-4 font-semibold">Skills</h2>
          <ul class="space-y-4">
            <li class="border *:border-gray-100 p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold mb-2">Front-End Development</h3>
              <p>Proficient in HTML, CSS, and JavaScript, with the ability to manipulate the DOM using JavaScript.</p>
            </li>
            <li class="border border-gray-100 p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold mb-2">Back-End Development</h3>
              <p>Experienced in PHP programming and capable of building applications using the Laravel framework.</p>
            </li>
            <li class="border border-gray-100 p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold mb-2">CSS Frameworks</h3>
              <p>Skilled in using TailwindCSS and Bootstrap for developing modern, responsive user interfaces.</p>
            </li>
          </ul>
        `,
  },
  {
    id: 3,
    label: "Projects",
    thumbnail: "SIGNAL SEARCHING...",
    content: ` 
          <h2 class="text-xl mb-4">Projects</h2>
          <ul>
            <li>Travel Website with built-in CMS</li>
            <li>Advance Quiz App with multiple type of question and answer</li>
          </ul>
        `,
  },
  {
    id: 4,
    label: "Contact",
    thumbnail: "SIGNAL SEARCHING...",
    content: ` 
          <h2 class="text-xl mb-4">Contact</h2>
          <p class="mb-2">Find me:</p>
          <div class="flex flex-col space-y-2">
              <a href="https://instagram.com/nastromeister" target="_blank" class="flex items-center pl-0 p-2 transition">
                  <i class="fa-brands fa-instagram mr-2"></i> @nastromeister
              </a>
              <a href="https://github.com/NastroCoding" target="_blank" class="flex items-center pl-0 p-2 transition">
                  <i class="fa-brands fa-github mr-2"></i> NastroCoding
              </a>
              <a href="https://www.youtube.com/@nastromeister" target="_blank" class="flex items-center pl-0 p-2 transition">
                  <i class="fa-brands fa-youtube mr-2"></i> @nastromeister
              </a>
              <a href="https://steamcommunity.com/id/nastromeister/" target="_blank" class="flex items-center pl-0 p-2 transition">
                  <i class="fa-brands fa-steam mr-2"></i> Nastro
              </a>
          </div>
        `,
  },
  {
    id: 5,
    label: "Achievements",
    thumbnail: "SIGNAL SEARCHING...",
    content: ` 
          <h2 class="text-xl mb-4">Achievements</h2>
          <ul>
            <li>1st Place LKS South Jakarta 2023</li>
            <li>2nd Runner-up LKS Provincial South Jakarta 2023</li>
            <li>2nd Place LKS South Jakarta 2024</li>
          </ul>
        `,
  },
  {
    id: 6,
    label: "Media",
    thumbnail: "SIGNAL SEARCHING...",
    content: ` 
          <h2 class="text-xl mb-4">Media</h2>
          <div class="grid grid-cols-2 gap-2">
            <div class="border border-yellow-500 p-1">Project 1</div>
            <div class="border border-yellow-500 p-1">Project 2</div>
          </div>
        `,
  },
];

function createTV(data) {
  const tv = document.createElement("div");
  tv.className = "tv-item-content";
  tv.innerHTML = ` 
        <div class="tv-frame-content">
          <div class="tv-screen-content">
            <div class="tv-static-content"></div>
            <div class="tv-thumbnail">${data.thumbnail}</div>
            <div class="scanline-content"></div>
            <div class="tv-content-content">${data.content}</div>
          </div>
        </div>
        <div class="tv-label-content">${data.label}</div>
      `;
  return tv;
}

// Initialize GSAP animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".tv-item-content", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".tv-container-content",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse",
  },
});

const textBackground = document.getElementById("textBackground");
const text = "THEMIDNIGHTCHANNELTVWORLDGOLDENERA";

function fillBackground() {
  // Clear existing content
  textBackground.innerHTML = "";

  // Calculate the number of lines needed based on actual viewport height
  const spanHeight = 80; // Approximate height in pixels (5rem ≈ 80px)
  const viewportHeight = window.innerHeight;
  const numberOfLines = Math.ceil(viewportHeight / spanHeight) + 2;

  // Create and append spans
  for (let i = 0; i < numberOfLines; i++) {
    const span = document.createElement("span");
    span.textContent = text;
    textBackground.appendChild(span);
  }
}

// Initialize and handle window resize
window.addEventListener("load", fillBackground);
window.addEventListener("resize", fillBackground);

// If you have other initialization functions, include them here
window.addEventListener("load", () => {
  if (typeof initializeTVs === "function") initializeTVs();
  if (typeof initializeInterface === "function") initializeInterface();
});
