
// Formatear precio
export function formatPrice() {
    return `${price.toFixed(2)} €`;
}

// obtener el query param de la URL
export function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}   