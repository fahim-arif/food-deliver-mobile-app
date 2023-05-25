import { SafeAreaView, Text, View } from "react-native";
import React, { Component, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="mt-10">
      <Text className="mt-8 text-red-500">HomeScreen</Text>
    </SafeAreaView>
  );
}
