import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";

// Functional Component with props
const Header = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.drawer.current.openDrawer()}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Home</Text>

      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  iconsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    width: 36,
    height: 16,
    resizeMode: "contain",
  },
});

export default Header;
