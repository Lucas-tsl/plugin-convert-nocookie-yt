// Fonction pour modifier les sources des iframes YouTube en version nocookie
function updateYouTubeEmbeds() {
    // Sélectionne tous les iframes YouTube
    const iframes = document.querySelectorAll('iframe[src*="youtube.com"]');
    
    // Pour chaque iframe, on remplace le domaine par youtube-nocookie.com
    iframes.forEach(iframe => {
        try {
            const url = new URL(iframe.src); // Crée un objet URL pour analyser l'URL
            const videoId = url.pathname.split('/').pop(); // Extraire l'ID de la vidéo
            const newSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1`;
            iframe.src = newSrc; // Met à jour l'URL de l'iframe
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'iframe YouTube:', error);
        }
    });
}

// Fonction pour modifier les sources des iframes YouTube en version nocookie
function updateYouTubeEmbeds() {
    // Sélectionne tous les iframes YouTube
    const iframes = document.querySelectorAll('iframe[src*="youtube.com"]');
    
    // Pour chaque iframe, on remplace le domaine par youtube-nocookie.com
    iframes.forEach(iframe => {
        try {
            const url = new URL(iframe.src); // Crée un objet URL pour analyser l'URL
            const videoId = url.pathname.split('/').pop(); // Extraire l'ID de la vidéo
            const newSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1`;
            iframe.src = newSrc; // Met à jour l'URL de l'iframe
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'iframe YouTube:', error);
        }
    });
}


// Fonction pour forcer les iframes YouTube à utiliser youtube-nocookie.com
function enforceNoCookieYouTube() {
    const iframes = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtube-nocookie.com"]');
    iframes.forEach(iframe => {
        try {
            const url = new URL(iframe.src);
            const videoId = url.pathname.split('/').pop();
            const newSrc = `https://www.youtube-nocookie.com/embed/${videoId}?${url.searchParams.toString()}`;
            iframe.src = newSrc;
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'iframe YouTube:', error);
        }
    });
}

// Observer pour détecter les changements dans le DOM
const observer = new MutationObserver(() => {
    enforceNoCookieYouTube();
});

// Configurer l'observer pour surveiller tout le document
observer.observe(document.body, { childList: true, subtree: true });

// Exécuter la fonction initialement après le chargement du DOM
document.addEventListener('DOMContentLoaded', enforceNoCookieYouTube);

// Exécute la fonction après le chargement du DOM
document.addEventListener('DOMContentLoaded', enforceNoCookieYouTube);

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(updateYouTubeEmbeds, 1000); // Exécute après 1 seconde
});