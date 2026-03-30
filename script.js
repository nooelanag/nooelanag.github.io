// Traducciones
const translations = {
    es: {
        'nav-about': 'About',
        'nav-education': 'Estudios',
        'nav-experience': 'Trabajo',
        'nav-projects': 'Proyectos',
        'nav-skills': 'Skills',
        'nav-contact': 'Contacto',
        'hero-title-1': 'Ingeniero de',
        'hero-title-2': 'Telecomunicaciones',
        'hero-subtitle': 'Conectando el futuro',
        'stat-years': 'Año de experiencia',
        'stat-projects': 'Proyectos completados',
        'stat-dedication': 'Dedicación y esfuerzo',
        'about-title': 'About Me',
        'about-lead': 'Soy un ingeniero de telecomunicaciones apasionado por las antenas y el diseño y gestión de redes.',
        'about-p1': 'Como persona proactiva que soy, creo firmemente en el poder de la acción y en la iniciativa; entendiendo que la respuesta por defecto siempre es "no" si no se intenta. Para mí, el fracaso no es algo a temer, sino una oportunidad de aprendizaje que permite descubrir enfoques alternativos para alcanzar los objetivos. Poseo una pasión innata por la creación y el aprendizaje; busco activamente conocimiento e inspiración en diversas fuentes, como Internet, profesionales con experiencia y mis propias vivencias. Afronto los desafíos con una actitud positiva y abierta, y estoy comprometido a dedicar el esfuerzo necesario para lograr mis metas.',
        'about-p2': 'Durante mis estudios, he desarrollado un gran interés por diversas áreas, siendo las Antenas y las Redes, su diseño e implementación, unas de mis favoritas. Mis intereses personales abarcan desde viajar, el automovilismo, la lectura, mantenerme al día sobre tecnologías emergentes, hasta la fotografía, el cine y hacer deporte.',
        'about-cta1': 'Hablemos',
        'about-cta2': 'Descargar CV',
        'education-title': 'Estudios',
        'experience-title': 'Experiencia Laboral',
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
        'proj-github-button': 'Ver en GitHub',
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
        'skills-title': 'Habilidades Técnicas',
        'skills-cat1': 'Lenguajes de Programación',
        'skills-cat2': 'Cloud Native & DevOps',
        'skills-cat3': 'Networking & Telecomunicaciones',
        'skills-cat4': 'Frameworks & Herramientas',
        'contact-title': 'Contacto',
        'contact-lead': '¿Tienes un proyecto en mente o quieres colaborar?',
        'contact-text': 'Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para formar parte de tu visión.',
        'contact-email-cta': 'Enviar correo',
        'footer-copyright': '© 2026 Noel Andolz Aguado. Todos los derechos reservados.'
    },
    en: {
        'nav-about': 'About',
        'nav-education': 'Education',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'hero-title-1': 'Telecommunications',
        'hero-title-2': 'Engineer',
        'hero-subtitle': 'Connecting the future',
        'stat-years': 'Year of experience',
        'stat-projects': 'Completed projects',
        'stat-dedication': 'Dedication and hard work',
        'about-title': 'About Me',
        'about-lead': 'I am a telecommunications engineer passionate about antennas and network design and management.',
        'about-p1': 'As a proactive individual I believe in the power of trying; "no" is always the answer by default. Failure, to me, is not something to be feared as it provides an opportunity to learn and discover alternative approaches to achieve one´s goal. I possess an innate passion for creation and learning. I actively seek knowledge and inspiration from various sources such as the Internet, experienced individuals, and my own experiences. I approach challenges with a positive and open-minded attitude, and I am committed to putting in the necessary effort to achieve my goals.',
        'about-p2': 'Throughout my studies, I have developed an interest in various subjects, with Networks, their design, and implementation being one of my favorites, as well as Antennas. My interests include traveling, motorsport, reading, staying up-to-date on emerging technologies, photography, cinema, and practicing sports.',
        'about-cta1': 'Let\'s Talk',
        'about-cta2': 'Download Resume',
        'education-title': 'Education',
        'experience-title': 'Work Experience',
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
        'proj-github-button': 'View on GitHub',
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
        'skills-title': 'Technical Skills',
        'skills-cat1': 'Programming Languages',
        'skills-cat2': 'Cloud Native & DevOps',
        'skills-cat3': 'Networking & Telecommunications',
        'skills-cat4': 'Frameworks & Tools',
        'contact-title': 'Contact',
        'contact-lead': 'Do you have a project in mind or want to collaborate?',
        'contact-text': 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
        'contact-email-cta': 'Send email',
        'footer-copyright': '© 2026 Noel Andolz Aguado. All rights reserved.'
    }
};

// Hacer todo visible inmediatamente
function makeEverythingVisible() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
    
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    });
}
 
// Estado del idioma
let currentLanguage = localStorage.getItem('language') || 'es';
 
// Función para cambiar idioma
function changeLanguage(lang) {
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
    
    if (langText) langText.textContent = lang === 'es' ? 'EN' : 'ES';
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();
    
    document.documentElement.lang = lang;
}
 
// Configurar botón de idioma
function setupLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
}
 
// Inicializar
function init() {
    changeLanguage(currentLanguage);
    setupLanguageToggle();
    makeEverythingVisible();
}
 
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
 
// Mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
 
// Create overlay for mobile menu
let navOverlay = document.querySelector('.nav-overlay');
if (!navOverlay && navToggle) {
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
}
 
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navOverlay) {
            navOverlay.classList.toggle('active');
        }
        
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -7px)';
            document.body.style.overflow = 'hidden';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }
    
    // Close menu when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (navOverlay) {
                navOverlay.classList.remove('active');
            }
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    });
}
 
// Timeline expand
document.querySelectorAll('.timeline-item').forEach(item => {
    const expandBtn = item.querySelector('.expand-btn');
    if (expandBtn) {
        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = item.getAttribute('data-expanded') === 'true';
            document.querySelectorAll('.timeline-item').forEach(other => {
                if (other !== item) other.setAttribute('data-expanded', 'false');
            });
            item.setAttribute('data-expanded', !isExpanded);
        });
    }
});
 
// Smooth scrolling for navigation links
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
 
// Active section highlighting
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