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

function initializeTVs() {
  const container = document.getElementById("tvContainerContent");
  const overlay = document.getElementById("overlayContent");
  const closeBtn = document.getElementById("closeBtnContent");
  let isExpanded = false;

  tvData.forEach((data) => {
    const tv = createTV(data);
    container.appendChild(tv);

    tv.addEventListener("click", (e) => {
      if (isExpanded) return;

      // Expand TV
      tv.classList.add("expanded-content");
      const thumbnail = tv.querySelector(".tv-thumbnail");
      const content = tv.querySelector(".tv-content-content");

      // Power on effect sequence
      setTimeout(() => {
        thumbnail.style.display = "none";
        content.classList.add("active");
      }, 100);

      overlay.style.display = "block";
      closeBtn.style.display = "block";
      isExpanded = true;

      document.querySelectorAll(".tv-item-content").forEach((item) => {
        if (item !== tv) {
          item.classList.add("pointer-events-none");
        }
      });
    });
  });

  function closeExpandedTV() {
    const expandedTV = document.querySelector(".expanded-content");
    if (expandedTV) {
      expandedTV.classList.remove("expanded-content");
      const thumbnail = expandedTV.querySelector(".tv-thumbnail");
      const content = expandedTV.querySelector(".tv-content-content");

      content.classList.remove("active");
      thumbnail.style.display = "flex";

      overlay.style.display = "none";
      closeBtn.style.display = "none";
      isExpanded = false;

      document.querySelectorAll(".tv-item-content").forEach((item) => {
        item.classList.remove("pointer-events-none");
      });
    }
  }

  closeBtn.addEventListener("click", closeExpandedTV);
  overlay.addEventListener("click", closeExpandedTV);
}
function initializeInterface() {
  // Clock Display
  function updateClock() {
    const now = new Date();
    const timeDisplay = document.getElementById("clockDisplay");
    timeDisplay.textContent = now.toTimeString().split(" ")[0];
  }
  setInterval(updateClock, 1000);

  // Channel Number
  let currentChannel = 0;
  function updateChannel() {
    currentChannel = (currentChannel + 1) % 100;
    const channelDisplay = document.getElementById("channelNumber");
    channelDisplay.textContent = currentChannel.toString().padStart(2, "0");
  }
  setInterval(updateChannel, 3000);

  // Enhanced TV Content
  tvData.forEach((data) => {
    data.content = `
      <div class="retro-header mb-4 border-b border-green-500 pb-2">
        <div class="text-xs mb-1">CHANNEL ${data.id
          .toString()
          .padStart(2, "0")}</div>
        <h2 class="text-xl">${data.label}</h2>
      </div>
      <div class="content-body">
        ${data.content}
      </div>
      <div class="retro-footer mt-4 text-xs">
        <div class="signal-strength">SIGNAL STRENGTH: ▂ ▃ ▅ ▂ ▇</div>
        <div class="frequency">FREQUENCY: ${(87.5 + data.id * 0.2).toFixed(
          1
        )} MHz</div>
      </div>
    `;
  });
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
