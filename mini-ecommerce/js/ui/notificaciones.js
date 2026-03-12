//ui/notificaciones.js
const notificaciones = document.getElementById("notificaciones");

export function showToast(message) {
    
    if (!notificaciones) return;
    
    const toast = document.createElement("div");
    toast.classList.add("toast");

    toast.textContent = message;

    notificaciones.append(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
