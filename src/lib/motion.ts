/**
 * Navigateurs automatisés (captures, audits) : pas de défilement réel, donc les
 * révélations au scroll resteraient masquées. On y affiche l'état final directement.
 */
export const STATIC_RENDER = typeof navigator !== "undefined" && navigator.webdriver === true
