import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import {Container, Content, Form, Icon, Input, Item} from "native-base";

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  function handleChange(t) {
    setSearch(t);
    // TODO: Update Search results
  }

  function clearSearch() {
    setSearch("");
  }

  return (
    <Container>
      <Content>
        <Text style={styles.text}>Find Experiences</Text>
        <Form>
          <Item>
            <Input style={styles.text} onChangeText={handleChange} value={search}
                   placeholder="Search" placeholderTextColor="rgb(70, 69, 69)"/>
            <Icon style={{color: "rgb(70, 69, 69)", fontSize: 32}} name="cancel" type="MaterialIcons"
                  active={search.length > 0} onPress={clearSearch}/>
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 32
  }
});
