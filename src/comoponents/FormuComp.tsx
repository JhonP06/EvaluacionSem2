import React from 'react'
import { TextInput } from 'react-native';

interface Props{
    placeholder: string;
}
const FormuComp = ({placeholder}: Props) => {
  return (
    <TextInput
        placeholder={placeholder}
        keyboardType='default'
      />
  )
}

export default FormuComp
