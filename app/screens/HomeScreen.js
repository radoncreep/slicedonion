import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import AppLoading from 'expo-app-loading';


import Content from '../components/Content';
import authStorage from '../utility/storage';
import { registerUserAuth } from '../store/actions';
import { ContentPlaceholder } from '../components/ContentPlaceholder';

const HomeScreen = ({ navigation }) => {
    const [ hasLoaded, setHasLoaded ] = useState(false);
    const dispatch = useDispatch();
  
    const retrieveToken = async () => {
        const token = await authStorage.getToken();
        if (!token) return;

        const authUser = jwtDecode(token);
        dispatch(registerUserAuth(authUser));
    }
  
    useEffect(() => {
        retrieveToken();
    }, []);


    if (!hasLoaded) {
        return (
            <AppLoading 
                startAsync={retrieveToken} 
                onFinish={() => setHasLoaded(true)} 
                onError={console.warn}
            />
        )
    };
    
    return (
        <Content
            imagebgUrl="https://avatarfiles.alphacoders.com/211/211710.jpg"
            description="In a world where demons feed on unsuspecting humans, fragments of the legendary and feared demon Ryoumen Sukuna were lost and scattered about. Should any demon consume Sukuna's 
            body parts, the power they gain could destroy the world as we know it. 
            Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the precarious
            existence of the living from the undead!\n\nYuuji Itadori is high schooler who spends his days visiting
            his bedridden grandfather. Although he looks like your average teenager, his immense physical strength
            is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the
            school outcasts in the Occult Club. One day, the club manages to get their hands on a sealed cursed object,
            but little do they know the terror they'll unleash when they break the seal
            "
            title="DOCTOR STONE"
            navigation={navigation}
        />
   );
};

export default HomeScreen;