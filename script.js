// Traducciones
const translations = {
    es: {
        // Navigation
        'nav-about': 'About',
        'nav-education': 'Estudios',
        'nav-experience': 'Trabajo',
        'nav-projects': 'Proyectos',
        'nav-skills': 'Skills',
        'nav-contact': 'Contacto',
        
        // Hero
        'hero-title-1': 'Ingeniero de',
        'hero-title-2': 'Telecomunicaciones',
        'hero-subtitle': 'Conectando el futuro',
        'stat-years': 'Años de experiencia',
        'stat-projects': 'Proyectos completados',
        'stat-dedication': 'Dedicación y esfuerzo',
        
        // About
        'about-title': 'About Me',
        'about-lead': 'Soy un ingeniero de telecomunicaciones apasionado por las antenas y el diseño y gestión de redes.',
        'about-p1': 'Como persona proactiva que soy, creo firmemente en el poder de la acción y en la iniciativa; entendiendo que la respuesta por defecto siempre es "no" si no se intenta. Para mí, el fracaso no es algo a temer, sino una oportunidad de aprendizaje que permite descubrir enfoques alternativos para alcanzar los objetivos. Poseo una pasión innata por la creación y el aprendizaje; busco activamente conocimiento e inspiración en diversas fuentes, como Internet, profesionales con experiencia y mis propias vivencias. Afronto los desafíos con una actitud positiva y abierta, y estoy comprometido a dedicar el esfuerzo necesario para lograr mis metas.',
        'about-p2': 'Durante mis estudios, he desarrollado un gran interés por diversas áreas, siendo las Antenas y las Redes, su diseño e implementación, unas de mis favoritas. Mis intereses personales abarcan desde viajar, el automovilismo, la lectura, mantenerme al día sobre tecnologías emergentes, hasta la fotografía, el cine y hacer deporte.',
        'about-cta1': 'Hablemos',
        'about-cta2': 'Descargar CV',
        
        // Education
        'education-title': 'Estudios',
        'edu1-title': 'Doble Master en Ingeniería de Telecomunicaciones y Ciberseguridad',
        'edu1-specialization': 'Especialización en Ciberseguridad',
        'edu1-item1': 'Proyecto fin de master no realizado todavia',
        'edu1-item2': 'Estudios realizados mientras trabajo',
        'edu2-title': 'Año de intercambio en San Francisco',
        'edu2-focus': 'Año de estudios en el extranjero con el programa "Movilidad No Europea"',
        'edu2-item1': 'Prácticas en gestión de proyectos',
        'edu3-title': 'Grado en Ingeniería en Tecnologías de Telecomunicación',
        'edu3-focus': 'Nota media de 7,56',
        'edu3-item1': 'Trabajo de Fin de Grado de "Measurement and Characterization of Radio Signals in Amplitude and Phase" con nota de 8,5',
        'edu3-item2': 'Estudios del grado en modalidad bilingüe',
        'edu3-item3': 'Participación en el "Vodafone Challenge 2023"',
        'edu3-item4': 'Año de intercambio en San Francisco',
        'edu4-title': 'Bachillerato',
        'edu4-focus': 'Estudios bilingües',
        'edu4-item1': 'Nota media de 8,41',
        'edu4-item2': 'Participación en el grupo de teatro en inglés',
        
        // Experience
        'experience-title': 'Experiencia Laboral',
        'exp1-date': '2025 - Presente',
        'exp1-title': 'Becario en Tecnología 5G Cloud Native',
        'exp1-description': 'Contribuyendo actualmente al equipo de testing de las soluciones 5G Cloud Native de Ericsson, con enfoque en mejorar la eficiencia de la fase de pruebas del sistema mediante modelado de datos y técnicas de inteligencia artificial',
        'exp1-item1': 'Desarrollo de una plataforma cloud-native que centraliza y visualiza resultados de tests de Jenkins mediante una arquitectura de microservicios en Kubernetes, con backend REST, frontend web y dashboards en Grafana',
        'exp1-item2': 'Desarrollo de un framework modular para automatizar pruebas de penetración con Robot Framework y Python, incluyendo carga dinámica de módulos y un menú CLI interactivo para ejecutar workflows de seguridad',
        'exp1-item3': 'Reducción de latencia en un 40% mediante implementación de edge computing',
        'exp1-item4': 'Gestión de equipo de 5 ingenieros junior',
        'exp2-description': 'Desarrollo de soluciones de red móvil y fija',
        'exp2-item1': 'Participación en proyectos de despliegue de 5G NSA/SA',
        'exp2-item2': 'Optimización de redes LTE mediante análisis de KPIs',
        'exp2-item3': 'Implementación de soluciones de backhaul de fibra óptica',
        'exp2-item4': 'Formación técnica a equipos de operadores',
        'exp3-description': 'Soporte técnico y mantenimiento de infraestructura de red',
        'exp3-item1': 'Monitorización y troubleshooting de redes móviles 3G/4G',
        'exp3-item2': 'Configuración de equipos de core network',
        'exp3-item3': 'Análisis de tráfico y optimización de capacidad',
        'exp3-item4': 'Documentación técnica de procedimientos',
        
        // Projects
        'projects-title': 'Proyectos Destacados',
        'proj1-title': 'Red 5G Industrial',
        'proj1-description': 'Implementación de red 5G privada para una fábrica inteligente, habilitando comunicación ultra-confiable de baja latencia (URLLC) para aplicaciones críticas.',
        'proj2-title': 'Sistema de Monitorización de Redes',
        'proj2-description': 'Desarrollo de plataforma de análisis en tiempo real para monitorización de KPIs de red con machine learning para detección predictiva de fallos.',
        'proj3-title': 'Optimización de Backhaul 5G',
        'proj3-description': 'Diseño e implementación de solución de backhaul híbrido (fibra/microondas) para despliegue 5G en zonas rurales, optimizando costes y rendimiento.',
        'proj4-description': 'Migración de red WAN tradicional a arquitectura SD-WAN para multinacional, mejorando flexibilidad y reduciendo costes operativos en un 35%.',
        'proj-button': 'Ver más detalles',
        'tag-fiber': 'Fibra Óptica',
        'tag-microwave': 'Microondas',
        'tag-security': 'Security',
        
        // Skills
        'skills-title': 'Habilidades Técnicas',
        'skills-cat1': 'Tecnologías de Red',
        'skills-cat2': 'Protocolos y Estándares',
        'skills-cat3': 'Herramientas y Programación',
        'skills-cat4': 'Cloud y Virtualización',
        'skill-fiber': 'Fibra Óptica',
        'skill-automation': 'Python/Automatización',
        
        // Contact
        'contact-title': 'Contacto',
        'contact-lead': '¿Tienes un proyecto en mente o quieres colaborar?',
        'contact-text': 'Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para formar parte de tu visión.',
        'contact-phone': 'Teléfono',
        'contact-email-cta': 'Enviar correo',

        
        // Footer
        'footer-copyright': '© 2025 Noel Andolz Aguado. Todos los derechos reservados.',
    },
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-education': 'Education',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        
        // Hero
        'hero-title-1': 'Telecommunications',
        'hero-title-2': 'Engineer',
        'hero-subtitle': 'Connecting the future',
        'stat-years': 'Year of experience',
        'stat-projects': 'Completed projects',
        'stat-dedication': 'Dedication and hard work',
        
        // About
        'about-title': 'About Me',
        'about-lead': 'I am a telecommunications engineer passionate about communication technologies and developing systems that connect people.',
        'about-p1': 'As a proactive individual I believe in the power of trying; “no” is always the answer by default. Failure, to me, is not something to be feared as it provides an opportunity to learn and discover alternative approaches to achieve one´s goal. I possess an innate passion for creation and learning. I actively seek knowledge and inspiration from various sources such as the Internet, experienced individuals, and my own experiences. I approach challenges with a positive and open-minded attitude, and I am committed to putting in the necessary effort to achieve my goals.',
        'about-p2': 'Throughout my studies, I have developed an interest in various subjects, with Networks, their design, and implementation being one of my favorites, as well as Antennas. My interests include traveling, motorsport, reading, staying up-to-date on emerging technologies, photography, cinema, and practicing sports.',
        'about-cta1': 'Let\'s Talk',
        'about-cta2': 'Download Resume',
        
        // Education
        'education-title': 'Education',
        'edu1-title': 'Telecommunications engineering and cybersecurity dual master',
        'edu1-specialization': 'Specialization in Cybersecurity',
        'edu1-item1': 'Final project not done yet',
        'edu1-item2': 'Master done while working',
        'edu2-title': 'Study abroad year in San Francisco',
        'edu2-focus': 'Study abroad year thanks to the "Non European Movility Program"',
        'edu2-item1': 'Project Mangement internship',
        'edu3-title': 'Degree in Telecommunication Technologies Engineering',
        'edu3-focus': 'Average grade of 7,56',
        'edu3-item1': 'Thesis in "Measurement and Characterization of Radio Signals in Amplitude and Phase" with a grade of 8,5',
        'edu3-item2': 'Bilingual studies',
        'edu3-item3': 'Particaption in "Vodafone Challenge 2023"',
        'edu3-item4': 'Study abroad year in San Francisco',
        'edu4-title': 'Bachillerato',
        'edu4-focus': 'Bilingual studies',
        'edu4-item1': 'Average grade of 8,41',
        'edu4-item2': 'Member of the english theater group',
        
        // Experience
        'experience-title': 'Work Experience',
        'exp1-date': '2023 - Present',
        'exp1-title': 'Cloud Native 5G Technology Intern',
        'exp1-description': 'Currently contributing to the testing team for Ericsson\'s Cloud Native 5G solutions, with a focus on enhancing the efficiency of the system testing phase through data modeling and artificial intelligence techniques',
        'exp1-item1': 'Developing a cloud-native platform that centralizes and visualizes Jenkins test results using a microservices architecture on Kubernetes, featuring a REST backend, web frontend, and Grafana dashboards',
        'exp1-item2': 'Developing a modular penetration testing automation framework using Robot Framework and Python, featuring dynamic module loading and an interactive CLI for executing security testing workflows',
        'exp1-item3': '40% latency reduction through edge computing implementation',
        'exp1-item4': 'Management of team of 5 junior engineers',
        'exp2-description': 'Development of mobile and fixed network solutions',
        'exp2-item1': 'Participation in 5G NSA/SA deployment projects',
        'exp2-item2': 'LTE network optimization through KPI analysis',
        'exp2-item3': 'Implementation of fiber optic backhaul solutions',
        'exp2-item4': 'Technical training for operator teams',
        'exp3-description': 'Technical support and network infrastructure maintenance',
        'exp3-item1': 'Monitoring and troubleshooting of 3G/4G mobile networks',
        'exp3-item2': 'Core network equipment configuration',
        'exp3-item3': 'Traffic analysis and capacity optimization',
        'exp3-item4': 'Technical documentation of procedures',
        
        // Projects
        'projects-title': 'Featured Projects',
        'proj1-title': 'Industrial 5G Network',
        'proj1-description': 'Implementation of private 5G network for a smart factory, enabling ultra-reliable low-latency communication (URLLC) for critical applications.',
        'proj2-title': 'Network Monitoring System',
        'proj2-description': 'Development of real-time analysis platform for network KPI monitoring with machine learning for predictive failure detection.',
        'proj3-title': '5G Backhaul Optimization',
        'proj3-description': 'Design and implementation of hybrid backhaul solution (fiber/microwave) for 5G deployment in rural areas, optimizing costs and performance.',
        'proj4-description': 'Migration from traditional WAN to SD-WAN architecture for multinational company, improving flexibility and reducing operating costs by 35%.',
        'proj-button': 'View more details',
        'tag-fiber': 'Fiber Optic',
        'tag-microwave': 'Microwave',
        'tag-security': 'Security',
        
        // Skills
        'skills-title': 'Technical Skills',
        'skills-cat1': 'Network Technologies',
        'skills-cat2': 'Protocols and Standards',
        'skills-cat3': 'Tools and Programming',
        'skills-cat4': 'Cloud and Virtualization',
        'skill-fiber': 'Fiber Optic',
        'skill-automation': 'Python/Automation',
        
        // Contact
        'contact-title': 'Contact',
        'contact-lead': 'Do you have a project in mind or want to collaborate?',
        'contact-text': 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
        'contact-phone': 'Phone',
        'contact-email-cta': 'Send email',
        
        // Footer
        'footer-copyright': '© 2025 Noel Andolz Aguado. All rights reserved.',
    }
};

// Estado actual del idioma
let currentLanguage = localStorage.getItem('language') || 'es';

// Función para cambiar idioma
function changeLanguage(lang) {
    console.log('🔄 Cambiando idioma a:', lang.toUpperCase());
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Actualizar todos los elementos con data-lang
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            // Para elementos con data-text (glitch effect)
            if (element.hasAttribute('data-text')) {
                element.setAttribute('data-text', translations[lang][key]);
            }
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar el botón de idioma
    const langText = document.getElementById('langText');
    const langCurrent = document.querySelector('.lang-current');
    
    if (langText) {
        langText.textContent = lang === 'es' ? 'EN' : 'ES';
    }
    
    if (langCurrent) {
        langCurrent.textContent = lang.toUpperCase();
    }
    
    // Actualizar el atributo lang del html
    document.documentElement.lang = lang;
    
    console.log('✅ Idioma actualizado a:', lang.toUpperCase());
}

// Event listener para el botón de cambio de idioma
function setupLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    console.log('🔍 Buscando botón de idioma...', langToggle ? '✓ ENCONTRADO' : '✗ NO ENCONTRADO');
    
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            console.log('🌐 CLICK! Cambiando de', currentLanguage, 'a', newLang);
            changeLanguage(newLang);
            
            // Alerta temporal para verificar que funciona (puedes quitarla después)
            // Descomenta la siguiente línea para ver una confirmación visual:
            // alert('✓ Idioma cambiado a: ' + (newLang === 'es' ? 'Español' : 'English'));
        });
        console.log('✅ Event listener de idioma añadido correctamente');
        console.log('💡 Haz clic en el botón 🌐 para cambiar el idioma');
    } else {
        console.error('❌ ERROR: No se encontró el botón de idioma con ID "langToggle"');
    }
}

// Inicializar todo cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM cargado - Inicializando idioma:', currentLanguage);
        changeLanguage(currentLanguage);
        setupLanguageToggle();
    });
} else {
    // El DOM ya está cargado
    console.log('DOM ya cargado - Inicializando idioma:', currentLanguage);
    changeLanguage(currentLanguage);
    setupLanguageToggle();
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate toggle icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Timeline expand/collapse functionality
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    const expandBtn = item.querySelector('.expand-btn');
    
    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = item.getAttribute('data-expanded') === 'true';
        
        // Close all other items
        timelineItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.setAttribute('data-expanded', 'false');
            }
        });
        
        // Toggle current item
        item.setAttribute('data-expanded', !isExpanded);
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger skill bar animations when skills section is visible
            if (entry.target.classList.contains('skills-section')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all sections and timeline items
document.querySelectorAll('.section, .timeline-item, .project-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.style.getPropertyValue('--skill-width') || '0%';
        }, index * 100);
    });
}

// Initialize skill bars at 0 width
document.querySelectorAll('.skill-fill').forEach(bar => {
    const targetWidth = bar.style.getPropertyValue('--skill-width');
    bar.setAttribute('data-width', targetWidth);
    bar.style.width = '0%';
});

// Project card interactions
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const expandBtn = card.querySelector('.project-expand');
    
    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const message = currentLanguage === 'es' 
            ? 'Aquí podrías añadir más detalles del proyecto en un modal o página separada'
            : 'Here you could add more project details in a modal or separate page';
        alert(message);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 800);
    }
});

// Add glitch effect on hover for hero title
const glitchTexts = document.querySelectorAll('.glitch-text');

glitchTexts.forEach(text => {
    text.addEventListener('mouseenter', () => {
        const originalText = text.getAttribute('data-text') || text.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let iterations = 0;
        
        const interval = setInterval(() => {
            text.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                })
                .join('');
            
            iterations += 1/3;
            
            if (iterations >= originalText.length) {
                clearInterval(interval);
                text.textContent = originalText;
            }
        }, 30);
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 26, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 26, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add stagger animation to hero stats
const statsItems = document.querySelectorAll('.stat-item');
statsItems.forEach((stat, index) => {
    stat.style.animationDelay = `${index * 0.2}s`;
    stat.style.animation = 'fadeInUp 0.8s ease forwards';
});

// Add CSS animation for stats
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .stat-item {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Animate frequency bars continuously
const frequencyBars = document.querySelectorAll('.bar');
setInterval(() => {
    frequencyBars.forEach(bar => {
        const randomHeight = Math.random() * 50 + 40; // Between 40% and 90%
        bar.style.setProperty('--height', `${randomHeight}%`);
    });
}, 2000);

// Console easter egg
const consoleMessage = currentLanguage === 'es' 
    ? ['¡Hola, developer! 👋', '¿Interesado en cómo funciona este portfolio?', 'Este sitio fue creado con HTML, CSS y JavaScript vanilla.', '¡Hablemos! 💼']
    : ['Hello, developer! 👋', 'Interested in how this portfolio works?', 'This site was created with vanilla HTML, CSS and JavaScript.', 'Let\'s talk! 💼'];

console.log(`%c${consoleMessage[0]}`, 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log(`%c${consoleMessage[1]}`, 'color: #8f9bb3; font-size: 14px;');
console.log(`%c${consoleMessage[2]}`, 'color: #8f9bb3; font-size: 12px;');
console.log(`%c${consoleMessage[3]}`, 'color: #00d9ff; font-size: 16px; font-weight: bold;');