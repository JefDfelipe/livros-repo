"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        id: 1,
        name: 'Jef',
        age: 26
    }
];
class UsersController {
    index(request, response) {
        return response.json(users);
    }
    show(request, response) {
        const { id } = request.params;
        const user = users.find((item) => item.id == id);
        return response.json(user);
    }
    ;
    store(request, response) {
        const { id, name, age } = request.body;
        const user = {
            id,
            name,
            age
        };
        users.push(user);
        return response.json(user);
    }
    update(request, response) {
        return response.send('UPDATE');
    }
    delete(request, response) {
        return response.send('DELETE');
    }
}
exports.default = UsersController;
