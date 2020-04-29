import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const BookmarkedScreen = ({ navigation }) => {
  const goToPost = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      postDate: post.date,
      booked: post.booked,
    });
  };

  const bookedPosts = useSelector((state) => state.post.bookedPosts);

  return <PostList data={bookedPosts} onOpen={goToPost} />;
};

BookmarkedScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Избранное",

    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Toggle Drawer"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
