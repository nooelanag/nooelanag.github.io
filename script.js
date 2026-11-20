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
        'exp0-title': 'UDM Solutions Tester',
        'exp0-description': 'Testing a nivel de solución de las soluciones Cloud Native de gestión de suscriptores 4G/5G de Ericsson (UDM), con foco en campañas de capacidad y rendimiento sobre despliegues multinodo en Kubernetes.',
        'exp0-item1': 'Participación en el testing a nivel de solución de las soluciones Cloud Native de gestión de suscriptores 4G/5G de Ericsson, cubriendo planificación de pruebas, configuración del entorno, ejecución, troubleshooting y análisis de resultados en despliegues multinodo',
        'exp0-item2': 'Planificación y ejecución de campañas de testing de capacidad y rendimiento a gran escala para soluciones de base de datos de suscriptores 5G, reproduciendo tráfico de red móvil y analizando el comportamiento del sistema bajo cargas crecientes',
        'exp0-item3': 'Configuración y optimización de la distribución de los componentes de software entre clústeres de Kubernetes y distintas configuraciones de servidor para garantizar entornos de prueba fiables y reproducibles',
        'exp0-item4': 'Investigación de comportamientos inesperados del sistema mediante métricas de rendimiento y dashboards de Grafana, colaborando con los equipos de laboratorio e infraestructura cloud para identificar y resolver problemas de entorno o de producto',
        'exp0-item5': 'Documentación de configuraciones, perfiles de tráfico y resultados para asegurar la reproducibilidad, y comunicación de hallazgos y recomendaciones a los distintos equipos de ingeniería',
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
        'edu1-title': 'Máster en Ingeniería de Telecomunicación',
        'edu1-specialization': 'Máster habilitante para el ejercicio de la profesión de Ingeniero de Telecomunicación',
        'edu1-item1': 'Trabajo fin de máster todavía por definir',
        'edu1-item2': 'Cursado compaginándolo con mi trabajo a tiempo completo en Ericsson',
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
        'projects-title': 'Proyectos',
        'featured-title': 'Proyectos Destacados',
        'all-projects-title': 'Todos los Proyectos',
        'filter-all': 'Todos',
        'filter-rf': 'RF y Procesado de Señal',
        'filter-ai': 'IA y Machine Learning',
        'filter-cloud': 'Cloud y Sistemas Distribuidos',
        'filter-sw': 'Ingeniería de Software',
        'filter-embedded': 'Sistemas Embebidos',
        'filter-empty': 'No hay proyectos en esta categoría.',
        'cat-rf': 'RF y Procesado de Señal',
        'cat-ai': 'IA y Machine Learning',
        'cat-cloud': 'Cloud y Sistemas Distribuidos',
        'cat-sw': 'Ingeniería de Software',
        'cat-embedded': 'Sistemas Embebidos',
        'proj-tfg-title': 'Medida y Caracterización de Señales de Radio en Amplitud y Fase',
        'proj-tfg-description': 'Trabajo Fin de Grado centrado en la medida y caracterización de señales de radio en amplitud y fase, con trabajo de laboratorio sobre instrumentación RF y análisis de las señales capturadas para contrastar las medidas con el comportamiento teórico esperado.',
        'proj-tfg-note': 'Trabajo Fin de Grado (UC3M)',
        'proj-academic-note': 'Proyecto académico (UC3M)',
        'proj-ericsson-title': 'Plataforma Cloud-Native de Resultados CI/CD (TCDB)',
        'proj-ericsson-description': 'Plataforma cloud-native desplegada en Kubernetes con Helm que centraliza y expone los resultados de los pipelines CI/CD de Jenkins. Arquitectura de microservicios con API REST en FastAPI y Node.js, frontend React, persistencia en MySQL mediante SQLAlchemy y dashboards de Grafana multi-tenant.',
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
        'proj-fakenews-description': 'Detección de noticias desinformativas comparando TF-IDF con Random Forest, Word2Vec con MLP, embeddings BERT y fine-tuning de un Transformer sobre unas 40.000 noticias etiquetadas, alcanzando un 96-97% de accuracy y F1 con PyTorch y Hugging Face tras identificar y mitigar el sesgo por fuente.',
        'proj-meereen-title': 'Meereen - Simulación de Concurrencia en Java',
        'proj-meereen-description': 'Simulación de problema de sincronización de recursos compartidos en Java con 300 alquimistas y 3 dragones. Implementa monitores synchronized, wait/notifyAll, gestión multi-zona y capacidad dinámica para prevención de deadlocks inspirado en Game of Thrones.',
        'proj-trie-title': 'Búsqueda de Rutas IP con Trie Comprimido',
        'proj-trie-description': 'Sistema de búsqueda de rutas IP usando Patricia Trie (trie comprimido) para longest prefix match con complejidad O(W). Implementado en C con métricas de rendimiento, gestión de memoria y comparación con búsqueda lineal en tablas de enrutamiento.',
        'proj-sip-title': 'Implementación de Protocolo SIP',
        'proj-sip-description': 'Implementación de una aplicación de comunicación VoIP sobre SIP, cubriendo el establecimiento, modificación y cierre de sesiones multimedia mediante los mensajes de señalización del protocolo.',
        'proj-sdn-title': 'Laboratorio de Desarrollo SDN',
        'proj-sdn-description': 'Laboratorio de redes definidas por software implementando reglas ICMP, dispatchers (CONFIG y MAIN), manejadores de eventos, respuestas ICMP echo reply y ARP reply para gestión programática de infraestructura de red.',
        'proj-mininet-title': 'Laboratorio Mininet y Ryu',
        'proj-mininet-description': 'Prácticas de emulación de redes con Mininet, instalación y activación de OpenFlow 1.3, programación de Mininet con Python y desarrollo de controladores SDN con framework Ryu para gestión de topologías virtuales.',
        'proj-dijkstra-title': 'Implementación del Algoritmo de Dijkstra',
        'proj-dijkstra-description': 'Recreación del comportamiento del algoritmo de Dijkstra para encontrar caminos más cortos en grafos ponderados. Recibe matriz de costos desde archivo, donde nodos no conectados tienen costo 500 en lugar de infinito.',
        // --- NUEVOS PROYECTOS ---
        'proj-urbansound-title': 'Clasificación de Sonido Urbano con CNN-LSTM (UrbanSound8K)',
        'proj-urbansound-description': 'Clasificación de las 10 clases de sonido urbano de UrbanSound8K (8.732 fragmentos de audio) a partir de espectrogramas log-mel de 128x128 extraídos con librosa. Arquitectura CNN-LSTM en PyTorch con aumento de datos online y comparación de tres variantes many-to-one, alcanzando un 68,64% de accuracy en test con mean-pooling.',
        'proj-cifar-title': 'Clasificación de Imágenes CIFAR-10 con PyTorch',
        'proj-cifar-description': 'Comparación de redes totalmente conectadas y una CNN estilo AlexNet para clasificar las 10 clases de CIFAR-10 en PyTorch, con estudio del learning rate y elección del número de épocas a partir de las curvas de validación: del 46,66% al 73,62% de accuracy en test, más la visualización de filtros y mapas de activación.',
        'proj-mezclador-title': 'Mezclador Balanceado Pasivo con Diodos Schottky',
        'proj-mezclador-description': 'Mezclador balanceado pasivo con diodos Schottky autopolarizados en microstrip sobre FR4, diseñado en AWR Microwave Office con RF a 2,3 GHz, oscilador local a 2,1 GHz y frecuencia intermedia de 200 MHz. Incluye híbrido rat-race de 180°, adaptación del oscilador local en gran señal mediante balance armónico y filtro paso bajo de FI, verificando adaptación de puertos, aislamiento del OL y pérdidas de conversión.',
        'proj-monopulso-title': 'Procesador Monopulso con Amplificador de Bajo Ruido',
        'proj-monopulso-description': 'Procesador monopulso a 2,3 GHz en microstrip sobre FR4 diseñado en AWR Microwave Office: divisor Wilkinson, híbrido rat-race para los canales suma y diferencia, línea desfasadora de 86° para una separación de 0,7λ entre elementos radiantes y amplificador de bajo ruido con ATF-36163, con 16,6 dB de ganancia y 0,87 dB de figura de ruido.',
        'proj-dipolo-title': 'Diseño de Antena Dipolo en ANSYS HFSS',
        'proj-dipolo-description': 'Dipolo de media onda a 2,3 GHz diseñado y caracterizado en ANSYS HFSS, con la longitud optimizada mediante barrido paramétrico hasta 0,441λ: S11 de −17,19 dB, 13,39% de ancho de banda fraccional y 2,51 dB de directividad máxima, junto al análisis de diagramas de radiación, eficiencia y corriente superficial.',
        'proj-pf-title': 'Filtro de Partículas vs Filtro de Kalman',
        'proj-pf-description': 'Comparación de filtrado bayesiano secuencial para el seguimiento de un barco a partir de observaciones de sónar: filtro de partículas SIS con remuestreo sistemático frente al filtro de Kalman óptimo, con estimación de funcionales no lineales de la posterior y evaluación del MSE sobre 50 simulaciones Monte Carlo.',
        'proj-conv-title': 'Códigos Convolucionales y Decodificador Viterbi',
        'proj-conv-description': 'Simulación end-to-end de un sistema de comunicaciones digitales con código convolucional R=1/2, canal AWGN y modulación BPSK. Incluye decodificador Viterbi con decisión dura, cancelación de interferencias mediante filtro de Kalman y evaluación de BER por Monte Carlo.',
        'proj-eq-title': 'Igualación de Canal: Ecualizadores MIMO',
        'proj-eq-description': 'Estudio comparativo de ecualizadores MIMO en Python: zero-forcing, MMSE y un detector secuencial basado en descomposición de Cholesky, evaluados con BPSK y 4-PAM sobre canales complejos 3x3 y rectangulares 2x3. Analiza el efecto del orden de cancelación sucesiva en la propagación de errores y recupera un mensaje oculto combinando filtro de Kalman y decodificador Viterbi.',
        'proj-buscador-title': 'Buscador de Actividades Deportivas (JEE)',
        'proj-buscador-description': 'Aplicación web Java EE con Servlets, JSP y MySQL siguiendo el patrón MVC sobre Apache Tomcat, con registro multi-paso, sesiones de servidor con intentos de login limitados, búsqueda de actividades y área independiente de gestor, endurecida con PreparedStatement, escapado HTML y hashing SHA-256 con pepper.',
        'proj-gestor-title': 'Gestor de Actividades Deportivas (Java y JDBC)',
        'proj-gestor-description': 'Aplicación Java en modo texto para gestionar actividades deportivas, clientes y pabellones sobre MySQL mediante JDBC, con perfiles separados de gestor y cliente, inscripciones, listado de plazas libres e identificación de actividades con más del 80% de ocupación, sobre una arquitectura en capas con acceso a datos reutilizable.',
        'proj-apirest-title': 'Servicios Web REST en Python',
        'proj-apirest-description': 'Notebook en Google Colab para consumir APIs REST públicas (GitHub, openFDA y Harvard Art Museums) con la librería requests: peticiones GET, parsing de JSON, parámetros de consulta, paginación automática, autenticación por API key y manejo de errores en cada llamada.',
        'proj-webportfolio-title': 'Portfolio Web Personal',
        'proj-webportfolio-description': 'Portfolio web bilingüe y responsive en HTML5, CSS3 y JavaScript vanilla, con sistema de traducción propio y persistencia del idioma en localStorage, diseño mobile-first en tres breakpoints, menú hamburguesa con overlay y objetivos táctiles de 44x44px conforme a las guías WCAG.',
        'proj-modulaciones-title': 'Modulaciones Digitales y Simulación de Canal',
        'proj-modulaciones-description': 'Framework de simulación en MATLAB de transmisores QPSK, OQPSK, 8-PSK, 16-QAM y 64-QAM a 128 ksps con pulso de coseno alzado, analizados mediante diagramas de ojo, espectros y constelaciones. Incluye estimación de BER por Monte Carlo frente a curvas teóricas AWGN, canal de dos rayos con dispersión Doppler e igualación por pilotos, y amplificador no lineal AM/AM.',
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
        'exp0-title': 'UDM Solutions Tester',
        'exp0-description': 'Solution-level testing of Ericsson\'s Cloud Native 4G/5G subscriber management solutions (UDM), focused on capacity and performance campaigns across multi-node Kubernetes deployments.',
        'exp0-item1': 'Contribute to solution-level testing of Ericsson\'s Cloud Native 4G/5G subscriber management solutions, covering test planning, environment configuration, execution, troubleshooting and results analysis across multi-node deployments',
        'exp0-item2': 'Plan and execute large-scale capacity and performance testing campaigns for 5G subscriber database solutions, reproducing mobile-network traffic and analysing system behaviour under increasing workloads',
        'exp0-item3': 'Configure and optimise the distribution of software components across Kubernetes clusters and server configurations to ensure reliable and reproducible test environments',
        'exp0-item4': 'Investigate unexpected system behaviour using performance metrics and Grafana dashboards, collaborating with laboratory and cloud infrastructure teams to identify and resolve environment- or product-related issues',
        'exp0-item5': 'Document configurations, traffic profiles and results to ensure reproducibility, and communicate findings and recommendations across engineering teams',
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
        'edu1-title': 'M.Sc. in Telecommunications Engineering',
        'edu1-specialization': 'Accredited degree for practising as a Telecommunications Engineer',
        'edu1-item1': 'Master\'s thesis topic still to be defined',
        'edu1-item2': 'Studied alongside my full-time job at Ericsson',
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
        'projects-title': 'Projects',
        'featured-title': 'Featured Projects',
        'all-projects-title': 'All Projects',
        'filter-all': 'All',
        'filter-rf': 'RF & Signal Processing',
        'filter-ai': 'AI & Machine Learning',
        'filter-cloud': 'Cloud & Distributed Systems',
        'filter-sw': 'Software Engineering',
        'filter-embedded': 'Embedded & Systems',
        'filter-empty': 'No projects in this category.',
        'cat-rf': 'RF & Signal Processing',
        'cat-ai': 'AI & Machine Learning',
        'cat-cloud': 'Cloud & Distributed Systems',
        'cat-sw': 'Software Engineering',
        'cat-embedded': 'Embedded & Systems',
        'proj-tfg-title': 'Measurement and Characterization of Radio Signals in Amplitude and Phase',
        'proj-tfg-description': 'Bachelor\'s thesis on the measurement and characterisation of radio signals in amplitude and phase, combining hands-on work with RF test instrumentation and analysis of the captured signals to compare the measurements against the expected theoretical behaviour.',
        'proj-tfg-note': 'Bachelor\'s Thesis (UC3M)',
        'proj-academic-note': 'Academic project (UC3M)',
        'proj-ericsson-title': 'Cloud-Native CI/CD Results Platform (TCDB)',
        'proj-ericsson-description': 'Cloud-native platform deployed on Kubernetes with Helm that centralises and exposes the results of Jenkins CI/CD pipelines. Microservices architecture with REST APIs in FastAPI and Node.js, a React frontend, MySQL persistence through SQLAlchemy and multi-tenant Grafana dashboards.',
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
        'proj-fakenews-description': 'Detection of disinformative news comparing TF-IDF with Random Forest, Word2Vec with an MLP, BERT embeddings and a fine-tuned Transformer over roughly 40,000 labelled articles, reaching 96-97% accuracy and F1 with PyTorch and Hugging Face after identifying and mitigating source-leakage bias.',
        'proj-meereen-title': 'Meereen - Java Concurrency Simulation',
        'proj-meereen-description': 'Shared-resource synchronization problem simulation in Java with 300 alchemists and 3 dragons. Implements synchronized monitors, wait/notifyAll, multi-zone management, and dynamic capacity for deadlock prevention inspired by Game of Thrones.',
        'proj-trie-title': 'IP Route Lookup with Compressed Trie',
        'proj-trie-description': 'IP route lookup system using Patricia Trie (compressed trie) for longest prefix match with O(W) complexity. Implemented in C with performance metrics, memory management, and linear search comparison in routing tables.',
        'proj-sip-title': 'SIP Protocol Implementation',
        'proj-sip-description': 'Implementation of a VoIP communication application on top of SIP, covering the setup, modification and teardown of multimedia sessions through the protocol\'s signalling messages.',
        'proj-sdn-title': 'SDN Development Laboratory',
        'proj-sdn-description': 'Software-Defined Networking laboratory implementing ICMP rules, dispatchers (CONFIG and MAIN), event handlers, ICMP echo replies, and ARP replies for programmatic network infrastructure management.',
        'proj-mininet-title': 'Mininet and Ryu Laboratory',
        'proj-mininet-description': 'Network emulation practices with Mininet, installation and activation of OpenFlow 1.3, Mininet programming with Python, and SDN controller development using Ryu framework for virtual topology management.',
        'proj-dijkstra-title': 'Dijkstra Algorithm Implementation',
        'proj-dijkstra-description': 'Recreation of Dijkstra\'s algorithm behavior for finding shortest paths in weighted graphs. Receives cost matrix from file, where unconnected nodes have cost 500 instead of infinity.',
        // --- NEW PROJECTS ---
        'proj-urbansound-title': 'Urban Sound Classification with CNN-LSTM (UrbanSound8K)',
        'proj-urbansound-description': 'Classification of the 10 urban sound classes of UrbanSound8K (8,732 audio excerpts) from 128x128 log-mel spectrograms extracted with librosa. CNN-LSTM architecture in PyTorch with online data augmentation and a comparison of three many-to-one variants, reaching 68.64% test accuracy with mean-pooling.',
        'proj-cifar-title': 'CIFAR-10 Image Classification with PyTorch',
        'proj-cifar-description': 'Comparison of fully connected networks and an AlexNet-style CNN for the 10 CIFAR-10 classes in PyTorch, with a learning-rate study and epoch selection from the validation curves: test accuracy from 46.66% to 73.62%, plus visualisation of the first-layer filters and activation maps.',
        'proj-mezclador-title': 'Passive Balanced Mixer with Schottky Diodes',
        'proj-mezclador-description': 'Passive balanced mixer with self-biased Schottky diodes in microstrip on FR4, designed in AWR Microwave Office with RF at 2.3 GHz, local oscillator at 2.1 GHz and a 200 MHz intermediate frequency. Includes a 180° rat-race hybrid, large-signal local-oscillator matching through harmonic balance and an IF low-pass filter, verifying port matching, LO isolation and conversion loss.',
        'proj-monopulso-title': 'Monopulse Processor with Low-Noise Amplifier',
        'proj-monopulso-description': '2.3 GHz monopulse processor in microstrip on FR4 designed in AWR Microwave Office: Wilkinson divider, rat-race hybrid for the sum and difference channels, an 86° phase-shifting line for a 0.7λ element spacing, and an ATF-36163 low-noise amplifier delivering 16.6 dB of gain with a 0.87 dB noise figure.',
        'proj-dipolo-title': 'Dipole Antenna Design in ANSYS HFSS',
        'proj-dipolo-description': 'Half-wavelength dipole at 2.3 GHz designed and characterised in ANSYS HFSS, with its length optimised through a parametric sweep down to 0.441λ: −17.19 dB S11, 13.39% fractional bandwidth and 2.51 dB peak directivity, together with radiation pattern, efficiency and surface current analysis.',
        'proj-pf-title': 'Particle Filter vs Kalman Filter',
        'proj-pf-description': 'Comparison of sequential Bayesian filtering for ship tracking from sonar observations: an SIS particle filter with systematic resampling against the optimal Kalman filter, including estimation of nonlinear posterior functionals and MSE evaluation over 50 Monte Carlo simulations.',
        'proj-conv-title': 'Convolutional Codes and Viterbi Decoder',
        'proj-conv-description': 'End-to-end simulation of a digital communications system with rate-1/2 convolutional coding, AWGN channel, and BPSK modulation. Includes a hard-decision Viterbi decoder, Kalman filter-based interference cancellation, and Monte Carlo BER evaluation.',
        'proj-eq-title': 'Channel Equalization: MIMO Equalisers',
        'proj-eq-description': 'Comparative study of MIMO equalisers in Python: zero-forcing, MMSE and a Cholesky-based sequential detector, evaluated with BPSK and 4-PAM over complex 3x3 and rectangular 2x3 channels. Analyses how successive-cancellation ordering drives error propagation, and recovers a hidden message by combining a Kalman filter with a Viterbi decoder.',
        'proj-buscador-title': 'Sports Activity Searcher (JEE)',
        'proj-buscador-description': 'Java EE web application with Servlets, JSP and MySQL following the MVC pattern on Apache Tomcat, with multi-step registration, server-side sessions with limited login attempts, activity search and a separate manager area, hardened with PreparedStatement queries, HTML escaping and SHA-256 hashing with a pepper.',
        'proj-gestor-title': 'Sports Activity Manager (Java and JDBC)',
        'proj-gestor-description': 'Text-based Java application managing sports activities, clients and pavilions on MySQL through JDBC, with separate manager and client profiles, enrolment, listing of free places and identification of activities above 80% occupancy, on a layered architecture with a reusable data-access layer.',
        'proj-apirest-title': 'REST Web Services in Python',
        'proj-apirest-description': 'Google Colab notebook consuming public REST APIs (GitHub, openFDA and Harvard Art Museums) with the requests library: GET requests, JSON parsing, query parameters, automatic pagination, API-key authentication and error handling on every call.',
        'proj-webportfolio-title': 'Personal Portfolio Website',
        'proj-webportfolio-description': 'Bilingual responsive portfolio built with vanilla HTML5, CSS3 and JavaScript, featuring a custom translation system with localStorage persistence, a mobile-first design across three breakpoints, hamburger navigation with overlay and 44x44px touch targets per WCAG guidelines.',
        'proj-modulaciones-title': 'Digital Modulations and Channel Simulation',
        'proj-modulaciones-description': 'MATLAB simulation framework for QPSK, OQPSK, 8-PSK, 16-QAM and 64-QAM transmitters at 128 ksps with raised-cosine pulse shaping, analysed through eye diagrams, spectra and constellations. Includes Monte Carlo BER estimation against theoretical AWGN curves, a two-ray channel with Doppler spread and pilot-based equalisation, and an AM/AM non-linear amplifier.',
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
 
// Filtrado de proyectos por categoría (cliente, sin recarga)
// La categoría vive en el atributo data-category de cada tarjeta, que es la
// única fuente de verdad: añadir un proyecto no requiere tocar esta función.
function setupProjectFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card[data-category]');
    const blocks = document.querySelectorAll('.projects-block');
    const emptyMessage = document.querySelector('.filter-empty');

    if (!buttons.length || !cards.length) return;

    function applyFilter(filter) {
        cards.forEach(card => {
            const visible = filter === 'all' || card.dataset.category === filter;
            card.classList.toggle('is-hidden', !visible);
        });

        // Oculta el encabezado de un bloque que se queda sin tarjetas visibles
        blocks.forEach(block => {
            const left = block.querySelectorAll('.project-card:not(.is-hidden)').length;
            block.hidden = left === 0;
        });

        if (emptyMessage) {
            const total = document.querySelectorAll('.project-card:not(.is-hidden)').length;
            emptyMessage.hidden = total > 0;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(other => {
                other.classList.remove('active');
                other.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            applyFilter(button.dataset.filter);
        });
    });

    applyFilter('all');
}

// Inicializar
function init() {
    changeLanguage(currentLanguage);
    setupLanguageToggle();
    makeEverythingVisible();
    setupProjectFilters();
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
