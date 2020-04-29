import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { Post } from "./Post";

export const PostList = ({ data, onOpen }) => {
  if (data.length === 0) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Пока нет ни одного поста</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { padding: 10 },
  title: {
    fontFamily: "open-regular",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
  },
});
