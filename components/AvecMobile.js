import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AvecMobile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vous avez choisi Avec Mobile ID</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

export default AvecMobile;
