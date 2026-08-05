import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { profile } from "../../data/profile"

interface LegalModalProps {
    open: boolean
    onClose: () => void
}

// Contenu volontairement en français uniquement : références légales (LCEN, RGPD) propres au droit français.
const p = profile.fr

const LegalModal = ({ open, onClose }: LegalModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return
        if (open && !dialog.open) dialog.showModal()
        if (!open && dialog.open) dialog.close()
    }, [open])

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onCancel={onClose}
            className="modal backdrop:bg-black/60 backdrop:backdrop-blur-sm"
        >
            <div className="modal-box max-w-2xl bg-base-100 border border-base-content/10">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Fermer"
                    className="btn btn-ghost btn-sm btn-square absolute right-3 top-3"
                >
                    <X className="w-4 h-4" />
                </button>

                <h2 className="text-lg font-bold mb-1">Mentions légales</h2>
                <p className="text-sm opacity-70 mb-6">
                    Ce site est un portfolio personnel non professionnel. Conformément à l'article 6-III-2 de la
                    LCEN, l'éditeur, agissant à titre non professionnel, ne divulgue pas publiquement son identité
                    complète ; celle-ci reste accessible auprès de l'hébergeur, sur requête des autorités
                    judiciaires compétentes.
                </p>

                <dl className="space-y-4 text-sm mb-8">
                    <div>
                        <dt className="font-semibold opacity-80">Éditeur</dt>
                        <dd className="opacity-70">{p.name} — contact : {p.email}</dd>
                    </div>
                    <div>
                        <dt className="font-semibold opacity-80">Hébergement</dt>
                        <dd className="opacity-70">
                            Netlify, Inc. — 44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis.{" "}
                            <a
                                href="https://www.netlify.com/privacy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link link-hover"
                            >
                                Politique de confidentialité de Netlify
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold opacity-80">Propriété intellectuelle</dt>
                        <dd className="opacity-70">
                            L'ensemble des contenus (textes, code, mise en page) est la propriété de l'éditeur, sauf
                            mention contraire, et ne peut être réutilisé sans autorisation.
                        </dd>
                    </div>
                </dl>

                <h2 className="text-lg font-bold mb-3">Politique de confidentialité</h2>
                <div className="space-y-4 text-sm opacity-70">
                    <p>
                        <span className="font-semibold opacity-90">Formulaire de contact —</span> les champs saisis
                        (nom, email, message) ne sont ni envoyés ni stockés sur un serveur : le formulaire ouvre
                        directement votre client de messagerie via un lien <code>mailto:</code>. Aucune donnée n'est
                        collectée par ce site.
                    </p>
                    <p>
                        <span className="font-semibold opacity-90">Stockage local —</span> le site enregistre
                        uniquement votre préférence d'affichage (thème clair/sombre) dans le stockage local de votre
                        navigateur. Cette donnée technique reste sur votre appareil et n'est jamais transmise.
                    </p>
                    <p>
                        <span className="font-semibold opacity-90">Polices de caractères —</span> les polices sont
                        hébergées directement par ce site (aucun appel à des serveurs tiers type Google Fonts).
                    </p>
                    <p>
                        <span className="font-semibold opacity-90">Cookies et traceurs —</span> aucun cookie de
                        mesure d'audience, publicitaire ou de traçage n'est déposé.
                    </p>
                    <p>
                        <span className="font-semibold opacity-90">Journaux d'hébergement —</span> comme tout site
                        web, des journaux techniques (adresse IP, user-agent) peuvent être générés par l'hébergeur
                        Netlify à des fins de sécurité et de bon fonctionnement du service.
                    </p>
                    <p>
                        <span className="font-semibold opacity-90">Vos droits —</span> conformément au RGPD, vous
                        disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur les données
                        vous concernant. Pour l'exercer, contactez : {p.email}.
                    </p>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={onClose}>close</button>
            </form>
        </dialog>
    )
}

export default LegalModal
