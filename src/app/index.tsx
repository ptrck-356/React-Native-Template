import { Text, View, StyleSheet } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View style={styles.container} className="flex-1">
      <Text className="mb-2 text-2xl font-black text-sky-500">Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
