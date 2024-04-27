import { ButtonProps, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View } from "./Themed";

const CalculatorApp = () => {
  const [result, setResult] = useState<string>("0");

  const Btn: React.FC<ButtonProps> = ({ title }) => {
    const Calculate = () => {
      if (title === "C") {
        setResult("0");
      } else if (title === "D") {
        setResult(result.substring(0, result.length - 1));
      } else if (title === "=") {
        setResult(eval(result));
      } else {
        setResult(result + title);
      }
    };
    return (
      <Pressable style={styles.keyWrapper} onPress={Calculate}>
        <Text style={styles.key}>{title}</Text>
      </Pressable>
    );
  };
  return (
    <View>
      <View>
        <Text style={styles.display}>{result}</Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.btnWrapper}>
        <Btn title="C" />
        <Btn title="(" />
        <Btn title=")" />
        <Btn title="D" />
        <Btn title="7" />
        <Btn title="8" />
        <Btn title="9" />
        <Btn title="X" />
        <Btn title="4" />
        <Btn title="5" />
        <Btn title="6" />
        <Btn title="/" />
        <Btn title="1" />
        <Btn title="2" />
        <Btn title="3" />
        <Btn title="-" />
        <Btn title="%" />
        <Btn title="0" />
        <Btn title="." />
        <Btn title="+" />
        <Btn title="=" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  key: {
    fontSize: 25,
  },
  display: {
    textAlign: "right",
    padding: 12,
    fontSize: 22,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },
  keyWrapper: {
    alignItems: "center",
    width: 50,
    height: 50,
    margin: 12,
    padding: 12,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "gray",
  },
  btnWrapper: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default CalculatorApp;
