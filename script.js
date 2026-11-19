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
        'exp0-date': '2026 - Presente',
        'exp0-title': 'Ingeniero de Verificación de Capacidad y Prestaciones (5G Core)',
        'exp0-description': 'Ingeniero a tiempo completo en el programa de verificación de capacidad y prestaciones de la capa de datos de suscriptor del core 5G cloud-native de Ericsson (UDM/UDR), encargado de planificar, ejecutar y reportar campañas de rendimiento de sistema grande sobre Kubernetes.',
        'exp0-item1': 'Ejecución de casos de prueba con mezclas de tráfico real (señalización de perfiles de suscriptor y VoLTE) sobre despliegues standalone protegidos con mTLS y respaldados por una base de datos clave-valor multi-instancia, con rampas de tráfico escalonadas hasta localizar el límite de capacidad del sistema',
        'exp0-item2': 'Dimensionado y ajuste de la topología de microservicios bajo prueba (front-ends y balanceadores LDAP, front-ends de la capa de datos, ingress gateways y servicios de notificación), modificando número de réplicas y límites de autoescalado horizontal (HPA) entre ejecuciones para eliminar cuellos de botella',
        'exp0-item3': 'Benchmarking comparativo de la misma carga de trabajo sobre distintas generaciones de hardware de servidor, ubicando de forma deliberada los microservicios críticos de tráfico en nodos concretos para separar el efecto de la infraestructura del comportamiento de la aplicación',
        'exp0-item4': 'Análisis de resultados con dashboards de Grafana y contadores de rendimiento (margen de CPU por microservicio, tráfico rechazado, latencia), diagnóstico de ejecuciones fallidas junto a los equipos de laboratorio e infraestructura cloud, y repetición de campañas una vez corregida la causa raíz',
        'exp0-item5': 'Definición y documentación de baselines de ejecución (dimensionado, perfil de tráfico y configuración) y reporte de resultados consolidados al programa y a ingenieros senior de varios emplazamientos',
        'exp1-date': '2025 - 2026',
        'exp1-title': 'Becario en Tecnología 5G Cloud Native',
        'exp1-description': 'Contribuí al equipo de testing de las soluciones 5G Cloud Native de Ericsson, con enfoque en mejorar la eficiencia de la fase de pruebas del sistema mediante modelado de datos y técnicas de inteligencia artificial.',
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
        'edu1-title': 'Doble Master en Ingeniería de Telecomunicaciones y Ciberseguridad',
        'edu1-specialization': 'Especialización en Ciberseguridad',
        'edu1-item1': 'Proyecto fin de master no realizado todavía',
        'edu1-item2': 'Realizado mientras trabajo por la mañana',
        'edu2-title': 'Año de intercambio en San Francisco',
        'edu2-focus': 'Año de estudios en el extranjero con el programa "Movilidad No Europea"',
        'edu2-item1': 'Prácticas en gestión de proyectos',
        'edu3-title': 'Grado en Ingeniería en Tecnologías de Telecomunicación',
        'edu3-focus': 'Nota media de 7,56',
        'edu3-tfg-title': 'Trabajo Fin de Grado',
        'edu3-tfg-name': '"Measurement and Characterization of Radio Signals in Amplitude and Phase"',
        'edu3-tfg-description': 'Mi trabajo de fin de grado involucró extenso trabajo de laboratorio práctico con equipos de prueba RF y análisis de señales. Esta experiencia consolidó mi enfoque técnico, combinando técnicas de resolución de problemas prácticos basadas en laboratorio con teoría rigurosa para lograr resultados medibles en entornos controlados.',
        'edu3-item1': 'Calificación del TFG: 8,5/10',
        'edu3-item2': 'Estudios del grado en modalidad bilingüe',
        'edu3-item3': 'Participación en el "Vodafone Challenge 2023"',
        'edu3-item4': 'Año de intercambio en San Francisco',
        'edu4-title': 'Bachillerato',
        'edu4-focus': 'Estudios bilingües',
        'edu4-item2': 'Participación en el grupo de teatro en inglés',
        'projects-title': 'Proyectos Destacados',
        'proj-ericsson-title': 'Plataforma de Visualización de Testing Cloud-Native',
        'proj-ericsson-description': 'Desarrollo de plataforma cloud-native para centralizar y visualizar resultados de tests de Jenkins usando arquitectura de microservicios en Kubernetes, con backend REST, frontend web y dashboards de Grafana.',
        'proj-ericsson-note': 'Proyecto desarrollado en Ericsson',
        'proj-f1bot-title': 'Bot de noticias de F1',
        'proj-f1bot-description': 'Bot autónomo de Telegram que monitoriza noticias de Fórmula 1 en tiempo real desde 8 fuentes en español e inglés, enviando notificaciones automáticas cada 30 minutos. Controlable directamente desde Telegram con comandos de pausa, activación y consulta instantánea.',
        'proj-pentesting-title': 'Framework de Automatización de Pentesting Modular',
        'proj-pentesting-description': 'Framework modular de pentesting desarrollado en Python y Robot Framework, con CLI interactivo para escaneo y análisis de servicios SSL/TLS y SSH, generando reportes detallados con clasificación de seguridad y recomendaciones automatizadas.',
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
        // --- NUEVOS PROYECTOS ---
        'proj-pf-title': 'Filtro de Partículas vs Filtro de Kalman',
        'proj-pf-description': 'Implementación y comparación de filtrado Bayesiano secuencial para el seguimiento de un barco con observaciones de sónar. Incluye SIS con remuestreo sistemático, filtro de Kalman óptimo, estimación de funcionales no lineales de la posterior y experimentos de MSE sobre 50 simulaciones Monte Carlo.',
        'proj-conv-title': 'Códigos Convolucionales y Decodificador Viterbi',
        'proj-conv-description': 'Simulación end-to-end de un sistema de comunicaciones digitales con código convolucional R=1/2, canal AWGN y modulación BPSK. Incluye decodificador Viterbi con decisión dura, cancelación de interferencias mediante filtro de Kalman y evaluación de BER por Monte Carlo.',
        'proj-eq-title': 'Igualación de Canal: Ecualizadores MIMO',
        'proj-eq-description': 'Estudio comparativo de ecualizadores zero-forcing (ZF), MMSE y un detector secuencial basado en descomposición de Cholesky, evaluados con BPSK y 4-PAM sobre canales diagonales, complejos 3x3 y rectangulares 2x3. Incluye el efecto del orden de cancelación sucesiva en la propagación de errores y la recuperación de un mensaje oculto combinando filtro de Kalman y decodificador Viterbi.',
        'proj-buscador-title': 'Buscador de Actividades Deportivas (JEE)',
        'proj-buscador-description': 'Aplicación web Java EE con Servlets, JSP y MySQL siguiendo el patrón MVC y desplegada en Apache Tomcat. Registro multi-paso con precarga mediante cookies, sesiones de servidor con intentos de login limitados, búsqueda de actividades por precio, plazas o pabellón y área independiente de gestor, con seguridad reforzada mediante PreparedStatement, escapado HTML y hashing SHA-256 con pepper.',
        'proj-gestor-title': 'Gestor de Actividades Deportivas (Java y JDBC)',
        'proj-gestor-description': 'Aplicación Java en modo texto para gestionar actividades deportivas, clientes y pabellones sobre una base de datos MySQL mediante JDBC. Perfiles separados de gestor y cliente con auto-registro, operaciones de inscripción, listado de plazas libres e identificación de actividades con más del 80% de ocupación, sobre una arquitectura en capas control/vista/modelo con capa de acceso a datos reutilizable.',
        'proj-apirest-title': 'Servicios Web REST en Python',
        'proj-apirest-description': 'Notebook interactivo en Google Colab para consumir APIs REST públicas (GitHub, openFDA y Harvard Art Museums) con la librería requests. Cubre peticiones GET, parsing de JSON, parámetros de consulta, paginación automática (skip/limit y page/size), autenticación por API key y filtrado de datos, con manejo robusto de errores en cada llamada.',
        'proj-webportfolio-title': 'Portfolio Web Personal',
        'proj-webportfolio-description': 'Portfolio web bilingüe y responsive desarrollado con HTML5, CSS3 y JavaScript vanilla, con un sistema de traducción propio y persistencia del idioma en localStorage entre sesiones. Diseño mobile-first en tres breakpoints (968px, 640px y 375px), menú hamburguesa con overlay, scroll suave con resaltado de la sección activa y objetivos táctiles de 44x44px conforme a las guías WCAG.',
        'proj-modulaciones-title': 'Modulaciones Digitales y Simulación de Canal',
        'proj-modulaciones-description': 'Framework de simulación en MATLAB para sistemas de comunicaciones digitales con transmisores QPSK, OQPSK, 8-PSK, 16-QAM y 64-QAM a 128 ksps y pulso de coseno alzado, analizados mediante formas de onda I/Q, diagramas de ojo, espectros y constelaciones. Incluye estimación de BER por Monte Carlo frente a curvas teóricas AWGN, canal móvil de dos rayos con dispersión Doppler e igualación por pilotos, y amplificador no lineal AM/AM con saturación configurable.',
        'proj-vodafone-title': 'Vodafone Challenge 2023',
        'proj-vodafone-description': 'Participación en el Vodafone Challenge 2023 dentro de la asignatura de Comunicaciones Móviles, con sesiones en la sede de Vodafone en Madrid sobre 5G, Massive MIMO, RAN y Open RAN. Lideré un proyecto de grupo sobre opciones de Low Layer Split en downlink, presentando los resultados ante ingenieros senior de Vodafone.',
        'proj-vodafone-note': 'Proyecto académico en colaboración con Vodafone',
        // ----------------------
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
        'exp0-date': '2026 - Present',
        'exp0-title': 'Capacity and Characteristics Verification Engineer (5G Core)',
        'exp0-description': 'Full-time engineer in the capacity and characteristics verification programme for Ericsson\'s cloud-native 5G core subscriber data layer (UDM/UDR), responsible for planning, executing and reporting large-system performance campaigns on Kubernetes.',
        'exp0-item1': 'Execution of traffic-mix verification test cases (subscriber data-profile signalling and VoLTE) on standalone deployments secured with mTLS and backed by a multi-instance key-value database, using multi-step traffic ramp-ups to locate the capacity limit of the system under test',
        'exp0-item2': 'Dimensioning and tuning of the microservice topology under test (LDAP front-ends and balancers, data-layer front-ends, ingress gateways and notification services), adjusting replica counts and horizontal pod autoscaling (HPA) limits between executions to remove bottlenecks',
        'exp0-item3': 'Comparative benchmarking of the same workload across different server hardware generations, deliberately placing traffic-critical microservices on specific worker nodes to separate infrastructure effects from application behaviour',
        'exp0-item4': 'Result analysis through Grafana dashboards and performance counters (per-microservice CPU headroom, rejected traffic, latency), diagnosis of failed executions together with the lab and cloud infrastructure teams, and repetition of campaigns once the root cause has been corrected',
        'exp0-item5': 'Definition and documentation of execution baselines (dimensioning, traffic profile and configuration) and reporting of consolidated results to the programme and to senior engineers across several sites',
        'exp1-date': '2025 - 2026',
        'exp1-title': 'Intern in 5G Cloud Native Technology',
        'exp1-description': 'Contributed to the testing team for Ericsson\'s Cloud Native 5G solutions, focusing on improving the efficiency of the system testing phase through data modelling and artificial intelligence techniques.',
        'exp1-item1': 'Development of a cloud-native platform that centralizes and visualizes Jenkins test results through a microservices architecture on Kubernetes, with a REST backend, web frontend and Grafana dashboards',
        'exp1-item2': 'Development of a modular framework to automate penetration testing with Robot Framework and Python, including dynamic module loading and an interactive CLI menu to run security workflows',
        'exp2-title': 'Intern in the Tech Advance Testing team',
        'exp2-description': 'Creation and development of testing strategies',
        'exp2-item1': 'Definition and integration of the required testing tools',
        'exp2-item2': 'Planning and organisation of the testing approaches for the different stages',
        'exp2-item3': 'Supervision of defect management and monitoring of test executions',
        'exp2-item4': 'Tools used include SAP Focused Build, Tricentis Tosca and Tricentis Live Compare',
        'exp3-title': 'VIP Area Attendant at Real Madrid Football Club',
        'exp3-description': 'VIP area attendant at the Santiago Bernabeu stadium during matches and concerts',
        'exp3-item1': 'This role has helped me improve my social and communication skills, often requiring interaction with guests of very different profiles in several languages',
        'edu1-title': 'Double Master\'s Degree in Telecommunications Engineering and Cybersecurity',
        'edu1-specialization': 'Specialisation in Cybersecurity',
        'edu1-item1': 'Master\'s thesis not started yet',
        'edu1-item2': 'Studied alongside my morning job',
        'edu2-title': 'Exchange year in San Francisco',
        'edu2-focus': 'Year abroad within the "Non-European Mobility" programme',
        'edu2-item1': 'Coursework in project management',
        'edu3-title': 'Bachelor\'s Degree in Telecommunication Technologies Engineering',
        'edu3-focus': 'GPA: 7.56/10',
        'edu3-tfg-title': 'Bachelor\'s Thesis',
        'edu3-tfg-name': '"Measurement and Characterization of Radio Signals in Amplitude and Phase"',
        'edu3-tfg-description': 'My bachelor\'s thesis involved extensive hands-on laboratory work with RF test equipment and signal analysis. This experience consolidated my technical approach, combining lab-based practical problem solving with rigorous theory to achieve measurable results in controlled environments.',
        'edu3-item1': 'Thesis grade: 8.5/10',
        'edu3-item2': 'Bachelor\'s degree completed in the bilingual track',
        'edu3-item3': 'Participation in the "Vodafone Challenge 2023"',
        'edu3-item4': 'Exchange year in San Francisco',
        'edu4-title': 'Secondary School (Bachillerato)',
        'edu4-focus': 'Bilingual studies',
        'edu4-item2': 'Member of the English-language theatre group',
        'projects-title': 'Featured Projects',
        'proj-ericsson-title': 'Cloud-Native Testing Visualization Platform',
        'proj-ericsson-description': 'Development of a cloud-native platform that centralizes and visualizes Jenkins test results using a microservices architecture on Kubernetes, featuring a REST backend, web frontend, and Grafana dashboards.',
        'proj-ericsson-note': 'Project developed at Ericsson',
        'proj-f1bot-title': 'F1 News Bot',
        'proj-f1bot-description': 'Autonomous Telegram bot that monitors Formula 1 news in real time from 8 sources in Spanish and English, sending automatic notifications every 30 minutes. Fully controllable from Telegram with pause, resume, and instant query commands.',
        'proj-pentesting-title': 'Modular Pentesting Automation Framework',
        'proj-pentesting-description': 'Modular pentesting framework developed in Python and Robot Framework, with an interactive CLI for scanning and analyzing SSL/TLS and SSH services, generating detailed reports with security classification and automated recommendations.',
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
        // --- NEW PROJECTS ---
        'proj-pf-title': 'Particle Filter vs Kalman Filter',
        'proj-pf-description': 'Implementation and comparison of sequential Bayesian filtering for ship tracking using sonar observations. Features SIS with systematic resampling, optimal Kalman filter, nonlinear posterior functional estimation, and MSE experiments averaged over 50 Monte Carlo simulations.',
        'proj-conv-title': 'Convolutional Codes and Viterbi Decoder',
        'proj-conv-description': 'End-to-end simulation of a digital communications system with rate-1/2 convolutional coding, AWGN channel, and BPSK modulation. Includes a hard-decision Viterbi decoder, Kalman filter-based interference cancellation, and Monte Carlo BER evaluation.',
        'proj-eq-title': 'Channel Equalization: MIMO Equalisers',
        'proj-eq-description': 'Comparative study of zero-forcing (ZF), MMSE and a Cholesky-based sequential detector, evaluated with BPSK and 4-PAM over diagonal, complex 3x3 and rectangular 2x3 channels. Covers the effect of successive-cancellation ordering on error propagation, and the recovery of a hidden message by combining a Kalman filter with a Viterbi decoder.',
        'proj-buscador-title': 'Sports Activity Searcher (JEE)',
        'proj-buscador-description': 'Java EE web application built with Servlets, JSP and MySQL following the MVC pattern and deployed on Apache Tomcat. Multi-step registration with cookie-based pre-filling, server-side sessions with limited login attempts, activity search by price, availability or pavilion, and a separate manager area, hardened with PreparedStatement queries, HTML escaping and SHA-256 password hashing with a pepper.',
        'proj-gestor-title': 'Sports Activity Manager (Java and JDBC)',
        'proj-gestor-description': 'Text-based Java application for managing sports activities, clients and pavilions on top of a MySQL database through JDBC. Separate manager and client profiles with self-registration, activity enrolment, listing of free places and identification of activities above 80% occupancy, all on a layered control/view/model architecture with a reusable data-access layer.',
        'proj-apirest-title': 'REST Web Services in Python',
        'proj-apirest-description': 'Interactive Google Colab notebook consuming public REST APIs (GitHub, openFDA and Harvard Art Museums) with the requests library. Covers GET requests, JSON parsing, query parameters, automatic pagination (skip/limit and page/size), API-key authentication and data filtering, with robust error handling on every call.',
        'proj-webportfolio-title': 'Personal Portfolio Website',
        'proj-webportfolio-description': 'Bilingual responsive portfolio website built with vanilla HTML5, CSS3 and JavaScript, featuring a custom translation system with localStorage persistence of the language preference across sessions. Mobile-first design across three breakpoints (968px, 640px and 375px), hamburger menu with overlay navigation, smooth scroll with active section highlighting and 44x44px touch targets per WCAG guidelines.',
        'proj-modulaciones-title': 'Digital Modulations and Channel Simulation',
        'proj-modulaciones-description': 'MATLAB simulation framework for digital communication systems with QPSK, OQPSK, 8-PSK, 16-QAM and 64-QAM transmitters at 128 ksps and raised-cosine pulse shaping, analysed through I/Q waveforms, eye diagrams, spectra and constellations. Includes Monte Carlo BER estimation against theoretical AWGN curves, a two-ray mobile fading channel with Doppler spread and pilot-based equalisation, and an AM/AM non-linear amplifier with configurable saturation.',
        'proj-vodafone-title': 'Vodafone Challenge 2023',
        'proj-vodafone-description': 'Participation in the 2023 Vodafone Challenge as part of a Mobile Communications course, with sessions at Vodafone headquarters in Madrid on 5G, Massive MIMO, RAN and Open RAN. Led a group project on Low Layer Split options in downlink, presenting the results in front of senior Vodafone engineers.',
        'proj-vodafone-note': 'Academic project in collaboration with Vodafone',
        // -------------------
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
