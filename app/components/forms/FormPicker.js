import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Picker from "../Picker";

function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  placeholder,
  numberOfColumns,
  width,
}) {
  const { values, errors, touched, setFieldValue } = useFormikContext();

  return (
    <>
      <Picker
        items={items}
        width={width}
        placeholder={placeholder}
        selectedItem={values[name]}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
