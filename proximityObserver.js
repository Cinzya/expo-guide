import * as RNEP from '@estimote/react-native-proximity';

//Starts estimote proximity observer
const startProximityObserver = () => {

    //Estimote credentials
    const ESTIMOTE_APP_ID = 'expo-guide-023';
    const ESTIMOTE_APP_TOKEN = '81fa0c1b3566bc1a037c56b13148aa5c';

    //Declare zones with assigned beacons and radius
    //Here: Zone "mint" with radius of 5m and all beacons with tag "92.2.13"
    const mint = new RNEP.ProximityZone(1, "test01");

    //Trigger when entering / exiting range of certain beacons
    mint.onEnterAction = context => {
        console.log('mint onEnter', context);
        Alert.alert(context);
    };
    mint.onExitAction = context => {
        console.log('mint onExit', context);
        Alert.alert(context);
    };
    mint.onChangeAction = context => {
        console.log('mint onChange', context);
        Alert.alert(context);
    };

    //Request android location permission
    RNEP.locationPermission.request()
        .then(
            permission => {
                console.log('location permission:' + permission);

                //Assign credentials when permission is given
                if(permission !== RNEP.locationPermission.DENIED){
                    const credentials = new RNEP.CloudCredentials(
                        ESTIMOTE_APP_ID,
                        ESTIMOTE_APP_TOKEN
                    );

                    //Notification to display on newer android phones
                    //Informs that app is running in the background
                    const config = {
                        notification:{
                            title: "Exploration mode is on",
                            text: "We will notify you when you're next to something interesting.",
                            channel:{
                            id: "exploration-mode",
                            name: "Exploration Mode"
                            }
                        }
                    };

                    RNEP.proximityObserver.initialize(credentials, config);
                    RNEP.proximityObserver.startObservingZones([mint]);
                    console.log("Observer started");
                }
            },

            //Catch error getting location permission
            error => {
                console.log("Error obtaining location permission", error);
            }
        );  
};

const stopProximityObserver = () => {
    RNEP.proximityObserver.stopObservingZones([mint]);
    console.log("Observer stopped");
};

export{
    startProximityObserver,
    stopProximityObserver
}
