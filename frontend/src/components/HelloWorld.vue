<template>

  <div class="salam">

    <v-list-group
      prepend-icon={iconUrl()}>
    </v-list-group>

    <ValidationProvider rules="required|password:@confirm" v-slot="{ errors }">
      <v-text-field
        height="50px"
        dark
        v-model="password"
        label="رمر"
        outlined="false"
        rounded="true"
        persistent-hint="true"
        :rules="PasswordRules"
        type="password"
        required
        background-color="#3F4142"
        autocomplete="off"
        readonly
        onfocus="this.removeAttribute('readonly');"
      ></v-text-field>
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
      <v-text-field
        height="50px"
        dark
        v-model="confirmation"
        label="رمر"
        outlined="false"
        rounded="true"
        persistent-hint="true"
        :rules="ConfPasswordRules"
        type="password"
        required
        background-color="#3F4142"
        autocomplete="off"
        readonly
        onfocus="this.removeAttribute('readonly');"
      ></v-text-field>
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
  </div>

</template>

<script>
/* eslint-disable */
import { extend } from 'vee-validate';

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    if (value === target) {
      this.PasswordRules [
        pass => !!pass || "تکمیل الزامی است",
        pass => pass && pass.length <= 15
      ]
      this.salam = true;
      console.log("salam :  " + this.salam);
      console.log("pass :  " + this.pass);
    }
    else {
      this.salam = false;
      console.log("salam :  " + this.salam);
      console.log("pass :  " + this.pass);
    }
    // console.log("value :  " + value);
    // console.log("target :  " + target);
    return value === target;
  },
  message: 'Password confirmation does not match'
});

console.log("++++");

export default {
  name: 'HelloWorld',
  data: () => ({
    password: '',
    confirmation: '',
    salam: false,
    
    PasswordRules: [
        pass => !!pass || "تکمیل الزامی است",
        pass => pass && pass.length <= 15
      ],
    ConfPasswordRules: [
        conf => !!conf || "تکمیل confالزامی است",
        conf => conf && conf.length <= 15
      ]
  }),
  computed: {
  iconUrl () {
    return require("../assets/Key.png")
    // The path could be '../assets/img.png', etc., which depends on where your vue file is
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-list__group__header__prepend-icon .v-icon {
    color: red;
}
.v-input__icon--append .v-icon { 
    color: purple;
}

.salam {
  padding: 300px;
}

</style>