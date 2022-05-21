import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Button, Image } from "react-native-elements";
import styles from "../styles/styles.js";

export default function Login({route, navigation}) {
  return (
    <View style={styles.box1}>
      <StatusBar style="auto" />
      <View style={{}}>
        <Image source={require("../images/alien.png")} style={styles.logoImg} />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="//temp"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate("UserList")}
        />
        <Button
          title="Cancel"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}

