import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Button from "@ant-design/react-native/lib/button";
import InputItem from "@ant-design/react-native/lib/input-item";
import TextareaItem from "@ant-design/react-native/lib/textarea-item";
import List from "@ant-design/react-native/lib/list";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <List style={styles.listStyle}>
            <InputItem placeholder={"First Name"} />
            <InputItem placeholder={"Second Name"} />
            <InputItem placeholder={"Email"} />
            <TextareaItem
              style={styles.textArea}
              rows={6}
              placeholder={"Message"}
            />
          </List>
        </View>
        <Button style={styles.button}>Submit</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderColor: 2,
    borderRadius: 10
  },
  inputContainer: {
    borderRadius: 20,
    width: "80%"
  },
  listStyle: {
    borderRadius: 10,
    backgroundColor: "pink"
  },
  button: {
    fontSize: 50,
    marginTop: 20,
    padding: 10,
    backgroundColor: "grey",
    color: "white"
  },
  textArea: {
    margin: 10,
    borderColor: "green"
  }
});
