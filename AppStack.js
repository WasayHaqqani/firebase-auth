/* eslint-disable prettier/prettier */
import React,{useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './screens/LoadingScreen';
import { LoginContext } from './utils/LoginProvider';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createStackNavigator();

const AppStack = () => {
    // let user,isLoading = true;
    const {user, isLoading} = useContext(LoginContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    isLoading ? (
                        <Stack.Screen name="LoadingScreen" options={{ headerShown: false }} component={LoadingScreen}/>
                    )
                    : user ? (
                        <Stack.Screen name="Home" component={HomeScreen}/>)
                    : (
                        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;
