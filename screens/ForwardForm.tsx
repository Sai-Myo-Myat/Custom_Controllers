import React, { MutableRefObject, forwardRef, HTMLInputTypeAttribute, LegacyRef } from "react";
import { TextInput, TextInputProps } from "react-native";
interface Props extends TextInputProps {
    placeholder: string;
}

type Ref = LegacyRef<TextInputProps>

const ForwardForm = forwardRef<Ref ,Props>((props,ref) => {
    return (
        <TextInput placeholder={props.placeholder} ref={ref as LegacyRef<TextInputProps> | undefined | any}/>
    )
})

export default ForwardForm;