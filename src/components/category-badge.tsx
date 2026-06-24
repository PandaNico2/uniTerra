import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

type CategoryBadgeProps = {
  label: string;
  tone?: 'green' | 'rose' | 'neutral';
};

export function CategoryBadge({ label, tone = 'green' }: CategoryBadgeProps) {
  return (
    <ThemedView
      type={tone === 'rose' ? 'warning' : tone === 'neutral' ? 'backgroundElement' : 'primaryLight'}
      style={styles.badge}>
      <ThemedText type="code" themeColor={tone === 'green' ? 'primaryDark' : 'text'}>
        {label.toUpperCase()}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
});
