import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';

import { Box } from '@mobily/stacks';

import { colors } from 'src/styles';

export interface LocationInfoBoxCustomProps {
  imageUri: string;
  name: string;
  description: string;
}

export type LocationInfoBoxProps = LocationInfoBoxCustomProps & TouchableWithoutFeedbackProps;

export const LocationInfoBox: React.FC<LocationInfoBoxProps> = ({
  imageUri,
  name,
  description,
  ...props
}) => {
  return (
    <TouchableWithoutFeedback {...props}>
      <Box padding={2} style={styles.box}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{name}</Text>
          <Text style={styles.infoText} numberOfLines={1} ellipsizeMode="tail">
            {description}
          </Text>
        </View>
      </Box>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.mint,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 0.8,
    rowGap: 8,
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 400,
  },
});
