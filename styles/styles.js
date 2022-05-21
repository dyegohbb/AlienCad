import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#01a82b",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  box2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#01a82b",
    top: 20,
  },

  box3: {
    paddingTop: 60,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#01a82b",
    alignItems: "center",
    justifyContent: "center",
  },

  box4: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#01a82b",
    top: 20,
    marginTop: 20,
    marginLeft:20,
  },

  box5: {
    marginRight:17,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#01a82b",
    top: 20,
    marginTop: 20,
  },

  box6:{
    flex: 1, 
    marginTop: 50
  },

  userList: {
    fkex:1,
    height: 350,
    width: 300,
    backgroundColor: "green",
  },

  userList2: {
    flexDirection: "row",
    top: 30
  },

  titleRegister: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },

  titleUserList: {
    paddingTop: 150,
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },

  buttonView: {
    flexDirection: "row",
    marginTop: 60,
  },

  buttonView2: {
    width: 500,
    flexDirection: "row",
  },

  button: {
    backgroundColor: "black",
    borderRadius: 20,
  },
  buttonContainer: {
    width: 100,
    marginHorizontal: 5,
    marginVertical: 10,
    marginLeft: 5,
  },
  buttonContainer2: {
    width: 130,
    marginHorizontal: 5,
    marginVertical: 10,
    marginLeft: 5,
  },
  buttonTitle: {
    color: "green",
  },
  logoImg: {
    width: 190,
    height: 190,
  },

  logoImg2: {
    marginTop: 50,
    width: 190,
    height: 190,
  },

  logoImgRegister: {
    width: 190,
    height: 190,
  },
  textInputUserRegister: {
    marginLeft: 15,
    marginTop: 10,
    height: 40,
    width: 200,
    borderColor: "green",
    borderBottomWidth: 1,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  /* LIST */
  containerList: {
    flex: 1,
    paddingTop: 22
   },
   sectionHeader: {
     paddingTop: 2,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 2,
     fontSize: 14,
     fontWeight: 'bold',
     backgroundColor: 'darkgreen',
     textAlign: 'center'
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
     alignSelf: "center"
   },
});

export default styles;
