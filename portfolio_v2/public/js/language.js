// Language management
const LanguageManager = {
  currentLang: 'en',

  translations: {
    en: {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills - Tools',
      certifications: 'Certifications',
      windowTitle: 'Sohaib Mokhliss - Portfolio Terminal',
      homeIntro: "Hi! I'm <span class=\"text-blue\">Sohaib Mokhliss</span>, a security-minded engineer building <span class=\"text-orange\">DevOps automation</span> and <span class=\"text-pink\">resilient infrastructures</span>."
    },
    fr: {
      home: 'Accueil',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences - Outils',
      certifications: 'Certifications',
      windowTitle: 'Sohaib Mokhliss - Portfolio Terminal',
      homeIntro: "Salut ! Je suis <span class=\"text-blue\">Sohaib Mokhliss</span>, un ingenieur oriente securite qui cree des <span class=\"text-orange\">automatismes DevOps</span> et des <span class=\"text-pink\">infrastructures resilientes</span>."
    }
  },

  init() {
    // Get saved language from localStorage or default to 'en'
    this.currentLang = localStorage.getItem('portfolio-language') || 'en';
    this.updateUI();
    this.updateStaticText();
    this.attachEventListeners();
  },

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('portfolio-language', lang);
    this.updateUI();
    this.updateStaticText();

    // Reload content with new language
    if (typeof displayContent === 'function') {
      displayContent();
    }
  },

  getDataPath(filename) {
    const dataFolder = this.currentLang === 'fr' ? 'data-fr' : 'data';
    return `${dataFolder}/${filename}.json`;
  },

  updateUI() {
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      if (lang === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  },

  updateStaticText() {
    const t = this.translations[this.currentLang];

    // Update sidebar section titles
    const homeTitle = document.querySelector('#home .title p');
    if (homeTitle) homeTitle.textContent = t.home;

    const experienceTitle = document.querySelector('#experience-title p');
    if (experienceTitle) experienceTitle.textContent = t.experience;

    const projectsTitle = document.querySelector('#projects .title p');
    if (projectsTitle) projectsTitle.textContent = t.projects;

    const skillsTitle = document.querySelector('#skills-title p');
    if (skillsTitle) skillsTitle.textContent = t.skills;

    const certificationsTitle = document.querySelector('#certifications-title p');
    if (certificationsTitle) certificationsTitle.textContent = t.certifications;

    // Update window title
    const windowTitle = document.querySelector('.window-title');
    if (windowTitle) windowTitle.textContent = t.windowTitle;

    // Update home section paragraph in sidebar
    const homeParagraph = document.querySelector('#home-section-paragraph');
    if (homeParagraph) homeParagraph.innerHTML = t.homeIntro;
  },

  attachEventListeners() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        this.setLanguage(lang);
      });
    });
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => LanguageManager.init());
} else {
  LanguageManager.init();
}
