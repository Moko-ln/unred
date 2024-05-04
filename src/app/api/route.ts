// pages/api/route.ts
import { createTransporter } from '@/utils/createTransporter';

export async function POST(request: Request) {

    if (!process.env.REACT_APP_EMAIL || !process.env.REACT_APP_PASS) {
        return Response.json({ message: 'Les identifiants de messagerie ne sont pas définis.' });
    }

    const transporter = createTransporter({ user: process.env.REACT_APP_EMAIL, pass: process.env.REACT_APP_PASS });

    try {
        const res = await request.json();

        console.log(res.email)
        await transporter.sendMail({
            from: "serge@gmail.com",
            to: process.env.REACT_APP_EMAIL,
            subject: "Commande chaussure UnderLux",
            text: `
                Bonjour UndexLux, je suis ${res.firstName} ${res.lastName} contact pour la paire suivante : ${res.title} au prix de ${res.price} de la tail ${res.size}
            
                ville : ${res.city}
                adresse complete  : ${res.address}
                code Postale : ${res.code}
                
            `,
        })

        return Response.json({
            message: 'E-mail envoyé avec succés!',
        });

    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        return Response.json({ error: error });
    }
}