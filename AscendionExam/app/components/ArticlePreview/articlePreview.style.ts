import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
    },
    image: {
        width: "100%",
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    summary: {
        marginVertical: 16,
        fontSize: 16,
        color: "#333",
    },
    button: {
        backgroundColor: "red",
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