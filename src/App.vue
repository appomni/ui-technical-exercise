<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <contact-list
      :contacts="filteredContacts"
      @addContact="add"
      @updateContact="update"
      @delete="handleDelete"
      @search-updated="filterContacts"
    />
  </div>
</template>

<script>
import ContactList from "./components/ContactList";

export default {
  name: "App",
  components: {
    ContactList,
  },
  data() {
    return {
      contacts: [
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
      ],
      filteredContacts: [],
    };
  },
  methods: {
    add(contact) {
      contact.id = Math.random().toString(32).substr(2);
      this.contacts.push(contact);
    },
    update(contact) {
      const contactIndex = this.contacts.findIndex((c) => c.id === contact.id);
      if (contactIndex > 0) {
        this.contacts.splice(contactIndex, 1, contact);
      }
    },
    handleDelete(contact) {
      const contactIndex = this.contacts.findIndex((c) => c.id === contact.id);
      if (contactIndex > 0) {
        this.contacts.splice(contactIndex, 1);
      }
    },
    filterContacts(searchValue) {
      this.filteredContacts = this.contacts.filter((contact) => (contact.name).includes(searchValue) || contact.email.includes(searchValue));
    }
  },
  mounted() {
    this.filteredContacts = this.contacts;
  },
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
