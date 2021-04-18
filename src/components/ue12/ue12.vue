<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Usercheck</div>
        </md-card-header>

        <md-card-content>
          <md-field :class="getValidationClass('email')">
            <label>Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                      :disabled="sending"/>
            <span class="md-error" v-if="!this.$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!this.$v.form.email.email">Invalid email</span>
          </md-field>

          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('password')">
              <label>Password</label>
              <md-input type="password" name="first-name" id="first-name" autocomplete="given-name" v-model="form.password"
                        :disabled="sending"/>
              <span class="md-error" v-if="!this.$v.form.password.required">Password is required</span>
            </md-field>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending"/>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Check user</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userValid">This user is clean!</md-snackbar>
      <md-snackbar :md-active.sync="userInvalid">The email {{ this.form.email }} doesn't exist!</md-snackbar>
      <md-snackbar :md-active.sync="pwdInvalid">The password has been pwend!</md-snackbar>
    </form>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {
  required,
  email,
} from 'vuelidate/lib/validators'
import sha from '@/services/sha1'
import Axios from "axios";

export default {
  name: "ue12",
  mixins: [validationMixin],
  data: () => ({
    form: {
      password: null,
      email: null,
    },
    sending: false,
    userValid: false,
    userInvalid: false,
    pwdInvalid: false,
  }),
  validations: {
    form: {
      password: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm() {
      this.$v.$reset()
      this.form.email = null
      this.form.password = null
    },
    validateEmail() {
      this.sending = true

      const self = this;
      console.log(`https://apilayer.net/api/check?access_key=310ba1c458510d8504c6b5635b210913&email=${self.form.email}`);
      Axios.get(`https://apilayer.net/api/check?access_key=310ba1c458510d8504c6b5635b210913&email=${this.form.email}`)
          .then(response => {
            if (response.data.mx_found) {
              this.validatePassword()
            } else {
              this.userInvalid = true;
              this.sending = false
              this.clearForm()
            }
          })
      // Instead of this timeout, here you can call your API
      // window.setTimeout(() => {
      //   this.userChecked = true
      //   this.sending = false
      //   this.clearForm()
      // }, 1500)
    },
    validatePassword() {
      let hash = null;
      sha(this.form.password).then(result => hash = result).then(() => {
        console.log(`https://api.pwnedpasswords.com/range/${hash.substring(0, 5)}`);
        Axios.get(`https://api.pwnedpasswords.com/range/${hash.substring(0, 5)}`)
            .then(response => {
              if(response.data.split(/:\d+\r\n/).includes(hash.substring(5))) {
                this.pwdInvalid = true
              } else {
                this.userValid = true
              }
              this.sending = false
              this.clearForm()
            })
      })
    },
    validateUser() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.validateEmail()
      }
    }
  }
}
</script>

<style scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>