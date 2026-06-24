import { Pressable, StyleSheet, View } from 'react-native';
import { SymbolView, type SymbolViewProps } from 'expo-symbols';

import { BlankImage } from '@/components/blank-image';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getPlantImage } from '@/data/plantImages';
import { useTheme } from '@/hooks/use-theme';

const actions: Array<{ label: string; icon: SymbolViewProps['name'] }> = [
  { label: 'Regar', icon: { ios: 'drop', android: 'water_drop', web: 'water_drop' } },
  { label: 'Observar', icon: { ios: 'eye', android: 'visibility', web: 'visibility' } },
  { label: 'Notas', icon: { ios: 'note.text', android: 'edit_note', web: 'edit_note' } },
];

export default function GardenScreen() {
  const theme = useTheme();

  return (
    <Screen title="Minha Horta">
      <ThemedView style={[styles.statusCard, { backgroundColor: theme.primary }]}>
        <ThemedText type="smallBold" style={styles.lightText}>
          Status Geral
        </ThemedText>
        <ThemedText type="title" style={[styles.lightText, styles.statusTitle]}>
          Seu jardim esta crescendo!
        </ThemedText>
        <ThemedText type="default" style={styles.lightText}>
          1 planta precisa de atencao hoje
        </ThemedText>
        <View style={styles.progressTrack}>
          <View style={styles.progressBar} />
        </View>
      </ThemedView>

      <View style={styles.actions}>
        {actions.map((action) => (
          <Pressable key={action.label} style={({ pressed }) => [styles.action, pressed && styles.pressed]}>
            <ThemedView style={styles.actionCard}>
              <ThemedView type="primaryLight" style={styles.actionIcon}>
                <SymbolView name={action.icon} tintColor={theme.primaryDark} size={28} />
              </ThemedView>
              <ThemedText type="default">{action.label}</ThemedText>
            </ThemedView>
          </Pressable>
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <ThemedText type="default">Minhas Plantas</ThemedText>
        <ThemedText type="default" themeColor="primaryDark">
          2 Ativas
        </ThemedText>
      </View>

      <View style={styles.gardenList}>
        <GardenPlantCard
          imageKey="hortela-comum"
          name="Hortela"
          scientificName="Mentha spicata"
          status="SEDE"
          meta="Regar hoje"
        />
        <GardenPlantCard
          imageKey="manjericao-roxo"
          name="Manjericao"
          scientificName="Ocimum basilicum"
          status="SAUDAVEL"
          meta="Em 2 dias"
          healthy
        />
      </View>
    </Screen>
  );
}

type GardenPlantCardProps = {
  name: string;
  imageKey: string;
  scientificName: string;
  status: string;
  meta: string;
  healthy?: boolean;
};

function GardenPlantCard({ name, imageKey, scientificName, status, meta, healthy }: GardenPlantCardProps) {
  const theme = useTheme();

  return (
    <ThemedView style={styles.plantCard}>
      <BlankImage aspectRatio={1} source={getPlantImage(imageKey)} style={styles.plantThumb} />
      <View style={styles.plantInfo}>
        <View style={styles.plantTitleRow}>
          <ThemedText type="default" style={styles.plantName}>
            {name}
          </ThemedText>
          <ThemedView
            style={[
              styles.statusPill,
              { backgroundColor: healthy ? theme.success : theme.warning },
            ]}>
            <ThemedText type="code" style={{ color: healthy ? theme.primaryDark : theme.terracotta }}>
              {status}
            </ThemedText>
          </ThemedView>
        </View>
        <ThemedText themeColor="textSecondary">{scientificName}</ThemedText>
        <View style={styles.plantMeta}>
          <ThemedText type="small" themeColor="textSecondary">
            {meta}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Sol parcial
          </ThemedText>
        </View>
      </View>
      <ThemedText themeColor="textSecondary">{'>'}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  statusCard: {
    borderRadius: 8,
    gap: Spacing.three,
    padding: Spacing.four,
  },
  statusTitle: {
    fontSize: 40,
    lineHeight: 44,
  },
  lightText: {
    color: '#FAF8F2',
  },
  progressTrack: {
    height: 12,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    overflow: 'hidden',
  },
  progressBar: {
    width: '76%',
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#FAF8F2',
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  action: {
    flex: 1,
  },
  actionCard: {
    minHeight: 132,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E4DED4',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    padding: Spacing.two,
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gardenList: {
    gap: Spacing.three,
  },
  plantCard: {
    minHeight: 132,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E4DED4',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.three,
  },
  plantThumb: {
    width: 72,
    borderRadius: 8,
  },
  plantInfo: {
    flex: 1,
    gap: Spacing.one,
  },
  plantTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  plantName: {
    flexShrink: 1,
    fontSize: 24,
    lineHeight: 30,
  },
  statusPill: {
    borderRadius: 8,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  plantMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.three,
  },
});
