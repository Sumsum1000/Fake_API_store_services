import loadJson from 'load-json-file';

let users = loadJson.sync('./data/Users.json');

export function getUsers (){
  return users;  
}

export  function getUser (id) {
    return users.filter(user => users.id == id);
}

export function addUser (user) {
    users.push(user);
}

export function deleteUser (userId) {
    users.filter(user => user.id != userId);
}

export function editUser (userId, newUser) {
    const [ user ] = users.filter(user => user.id == userId);
    user.email = newUser.email;
}

