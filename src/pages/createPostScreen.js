import React, { createContext, useContext, useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

function CreatePostScreen({ route, navigation }) {
  const [postText, setPostText] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Enter your notes for publish below.</Text>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, width: "100%", padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </View>
  );
}

export default CreatePostScreen;