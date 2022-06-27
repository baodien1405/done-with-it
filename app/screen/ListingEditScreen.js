import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Email"),
  price: Yup.string().required().min(1).max(10000).label("Password"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" maxLength={255} placeholder="Title" />

        <AppFormField
          name="price"
          maxLength={8}
          keyboardType="numeric"
          placeholder="Price"
        />

        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
        />

        <AppFormField
          name="description"
          maxLength={255}
          multiline
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default ListingEditScreen;
