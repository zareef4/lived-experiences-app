import {Button, Header, Icon, Left, Right} from "native-base";
import {Image, StyleSheet} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';


export default function HeaderBar() {
  const navigation = useNavigation();

  return (
    <Header>
      <Left>
        <Button
          onPress={() => navigation.navigate("Home")}
          transparent
        >
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 40, height: 40 }}
          />
        </Button>
      </Left>

      <Right>
        {/* SEARCH */}
        <Button transparent>
          <Icon
            onPress={() => navigation.navigate("Search")}
            name="search"
            style={styles.reactIcons}
          />
        </Button>
        {/* FILTER */}
        <Button
          onPress={() => navigation.navigate("Filter")}
          transparent
        >
          <Icon
            name="md-options"
            style={styles.reactIcons}
          />
        </Button>
        {/* MENU */}
        <Button
          onPress={() => navigation.navigate("Menu")}
          transparent
        >
          <Icon name="md-menu" style={styles.reactIcons}/>
        </Button>
      </Right>
    </Header>
  )
}

const styles = StyleSheet.create({
  reactIcons: {
    padding: 2,
    color: "white"
  }
});
