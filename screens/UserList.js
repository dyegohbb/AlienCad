import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import { Button, Image, ListItem } from "react-native-elements";
import styles from "../styles/styles.js";
import axios from "axios";



export default function UserList({ navigation }) {

  const [getContatos, setContatos] = useState([]);

  useEffect(()=>{
        
    async function listAll(){
        const result = await axios(
            'http://professornilson.com/testeservico/clientes',
          );
          setContatos(result.data);
    }
    listAll();
  },[])

  return (
    <View style={styles.box1}>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <Image source={require("../images/alien.png")} style={styles.logoImg2} />
      </View>
      <Text style={styles.titleUserList}>Lista de contatos</Text>
      <View style={styles.userList}>
      <ScrollView style={{}}>
        {
          
          getContatos.map((l, i) => (
            <ListItem key={i} containerStyle={{backgroundColor:"#0ab234"}} onPress={() => navigation.navigate('Register', {
                type: 'EditContact',
                id: l.id,
                nome: l.nome,
                cpf: l.cpf,
                tel: l.telefone
              })}>
              <ListItem.Content>
                <ListItem.Title>{l.nome}</ListItem.Title>
                <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
                <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
        </ScrollView>
      </View>
      <View style={styles.userList2}>
        <Button
          title="Novo contato"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer2}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Register', { type: 'AddContact' })}
        />
        <Button
          title="Home"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer2}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}