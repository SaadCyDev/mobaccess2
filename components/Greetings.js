import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import backgroundImage from "../assets/images/page-ac.jpeg";
import backgroundImage from "../assets/images/pa2.jpeg";
const Greeting = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.st} />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.imbac}
      >
        <Text style={styles.mobTitle}>MobAccess</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.boldItalicText}>
            Un monde numérique sans barrières
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AvecMobile")}
            >
              <Text style={styles.buttonText}>Avec Mobile ID</Text>
            </TouchableOpacity>
            <Text style={styles.middleText}>Ou</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Sans")}
            >
              <Text style={styles.buttonText}>SANS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  imbac: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
  },
  mobTitle: {
    color: "#315259",
    fontSize: 25,
    marginTop: "120",
    marginLeft: "50%",
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  contentContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  boldItalicText: {
    fontSize: 20,
    fontWeight: "bold",
    // fontStyle: "italic",
    fontFamily: "San Francisco",
    color: "#315259",
    marginBottom: 20,
    marginTop: "30%",
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#5dd4d4",
    paddingVertical: 15,
    paddingHorizontal: 50,
    minWidth: 270,
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 18,
    color: "#315259",
    fontWeight: "600",
    textAlign: "center",
  },
  middleText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
