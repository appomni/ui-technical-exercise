<template>
  <form action="" @submit.prevent="submit">
    {{ internalContact }}
    <div class="field">
      <label>Name</label>
      <input v-model="internalContact.name" type="text" />
    </div>
    <div class="field">
      <label>Email</label>
      <input v-model="internalContact.email" type="email" />
    </div>
    <div class="field">
      <label>Notes</label>
      <textarea v-model="internalContact.notes"> </textarea>
    </div>
    <button type="submit">
      {{ internalContact.id ? "Update" : "Create" }}
    </button>
  </form>
</template>
<script>
export default {
  name: "ContactForm",
  props: {
    contact: {
      type: Object,
      required: false,
      default: () => ({
        name: "",
        email: "",
        notes: "",
        id: null,
      }),
    },
  },
  data() {
    return {
      internalContact: {},
    };
  },
  watch: {
    contact: {
      handler() {
        this.internalContact = { ...this.contact };
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    submit() {
      this.$emit("update", this.internalContact);
    },
  },
};
</script>
<style scoped>
</style>