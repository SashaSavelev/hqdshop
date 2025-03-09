import { getToken } from 'next-auth/jwt';

export default async function getUserToken(req: Request) {
    try {
        const secret = process.env.AUTH_SECRET;
        const token = await getToken({
            req: req,
            secret: secret,
        });

        if (!token) {
            console.warn('Токен не найден. Пользователь не авторизован.');
            return null;
        }
        return token;
    } catch (error) {
        console.error('Ошибка при получении токена:', error);
        return null;
    }
}
