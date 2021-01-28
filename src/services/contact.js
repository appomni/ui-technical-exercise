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

function getContacts() {
  const contacts = localStorage.getItem('contacts');
  if (!contacts) {
    return seedContacts();
  }
  return JSON.parse(contacts);
}

function seedContacts() {
  localStorage.setItem('contacts', JSON.stringify(CONTACTS));
  return CONTACTS;
}


export default {
  getContacts,
}