import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { View, TextInput, Text } from 'react-native';
import { Button, Image } from "react-native-elements";
import styles from "../styles/styles.js";

export default function Login({navigation}) {

  const firebaseConfig = {
    apiKey: "AIzaSyBUxusNJ-pW9YDsmcP80k-SDBaYIn4K114",
    authDomain: "aliencad-login.firebaseapp.com",
    projectId: "aliencad-login",
    storageBucket: "aliencad-login.appspot.com",
    messagingSenderId: "205351769296",
    appId: "1:205351769296:web:ad817fb5c2ec168808fad5",
    measurementId: "G-419T6FM8LK"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const [getEmail, setEmail] = useState([]);
  const [getPwd, setPwd] = useState([]);
  
  
  function login(){
    signInWithEmailAndPassword(auth, getEmail, getPwd)
    .then((userCredential) => {
      navigation.navigate('UserList')
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
      });
  }


  return (
    <View style={styles.box3}>
          <View style={{ alignItems: "center", paddingTop: 50 }}>
            <Image
              source={require("../images/alien.png")}
              style={styles.logoImgRegister}
            />
          </View>
          <Text style={styles.titleRegister}>Cadastro de usuário</Text>
          <View style={styles.box4}>
            <TextInput
              style={styles.textInputUserRegister}
              maxLength={20}
              placeholderTextColor="green"
              placeholder="E-mail"
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              style={styles.textInputUserRegister}
              maxLength={20}
              placeholderTextColor="green"
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(pwd) => setPwd(pwd)}
            />
            <View style={styles.buttonView}>
              <Button
                title="Login"
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitle}
                onPress={() => login()}
              />
              <Button
                title="Cancelar"
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitle}
                onPress={() => navigation.navigate("Home")}
              />
            </View>
          </View>
        </View>
  );
}

