import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Button, Image } from "react-native-elements";
import styles from "../styles/styles.js";

export default function Home({ navigation }) {
  return (
    <View style={styles.box1}>
      <StatusBar style="auto" />
      <View style={{ alignItems: "center", paddingTop: 50 }}>
        <Image source={require("../images/alien.png")} style={styles.logoImg} />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Sign In"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Sign Up"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() =>
            navigation.navigate("Register", { type:"AddUser"})
          }
        />
      </View>
    </View>
  );
}
