class CredentialManager {
    verifyUserCredentials() {
        //
    }

    verifyEnvironmentCredentials() {
        //
    }
}

class User {
    constructor(user) {
        this.user = user;
        this.auth = new CredentialManager();
    }

    someMethod() {
        //
    }
}

class Settings {
    constructor(settings) {
        this.user = settings;
        this.auth = new CredentialManager();
    }

    someMethod() {
        //
    }
}

new User();
new Settings();
