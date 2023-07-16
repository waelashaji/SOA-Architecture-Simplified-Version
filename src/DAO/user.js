class UserDAO {
  users = [
    {
      email: 'email@example.com',
      password: 'password',
      role: 'admin',
    },
    {
      email: 'email2@example.com',
      password: 'password2',
    },
  ];

  getByEmail(email) {
    // find user by email
    let user = this.users.find(user => user.email === email);
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous task (e.g., fetching data from an API)
      setTimeout(() => {
        if (user) {
          resolve(user);
        } else {
          reject('An Error occured while retrieving user!');
        }
      }, 0); // Simulating a 0-second delay
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous task (e.g., fetching data from an API)
      setTimeout(() => {
        const success = true; // Simulating a successful operation

        if (success) {
          resolve(this.users);
        } else {
          reject('An Error occured while retrieving users!');
        }
      }, 0); // Simulating a 0-second delay
    });
  }

}

