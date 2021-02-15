<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <contact-list
      :contacts="contacts"
      @addContact="add"
      @updateContact="update"
      @delete="handleDelete"
    />
  </div>
</template>

<script>
import ContactList from "./components/ContactList";
import ContactService from "./services/contact";

export default {
  name: "App",
  components: {
    ContactList,
  },
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    add(contact) {
      contact.id = Math.random().toString(32).substr(2);
      ContactService.createContact(contact);
      this.getContacts();
    },
    getContacts() {
      this.contacts = ContactService.getContacts();
    },
    handleDelete(contact) {
      ContactService.deleteContact(contact);
      this.getContacts();
    },
    update(contact) {
      ContactService.updateContact(contact); 
      this.getContacts();
    },
  },
  mounted() {
    this.getContacts();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
