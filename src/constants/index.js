// All site copy lives here. Edit this file to change what the portfolio says.

export const navLinks = [
  { id: "work", title: "Work" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

export const profile = {
  roles: ["Full stack developer", "AI engineer", "Salesforce developer"],
  location: "Riyadh, Saudi Arabia",
  availability: "Available for freelance and full time",
  email: "aaqibmir.ab@gmail.com",
  links: [
    { label: "GitHub", value: "WHOKASHMIRI", href: "https://github.com/WHOKASHMIRI" },
    { label: "LinkedIn", value: "WHOKASHMIRI", href: "https://linkedin.com/in/WHOKASHMIRI" },
  ],
};

// Add `url` to a project to turn its row into a link.
export const projects = [
  { id: 1, name: "Célia", year: 2025, context: "Gobelins", skills: ["Website", "WebGL", "Three.js", "React Three Fiber", "GSAP"] },
  { id: 2, name: "Anna", year: 2024, context: "Gobelins", skills: ["Website", "WebGL", "Three.js", "React Three Fiber", "GSAP"] },
  { id: 3, name: "Lucas", year: 2023, context: "Gobelins", skills: ["Website", "WebGL", "Three.js", "React Three Fiber", "GSAP"] },
  { id: 4, name: "Mia", year: 2022, context: "Gobelins", skills: ["Website", "WebGL", "Three.js", "React Three Fiber", "GSAP"] },
];

export const about = {
  heading: "Passionate about creative challenges",
  body: "I combine frontend craft with backend engineering, building scalable web applications, automation systems and interactive interfaces with React, TypeScript, Python and cloud-native technologies.",
  stack: [
    { title: "Immersive", items: ["React", "GSAP", "Three.js", "WebGL", "Canvas", "Framer Motion", "Lenis", "Blender", "Shaders"] },
    { title: "Professional", items: ["TypeScript", "Sass / SCSS", "Node.js", "PHP", "WordPress", "Twig", "Gulp", "MySQL", "Figma"] },
  ],
  facts: [
    ["Since", "2021"],
    ["Location", "Riyadh, Saudi Arabia"],
    ["Education", "Engineering, Computer Science"],
    ["Status", "Available"],
    ["CSSDA", "UI, UX, Innovation"],
    ["BestCSS", "Site of the Day"],
  ],
};

export const route = [
  { name: "Kashmir", lng: 74.7973, lat: 34.0837 },
  { name: "Chandigarh", lng: 76.7794, lat: 30.7333 },
  { name: "Delhi", lng: 77.1025, lat: 28.7041 },
  { name: "Mumbai", lng: 72.8777, lat: 19.076 },
  { name: "Chennai", lng: 80.2707, lat: 13.0827 },
  { name: "Riyadh", lng: 46.6753, lat: 24.7136 },
  { name: "Madinah", lng: 39.6178, lat: 24.5247 },
  { name: "Jeddah", lng: 39.1979, lat: 21.4858 },
];
