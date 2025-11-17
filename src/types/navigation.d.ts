export type RootStackParamList = {
    Home: {
        id: string;
    }
    Product: undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}