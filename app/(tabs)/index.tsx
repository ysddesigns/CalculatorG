import { Alert, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View } from "@/components/Themed";

interface ButtonProps {
  title: string;
  type: string;
}

const Calculator: React.FC = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleButtonPress = (title: string) => {
    switch (title) {
      case "C":
        setInput("0");
        setResult("");
        break;
      case "del":
        setInput(input.slice(0, -1));
        break;
      case "%":
        try {
          setInput((parseFloat(input) / 100).toString());
        } catch (error) {
          Alert.alert(`Invalid Input: ${error}`);
        }
        break;
        break;
      case "=":
        try {
          setResult(eval(input));
        } catch (error) {
          Alert.alert(`Invalid Expression: ${error}`);
        }
        break;
      default:
        setInput(input === "0" ? title : input + title);
        break;
    }
  };

  const Button: React.FC<ButtonProps> = ({ title, type }) => {
    const buttonColor = (type: string) => {
      switch (type) {
        case "num":
          return "red";
        case "operator":
          return "orange";
        default:
          return "gray";
      }
    };

    return (
      <Pressable
        onPress={() => handleButtonPress(title)}
        style={[styles.button, { backgroundColor: buttonColor(type) }]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.resultText}>{input}</Text>

        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.keyboard}>
        <Button title={"C"} type={"top"} />
        <Button title={"del"} type={"top"} />
        <Button title={"%"} type={"top"} />
        <Button title={"/"} type={"operator"} />
      </View>
      <View style={styles.keyboard}>
        <Button title={"7"} type={"num"} />
        <Button title={"8"} type={"num"} />
        <Button title={"9"} type={"num"} />
        <Button title={"*"} type={"operator"} />
      </View>
      <View style={styles.keyboard}>
        <Button title={"4"} type={"num"} />
        <Button title={"5"} type={"num"} />
        <Button title={"6"} type={"num"} />
        <Button title={"-"} type={"operator"} />
      </View>
      <View style={styles.keyboard}>
        <Button title={"1"} type={"num"} />
        <Button title={"2"} type={"num"} />
        <Button title={"3"} type={"num"} />
        <Button title={"+"} type={"operator"} />
      </View>
      <View style={styles.keyboard}>
        <Button title={"00"} type={"num"} />
        <Button title={"0"} type={"num"} />
        <Button title={"."} type={"num"} />
        <Button title={"="} type={"operator"} />
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  display: {
    height: "35%",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  keyboard: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 35,
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
  resultText: {
    fontSize: 30,
    textAlign: "right",
  },
});
