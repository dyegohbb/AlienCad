import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Header, Button, Image, Input } from "react-native-elements";
import styles from "../styles/styles.js";
import axios from "axios";

export default function Register({ route, navigation }) {

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
  const [getType, setType] = useState();
  const [getNome, setNome] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPwd, setPwd] = useState("");
  const [getCpf, setCpf] = useState("");
  const [getTel, setTel] = useState("");
  const [getId, setId] = useState("");


  useEffect(() => {
    if (route.params) {
      const { type } = route.params;
      const { nome } = route.params;
      const { cpf } = route.params;
      const { id } = route.params;
      const { tel } = route.params;

      setNome(nome);
      setCpf(cpf);
      setTel(tel);
      setType(type);
      setId(id);

    }
  }, []);

  function saveUser() {
    createUserWithEmailAndPassword(auth, getEmail, getPwd).then((userCredential) => {
      navigation.navigate("Home")
    })
    .catch((error) => {
      console.log(error);
    });
  }

  async function saveContact() {
    await axios.post('http://professornilson.com/testeservico/clientes', {
      nome: getNome,
      telefone: getTel,
      cpf: getEmail
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  async function deleteContact() {
    await axios.delete('http://professornilson.com/testeservico/clientes/' + getId)
      .then((response) => {
          navigation.navigate('UserList');
          console.log(response);
      })
      .catch((error) => {
          console.log(error);
      });
}

  async function updateContact() {
    await axios.put('http://professornilson.com/testeservico/clientes/' + getId, {
      nome: getNome,
      cpf: getCpf,
      telefone: getTel,
    }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={styles.box3}>
      <StatusBar style="auto" />
      {getType == "AddUser" ? (
        <View style={styles.box2}>
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
                title="Cadastrar"
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitle}
                onPress={() => saveUser()}
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
      ) : getType == "AddContact" ? (
        <View style={styles.box2}>
          <View style={{ alignItems: "center", paddingTop: 50 }}>
            <Image
              source={require("../images/alien.png")}
              style={styles.logoImgRegister}
            />
          </View>
          <Text style={styles.titleRegister}>Cadastrar um contato</Text>
          <View style={styles.box4}>
            <TextInput
              style={styles.textInputUserRegister}
              maxLength={20}
              placeholderTextColor="green"
              placeholder="Nome"
              onChangeText={(nome) => setNome(nome)}
            />
            <TextInput
              style={styles.textInputUserRegister}
              maxLength={20}
              placeholderTextColor="green"
              placeholder="CPF"
              onChangeText={(cpf) => setCpf(cpf)}
            />
            <TextInput
              style={styles.textInputUserRegister}
              maxLength={20}
              placeholderTextColor="green"
              placeholder="Telefone"
              onChangeText={(tel) => setTel(tel)}
            />
            <View style={styles.buttonView}>
              <Button
                title="Cadastrar"
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitle}
                onPress={() => saveContact()}
              />
              <Button
                title="Cancelar"
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitle}
                onPress={() => navigation.navigate("UserList")}
              />
            </View>
          </View>
        </View>
      ) : getType == "EditContact" ? (
        <View style={styles.box2}>
          <View style={{ alignItems: "center", paddingTop: 50 }}>
            <Image
              source={require("../images/alien.png")}
              style={styles.logoImgRegister}
            />
            <Text style={styles.titleRegister}>Editar um contato</Text>
          </View>

          <View style={styles.box5}>
            <TextInput
              value={getNome}
              style={styles.textInputUserRegister}
              maxLength={20}
              placeholderTextColor="green"
              placeholder="Nome"
              onChangeText={(nome) => setNome(nome)}
            />
            <TextInput
              value={getCpf}
              style={styles.textInputUserRegister}
              maxLength={20}
              placeholderTextColor="green"
              placeholder="CPF"
              onChangeText={(cpf) => setCpf(cpf)}
            />
            <TextInput
              value={getTel}
              style={styles.textInputUserRegister}
              maxLength={20}
              placeholderTextColor="green"
              placeholder="Telefone"
              onChangeText={(tel) => setTel(tel)}
            />
            <View style={styles.buttonView}>
              <Button
                title="Cadastrar"
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitle}
                onPress={() => updateContact()}
              />
                <Button
                  title="Deletar"
                  buttonStyle={styles.button}
                  containerStyle={styles.buttonContainer}
                  titleStyle={styles.buttonTitle}
                  onPress={() => deleteContact()}
                />
                <Button
                  title="Cancelar"
                  buttonStyle={styles.button}
                  containerStyle={styles.buttonContainer}
                  titleStyle={styles.buttonTitle}
                  onPress={() => navigation.navigate("UserList")}
                />
              </View>
            </View>
          </View>
      ) : (
        <Text></Text>
      )
      }
    </View>
  )
}
