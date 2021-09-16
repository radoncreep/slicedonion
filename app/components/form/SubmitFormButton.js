import React from "react";

import { useFormikContext } from 'formik';

import AppButton from "../AppButton";

export const SubmitFormButton = ({ title }) => {
  const { handleSubmit, isValid, dirty } = useFormikContext();

  return (
    <AppButton 
      title={title} 
      disabled={!(isValid && dirty)} 
      onPress={handleSubmit} 
    />
  );
};