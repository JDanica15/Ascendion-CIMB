import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    cardPosition: {
        height: '100%',
        justifyContent: 'flex-end'
    },
    cardContainer: {
        width: "100%",
        alignSelf: 'center',
        position: 'relative'
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 100,
        padding: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        width: '100%',
        paddingBottom: 30
    },
    cardText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        paddingRight: 15,
        
        width: 250,
    },
    activeCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 100,
        padding: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        paddingBottom: 40
    },
    selectedText: {
        color: "white",
        fontSize: 23,
        fontWeight: "bold",
        width: 330,
    },
});

export default styles;