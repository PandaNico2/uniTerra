import type { ImageSourcePropType } from 'react-native';

export const plantImages: Record<string, ImageSourcePropType> = {
  abobora: require('@/assets/plantas/abobora.png'),
  agriao: require('@/assets/plantas/agriao.png'),
  aipim: require('@/assets/plantas/aipim.png'),
  aipo: require('@/assets/plantas/aipo.png'),
  alecrim: require('@/assets/plantas/alecrim.png'),
  'alface-americana': require('@/assets/plantas/alface_americana.png'),
  'alface-crespa': require('@/assets/plantas/alface_crespa.png'),
  alfavaca: require('@/assets/plantas/alfavaca.png'),
  alho: require('@/assets/plantas/alho.png'),
  'alho-japones': require('@/assets/plantas/alho_japones.png'),
  'alho-poro': require('@/assets/plantas/alho_poro.png'),
  azedinha: require('@/assets/plantas/azedinha.png'),
  'batata-doce': require('@/assets/plantas/batata_doce.png'),
  'boldo-brasileiro': require('@/assets/plantas/boldo_brasileiro.png'),
  camomila: require('@/assets/plantas/camomila.png'),
  'capim-limao': require('@/assets/plantas/capim_limao.png'),
  carqueja: require('@/assets/plantas/carqueja.png'),
  cebola: require('@/assets/plantas/cebola.png'),
  coentro: require('@/assets/plantas/coentro.png'),
  'erva-cidreira': require('@/assets/plantas/erva_cidreira.png'),
  'erva-doce': require('@/assets/plantas/erva_doce.png'),
  hibisco: require('@/assets/plantas/hibisco.png'),
  'hortela-comum': require('@/assets/plantas/hortela_comum.png'),
  'hortela-pimenta': require('@/assets/plantas/hortela_pimenta.png'),
  lavanda: require('@/assets/plantas/lavanda.png'),
  malva: require('@/assets/plantas/malva.png'),
  'manjericao-roxo': require('@/assets/plantas/manjericao_roxo.png'),
  manjerona: require('@/assets/plantas/manjerona.png'),
  oregano: require('@/assets/plantas/oregano.png'),
  'pimenta-malagueta': require('@/assets/plantas/pimenta_malagueta.png'),
  rucula: require('@/assets/plantas/rucula.png'),
  salsinha: require('@/assets/plantas/salsinha.png'),
  salvia: require('@/assets/plantas/salvia.png'),
  tomilho: require('@/assets/plantas/tomilho.png'),
};

export function getPlantImage(imageKey: string) {
  return plantImages[imageKey];
}
