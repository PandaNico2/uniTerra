import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { useTheme } from '@/hooks/use-theme';

type BlankImageProps = {
  aspectRatio?: number;
  source?: ImageSourcePropType;
  style?: StyleProp<ViewStyle | ImageStyle>;
};

export function BlankImage({ aspectRatio, source, style }: BlankImageProps) {
  const theme = useTheme();
  const imageStyle = [
    styles.image,
    {
      backgroundColor: theme.backgroundElement,
      borderColor: theme.border,
    },
    aspectRatio ? { aspectRatio } : null,
    style,
  ];

  if (source) {
    return (
      <Image
        accessibilityRole="image"
        source={source}
        resizeMode="cover"
        style={imageStyle as StyleProp<ImageStyle>}
      />
    );
  }

  return (
    <View
      accessibilityRole="image"
      style={imageStyle}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    borderWidth: 1,
    overflow: 'hidden',
  },
});
