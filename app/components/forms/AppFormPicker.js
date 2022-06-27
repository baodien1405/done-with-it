import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

function AppFormPicker({ items, name, placeholder }) {
  const { values, errors, touched, setFieldValue } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
