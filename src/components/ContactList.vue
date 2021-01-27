<template>
  <div>
    <h1>Contacts</h1>
    <contact-form
      v-show="addingOrUpdating"
      :contact="targetContact"
      @update="updateContact"
    />
    <button @click="addingOrUpdating = true">New Contact</button>
    <ul class="contacts-list">
      <li
        class="contacts-list__item"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <contact-item :contact="contact" />
        <button @click="handleEdit(contact)">Edit</button>
        <button @click="$emit('delete', contact)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
import ContactForm from "./ContactForm.vue";
import ContactItem from "./ContactItem.vue";

export default {
  name: "ContactList",
  components: {
    ContactForm,
    ContactItem,
  },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      addingOrUpdating: false,
      targetContact: {},
    };
  },
  methods: {
    handleEdit(contact) {
      this.addingOrUpdating = true;
      this.targetContact = contact;
    },
    updateContact(contact) {
      if (contact.id) {
        this.$emit("updateContact", contact);
      } else {
        this.$emit("addContact", contact);
      }
      this.addingOrUpdating = false;
      this.targetContact = {};
    },
  },
};
</script>
<style scoped>
.contacts-list {
  list-style: none;
  text-align: left;
  width: 600px;
}
.contacts-list__item {
  margin-bottom: 1em;
}
</style>