import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screen/AccountScreen";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import ListingsScreen from "./app/screen/ListingsScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppTextInput icon="email" placeholder="Username" />
      <AppPicker
        icon="apps"
        placeholder="Category"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
    </Screen>
  );
}
