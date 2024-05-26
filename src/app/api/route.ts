// pages/api/route.ts
import { createTransporter } from '@/utils/createTransporter';
import {montserrat} from "@/fonts/Fonts";

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
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://kit.fontawesome.com/98b9c84d40.js" crossorigin="anonymous"></script>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                        }
                        .container {
                            width: 80%;
                            margin: 0 auto;
                            border-radius: 5px;
                            background-color: #f9f9f9;
                        }
                        .section {
                            margin-bottom: 20px;
                        }
                        .section h2 {
                            color: #555;
                            border-bottom: 1px solid #ddd;
                            padding-bottom: 5px;
                        }
                        .details {
                            margin-left: 20px;
                        }
                        .details p {
                            margin: 5px 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <p>Bonjour Unred,</p>
        
                        <div class="section">
                            <h2>Coordonnées de l'utilisateur</h2>
                            <div class="details">
                                <p><strong>Nom :</strong> ${res.lastName}</p>
                                <p><strong>Prénom :</strong> ${res.firstName}</p>
                                <p><strong>Email :</strong> ${res.email}</p>
                                <p><strong>Numéro de téléphone :</strong> ${res.phone}</p>
                                <p><strong>Region :</strong> ${res.region}</p>
                                <p><strong>Ville :</strong> ${res.city}</p>
                                <p><strong>Adresse complète :</strong> ${res.address}</p>
                                <p><strong>Code postal :</strong> ${res.code}</p>
                            </div>
                        </div>
        
                        <div class="section">
                            <h2>Détail de la commande</h2>
                            <div class="details">
                                <p><strong>Chaussures :</strong> ${res.title}</p>
                                <p><strong>Prix :</strong> ${res.price}</p>
                                <p><strong>Taille ou pointure :</strong> ${res.size}</p>
                                <p><strong>Livraison :</strong> ${res.livraison}</p>
                            </div>
                        </div>
                    </div>
                </body>
            </html>        
            `,
        })

        await transporter.sendMail({
            from: res.email,
            to: process.env.NEXT_APP_EMAIL,
            subject: "Votre commande chaussure Unred",
            html: `
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                
                  position: absolute;
                  right: 15px;
                  top: 12px;
                  font-size: 1.1rem;
                  
                  background: orange;
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
                    
                    background: red;
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
<!--                      <div class="box5">-->
<!--                          <p class="title-2">-->
<!--                              Commandez maintenant, payez à la livraison-->
<!--                          </p>-->
<!--                      </div>-->
                      <div class="box6">
                          <a href="http://localhost:3000/" class="link title-2">
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

        // await transporter.sendMail({
        //     from: res.email,
        //     to: process.env.NEXT_APP_EMAIL,
        //     subject: "Votre commande chaussure Unred",
        //     html: `
        //
        //         <html lang="fr">
        //         <head>
        //             <meta charset="UTF-8">
        //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //             <script src="https://kit.fontawesome.com/98b9c84d40.js" crossorigin="anonymous"></script>
        //             <script src="https://cdn.tailwindcss.com"></script>
        //         </head>
        //         <body>
        //             <article className="w-full min-h-screen py-20 flex items-stretch justify-center">
        //               <div className="w-[1024px] flex justify-center">
        //                   <div className="w-8/12 flex flex-col gap-8">
        //                       <div className="border rounded-2xl h-40 flex items-center justify-center bg-black">
        //                           <h1 className={\`text-center text-5xl font-extrabold ${montserrat.className} text-white\`}>unred</h1>
        //                       </div>
        //
        //                       <div className="p-4 text-center">
        //                           <p className="font-semibold text-slate-700 text-lg">Salut Serge Nzuzi</p>
        //                           <p className="text-slate-500 text-sm">
        //                               Merci d&lsquo;avoir commandé chez Unred. Nous apprécions votre confiance et nous nous engageons à vous offrir le meilleur service. Nous vous informerons de son statut prochainement.
        //                           </p>
        //                       </div>
        //
        //                       <div className={\`flex gap-4\`}>
        //                           <div className="w-1/2 bg-blue-200 rounded-2xl h-52 overflow-hidden flex flex-col gap-8">
        //                               <div className="bg-blue-500 h-14 flex items-center justify-center">
        //                                   <span className="text-slate-50 text-xl"><i
        //                                       className="fa-solid fa-bag-shopping"></i></span>
        //                               </div>
        //
        //                               <div className="text-center flex items-center justify-center">
        //
        //                                   <div className={\`flex flex-col items-center px-10\`}>
        //                                       <p className="text-lg font-semibold">Adresse de livraison</p>
        //                                       <span className={\`w-2/12 block bg-slate-500/30 h-1\`}></span>
        //
        //                                       <p className="text-sm mt-2">
        //                                           83 esplanade de l’europe
        //                                           Dammarie-Les-Lys
        //                                           77190
        //                                           France
        //                                       </p>
        //                                   </div>
        //
        //                               </div>
        //                           </div>
        //
        //                           <div className="w-1/2 bg-blue-100 rounded-2xl h-52 overflow-hidden flex flex-col gap-8">
        //                               <div className="bg-blue-700 h-14 flex items-center justify-center">
        //                                   <span className="text-slate-50 text-xl"><i className="fa-solid fa-box"></i></span>
        //                               </div>
        //
        //                               <div className="text-center flex items-center justify-center">
        //
        //                                   <div className={\`flex flex-col items-center px-10\`}>
        //                                       <p className="text-lg font-semibold">Etat de la commande</p>
        //                                       <span className={\`w-2/12 block bg-slate-500/30 h-1\`}></span>
        //
        //                                       <p className="text-sm mt-2">
        //                                           Ta commande est en cours de traitement...
        //                                       </p>
        //                                   </div>
        //
        //                               </div>
        //                           </div>
        //
        //                       </div>
        //
        //                       <div className="border rounded-2xl min-h-46 bg-slate-100 overflow-hidden">
        //                           <div className={\`flex gap-4\`}>
        //                               <div className="w-2/5 min-h-46 grow gap-2 py-4 relative flex flex-col">
        //                                   <p className="font-semibold text-lg">Nike air Max Dn</p>
        //
        //                                   <ul className="flex flex-col gap-1">
        //                                       <li className="font-semibold text-slate-700">
        //                                           Qté: <span className="font-normal">1</span>
        //                                       </li>
        //                                       <li className="font-semibold text-slate-700">
        //                                           Taille: <span className="font-normal">41</span>
        //                                       </li>
        //                                       <li className="font-semibold text-slate-700">
        //                                           Couleur: <span className="font-normal">Noir</span>
        //                                       </li>
        //                                   </ul>
        //                                   <span className="absolute right-4 top-4 text-orange-500 text-lg font-semibold">135€</span>
        //
        //                               </div>
        //                               <div className="w-2/5 order-first min-h-46">
        //                                   <figure className="min-h-46">
        //                                       <img
        //                                           src="/excluss.webp"
        //                                           alt="title description"
        //                                           className="w-full h-full object-cover"
        //                                       />
        //                                   </figure>
        //                               </div>
        //                           </div>
        //                       </div>
        //
        //                       <div className="border-t border-slate-200">
        //                           <ul className="flex flex-col divide-y divide-gray-200 text-lg text-slate-600 font-semibold">
        //                               <li className="py-10 flex items-center justify-between">
        //                                  <p>Sous total</p>
        //                                   <span className="block text-slate-800">119.00€</span>
        //                               </li>
        //                               <li className="py-10 flex items-center justify-between">
        //                                   <p>livraison</p>
        //                                   <span className="block text-slate-800">7.99€</span>
        //                               </li>
        //                           </ul>
        //                       </div>
        //
        //                       <div className="border border-slate-200 bg-slate-50 p-10 rounded-2xl flex items-center justify-center gap-4 flex-col">
        //                           <p className="text-lg font-semibold text-slate-700 text-center">Commandez maintenant, payez à la livraison</p>
        //                           <a href="http://localhost:3000/"
        //                             className="text-center bg-black text-slate-50 px-2 rounded-full font-semibold w-28 py-4"
        //                           >Unred</a>
        //                       </div>
        //                   </div>
        //               </div>
        //           </article>
        //         </body>
        //     </html>
        //     `,
        // });


        return Response.json({
            message: 'E-mail envoyé avec succés!',
        });

    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        return Response.json({ error: error });
    }
}