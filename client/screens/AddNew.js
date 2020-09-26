import React from "react";
import { StyleSheet, Switch } from "react-native";
import {Container, Header, CheckBox, Content, Form, Item, Input, Icon, Label, Textarea} from 'native-base';

export default function AddNew() {
  const [title, setTitle] = React.useState("");
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [story, setStory] = React.useState("");
  const [disableName, setDisableName] = React.useState(false);

  function checkAnon() {
    setDisableName(prev => !prev)
  }

  function onSubmit() {

  }

  return (
    <Container>
      <Header/>
      <Content>
        <Form style={styles.form}>
          <Item>
            <Label>Title</Label>
            <Input value={title} onChangeText={setTitle}/>
          </Item>
          <Item floatingLabel disabled={disableName}>
            <Icon name="account-circle" type="MaterialIcons"/>
            <Label>Name</Label>
            <Input disabled={disableName} value={name} onChangeText={t => setName(t)}/>
          </Item>
          <Item>
            <Label>Post Anonymously</Label>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={disableName ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={checkAnon}
              value={disableName}
            />
          </Item>
          <Item floatingLabel last>
            <Icon name="location-on" type="MaterialIcons"/>
            <Label>Location</Label>
            <Input value={location} onChangeText={t => setLocation(t)}/>
          </Item>
          <Textarea value={story} onChangeText={setStory} rowSpan={5} bordered placeholder="Your Story..."/>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  form: {}
});
