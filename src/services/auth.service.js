let userService2 = new UserService();

class AuthService {
    async isAdmin(email) {
        let user;
        await userService2.getByEmail(email)
        .then((result) => {
            // Promise resolved
            user = result;
        })
        .catch((error) => {
            // Promise rejected
            console.error(error);
        });
        return user && user.role === 'admin'
    } 
}