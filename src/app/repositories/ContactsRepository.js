const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Wayne',
    email: 'soutowhs@gmail.com',
    phone: '12123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: '123@gmail.com',
    phone: '123123',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      console.log(id);
      console.log(contacts);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
