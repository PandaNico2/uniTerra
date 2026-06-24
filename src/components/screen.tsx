import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ScreenProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  bottomInset?: boolean;
};

export function Screen({ title, subtitle, children, bottomInset = true }: ScreenProps) {
  const theme = useTheme();

  return (
    <ThemedView style={styles.root}>
      <ScrollView
        style={[styles.scroll, { backgroundColor: theme.background }]}
        contentContainerStyle={[
          styles.content,
          bottomInset && { paddingBottom: BottomTabInset + Spacing.five },
        ]}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.inner}>
            {(title || subtitle) && (
              <View style={styles.header}>
                {title && <ThemedText type="subtitle">{title}</ThemedText>}
                {subtitle && (
                  <ThemedText type="small" themeColor="textSecondary">
                    {subtitle}
                  </ThemedText>
                )}
              </View>
            )}
            {children}
          </View>
        </SafeAreaView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: Spacing.three,
  },
  safeArea: {
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  inner: {
    gap: Spacing.four,
    paddingTop: Spacing.three,
  },
  header: {
    gap: Spacing.two,
  },
});
