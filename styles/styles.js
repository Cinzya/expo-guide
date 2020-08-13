import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        height: '100%',
        maxWidth: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    logo: {
        width: 290,
        height: 290,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'gray',
        borderRadius: 290/2
    },
    logoText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 21
    },
    exhibit: {
        height: 420,
        width: '100%',
        backgroundColor: '#A3A3A3',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 15
    },
    exhibitText: {
        color: 'white',
        fontSize: 20
    },
    room: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 35,
        paddingLeft: 35
    },
    roomText: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    img: {
        height: 420,
        width: '100%',
        backgroundColor: '#A3A3A3',
        marginBottom: 50
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 40
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        color: 'white',
        backgroundColor: '#D36462',
        fontSize: 50,
    },
    h1: {
        color: '#D36462',
        fontSize: 30,
        marginBottom: 20
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});