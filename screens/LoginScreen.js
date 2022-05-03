/* eslint-disable no-alert */ /* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { View, StyleSheet, TextInput, Button, Text} from 'react-native';
import FirebaseUtil from '../utils/FirebaseUtil';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Sign in or Sign Up
    const [create, setCreate] = useState(false);

    const signIn = ()=>{
        FirebaseUtil.signIn(email,password).catch((e)=>{
            console.log(e);
            alert('Wrong credentials! Try Again.');
        });
    };
    const signUp = ()=>{
        FirebaseUtil.signUp(email,password).catch((e)=>{
            console.log(e);
            alert('Something Went Wrong! Try Again.');
        });
    };
    return (
        <View style={styles.container}>
            <View style={styles.secondaryView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />

                {create ?
                     <>
                        <Button title="Sign Up" onPress={()=>signUp()}/>
                        <Text style={styles.text} onPress={()=>setCreate(false)}>Sign In</Text>
                    </> :
                    <>
                        <Button title="Sign In" onPress={()=>signIn()}/>
                        <Text style={styles.text} onPress={()=>setCreate(true)}>Create An Account</Text>
                    </>
                }
            </View>
            {/* <View><Text>{email}</Text></View> */}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    height: '100%',
  },
  secondaryView: {
    width: '80%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
      color: 'blue',
      marginTop: 20,
  },
});

export default LoginScreen;
