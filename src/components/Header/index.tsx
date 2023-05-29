import { SafeAreaView, Text, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { SearchBar } from "@rneui/themed";

export default function Header() {
  const [search, setSearch] = useState("");

  const updateSearch = (query: string) => {
    setSearch(query);
    // add your search handling logic here
  };

  return (
    <View className="bg-pink-600">
      <SafeAreaView className="mt-10 bg-pink-600 pb-6">
        <View className="flex-row w-full justify-between p-4 bg-pink-600 items-center">
          <View className="text-lg">
            <Icon size={20} name="bars" color={"#ffffff"} />
          </View>
          <View className="flex-1 ml-6">
            <Text className="text-white text-sm font-bold">
              Current Location
            </Text>
            <Text className="text-white text-xs">
              Gohail Road, CO-office, Bogura
            </Text>
          </View>
          <View className="flex-row">
            <Icon size={20} color={"#fff"} name="heart-o" />
            <Icon
              style={{ paddingLeft: 10 }}
              size={20}
              name="shopping-cart"
              color={"#fff"}
            />
          </View>
        </View>

        <View className="px-2">
          <SearchBar
            placeholder="Search for shop & resturants"
            onChangeText={updateSearch}
            value={search}
            inputContainerStyle={{
              backgroundColor: "white",
              borderBottomWidth: 0,
              borderTopWidth: 0,
              borderRadius: 30,
            }}
            inputStyle={{
              fontSize: 12,
            }}
            containerStyle={{
              backgroundColor: "transparent",
              borderBottomWidth: 0,
              borderTopWidth: 0,
            }}
            leftIconContainerStyle={{
              marginLeft: 15,
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
