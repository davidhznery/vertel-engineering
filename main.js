// Inversiones BM - Website Main Logic

const translations = {
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'nav-cta': 'Get in Touch',
        'hero-title': 'Advancing Energy through <br><span class="gradient-text">Engineering Excellence</span>',
        'hero-subtitle': 'Boutique engineering services for the energy industry. Specializing in Consulting, Detail Engineering, and Project Management.',
        'hero-cta-1': 'Our Services',
        'hero-cta-2': 'View Projects',
        'services-title': 'Specialized Services',
        'services-subtitle': 'Tailored technical solutions for every stage of your project\'s lifecycle.',
        'service-1-title': 'Engineering Consulting',
        'service-1-desc': 'Strategic technical advice, feasibility studies, and FEED to ensure a solid foundation for your energy investments.',
        'service-2-title': 'Detail Engineering',
        'service-2-desc': 'Comprehensive designs, precise technical specifications, and construction-ready plans for safe facility execution.',
        'service-3-title': 'Project Management',
        'service-3-desc': 'End-to-end technical oversight and management from procurement through construction and final commissioning.',
        'portfolio-title': 'Strategic Projects',
        'portfolio-subtitle': 'Proven track record of success across Colombia, Ecuador, and the Andean region.',
        'footer-desc': 'Professional engineering services for the energy industry.',
        'footer-links-title': 'Quick Links',
        'footer-contact-title': 'Contact Us',
        'footer-copy': '&copy; 2025 Inversiones BM. All rights reserved.',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Get in touch with our engineering team to discuss your next project.',
        'contact-loc-title': 'Office Address',
        'contact-email-title': 'Email Us',
        'contact-phone-title': 'Call Us',
        'form-name': 'Full Name',
        'form-email': 'Email Address',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-submit': 'Send Message',
        'opt-feed': 'Engineering Consulting',
        'opt-detail': 'Detail Engineering',
        'opt-support': 'Project Management'
    },
    es: {
        'nav-home': 'Inicio',
        'nav-services': 'Servicios',
        'nav-portfolio': 'Portafolio',
        'nav-contact': 'Contacto',
        'nav-cta': 'Contacto',
        'hero-title': 'Impulsando la Energía mediante <br><span class="gradient-text">Excelencia en Ingeniería</span>',
        'hero-subtitle': 'Servicios de ingeniería boutique para la industria energética. Especialistas en Consultoría, Ingeniería de Detalle y Gerencia de Proyectos.',
        'hero-cta-1': 'Nuestros Servicios',
        'hero-cta-2': 'Ver Proyectos',
        'services-title': 'Servicios Especializados',
        'services-subtitle': 'Soluciones técnicas a medida para cada etapa del ciclo de vida de su proyecto.',
        'service-1-title': 'Consultoría de Ingeniería',
        'service-1-desc': 'Asesoramiento técnico estratégico, estudios de factibilidad y FEED para asegurar una base sólida para sus inversiones energéticas.',
        'service-2-title': 'Ingeniería de Detalle',
        'service-2-desc': 'Diseños integrales, especificaciones técnicas precisas y planos listos para construcción para una ejecución segura de facilidades.',
        'service-3-title': 'Gerencia de Proyectos',
        'service-3-desc': 'Supervisión técnica integral y gestión de proyectos desde la procura hasta la construcción y comisionamiento final.',
        'portfolio-title': 'Proyectos Estratégicos',
        'portfolio-subtitle': 'Trayectoria comprobada de éxito en Colombia, Ecuador y la región andina.',
        'footer-desc': 'Servicios de ingeniería profesional para la industria energética.',
        'footer-links-title': 'Enlaces Rápidos',
        'footer-contact-title': 'Contáctenos',
        'footer-copy': '&copy; 2025 Inversiones BM. Todos los derechos reservados.',
        'contact-title': 'Contacto',
        'contact-subtitle': 'Póngase en contacto con nuestro equipo de ingeniería para discutir su próximo proyecto.',
        'contact-loc-title': 'Dirección de Oficina',
        'contact-email-title': 'Correo Electrónico',
        'contact-phone-title': 'Llámenos',
        'form-name': 'Nombre Completo',
        'form-email': 'Correo Electrónico',
        'form-subject': 'Asunto',
        'form-message': 'Mensaje',
        'form-submit': 'Enviar Mensaje',
        'opt-feed': 'Consultoría de Ingeniería',
        'opt-detail': 'Ingeniería de Detalle',
        'opt-support': 'Gerencia de Proyectos'
    }
};

const portfolioProjects = [
    {
        title: { en: 'Refinery Expansion Phase II', es: 'Expansión de Refinería Fase II' },
        category: { en: 'Detail Engineering', es: 'Ingeniería de Detalle' },
        country: 'Colombia',
        image: 'assets/project-1.png',
        summary: {
            en: 'Comprehensive detail engineering for the capacity increase of a major refinery in Barrancabermeja.',
            es: 'Ingeniería de detalle integral para el aumento de capacidad de una refinería principal en Barrancabermeja.'
        }
    },
    {
        title: { en: 'Offshore Platform FEED', es: 'FEED para Plataforma Offshore' },
        category: { en: 'Engineering Consulting', es: 'Consultoría de Ingeniería' },
        country: 'Ecuador',
        image: 'assets/project-2.png',
        summary: {
            en: 'Conceptual and engineering consulting for a new production platform in the Gulf of Guayaquil.',
            es: 'Consultoría técnica y conceptual para una nueva plataforma de producción en el Golfo de Guayaquil.'
        }
    },
    {
        title: { en: 'Pipeline Integrity Support', es: 'Soporte de Integridad de Ductos' },
        category: { en: 'Project Management', es: 'Gerencia de Proyectos' },
        country: 'Peru',
        image: 'assets/project-3.png',
        summary: {
            en: 'Comprehensive project management and inspection services for regional pipeline replacement projects.',
            es: 'Gerencia integral de proyecto y servicios de inspección para proyectos regionales de reemplazo de ductos.'
        }
    }
];

let currentLang = 'en';

function init() {
    setupLanguageToggle();
    renderPortfolio();
    setupHeaderScroll();
}

function setupLanguageToggle() {
    const btn = document.getElementById('lang-toggle');
    btn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateTranslations();
        renderPortfolio();
    });
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

function renderPortfolio() {
    const container = document.getElementById('portfolio-container');
    container.innerHTML = '';

    portfolioProjects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.innerHTML = `
            <div class="portfolio-img" style="background-image: url('${project.image}');">
                <span class="portfolio-location">${project.country}</span>
            </div>
            <div class="portfolio-content">
                <span class="portfolio-tag">${project.category[currentLang]}</span>
                <h3>${project.title[currentLang]}</h3>
                <p>${project.summary[currentLang]}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

function setupHeaderScroll() {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });
}

function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header, .service-card, .portfolio-item').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    setupHeaderScroll();
    setupScrollReveal();
});
