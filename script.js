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
        'stat-years': 'Año de experiencia',
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
        'edu1-item2': 'Realizado mientras trabajo por la mañana',
        'edu2-title': 'Año de intercambio en San Francisco',
        'edu2-focus': 'Año de estudios en el extranjero con el programa "Movilidad No Europea"',
        'edu2-item1': 'Prácticas en gestión de proyectos',
        'edu3-title': 'Grado en Ingeniería en Tecnologías de Telecomunicación',
        'edu3-focus': 'Nota media de 7,56',
        'edu3-tfg-title': '📡 Trabajo Fin de Grado',
        'edu3-tfg-name': '"Measurement and Characterization of Radio Signals in Amplitude and Phase"',
        'edu3-tfg-description': 'Mi trabajo de fin de grado involucró extenso trabajo de laboratorio práctico con equipos de prueba RF y análisis de señales. Esta experiencia consolidó mi enfoque técnico, combinando técnicas de resolución de problemas prácticos basadas en laboratorio con teoría rigurosa para lograr resultados medibles en entornos controlados.',
        'edu3-item1': 'Calificación del TFG: 8,5/10',
        'edu3-item2': 'Estudios del grado en modalidad bilingüe',
        'edu3-item3': 'Participación en el "Vodafone Challenge 2023"',
        'edu3-item4': 'Año de intercambio en San Francisco',
        'edu4-title': 'Bachillerato',
        'edu4-focus': 'Estudios bilingües',
        'edu4-item1': 'Nota media de ¿?',
        'edu4-item2': 'Participación en el grupo de teatro en inglés',
        
        // Experience
        'experience-title': 'Experiencia Laboral',
        'exp1-date': '2025 - Presente',
        'exp1-title': 'Becario en Tecnología 5G Cloud Native',
        'exp1-description': 'Contribuyendo actualmente al equipo de testing de las soluciones 5G Cloud Native de Ericsson, con enfoque en mejorar la eficiencia de la fase de pruebas del sistema mediante modelado de datos y técnicas de inteligencia artificial.',
        'exp1-item1': 'Desarrollo de una plataforma cloud-native que centraliza y visualiza resultados de tests de Jenkins mediante una arquitectura de microservicios en Kubernetes, con backend REST, frontend web y dashboards en Grafana',
        'exp1-item2': 'Desarrollo de un framework modular para automatizar pruebas de penetración con Robot Framework y Python, incluyendo carga dinámica de módulos y un menú CLI interactivo para ejecutar workflows de seguridad',
        'exp2-title': 'Becario en equipo de testing de tecnología avanzada',
        'exp2-description': 'Creación y desarrollo de estrategias de testing',
        'exp2-item1': 'Definición e integración de las herramientas de test necesarias',
        'exp2-item2': 'Planificación y organización de los enfoques de test para las distintas etapas',
        'exp2-item3': 'Supervisión de la gestión de defectos y monitoreo de las ejecuciones',
        'exp2-item4': 'Algunas de las herramientas utilizadas incluyen SAP Focused Build, Tricentis Tosca y Tricentis Live Compare',
        'exp3-title': 'Azafato Zona VIP Real Madrid Club de Fútbol',
        'exp3-description': 'Azafato de la zona VIP del estadio Santiago Bernabeu en partidos y conciertos',
        'exp3-item1': 'Este puesto me ha ayudado a mejorar mis habilidades sociales y de comunicación, requiriendo a menudo interactuar con clientes de diversos perfiles en varios idiomas',
        
        // Projects
        'projects-title': 'Proyectos Destacados',
        'proj-ericsson-title': 'Plataforma de Visualización de Testing Cloud-Native',
        'proj-ericsson-description': 'Desarrollo de plataforma cloud-native para centralizar y visualizar resultados de tests de Jenkins usando arquitectura de microservicios en Kubernetes, con backend REST, frontend web y dashboards de Grafana.',
        'proj-ericsson-note': 'Proyecto desarrollado en Ericsson',
        'proj-pentesting-title': 'Framework de Automatización de Pentesting Modular',
        'proj-pentesting-description': 'Framework modular de pentesting desarrollado en Python y Robot Framework, con CLI interactivo para escaneo y análisis de servicios SSL/TLS y SSH, generando reportes detallados con clasificación de seguridad y recomendaciones automatizadas.',
        'proj1-title': 'Red 5G Industrial',
        'proj1-description': 'Implementación de red 5G privada para una fábrica inteligente, habilitando comunicación ultra-confiable de baja latencia (URLLC) para aplicaciones críticas.',
        'proj2-title': 'Sistema de Monitorización de Redes',
        'proj2-description': 'Desarrollo de plataforma de análisis en tiempo real para monitorización de KPIs de red con machine learning para detección predictiva de fallos.',
        'proj-button': 'Ver más detalles',
        'tag-security': 'Seguridad',
        
        // Proyectos GitHub
        'proj-github-button': 'Ver en GitHub →',
        'proj-stm32-title': 'Juegos de Reacción STM32 Bare-Metal',
        'proj-stm32-description': 'Proyecto de sistemas embebidos bare-metal que implementa dos juegos de tiempo de reacción para dos jugadores en placa STM32L152RE, utilizando programación de bajo nivel con timers, interrupciones EXTI, ADC, PWM y USART para comunicación serie.',
        'proj-scheduler-title': 'Emulador de Planificador de Procesos',
        'proj-scheduler-description': 'Aplicación en C que emula el comportamiento de un planificador de procesos con gestión interactiva de tabla de planificación, operaciones de E/S con archivos binarios, ejecución con fork/exec, Round Robin y manejo de señales SIGINT/SIGALRM.',
        'proj-fakenews-title': 'Detección de Fake News con ML y Transformers',
        'proj-fakenews-description': 'Proyecto de clasificación de noticias desinformativas comparando múltiples enfoques: TF-IDF + Random Forest, Word2Vec + MLP, embeddings BERT y fine-tuning de modelo Transformer, alcanzando 96-97% de accuracy con PyTorch y HuggingFace.',
        'proj-meereen-title': 'Meereen - Simulación de Concurrencia en Java',
        'proj-meereen-description': 'Simulación de problema de sincronización de recursos compartidos en Java con 300 alquimistas y 3 dragones. Implementa monitores synchronized, wait/notifyAll, gestión multi-zona y capacidad dinámica para prevención de deadlocks inspirado en Game of Thrones.',
        'proj-trie-title': 'Búsqueda de Rutas IP con Trie Comprimido',
        'proj-trie-description': 'Sistema de búsqueda de rutas IP usando Patricia Trie (trie comprimido) para longest prefix match con complejidad O(W). Implementado en C con métricas de rendimiento, gestión de memoria y comparación con búsqueda lineal en tablas de enrutamiento.',
        'proj-sip-title': 'Implementación de Protocolo SIP',
        'proj-sip-description': 'Desarrollo de aplicación de comunicación VoIP utilizando el protocolo SIP (Session Initiation Protocol) para establecimiento y gestión de sesiones multimedia en redes de telecomunicaciones.',
        'proj-sdn-title': 'Laboratorio de Desarrollo SDN',
        'proj-sdn-description': 'Laboratorio de redes definidas por software implementando reglas ICMP, dispatchers (CONFIG y MAIN), manejadores de eventos, respuestas ICMP echo reply y ARP reply para gestión programática de infraestructura de red.',
        'proj-mininet-title': 'Laboratorio Mininet y Ryu',
        'proj-mininet-description': 'Prácticas de emulación de redes con Mininet, instalación y activación de OpenFlow 1.3, programación de Mininet con Python y desarrollo de controladores SDN con framework Ryu para gestión de topologías virtuales.',
        'proj-dijkstra-title': 'Implementación del Algoritmo de Dijkstra',
        'proj-dijkstra-description': 'Recreación del comportamiento del algoritmo de Dijkstra para encontrar caminos más cortos en grafos ponderados. Recibe matriz de costos desde archivo, donde nodos no conectados tienen costo 500 en lugar de infinito.',
        
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
        'about-lead': 'I am a telecommunications engineer passionate about antennas and network design and management.',
        'about-p1': 'As a proactive individual I believe in the power of trying; "no" is always the answer by default. Failure, to me, is not something to be feared as it provides an opportunity to learn and discover alternative approaches to achieve one´s goal. I possess an innate passion for creation and learning. I actively seek knowledge and inspiration from various sources such as the Internet, experienced individuals, and my own experiences. I approach challenges with a positive and open-minded attitude, and I am committed to putting in the necessary effort to achieve my goals.',
        'about-p2': 'Throughout my studies, I have developed an interest in various subjects, with Networks, their design, and implementation being one of my favorites, as well as Antennas. My interests include traveling, motorsport, reading, staying up-to-date on emerging technologies, photography, cinema, and practicing sports.',
        'about-cta1': 'Let\'s Talk',
        'about-cta2': 'Download Resume',
        
        // Education
        'education-title': 'Education',
        'edu1-title': 'Telecommunications Engineering and Cybersecurity Dual Master',
        'edu1-specialization': 'Specialization in Cybersecurity',
        'edu1-item1': 'Final project not done yet',
        'edu1-item2': 'Master done while working',
        'edu2-title': 'Study Abroad Year in San Francisco',
        'edu2-focus': 'Study abroad year thanks to the "Non European Mobility Program"',
        'edu2-item1': 'Project Management internship',
        'edu3-title': 'Bachelor\'s Degree in Telecommunication Technologies Engineering',
        'edu3-focus': 'Average grade: 7.56/10',
        'edu3-tfg-title': '📡 Final Thesis',
        'edu3-tfg-name': '"Measurement and Characterization of Radio Signals in Amplitude and Phase"',
        'edu3-tfg-description': 'My final thesis involved extensive hands-on laboratory work with RF test equipment and signal analysis. This experience solidified my technical approach, combining lab-based practical problem-solving techniques with rigorous theory to achieve measurable results in controlled environments.',
        'edu3-item1': 'Final thesis grade: 8.5/10',
        'edu3-item2': 'Bilingual degree program',
        'edu3-item3': 'Participation in "Vodafone Challenge 2023"',
        'edu3-item4': 'Exchange year in San Francisco',
        'edu4-title': 'High School',
        'edu4-focus': 'Bilingual studies',
        'edu4-item1': 'Average grade of ¿?',
        'edu4-item2': 'Member of the English theater group',
        
        // Experience
        'experience-title': 'Work Experience',
        'exp1-date': '2025 - Present',
        'exp1-title': 'Cloud Native 5G Technology Intern',
        'exp1-description': 'Currently contributing to the testing team for Ericsson\'s Cloud Native 5G solutions, with a focus on enhancing the efficiency of the system testing phase through data modeling and artificial intelligence techniques.',
        'exp1-item1': 'Developing a cloud-native platform that centralizes and visualizes Jenkins test results using a microservices architecture on Kubernetes, featuring a REST backend, web frontend, and Grafana dashboards',
        'exp1-item2': 'Developing a modular penetration testing automation framework using Robot Framework and Python, featuring dynamic module loading and an interactive CLI for executing security testing workflows',
        'exp2-title': 'Tech Advance Testing Team Intern',
        'exp2-description': 'Creation and implementation of comprehensive testing strategies',
        'exp2-item1': 'Definition and integration of testing tools',
        'exp2-item2': 'Planning of test approaches for the different phases',
        'exp2-item3': 'Overseeing defect management and follow-up on functional test execution',
        'exp2-item4': 'Some of the tools used include SAP Focused Build, Tricentis Tosca and Tricentis Live Compare',
        'exp3-title': 'Real Madrid VIP Area Attendant',
        'exp3-description': 'VIP Area Attendant at Santiago Bernabéu Stadium on gamedays and concerts',
        'exp3-item1': 'This role has significantly improved my social and communication skills, often requiring me to engage with guests of different profiles in multiple languages',
        
        // Projects
        'projects-title': 'Featured Projects',
        'proj-ericsson-title': 'Cloud-Native Testing Visualization Platform',
        'proj-ericsson-description': 'Development of a cloud-native platform that centralizes and visualizes Jenkins test results using a microservices architecture on Kubernetes, featuring a REST backend, web frontend, and Grafana dashboards.',
        'proj-ericsson-note': 'Project developed at Ericsson',
        'proj-pentesting-title': 'Modular Pentesting Automation Framework',
        'proj-pentesting-description': 'Modular pentesting framework developed in Python and Robot Framework, with an interactive CLI for scanning and analyzing SSL/TLS and SSH services, generating detailed reports with security classification and automated recommendations.',
        'proj1-title': 'Industrial 5G Network',
        'proj1-description': 'Implementation of private 5G network for a smart factory, enabling ultra-reliable low-latency communication (URLLC) for critical applications.',
        'proj2-title': 'Network Monitoring System',
        'proj2-description': 'Development of real-time analysis platform for network KPI monitoring with machine learning for predictive failure detection.',
        'proj-button': 'View more details',
        'tag-security': 'Security',
        
        // GitHub Projects
        'proj-github-button': 'View on GitHub →',
        'proj-stm32-title': 'STM32 Bare-Metal Reaction Games',
        'proj-stm32-description': 'Bare-metal embedded systems project implementing two two-player reaction-time games on STM32L152RE board, using low-level programming with timers, EXTI interrupts, ADC, PWM, and USART for serial communication.',
        'proj-scheduler-title': 'Process Scheduler Emulator',
        'proj-scheduler-description': 'C application emulating process scheduler behavior with interactive schedule table management, binary file I/O operations, fork/exec execution, Round Robin scheduling, and SIGINT/SIGALRM signal handling.',
        'proj-fakenews-title': 'Fake News Detection with ML and Transformers',
        'proj-fakenews-description': 'Misinformation classification project comparing multiple approaches: TF-IDF + Random Forest, Word2Vec + MLP, BERT embeddings, and Transformer fine-tuning, achieving 96-97% accuracy with PyTorch and HuggingFace.',
        'proj-meereen-title': 'Meereen - Java Concurrency Simulation',
        'proj-meereen-description': 'Shared-resource synchronization problem simulation in Java with 300 alchemists and 3 dragons. Implements synchronized monitors, wait/notifyAll, multi-zone management, and dynamic capacity for deadlock prevention inspired by Game of Thrones.',
        'proj-trie-title': 'IP Route Lookup with Compressed Trie',
        'proj-trie-description': 'IP route lookup system using Patricia Trie (compressed trie) for longest prefix match with O(W) complexity. Implemented in C with performance metrics, memory management, and linear search comparison in routing tables.',
        'proj-sip-title': 'SIP Protocol Implementation',
        'proj-sip-description': 'Development of VoIP communication application using SIP (Session Initiation Protocol) for multimedia session establishment and management in telecommunications networks.',
        'proj-sdn-title': 'SDN Development Laboratory',
        'proj-sdn-description': 'Software-Defined Networking laboratory implementing ICMP rules, dispatchers (CONFIG and MAIN), event handlers, ICMP echo replies, and ARP replies for programmatic network infrastructure management.',
        'proj-mininet-title': 'Mininet and Ryu Laboratory',
        'proj-mininet-description': 'Network emulation practices with Mininet, installation and activation of OpenFlow 1.3, Mininet programming with Python, and SDN controller development using Ryu framework for virtual topology management.',
        'proj-dijkstra-title': 'Dijkstra Algorithm Implementation',
        'proj-dijkstra-description': 'Recreation of Dijkstra\'s algorithm behavior for finding shortest paths in weighted graphs. Receives cost matrix from file, where unconnected nodes have cost 500 instead of infinity.',
        
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
    
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (element.hasAttribute('data-text')) {
                element.setAttribute('data-text', translations[lang][key]);
            }
            element.textContent = translations[lang][key];
        }
    });
    
    const langText = document.getElementById('langText');
    const langCurrent = document.querySelector('.lang-current');
    
    if (langText) {
        langText.textContent = lang === 'es' ? 'EN' : 'ES';
    }
    
    if (langCurrent) {
        langCurrent.textContent = lang.toUpperCase();
    }
    
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
        });
        console.log('✅ Event listener de idioma añadido correctamente');
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

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

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

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    const expandBtn = item.querySelector('.expand-btn');
    
    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = item.getAttribute('data-expanded') === 'true';
        
        timelineItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.setAttribute('data-expanded', 'false');
            }
        });
        
        item.setAttribute('data-expanded', !isExpanded);
    });
});

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (entry.target.classList.contains('skills-section')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .timeline-item, .project-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.style.getPropertyValue('--skill-width') || '0%';
        }, index * 100);
    });
}

document.querySelectorAll('.skill-fill').forEach(bar => {
    const targetWidth = bar.style.getPropertyValue('--skill-width');
    bar.setAttribute('data-width', targetWidth);
    bar.style.width = '0%';
});

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const expandBtn = card.querySelector('.project-expand');
    
    if (expandBtn) {
        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const message = currentLanguage === 'es' 
                ? 'Aquí podrías añadir más detalles del proyecto en un modal o página separada'
                : 'Here you could add more project details in a modal or separate page';
            alert(message);
        });
    }
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 800);
    }
});

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

const statsItems = document.querySelectorAll('.stat-item');
statsItems.forEach((stat, index) => {
    stat.style.animationDelay = `${index * 0.2}s`;
    stat.style.animation = 'fadeInUp 0.8s ease forwards';
});

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

const frequencyBars = document.querySelectorAll('.bar');
setInterval(() => {
    frequencyBars.forEach(bar => {
        const randomHeight = Math.random() * 50 + 40;
        bar.style.setProperty('--height', `${randomHeight}%`);
    });
}, 2000);

const consoleMessage = currentLanguage === 'es' 
    ? ['¡Hola, developer! 👋', '¿Interesado en cómo funciona este portfolio?', 'Este sitio fue creado con HTML, CSS y JavaScript vanilla.', '¡Hablemos! 💼']
    : ['Hello, developer! 👋', 'Interested in how this portfolio works?', 'This site was created with vanilla HTML, CSS and JavaScript.', 'Let\'s talk! 💼'];

console.log(`%c${consoleMessage[0]}`, 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log(`%c${consoleMessage[1]}`, 'color: #8f9bb3; font-size: 14px;');
console.log(`%c${consoleMessage[2]}`, 'color: #8f9bb3; font-size: 12px;');
console.log(`%c${consoleMessage[3]}`, 'color: #00d9ff; font-size: 16px; font-weight: bold;');