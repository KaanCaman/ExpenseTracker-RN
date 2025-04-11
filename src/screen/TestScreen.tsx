import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../hooks/useTheme";

const TestScreen = () => {
  const { theme, toggleThemeMode } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.typography.sizes.xlarge,
        }}
      >
        Xlarge
      </Text>

      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.typography.sizes.large,
        }}
      >
        Xlarge
      </Text>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.typography.sizes.medium,
        }}
      >
        Xlarge
      </Text>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.typography.sizes.small,
        }}
      >
        Xlarge
      </Text>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.typography.sizes.xsmall,
        }}
      >
        Xlarge
      </Text>
      <Button title="Test Button" onPress={toggleThemeMode} />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
