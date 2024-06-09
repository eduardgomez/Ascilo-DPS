import { View, Text } from 'react-native'
import React, { useState } from 'react';
import { SelectTextInputProps } from './types';
import DropDown from "react-native-paper-dropdown";

const SelectInput = ({
  label,
  mode,
  options,
  value,
  onChange,
  error,
  onBlur,
}: SelectTextInputProps) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const onDismiss = () => {
    onBlur && onBlur()
    setShowDropDown(false)
  }

  return (
    <View>
      <DropDown
        label={label}
        mode={mode}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={onDismiss}
        value={value}
        setValue={onChange ?? (() => {})}
        list={options}
      />
      {error && error.length > 0 && (
        <Text style={{
          color: "#FF0000",
          fontSize: 14,
          marginTop: 5,
          marginLeft: 5,
          fontWeight: "bold",
        }}>{error}</Text>
      )}
    </View>
  );
};

export default SelectInput;
