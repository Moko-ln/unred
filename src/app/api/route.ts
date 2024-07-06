import { createTransporter } from '@/utils/createTransporter';

export async function POST(request: Request) {

    if (!process.env.NEXT_APP_EMAIL || !process.env.NEXT_APP_PASS) {

        console.log("Les identifiants de messagerie ne sont pas définis.")
        return Response.json({ message: 'Les identifiants de messagerie ne sont pas définis.' });
    }

    const transporter = createTransporter({ user: process.env.NEXT_APP_EMAIL, pass: process.env.NEXT_APP_PASS });

    try {
        const res = await request.json();

        await transporter.sendMail({
            from: res.email,
            to: process.env.NEXT_APP_EMAIL,
            subject: "Commande chaussure Unred",
            html: `
                <html lang="fr">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Commande chaussure Unred</title>
                        <script src="https://kit.fontawesome.com/98b9c84d40.js" crossorigin="anonymous"></script>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                line-height: 1.6;
                                color: #333;
                                
                                margin: 0;
                                padding: 0;
                                box-sizing: border-box;
                            }
                            
                            #emailSection{
                              display: flex;
                              align-items: center;
                              justify-content: center;
                            
                              padding-top: 70px;
                            }
                            
                            .inner-container {
                              width: 1024px;
                              margin: 0 auto;
                            
                              display: flex;
                              flex-direction: column;
                              align-items: center;
                              justify-content: center;
                            }
                            
                            .box25{
                              background: #000;
                              text-align: center;
                              color: #fafafa;
                            
                              border-radius: 5px;
                              height: auto;
                              padding: 10px;
                              display: flex;
                              flex-direction: column;
                              align-items: center;
                              justify-content: center;
                              margin-bottom: 25px;
                              width: 100%;
                            }
                            h1{
                                text-align: center;
                                margin: 0 auto;
                            }
                            
                            .box1{
                              max-width: 750px;
                              margin-bottom: 25px;
                            
                              text-align: center;
                            
                            }
                            .fontBold{
                              font-family: "Poppins Black", serif;
                              font-weight: 900;
                              font-size: 4.0rem;
                              text-align: center;
                            }
                            .title-1{
                              font-family: "Poppins", serif;
                              font-size: 1.1rem;
                              margin-bottom: 8px;
                            }
                            .title-2{
                              font-family: "Poppins", serif;
                              font-size: 1.0rem;
                              margin-bottom: 4px;
                            }
                            
                            .fontsemiBold{
                              font-family: "Poppins", serif;
                              font-weight: 700;
                              font-size: 2.1rem;
                            }
                            
                            .text-1{
                              color: #535353;
                              font-size: .9rem;
                              text-align: center;
                            }
                            
                            .box2{
                              display: flex;
                              gap: 25px !important;
                            
                              height: 170px;
                              margin-bottom: 35px;
                            }
                            
                            .section-item{
                              width: 50%;
                              text-align: center;
                              border-radius: 5px;
                              /*border: 1px solid #ddd;*/
                            }
                            
                            .under{
                              height: 1px;
                              width: 140px;
                              background: #858585;
                            }
                            
                            .order-item{
                              display: flex;
                              gap: 10px;
                              width: auto;
                            
                              margin: 0 auto;
                            }
                            
                            .order-item-content{
                              border: 1px solid #e8e8e8;
                              padding: 15px;
                            
                              border-radius: 25px;
                              position: relative;
                             
                              margin: 0 auto;
                            }
                            
                            .price{
                              color: orange;
                            
                              font-weight: 700;
                              border-radius: 50px;
                              font-size: 1.1rem;
                              text-align: center;
                            }
                            
                            .box4{
                              margin-bottom: 45px;
                              margin-top: 45px;
                            }
                            .list{
                              display: flex;
                              flex-direction: column;
                              gap: 10px;
                            }
                            .listitem{
                              text-align: center;
                            
                              border: 1px solid #e8e8e8;
                              height: 70px;
                              padding: 0 25px;
                            
                              border-radius: 5px;
                              width: 100%;
                            }
                            .box5{
                              background: #000000;
                              text-align: center;
                              color: #fafafa;
                              border-radius: 5px;
                            
                              height: 120px;
                              margin-bottom: 25px;
                            
                              display: flex;
                              flex-direction: column;
                              gap: 10px;
                              align-items: center;
                              justify-content: center;
                            }
                            .itemOrder{
                              font-weight: 700;
                            }
                            
                            .itemOrder span{
                              font-weight: 400;
                            }
                            
                            .box6{
                              display: flex;
                              align-items: center;
                              justify-content: center;
                            }
                            .link{
                              margin: 0 auto;
                              color: #084da8;
                              text-align: center;
                            }
                            .listorder{
                                display: flex;
                                justify-content: center;
                                align-content: center;
                                gap: 4px;
                            }
                            .title{
                                text-align: center;
                            }
                            
                            button,
                            input,
                            select,
                            textarea {
                              font-family: inherit;
                              font-size: inherit;
                              font-weight: inherit;
                            }
                            
                            /* Remise à zéro des styles de liste */
                            ul,
                            ol {
                              list-style: none;
                            }
                            
                            /* Remise à zéro des styles de lien (optionnel) */
                            a {
                              text-decoration: none;
                              color: inherit;
                            }
                            
                            /* Remise à zéro des éléments flottants (optionnel) */
                            .clearfix::after {
                              content: "";
                              display: table;
                              clear: both;
                            }
                        </style>
                    </head>
                    <body>
                        <article id="emailSection">
                          <div class="inner-container">
                              <div class="content">
                                  <div class="box25">
                                      <h1 class="fontBold title">unred</h1>
                                  </div>
                                  <div class="box1">
                                      <p class="title-1">Bonjour,</p>
                                      <p class="text-2">
                                        Une nouvelle commande a été enregistrée sur votre boutique Unred de ${res.firstName} ${res.lastName}. 
                                        Veuillez répondre dans les plus brefs délais pour confirmer et traiter cette commande.
                                      </p>
                                  </div>
                                  <div class="box2">
                                      <div class="section-item">
                                          <div>
                                              <p class="title-2">Adresse de livraison</p>
                                              <span class="under"></span>
                                              <p class="text-1">
                                                  ${res.address}, ${res.city}<br>
                                                  ${res.code}
                                              </p>
                                          </div>
                                      </div>
                                      <div class="section-item">
                                        <div>
                                          <p class="title-2">Etat de la commande</p>
                                          <span class="under"></span>
                                          <p class="text-1">En attente de traitement ...</p>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="card">
                                      <div class="order-item">
                                          <div class="order-item-content">
                                              <p class="title-2">${res.title}</p>
                                              <ul class="listorder">
                                                  <li class="itemOrder">Qté: <span>${res.quantity}</span></li>
                                                  <li class="itemOrder">Taille: <span>${res.size}</span></li>
                                                  <li class="itemOrder">Couleur: <span>${res.color}</span></li>
                                              </ul>
                                              <p class="price">${res.price}</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="box4">
                                      <ul class="list">
                                          <li class="listitem">
                                              <p>Sous total</p>
                                              <p class="text-1 fontsemiBold">${res.price}.00€</p>
                                          </li>
                                          <li class="listitem">
                                              <p>Livraison</p>
                                              <p class="text-1 fontsemiBold">${res.livraison !== "gratuite" ? `${res.livraison}€` : res.livraison}</p>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="box6">
                                      <a href="unred.fr" class="link title-2">
                                          Unred.fr
                                      </a>
                                  </div>
            
                              </div>
                          </div>
                      </article>
                    </body>
                </html>      
            `,
        })

        await transporter.sendMail({
            from: process.env.NEXT_APP_EMAIL,
            to: res.email,
            subject: "Votre commande chaussure Unred",
            html: `
                    <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Commande chaussure Unred</title>
            <script src="https://kit.fontawesome.com/98b9c84d40.js" crossorigin="anonymous"></script>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                #emailSection{
                  display: flex;
                  align-items: center;
                  justify-content: center;
                
                  padding-top: 70px;
                }
                
                .inner-container {
                  width: 1024px;
                  margin: 0 auto;
                
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                }
                
                .box25{
                  background: #000;
                  text-align: center;
                  color: #fafafa;
                
                  border-radius: 5px;
                  height: auto;
                  padding: 10px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  margin-bottom: 25px;
                  width: 100%;
                }
                h1{
                    text-align: center;
                    margin: 0 auto;
                }
                
                .box1{
                  max-width: 750px;
                  margin-bottom: 25px;
                
                  text-align: center;
                
                }
                .fontBold{
                  font-family: "Poppins Black", serif;
                  font-weight: 900;
                  font-size: 4.0rem;
                  text-align: center;
                }
                .title-1{
                  font-family: "Poppins", serif;
                  font-size: 1.1rem;
                  margin-bottom: 8px;
                }
                .title-2{
                  font-family: "Poppins", serif;
                  font-size: 1.0rem;
                  margin-bottom: 4px;
                }
                
                .fontsemiBold{
                  font-family: "Poppins", serif;
                  font-weight: 700;
                  font-size: 2.1rem;
                }
                
                .text-1{
                  color: #535353;
                  font-size: .9rem;
                  text-align: center;
                }
                
                .box2{
                  display: flex;
                  gap: 25px !important;
                
                  height: 170px;
                  margin-bottom: 35px;
                }
                
                .section-item{
                  width: 50%;
                  text-align: center;
                  border-radius: 5px;
                  /*border: 1px solid #ddd;*/
                }
                
                .under{
                  height: 1px;
                  width: 140px;
                  background: #858585;
                }
                
                .order-item{
                  display: flex;
                  gap: 10px;
                  width: auto;
                
                  margin: 0 auto;
                }
                
                .order-item-content{
                  border: 1px solid #e8e8e8;
                  padding: 15px;
                
                  border-radius: 25px;
                  position: relative;
                 
                  margin: 0 auto;
                }
                
                .price{
                  color: orange;
                
                  font-weight: 700;
                  border-radius: 50px;
                  font-size: 1.1rem;
                  text-align: center;
                }
                
                .box4{
                  margin-bottom: 45px;
                  margin-top: 45px;
                }
                .list{
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                }
                .listitem{
                  text-align: center;
                
                  border: 1px solid #e8e8e8;
                  height: 70px;
                  padding: 0 25px;
                
                  border-radius: 5px;
                  width: 100%;
                }
                .box5{
                  background: #000000;
                  text-align: center;
                  color: #fafafa;
                  border-radius: 5px;
                
                  height: 120px;
                  margin-bottom: 25px;
                
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  align-items: center;
                  justify-content: center;
                }
                .itemOrder{
                  font-weight: 700;
                }
                
                .itemOrder span{
                  font-weight: 400;
                }
                
                .box6{
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                .link{
                  margin: 0 auto;
                  color: #084da8;
                  text-align: center;
                }
                .listorder{
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    gap: 4px;
                }
                .title{
                    text-align: center;
                }
                
                button,
                input,
                select,
                textarea {
                  font-family: inherit;
                  font-size: inherit;
                  font-weight: inherit;
                }
                
                /* Remise à zéro des styles de liste */
                ul,
                ol {
                  list-style: none;
                }
                
                /* Remise à zéro des styles de lien (optionnel) */
                a {
                  text-decoration: none;
                  color: inherit;
                }
                
                /* Remise à zéro des éléments flottants (optionnel) */
                .clearfix::after {
                  content: "";
                  display: table;
                  clear: both;
                }
            </style>
        </head>
        <body>
            <article id="emailSection">
              <div class="inner-container">
                  <div class="content">
                      <div class="box25">
                          <h1 class="fontBold title">unred</h1>
                      </div>
                      <div class="box1">
                          <p class="title-1">Salut ${res.firstName} ${res.lastName}</p>
                          <p class="text-1">
                              Merci d&apos;avoir commandé chez Unred. Nous apprécions votre confiance et nous nous
                              engageons
                              à vous offrir le meilleur service. Nous vous informerons de son statut prochainement.
                          </p>
                      </div>
                      <div class="box2">
                          <div class="section-item">
                              <div>
                                  <p class="title-2">Adresse de livraison</p>
                                  <span class="under"></span>
                                  <p class="text-1">
                                      ${res.address} ${res.city}<br>
                                      ${res.code}
                                  </p>
                              </div>
                          </div>
                          <div class="section-item">
                            <div>
                              <p class="title-2">Etat de la commande</p>
                              <span class="under"></span>
                              <p class="text-1">Ta commande est en cours de traitement...</p>
                            </div>
                          </div>
                      </div>
                      <div class="card">
                          <div class="order-item">
                              <div class="order-item-content">
                                  <p class="title-2">Nike air Max Dn</p>
                                  <ul class="listorder">
                                      <li class="itemOrder">Qté: <span>${res.quantity}</span></li>
                                      <li class="itemOrder">Taille: <span>${res.size}</span></li>
                                      <li class="itemOrder">Couleur: <span>${res.color}</span></li>
                                  </ul>
                                  <p class="price">${res.price}</p>
                              </div>
                          </div>
                      </div>
                      <div class="box4">
                          <ul class="list">
                              <li class="listitem">
                                  <p>Sous total</p>
                                  <p class="text-1 fontsemiBold">${res.price}.00€</p>
                              </li>
                              <li class="listitem">
                                  <p>Livraison</p>
                                  <p class="text-1 fontsemiBold">${res.livraison !== "gratuite" ? `${res.livraison}€` : res.livraison}</p>
                              </li>
                          </ul>
                      </div>
                      <div class="box6">
                          <a href="unred.fr" class="link title-2">
                              Unred.fr
                          </a>
                      </div>

                  </div>
              </div>
          </article>
        </body>
        </html>        
                  `,
        });

        return Response.json({
            message: 'E-mail envoyé avec succés!',
        });

    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        return Response.json({ error: error });
    }
}