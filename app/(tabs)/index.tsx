import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [display, setDisplay] = useState("");

  const append = (value: string) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      alert("Invalid Expression");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <Text style={styles.display}>{display || "0"}</Text>

        <View style={styles.buttons}>
          <Button label="C" onPress={clearDisplay} style={styles.clear} />
          <Button label="/" onPress={() => append("/")} />
          <Button label="*" onPress={() => append("*")} />

          <Button label="7" onPress={() => append("7")} />
          <Button label="8" onPress={() => append("8")} />
          <Button label="9" onPress={() => append("9")} />
          <Button label="-" onPress={() => append("-")} />

          <Button label="4" onPress={() => append("4")} />
          <Button label="5" onPress={() => append("5")} />
          <Button label="6" onPress={() => append("6")} />
          <Button label="+" onPress={() => append("+")} />

          <Button label="1" onPress={() => append("1")} />
          <Button label="2" onPress={() => append("2")} />
          <Button label="3" onPress={() => append("3")} />
          <Button label="=" onPress={calculate} style={styles.equal} />

          <Button label="0" onPress={() => append("0")} />
          <Button label="." onPress={() => append(".")} />
        </View>
      </View>
    </View>
  );
}

const Button = ({ label, onPress, style }: any) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1f2e",
  },
  calculator: {
    width: "90%",
  },
  display: {
    fontSize: 40,
    backgroundColor: "white",
    padding: 20,
    textAlign: "right",
    borderRadius: 10,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    width: "25%",
    padding: 20,
    margin: 2,
    backgroundColor: "#444",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  clear: {
    backgroundColor: "#dc3545",
  },
  equal: {
    backgroundColor: "#28a745",
  },
});