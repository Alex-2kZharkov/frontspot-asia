class UserSettings {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    // ...
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }
}
