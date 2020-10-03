import React, { Component } from 'react';
import { View } from 'react-native';
//import { GoogleSigninButton, statusCodes, GoogleSignin } from 'react-native-google-signin';

export default class FBGoogleSignin extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // GoogleSignin.configure({
        //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        //     webClientId: '145673018369-vm9nfod6p9cftpkp50gc8kr7hg5r16ul.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        //     hostedDomain: '', // specifies a hosted domain restriction
        //     loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
        //     forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
        //     accountName: '', // [Android] specifies an account name on the device that should be used
        //     iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        // });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                > */}
                <Text>Hello</Text>
            </View>
        );
    }
}