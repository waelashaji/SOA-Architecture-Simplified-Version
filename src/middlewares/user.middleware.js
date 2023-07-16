let userService = new UserService();
let authService = new AuthService();

let error = false
let users = []

async function getUsers() {
    // use auth service to authenticate user 
    let isAdmin = await authService.isAdmin('email@example.com');
    if (isAdmin) {
        // use user service to get users
        userService.getUsers()
            .then((result) => {
                // Promise resolved
                users = JSON.stringify(result);
            })
    } else {
        error = true
    }

}