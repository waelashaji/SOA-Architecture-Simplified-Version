class UserService {
    _DOA = new UserDAO();
    
    getByEmail(email) {
        return this._DOA.getByEmail(email);
    }

    getUsers() {
        return this._DOA.getAll();
    }
}