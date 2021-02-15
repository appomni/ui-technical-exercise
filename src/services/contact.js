const CONTACTS = [
  {
    id: 1,
    name: "First Last",
    email: "test@appomni.com",
    notes: "lorem ipsum",
  },
  {
    id: 2,
    name: "Tester McTest",
    email: "mctest@appomni.com",
    notes: "lorem ipsum",
  },
  {
    id: 3,
    name: "John Testingham Jr",
    email: "johntest@appomni.com",
    notes: "lorem ipsum",
  },
];

function createContact(contact) {
  const contacts = getContacts();
  contacts.push(contact);
  saveContacts(contacts);
}

function deleteContact(contactToRemove) {
  const contacts = getContacts();
  const indexToRemove = contacts.findIndex((contact) => contact.id === contactToRemove.id);
  contacts.splice(indexToRemove, 1);
  saveContacts(contacts);
}

function getContacts() {
  const contacts = localStorage.getItem('contacts');
  if (!contacts) {
    return seedCOntacts();
  }
  return JSON.parse(contacts);
}

function saveContacts(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

function seedCOntacts() {
  saveContacts(CONTACTS)
  return CONTACTS;
}

function updateContact(contactToUpdte) {
  const contacts = getContacts();
  const indexToEdit = contacts.findIndex((contact) => contact.id === contactToUpdte.id);
  if (indexToEdit > 0) {
    contacts.splice(indexToEdit, 1, contactToUpdte);
  }
  saveContacts(contacts);
}


export default {
  createContact,
  deleteContact,
  getContacts,
  updateContact,
}
