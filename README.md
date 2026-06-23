# uniterra

MVP em React Native + Expo para apoiar o projeto Horta dos Afetos.

O aplicativo sera uma ferramenta educativa sobre hortas terapeuticas, plantas medicinais, aromaticas e culinarias, receitas afetivas e acompanhamento simples da horta virtual do usuario.

## Requisitos para rodar

Antes de executar o projeto, instale:

- Node.js LTS, recomendado Node 20 ou superior.
- npm, instalado junto com o Node.js.
- Git, para clonar ou versionar o projeto.
- Expo Go no celular, caso queira testar em um aparelho fisico.
- Android Studio, caso queira testar em emulador Android.
- Xcode, apenas se for rodar em simulador iOS no macOS.

Para Android Studio, confira se estes itens estao configurados:

- Android SDK instalado.
- Android Emulator instalado.
- Um dispositivo virtual criado no Device Manager.
- Variavel `ANDROID_HOME` ou `ANDROID_SDK_ROOT` configurada, se necessario.

## Como rodar o projeto

1. Acesse a pasta do projeto:

   ```bash
   cd /Users/isadorademello/Projetos/uniTerra
   ```

2. Instale as dependencias:

   ```bash
   npm install
   ```

3. Inicie o servidor do Expo:

   ```bash
   npx expo start
   ```

No terminal do Expo, escolha a plataforma desejada:

- Pressione `a` para abrir no emulador Android.
- Pressione `i` para abrir no simulador iOS, se estiver em macOS com Xcode.
- Pressione `w` para abrir no navegador.
- Escaneie o QR Code com o app Expo Go para abrir no celular.

## Scripts disponiveis

```bash
npm run start
npm run android
npm run ios
npm run web
npm run lint
```

Descricao dos scripts:

- `npm run start`: inicia o Expo.
- `npm run android`: inicia o Expo tentando abrir no Android.
- `npm run ios`: inicia o Expo tentando abrir no iOS.
- `npm run web`: inicia o Expo na web.
- `npm run lint`: executa a verificacao de lint do Expo.

## Teste rapido

Para verificar se o TypeScript esta correto:

```bash
npx tsc --noEmit
```

## Estrutura preparada

- `src/app/`: rotas do Expo Router.
- `src/components/`: componentes reutilizaveis.
- `src/constants/`: tema visual do app.
- `src/data/`: dados mockados em JSON.
- `src/storage/`: futura persistencia local da Minha Horta.
- `src/types/`: tipos TypeScript do dominio.
- `assets/images/app/`: imagens institucionais e banners.
- `assets/images/plants/`: fotos das plantas.
- `assets/images/recipes/`: fotos das receitas.
- `docs/`: documentos internos de planejamento, ignorados pelo Git.

## Observacao

Antes de novas alteracoes em codigo Expo, consulte a documentacao versionada do SDK 56 conforme `AGENTS.md`.
