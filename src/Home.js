


import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';



import Swiper from 'react-native-swiper'
const Home = () => {

    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper autoplay horizontal={false} height={200}>
                    <View style={styles.slide}>
                        <Image  source={require('./Image/Atitla.jpg')}
                            resizeMode='cover'
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('./Image/Banner.jpg')}
                            resizeMode='cover'
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('./Image/Beach.jpg')}
                            resizeMode='cover'
                        />
                    </View>
                </Swiper>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
         borderRadius: 18,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 18,
        // backgroundColor: 'red',
         overflow:'hidden'
    },
    slideImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 18,
    }
});

export default Home;
