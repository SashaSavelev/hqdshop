export const users = [
    { email: 'a@mail.ru', password: 'password' },
    { email: 'b@mail.ru', password: 'password' },
    { email: 'c@mail.ru', password: 'password' },
];

export const getUserByEmail = (email: string) => {
    const found = users.find(user=> user.email === email)
    return found;
}
