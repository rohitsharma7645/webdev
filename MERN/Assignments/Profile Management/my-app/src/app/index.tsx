import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const handlePress = () => {
    alert("React Native is working! 🚀");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native 👋</Text>

      <Text style={styles.text}>
        My first Expo app is running successfully!
      </Text>

      <Button title="Test App" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});