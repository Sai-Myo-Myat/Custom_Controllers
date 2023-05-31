import React, { MutableRefObject, forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
interface Props extends TextInputProps {
    placeholder: string;
    ref: MutableRefObject<null>
}

const ForwardForm = forwardRef<Props>(({placeholder, ...prps},ref) => {
    return (
        <TextInput placeholder={placeholder} ref={ref}/>
    )
})

export default ForwardForm;