import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./index";
import Article from "./articleWebView";
import ArticlePreview from "./ArticlePreview";
import { RootStackParamList } from "./types/navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                gestureEnabled: true,
                animation: "fade",
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="article" component={Article} />
            <Stack.Screen
                name="articlePreview"
                component={ArticlePreview}
                options={{
                    title: "Article Preview",
                    animation: "slide_from_right",
                    presentation: "modal",
                }}
            />

        </Stack.Navigator>
    );
}
