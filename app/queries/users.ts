import { User } from '@/app/model/user-model';

export async function createUser(user) {
    try {
        await User.create(user);
    } catch (error) {
        throw new Error(error);
    }
}
