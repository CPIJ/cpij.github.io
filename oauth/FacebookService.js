class FacebookService {
    constructor() {
        var config = {
            apiKey: "AIzaSyA4ezE-8GM9EaeXqemoK8KjucpI9mQwcPc",
            authDomain: "checkout-9b527.firebaseapp.com",
            databaseURL: "https://checkout-9b527.firebaseio.com",
            projectId: "checkout-9b527",
            storageBucket: "checkout-9b527.appspot.com",
            messagingSenderId: "133776263682"
        };

        FB.init({   
            appId: this.appId,
            status: true,
            cookie: false,
            xfbml: true,
            version: 'v3.2'
        });

        firebase.initializeApp(config);

        this.provider = new firebase.auth.FacebookAuthProvider();
        this.provider.addScope("public_profile");
        this.provider.addScope("email");
    }

    async api(route, params) {
        return new Promise((resolve, reject) => {
            FB.api(route, params, response => resolve(response))
        })
    }

    async logout() {
        return firebase.auth().signOut();
    }

    async login() {
        return firebase.auth().signInWithPopup(this.provider);
    }
}