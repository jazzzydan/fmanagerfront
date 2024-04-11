<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
      />
        <div class="container text-start">
          <div class="row justify-content-center">
            <div class="col">
              <AlertDanger :message="message"/>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input v-model="username" type="text" class="form-control" id="username">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password">
              </div>
            </div>
          </div>
        </div>

        <div class="form-group">
          <button @click="executeLogIn" type="submit" class="btn btn-primary text-center text-nowrap">Log in</button>
        </div>
    </div>
  </div>
</template>

<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";
import router from "@/router";
export default {
  name: "LoginView",
  components: {AlertDanger},
  data() {
    return {
      username: '',
      password: '',
      message: '',
      loginResponse: {
        userId: 0,
        roleName: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }

    }
  },
  methods: {

    executeLogIn() {
      if (this.allFieldsWithCorrectInput()) {
        this.sendLoginRequest()
      } else {
        this.displayAllFieldsRequiredAlert();
      }
    },

    allFieldsWithCorrectInput() {
      return this.username.length > 0 && this.password.length > 0;
    },


    sendLoginRequest() {

      //todo: lisada kodeerimine (kasutaja ja salasona)
      this.$http.get('/login', {
            params: {
              username: this.username,
              password: this.password
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        this.handleLoginRequestResponse()
      }).catch(error => {
        this.errorResponse = error.response.data
        this.handleError(error.response.status)
      })
    },

    handleLoginRequestResponse() {
      this.saveLoginResponseInfoToSessionStorage();
      this.$emit('event-update-nav-menu')
      this.resetAllInputFields()

      switch (this.loginResponse.roleName) {
        case 'admin':
          router.push({name: 'usersRoute'})
          break;
        case 'scout':
          router.push({name: 'playersRoute'})
          break;
        case 'coach':
          router.push({name: 'teamRoute'})
          break;
        default:
          router.push({name: 'homeRoute'})
          break;
      }
    },

    saveLoginResponseInfoToSessionStorage() {
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem('roleName', this.loginResponse.roleName)
    },

    resetAllInputFields() {
      this.username = ''
      this.password = ''
    },

    displayAllFieldsRequiredAlert() {
      this.message = "Täida kõik väljad";
      setTimeout(this.resetMessage, 4000);
    },

    handleError(statusCode) {
      this.handleIncorrectCredentialsError(statusCode);
      this.handleSomethingWentWrongError();
    },

    handleIncorrectCredentialsError(statusCode) {
      if (this.incorrectCredentials(statusCode)) {
        this.displayIncorrectCredentialsAlert()
      }
    },

    handleSomethingWentWrongError() {
      if (111 !== this.errorResponse.errorCode) {
        router.push({name: 'errorRoute'})
      }
    },

    incorrectCredentials(statusCode) {
      return statusCode === 403 && this.errorResponse.errorCode === 111;
    },

    displayIncorrectCredentialsAlert() {
      this.message = this.errorResponse.message;
      setTimeout(this.resetMessage, 4000);
    },

    resetMessage() {
      this.message = ''
    },

  }
}
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

</style>
