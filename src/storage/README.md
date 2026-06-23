# Storage local

Esta pasta vai concentrar a persistencia da Minha Horta.

No desenvolvimento das telas, a ideia e criar um `gardenStorage.ts` com funcoes simples:

```txt
getGarden()
addPlantToGarden(plantId)
removePlantFromGarden(plantId)
addCareLog(plantId, careLog)
```

Para o MVP sem backend, a opcao recomendada e usar `@react-native-async-storage/async-storage`.
Ainda nao instalei a dependencia para nao adicionar pacote antes de implementarmos a tela da horta.
