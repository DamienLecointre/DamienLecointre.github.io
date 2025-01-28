// SKIP INTRO ANIMATION CONSTANTS

const skipBtn = document.querySelector(".skip-btn");
const introContainer = document.querySelector(".container");
const copyright = document.querySelector(".copyright");
const navLine = document.querySelector(".line");
const underlineMobile = document.querySelector(".underline-mobile");
const socialContainer = document.querySelector(".social-container");
const navContainer = document.querySelector(".nav-container");

// PORTFOLIO CONSTANTS

const portfolioContainer = document.querySelector(".portfolio-container");
const portfolioTitle = document.querySelector(".portfolio-title");
const portfolioSubtitle = document.querySelector(".subtitle-portfolio");
const portfolioArrow = document.querySelector(".portfolio-arrow");
const portfolioArrowCircle = document.querySelector(".portfolio-arrow-circle");
const portfolioChevron = document.querySelector(".portfolio-chevron");
let isFirstVisit = true;

// ABOUT CONSTANTS

const aboutContainer = document.querySelector(".about-container");
const aboutTextContainer = document.querySelector(".about-text-container");
const aboutTitle = document.querySelector(".about-title");
const aboutArrow = document.querySelector(".about-arrow");
const aboutArrowCircle = document.querySelector(".about-arrow-circle");
const aboutChevron = document.querySelector(".about-chevron");
const aboutLink = document.querySelector(".about-link");
const aboutLinkMobile = document.querySelector(".about-link-mobile");

// RESUME CONSTANTS

const resumeContainer = document.querySelector(".resume-container");
const resumeTitle = document.querySelector(".resume-title");
const resumeWrapper = document.querySelector(".resume-wrapper");
const skillsContainer = document.querySelector(".skills-container");
const htmlLevel = document.querySelector(".html-level");
const cssLevel = document.querySelector(".css-level");
const scssLevel = document.querySelector(".scss-level");
const jsLevel = document.querySelector(".js-level");
const nodeLevel = document.querySelector(".node-level");
const reactLevel = document.querySelector(".react-level");
const gitLevel = document.querySelector(".git-level");
const githubLevel = document.querySelector(".github-level");
const psdLevel = document.querySelector(".psd-level");
const aiLevel = document.querySelector(".ai-level");
const idLevel = document.querySelector(".id-level");
const formationContainer = document.querySelector(".formation-container");
const experienceContainer = document.querySelector(".experience-container");
const resumeArrow = document.querySelector(".resume-arrow");
const resumeArrowCircle = document.querySelector(".resume-arrow-circle");
const resumeChevron = document.querySelector(".resume-chevron");
const resumeLink = document.querySelector(".resume-link");
const resumeLinkMobile = document.querySelector(".resume-link-mobile");

// WORKS CONSTANTS

const worksContainer = document.querySelector(".works-container");
const worksTitle = document.querySelector(".works-title");
const projectsWrapper = document.querySelector(".projects-wrapper");
const website1 = document.querySelector(".website1");
const website2 = document.querySelector(".website2");
const website3 = document.querySelector(".website3");
const website4 = document.querySelector(".website4");
const website5 = document.querySelector(".website5");
const website6 = document.querySelector(".website6");
const underlineHigh = document.querySelector(".underline-high");
const underlineLow = document.querySelector(".underline-low");
const scrollDotLeft = document.querySelector(".scroll-dot-left");
const scrollDotRight = document.querySelector(".scroll-dot-right");
const chevronLeft = document.querySelector(".fa-chevron-left");
const chevronRight = document.querySelector(".fa-chevron-right");
const worksLink = document.querySelector(".works-link");
const worksLinkMobile = document.querySelector(".works-link-mobile");

// SLIDE CARROUSEL CONSTANTS

const galleryWrapper = document.querySelector(".gallery-wrapper");
const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");
const dots = document.querySelectorAll(".scroll-dot");

// console.log(chevronRight);

// -------------------------------------------------------------------------------

// SKIP INTRO ANIMATION

skipBtn.addEventListener("click", () => {
  introContainer.classList.add("intro-hidden");
  portfolioContainer.classList.add("skip-text-animation");
  portfolioArrow.classList.add("skip-text-animation");
  copyright.classList.add("skip-text-animation");
  navLine.classList.add("skip-line-animation");
  navMobileBtn.classList.add("nav-mobile-btn-skip-animation");
  underlineMobile.classList.add("underline-mobile-skip-line-animation");
  socialContainer.classList.add("skip-text-animation");
  navContainer.classList.add("skip-text-animation");
});

// SKIP PORTFOLIO CONTAINER TO ABOUT CONTAINER

portfolioArrow.addEventListener("click", () => {
  if (isFirstVisit) {
    isFirstVisit = false;
  }
  portfolioArrowCircle.classList.add("arrow-circle-hidden");
  portfolioChevron.classList.add("chevron-hidden");
  portfolioArrow.classList.add("portfolio-arrow-slide-up");
  portfolioTitle.classList.add("portfolio-title-slide-up");
  portfolioSubtitle.classList.add("subtitle-container-slide-up");
  portfolioContainer.classList.add("portfolio-container-slide-up");
  aboutTextContainer.classList.add("text-container-slide-up");
  aboutTitle.classList.add("about-title-slide-up");
  aboutArrow.classList.add("about-arrow-slide-up");
  aboutLink.classList.add("navLink-visited");
});

aboutLink.addEventListener("click", () => {
  if (!isFirstVisit) {
    resetAnimations();
  }
  resetAnimations();
  portfolioArrowCircle.classList.add("arrow-circle-hidden");
  portfolioChevron.classList.add("chevron-hidden");
  portfolioArrow.classList.add("portfolio-arrow-slide-up");
  portfolioTitle.classList.add("portfolio-title-slide-up");
  portfolioSubtitle.classList.add("subtitle-container-slide-up");
  portfolioContainer.classList.add("portfolio-container-slide-up");
  aboutTextContainer.classList.add("text-container-slide-up");
  aboutTitle.classList.add("about-title-slide-up");
  aboutArrow.classList.add("about-arrow-slide-up");
  aboutLink.classList.add("navLink-visited");
});

aboutLinkMobile.addEventListener("click", () => {
  if (!isFirstVisit) {
    resetAnimations();
  }
  resetNavMobile();
  resetAnimations();
  portfolioArrowCircle.classList.add("arrow-circle-hidden");
  portfolioChevron.classList.add("chevron-hidden");
  portfolioArrow.classList.add("portfolio-arrow-slide-up");
  portfolioTitle.classList.add("portfolio-title-slide-up");
  portfolioSubtitle.classList.add("subtitle-container-slide-up");
  portfolioContainer.classList.add("portfolio-container-slide-up");
  aboutTextContainer.classList.add("text-container-slide-up");
  aboutTitle.classList.add("about-title-slide-up");
  aboutArrow.classList.add("about-arrow-slide-up");
});

// SKIP ABOUT CONTAINER TO EXPERIENCE CONTAINER

aboutArrow.addEventListener("click", () => {
  aboutArrowCircle.classList.add("arrow-circle-hidden");
  aboutChevron.classList.add("chevron-hidden");
  aboutTextContainer.classList.add("text-container-slide-up2");
  aboutTextContainer.classList.remove("text-container-slide-up");
  aboutTitle.classList.add("about-title-slide-up2");
  aboutTitle.classList.remove("about-title-slide-up");
  aboutContainer.classList.add("about-container-slide-up");
  aboutLink.classList.remove("navLink-visited");
  resumeTitle.classList.add("resume-title-slide-up");
  skillsContainer.classList.add("skills-container-slide-up");
  htmlLevel.classList.add("skill-level-full-width");
  cssLevel.classList.add("skill-level-full-width");
  scssLevel.classList.add("skill-level-full-width");
  jsLevel.classList.add("skill-level-full-width");
  nodeLevel.classList.add("skill-level-full-width");
  reactLevel.classList.add("skill-level-full-width");
  gitLevel.classList.add("skill-level-full-width");
  githubLevel.classList.add("skill-level-full-width");
  psdLevel.classList.add("skill-level-full-width");
  aiLevel.classList.add("skill-level-full-width");
  idLevel.classList.add("skill-level-full-width");
  formationContainer.classList.add("formation-container-slide-up");
  experienceContainer.classList.add("experience-container-slide-up");
  resumeArrow.classList.add("resume-arrow-slide-up");
  resumeLink.classList.add("navLink-visited");
});

resumeLink.addEventListener("click", () => {
  resetAnimations();

  portfolioArrowCircle.classList.add("arrow-circle-hidden");
  portfolioChevron.classList.add("chevron-hidden");
  portfolioArrow.classList.add("portfolio-arrow-slide-up");
  portfolioTitle.classList.add("portfolio-title-slide-up");
  portfolioSubtitle.classList.add("subtitle-container-slide-up");
  portfolioContainer.classList.add("portfolio-container-slide-up");

  aboutArrowCircle.classList.add("arrow-circle-hidden");
  aboutChevron.classList.add("chevron-hidden");
  aboutTextContainer.classList.add("text-container-slide-up2");
  aboutTextContainer.classList.remove("text-container-slide-up");
  aboutTitle.classList.add("about-title-slide-up2");
  aboutTitle.classList.remove("about-title-slide-up");
  aboutContainer.classList.add("about-container-slide-up");
  aboutLink.classList.remove("navLink-visited");
  resumeTitle.classList.add("resume-title-slide-up");
  skillsContainer.classList.add("skills-container-slide-up");
  htmlLevel.classList.add("skill-level-full-width");
  cssLevel.classList.add("skill-level-full-width");
  scssLevel.classList.add("skill-level-full-width");
  jsLevel.classList.add("skill-level-full-width");
  nodeLevel.classList.add("skill-level-full-width");
  reactLevel.classList.add("skill-level-full-width");
  gitLevel.classList.add("skill-level-full-width");
  githubLevel.classList.add("skill-level-full-width");
  psdLevel.classList.add("skill-level-full-width");
  aiLevel.classList.add("skill-level-full-width");
  idLevel.classList.add("skill-level-full-width");
  formationContainer.classList.add("formation-container-slide-up");
  experienceContainer.classList.add("experience-container-slide-up");
  resumeArrow.classList.add("resume-arrow-slide-up");
  resumeLink.classList.add("navLink-visited");
});

resumeLinkMobile.addEventListener("click", () => {
  resetNavMobile();
  resetAnimations();
  portfolioArrowCircle.classList.add("arrow-circle-hidden");
  portfolioChevron.classList.add("chevron-hidden");
  portfolioArrow.classList.add("portfolio-arrow-slide-up");
  portfolioTitle.classList.add("portfolio-title-slide-up");
  portfolioSubtitle.classList.add("subtitle-container-slide-up");
  portfolioContainer.classList.add("portfolio-container-slide-up");
  aboutArrowCircle.classList.add("arrow-circle-hidden");
  aboutChevron.classList.add("chevron-hidden");
  aboutTextContainer.classList.add("text-container-slide-up2");
  aboutTextContainer.classList.remove("text-container-slide-up");
  aboutTitle.classList.add("about-title-slide-up2");
  aboutTitle.classList.remove("about-title-slide-up");
  aboutContainer.classList.add("about-container-slide-up");
  resumeTitle.classList.add("resume-title-slide-up");
  skillsContainer.classList.add("skills-container-slide-up");
  htmlLevel.classList.add("skill-level-full-width");
  cssLevel.classList.add("skill-level-full-width");
  scssLevel.classList.add("skill-level-full-width");
  jsLevel.classList.add("skill-level-full-width");
  nodeLevel.classList.add("skill-level-full-width");
  reactLevel.classList.add("skill-level-full-width");
  gitLevel.classList.add("skill-level-full-width");
  githubLevel.classList.add("skill-level-full-width");
  psdLevel.classList.add("skill-level-full-width");
  aiLevel.classList.add("skill-level-full-width");
  idLevel.classList.add("skill-level-full-width");
  formationContainer.classList.add("formation-container-slide-up");
  experienceContainer.classList.add("experience-container-slide-up");
  resumeArrow.classList.add("resume-arrow-slide-up");
});

// SLIDERS RESUME SECTION

const tabSkills = document.querySelector(".tab-skills");
const tabFormation = document.querySelector(".tab-formation");
const tabExperience = document.querySelector(".tab-experience");
const crosslineSkills = document.querySelector(".crossline-skills");
const crosslineFormation = document.querySelector(".crossline-formation");
const crosslineExperience = document.querySelector(".crossline-experience");
const skillsWrapperResponsive = document.querySelector(
  ".skills-wrapper-responsive"
);
const formationWrapperResponsive = document.querySelector(
  ".formation-wrapper-responsive"
);
const experienceWrapperResponsive = document.querySelector(
  ".experience-wrapper-responsive"
);

crosslineSkills.addEventListener("click", () => {
  crosslineSkills.classList.toggle("crossline-rotation");
  skillsWrapperResponsive.classList.toggle("skills-wrapper-responsive-show");
  tabFormation.classList.toggle("tab-wrapper-hidden");
  tabExperience.classList.toggle("tab-wrapper-hidden");
  skillsContainer.classList.toggle("skills-container-full-width");
});

crosslineFormation.addEventListener("click", () => {
  crosslineFormation.classList.toggle("crossline-rotation");
  formationWrapperResponsive.classList.toggle(
    "formation-wrapper-responsive-show"
  );
  tabSkills.classList.toggle("tab-wrapper-hidden");
  tabExperience.classList.toggle("tab-wrapper-hidden");
  formationContainer.classList.toggle("formation-container-full-width");
});

crosslineExperience.addEventListener("click", () => {
  crosslineExperience.classList.toggle("crossline-rotation");
  experienceWrapperResponsive.classList.toggle(
    "experience-wrapper-responsive-show"
  );
  tabSkills.classList.toggle("tab-wrapper-hidden");
  tabFormation.classList.toggle("tab-wrapper-hidden");
  experienceContainer.classList.toggle("experience-container-full-width");
});

// SKIP EXPERIENCE CONTAINER TO WORKS CONTAINER

resumeArrow.addEventListener("click", () => {
  resumeArrowCircle.classList.add("arrow-circle-hidden");
  resumeChevron.classList.add("chevron-hidden");
  resumeTitle.classList.add("resume-title-slide-up2");
  resumeTitle.classList.remove("resume-title-slide-up");
  skillsContainer.classList.add("skills-container-slide-up2");
  skillsContainer.classList.remove("skills-container-slide-up");
  formationContainer.classList.add("formation-container-slide-up2");
  formationContainer.classList.remove("formation-container-slide-up");
  experienceContainer.classList.add("experience-container-slide-up2");
  experienceContainer.classList.remove("experience-container-slide-up");
  resumeContainer.classList.add("resume-container-slide-up");
  worksTitle.classList.add("works-title-slide-show");
  underlineHigh.classList.add("underline-high-full-width");
  underlineLow.classList.add("underline-low-full-width");
  website1.classList.add("website1-show");
  website2.classList.add("website2-show");
  website3.classList.add("website3-show");
  website4.classList.add("website1-show");
  website5.classList.add("website2-show");
  website6.classList.add("website3-show");
  scrollDotLeft.classList.add("scroll-dot-show");
  scrollDotRight.classList.add("scroll-dot-show");
  chevronLeft.classList.add("chevron-show");
  chevronRight.classList.add("chevron-show");
  resumeLink.classList.remove("navLink-visited");
  worksLink.classList.add("navLink-visited");
});

worksLink.addEventListener("click", () => {
  resetAnimations();

  portfolioArrowCircle.classList.add("arrow-circle-hidden");
  portfolioChevron.classList.add("chevron-hidden");
  portfolioArrow.classList.add("portfolio-arrow-slide-up");
  portfolioTitle.classList.add("portfolio-title-slide-up");
  portfolioSubtitle.classList.add("subtitle-container-slide-up");
  portfolioContainer.classList.add("portfolio-container-slide-up");
  aboutContainer.classList.add("about-container-slide-up");
  aboutTextContainer.classList.add("text-container-slide-up2");

  resumeArrowCircle.classList.add("arrow-circle-hidden");
  resumeChevron.classList.add("chevron-hidden");
  resumeTitle.classList.add("resume-title-slide-up2");
  resumeTitle.classList.remove("resume-title-slide-up");
  skillsContainer.classList.add("skills-container-slide-up2");
  skillsContainer.classList.remove("skills-container-slide-up");
  formationContainer.classList.add("formation-container-slide-up2");
  formationContainer.classList.remove("formation-container-slide-up");
  experienceContainer.classList.add("experience-container-slide-up2");
  experienceContainer.classList.remove("experience-container-slide-up");
  resumeContainer.classList.add("resume-container-slide-up");
  worksTitle.classList.add("works-title-slide-show");
  underlineHigh.classList.add("underline-high-full-width");
  underlineLow.classList.add("underline-low-full-width");
  website1.classList.add("website1-show");
  website2.classList.add("website2-show");
  website3.classList.add("website3-show");
  website4.classList.add("website1-show");
  website5.classList.add("website2-show");
  website6.classList.add("website3-show");
  // scrollDotLeft.classList.add("scroll-dot-show");
  // scrollDotRight.classList.add("scroll-dot-show");
  chevronLeft.classList.add("chevron-show");
  chevronRight.classList.add("chevron-show");
  resumeLink.classList.remove("navLink-visited");
  worksLink.classList.add("navLink-visited");
});

worksLinkMobile.addEventListener("click", () => {
  resetAnimations();
  resetNavMobile();

  portfolioArrowCircle.classList.add("arrow-circle-hidden");
  portfolioChevron.classList.add("chevron-hidden");
  portfolioArrow.classList.add("portfolio-arrow-slide-up");
  portfolioTitle.classList.add("portfolio-title-slide-up");
  portfolioSubtitle.classList.add("subtitle-container-slide-up");
  portfolioContainer.classList.add("portfolio-container-slide-up");
  aboutContainer.classList.add("about-container-slide-up");
  aboutTextContainer.classList.add("text-container-slide-up2");

  resumeArrowCircle.classList.add("arrow-circle-hidden");
  resumeChevron.classList.add("chevron-hidden");
  resumeTitle.classList.add("resume-title-slide-up2");
  resumeTitle.classList.remove("resume-title-slide-up");
  skillsContainer.classList.add("skills-container-slide-up2");
  skillsContainer.classList.remove("skills-container-slide-up");
  formationContainer.classList.add("formation-container-slide-up2");
  formationContainer.classList.remove("formation-container-slide-up");
  experienceContainer.classList.add("experience-container-slide-up2");
  experienceContainer.classList.remove("experience-container-slide-up");
  resumeContainer.classList.add("resume-container-slide-up");
  worksTitle.classList.add("works-title-slide-show");
  underlineHigh.classList.add("underline-high-full-width");
  underlineLow.classList.add("underline-low-full-width");
  website1.classList.add("website1-show");
  website2.classList.add("website2-show");
  website3.classList.add("website3-show");
  website4.classList.add("website1-show");
  website5.classList.add("website2-show");
  website6.classList.add("website3-show");
  // scrollDotLeft.classList.add("scroll-dot-show");
  // scrollDotRight.classList.add("scroll-dot-show");
  chevronLeft.classList.add("chevron-show");
  chevronRight.classList.add("chevron-show");
});

// SLIDE CARROUSEL WORKS CONTAINER

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".projects-wrapper").length;

function updateSlider(index) {
  const offset = -index * 100;
  galleryWrapper.style.transform = `translateX(${offset}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

leftArrow.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  updateSlider(currentIndex);
});

rightArrow.addEventListener("click", () => {
  currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
  updateSlider(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});

// SHOW BURGERMENU

const navMobileBtn = document.querySelector(".nav-mobile-btn");
const lineMobileTop = document.querySelector(".line-mobile-top");
const lineMobileMiddle = document.querySelector(".line-mobile-middle");
const lineMobileBottom = document.querySelector(".line-mobile-bottom");
const navMobileWrapper = document.querySelector(".nav-mobile-wrapper");

navMobileBtn.addEventListener("click", () => {
  lineMobileTop.classList.toggle("line-mobile-top-crossline");
  lineMobileMiddle.classList.toggle("line-mobile-middle-crossline");
  lineMobileBottom.classList.toggle("line-mobile-bottom-crossline");
  navMobileWrapper.classList.toggle("nav-mobile-wrapper-show");
});

// ********************************************************************************

function resetAnimations() {
  aboutTextContainer.classList.remove("text-container-slide-up");
  aboutTitle.classList.remove("about-title-slide-up");
  aboutArrow.classList.remove("about-arrow-slide-up");
  aboutLink.classList.remove("navLink-visited");

  aboutArrowCircle.classList.remove("arrow-circle-hidden");
  aboutChevron.classList.remove("chevron-hidden");
  aboutTextContainer.classList.remove("text-container-slide-up2");
  aboutTitle.classList.remove("about-title-slide-up2");
  aboutContainer.classList.remove("about-container-slide-up");
  resumeTitle.classList.remove("resume-title-slide-up");
  skillsContainer.classList.remove("skills-container-slide-up");
  htmlLevel.classList.remove("skill-level-full-width");
  cssLevel.classList.remove("skill-level-full-width");
  scssLevel.classList.remove("skill-level-full-width");
  jsLevel.classList.remove("skill-level-full-width");
  nodeLevel.classList.remove("skill-level-full-width");
  reactLevel.classList.remove("skill-level-full-width");
  gitLevel.classList.remove("skill-level-full-width");
  githubLevel.classList.remove("skill-level-full-width");
  psdLevel.classList.remove("skill-level-full-width");
  aiLevel.classList.remove("skill-level-full-width");
  idLevel.classList.remove("skill-level-full-width");
  formationContainer.classList.remove("formation-container-slide-up");
  experienceContainer.classList.remove("experience-container-slide-up");
  resumeArrow.classList.remove("resume-arrow-slide-up");
  resumeLink.classList.remove("navLink-visited");

  resumeArrowCircle.classList.remove("arrow-circle-hidden");
  resumeChevron.classList.remove("chevron-hidden");
  resumeTitle.classList.remove("resume-title-slide-up2");
  skillsContainer.classList.remove("skills-container-slide-up2");
  formationContainer.classList.remove("formation-container-slide-up2");
  experienceContainer.classList.remove("experience-container-slide-up2");
  resumeContainer.classList.remove("resume-container-slide-up");
  worksTitle.classList.remove("works-title-slide-show");
  underlineHigh.classList.remove("underline-high-full-width");
  underlineLow.classList.remove("underline-low-full-width");
  website1.classList.remove("website1-show");
  website2.classList.remove("website2-show");
  website3.classList.remove("website3-show");
  website4.classList.remove("website1-show");
  website5.classList.remove("website2-show");
  website6.classList.remove("website3-show");
  // scrollDotLeft.classList.remove("scroll-dot-show");
  // scrollDotRight.classList.remove("scroll-dot-show");
  chevronLeft.classList.remove("chevron-show");
  chevronRight.classList.remove("chevron-show");
  worksLink.classList.remove("navLink-visited");
}

function resetNavMobile() {
  lineMobileTop.classList.remove("line-mobile-top-crossline");
  lineMobileMiddle.classList.remove("line-mobile-middle-crossline");
  lineMobileBottom.classList.remove("line-mobile-bottom-crossline");
  navMobileWrapper.classList.remove("nav-mobile-wrapper-show");
}
