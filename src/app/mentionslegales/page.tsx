

import {BackButton} from "@/components/button/BackButton";

export default function Mentions () {
    return (
        <article id="mentions">
            <div className="container-root">
                <div className="wrapper">
                    <BackButton color="#FA4E37" path=""  backcolor="#fafafa"/>
                    <h2 className="title_h2">Mes mentions légales</h2>
                    <ol>
                        <li>
                            <h3 className="title_h3">Présentation du site</h3>
                            <p className="text">En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
                                confiance dans l’économie numérique,
                                il est précisé aux utilisateurs du site www.unred.fr, l’identité des différents
                                intervenants dans le cadre
                                de sa réalisation et de son suivi :</p>
                            <div className="proprietaire">
                                <p className="text">Unred, identifiée sous le numéro RCS 913 631 321</p>
                                <ul className="prop">
                                    <li className="text">Créateur : Serge Lema</li>
                                    <li className="text">Responsable publication : Unred</li>
                                    <li className="text">Webmaster : Serge Lema</li>
                                    <li className="text">Hébergeur : Vercel</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <h3 className="title_h3">Propriété Intellectuelle</h3>
                            <p className="text">Le contenu de ce site (textes, images, vidéos, etc.) est protégé par le
                                droit d&apos;auteur et appartient à Mobalicorps sauf mention contraire. Toute
                                reproduction,
                                diffusion ou utilisation non autorisée est strictement interdite.</p>
                        </li>
                        <li>
                            <h3 className="title_h3">Collecte de Données Personnelles</h3>
                            <p className="text">Mobalicorps peut collecter des données personnelles, telles que nom,
                                prenom
                                adresse e-mail, lorsque les utilisateurs remplissent un formulaire de contact. Ces
                                données
                                seront utilisées uniquement dans le but de fournir les services demandés. Mobalicorps ne
                                partage pas les données personnelles des utilisateurs avec des tiers sans leur
                                consentement.</p>
                        </li>
                        <li>
                            <h3 className="title_h3">Cookies</h3>
                            <p className="text">Ce site utilise des cookies pour améliorer l&apos;expérience
                                utilisateur. Les
                                cookies sont de petits fichiers stockés sur votre appareil pour collecter des
                                informations
                                sur la manière dont vous interagissez avec le site. Vous pouvez gérer les cookies dans
                                les
                                paramètres de votre navigateur.</p>
                        </li>
                        <li>
                            <h3 className="title_h3">Responsabilité</h3>
                            <p className="text">Mobalicorps ne peut être tenu responsable des erreurs ou omissions sur
                                le
                                site. Les informations fournies sont à titre indicatif et peuvent être modifiées sans
                                préavis.</p>
                        </li>
                        <li>
                            <h3 className="title_h3">Liens Externes</h3>
                            <p className="text">Ce site peut contenir des liens vers des sites externes. Mobalicorps ne
                                contrôle pas ces sites et décline toute responsabilité quant à leur contenu.</p>
                        </li>
                        <li>
                            <h3 className="title_h3">Litiges</h3>
                            <p className="text">Tout litige en relation avec l&apos;utilisation de ce site est soumis à
                                la
                                législation en vigueur.</p>
                        </li>
                    </ol>
                </div>
            </div>

        </article>
    )
}