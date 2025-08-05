        // Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX', {
            page_title: 'Happy Baby Style - Ropa Orgánica para Bebés',
            page_location: window.location.href,
            send_page_view: true
        });

        // CSS Lazy Loading - Fallback for browsers that don't support preload
        function loadNonCriticalCSS() {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'css/non-critical.css';
            link.media = 'print';
            link.onload = function() {
                this.media = 'all';
            };
            document.head.appendChild(link);
        }

        // Load non-critical CSS after page load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadNonCriticalCSS);
        } else {
            loadNonCriticalCSS();
        }

        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Google Analytics Events
        document.addEventListener('DOMContentLoaded', function() {
            // Track CTA button clicks
            const ctaButtons = document.querySelectorAll('.cta-button, .hero-collection-button, .final-cta-button');
            ctaButtons.forEach(button => {
                button.addEventListener('click', function() {
                    gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: this.textContent.trim(),
                        value: 1
                    });
                });
            });

            // Track social media clicks
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach(link => {
                link.addEventListener('click', function() {
                    gtag('event', 'click', {
                        event_category: 'Social Media',
                        event_label: this.getAttribute('aria-label'),
                        value: 1
                    });
                });
            });

            // Track newsletter signup
            const newsletterForm = document.querySelector('.newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    gtag('event', 'sign_up', {
                        event_category: 'Newsletter',
                        event_label: 'Footer Newsletter',
                        value: 1
                    });
                    // Aquí puedes agregar la lógica para enviar el email
                    alert('¡Gracias por suscribirte!');
                });
            }

            // Track scroll depth
            let maxScroll = 0;
            window.addEventListener('scroll', function() {
                const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
                    maxScroll = scrollPercent;
                    gtag('event', 'scroll', {
                        event_category: 'Engagement',
                        event_label: scrollPercent + '%',
                        value: scrollPercent
                    });
                }
            });
        });
