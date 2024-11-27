// src/services/types.ts
export type RootStackParamList = {
  HomeScreen: undefined;
  SelectionScreen: undefined;
  ProcessScreen: { outputType: string; language: string };
  OutputScreen: { outputText: string };
};