import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface PlaceHolderProps {
  message: String;
}
const PlaceHolderView: React.FC<PlaceHolderProps> = props => {
  return (
    <View style={styles.placeholderText}>
      <Text>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholderText: {
    backgroundColor: '#F3F2F2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlaceHolderView;
