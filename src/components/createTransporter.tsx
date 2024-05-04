// route.ts
import nodemailer, { Transporter } from 'nodemailer';

interface MailerConfig {
    user: string;
    pass: string;
}

export const createTransporter = ({ user, pass }: MailerConfig): Transporter => {
    return nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user,
            pass,
        },
    });
};
