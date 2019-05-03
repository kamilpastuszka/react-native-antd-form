import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Button from "@ant-design/react-native/lib/button";
import InputItem from "@ant-design/react-native/lib/input-item";
import TextareaItem from "@ant-design/react-native/lib/textarea-item";
import List from "@ant-design/react-native/lib/list";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    };
  }

  render() {
    const { firstName, lastName, email, message } = this.state;
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <List style={styles.listStyle}>
            <InputItem
              placeholder={"First Name"}
              name="firstName"
              value={firstName}
              onChangeText={text => this.setState({ firstName: text })}
            />
            <InputItem
              placeholder={"Last Name"}
              name="lastName"
              value={lastName}
              onChangeText={text => this.setState({ lastName: text })}
            />
            <InputItem
              placeholder={"Email"}
              name="email"
              value={email}
              onChangeText={text => this.setState({ email: text })}
            />
            <TextareaItem
              style={styles.textArea}
              rows={6}
              placeholder={"Message"}
              value={message}
              onChangeText={text => this.setState({ message: text })}
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
