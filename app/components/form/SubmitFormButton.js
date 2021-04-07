import React from "react";

import AppButton from "../AppButton";

const SubmitButton = ({ title }) => {
//   const { handleSubmit } = useFormikContext();
    const handleSubmit = () => {
        console.log('register');
    }

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
