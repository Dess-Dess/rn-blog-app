import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { THEME } from "../theme";
import { DATA } from "../data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const post = DATA.find((p) => p.id === postId);

  /* useEffect(() => {
    navigation.setParams({ booked: post.booked });
  }, []); */

  const removeHandler = () => {
    Alert.alert(
      "Удаление поста",
      "Вы точно хотите удалить пост?",
      [
        {
          text: "Отменить",
          style: "cancel",
        },
        {
          text: "OK",
          style: "destructive",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const postDate = navigation.getParam("postDate");
  const booked = navigation.getParam("booked");
  const iconName = booked ? "ios-star" : "ios-star-outline";

  return {
    headerTitle: "Пост от " + new Date(postDate).toLocaleDateString(),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take photo"
          iconName={iconName}
          onPress={() => {
            console.log("Press star");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: { width: "100%", height: 200 },
  textWrap: { padding: 10 },
  title: { fontFamily: "open-regular" },
});
