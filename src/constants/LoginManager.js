import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from "react-native-fbsdk";

export const fbLoginManager = async () => {

    let loginData = false
    return LoginManager.logInWithPermissions(['name', 'email']).then(
        async result => {
            if (result.isCancelled) {
                loginData = false
            } else {
                await AccessToken.getCurrentAccessToken().then(async (data) => {
                    const infoRequest = new GraphRequest('/me?fields=name,email', null, (error, result) => {
                        if (error) {
                            alert('Error fetching data: ' + error.toString());
                            loginData = false
                        } else {
                            // alert('Result Name: ' + JSON.stringify(result));
                            console.log(JSON.stringify(result));
                            loginData = result
                        }
                    }
                    );
                    // Start the graph request.
                    new GraphRequestManager().addRequest(infoRequest).start();
                })
            }
            return loginData
        },
        function (error) {
            console.log('Login fail with error: ' + error);
            return loginData
        },
    );
}

export const fbLogoutManager = () => {
    LoginManager.logOut()

}
