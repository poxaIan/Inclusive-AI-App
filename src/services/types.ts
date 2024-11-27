// src/services/types.ts
export type RootStackParamList = {
  HomeScreen: undefined;
  SelectionScreen: undefined;
  ProcessScreen: { 
    outputType: string; 
    language: string; 
  };
  OutputScreen: { 
    isLinkMode: boolean; // Indica se está no modo link
    linkText?: string; // O link fornecido pelo usuário (opcional)
    outputText: string; // O texto processado ou retornado
    outputType: string; // O tipo de saída selecionado (TDAH, TEA)
    language: string; // O idioma selecionado (pt, en)
  };
};
