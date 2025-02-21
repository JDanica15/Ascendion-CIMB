import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        flex: 1,
        width: '100%',
        height: '100%',
    },
    image: {
        width: "100%",
        height: '100%',
        maxHeight: 300,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    summary: {
        marginVertical: 20,
        fontSize: 16,
        color: "#333",
        fontWeight: '500'
    },
    button: {
        backgroundColor: "#cc0100",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default styles;