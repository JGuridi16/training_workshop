<template>
  <div class="columns mt-5 mx-5">
    <section class="column is-one-third">
      <div class="has-background-light p-5">
        <b-field label="Name">
          <b-input
            type="text"
            maxlength="50"
            v-model="formInfo.name_form"
          ></b-input>
        </b-field>

        <b-field label="Lastname">
          <b-input type="text" v-model="formInfo.lastname_form" maxlength="100">
          </b-input>
        </b-field>

        <b-field label="Age">
          <b-input
            type="number"
            v-model="formInfo.age_form"
            maxlength="3"
          ></b-input>
        </b-field>
      </div>
    </section>
    <section class="column is-three-quarters">
      <div class="card-container has-background-light">
        <template>
          <div :key="index" v-for="(person, index) in $store.state.personList">
            <p>{{ person.name }}</p>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "Form",
  props: {
    msg: String,
  },
  data: () => {
    return {
      title: "Person Form",
      formInfo: {
        name_form: "",
        lastname_form: "",
        age_form: 0,
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
