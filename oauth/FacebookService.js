class FacebookService {
    constructor(appId) {
        this.appId = appId;

        FB.init({
            appId: this.appId,
            status: true,
            cookie: false,
            xfbml: true,
            version: 'v3.2'
        });
    }

    async getLoginStatus() {
        return new Promise((resolve, reject) => {
            FB.getLoginStatus(response => resolve(response))
        })
    }

    async api(route, params) {
        return new Promise((resolve, reject) => {
            FB.api(route, params, response => resolve(response))
        })
    }

    async logout() {
        return new Promise(resolve => {
            FB.logout(res => resolve(res))
        })
    }

    async login() {
        return new Promise(async (resolve, reject) => {
            const response = await this.getLoginStatus()

            if (response.status === 'connected') {
                resolve(response.authResponse);
            } else {
                FB.login(response => {
                    if (response.authResponse) {
                        resolve(response.authResponse)
                    } else {
                        reject(response)
                    }
                }, { scope: 'email,public_profile' })
            }
        })
    }
}