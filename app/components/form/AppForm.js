import React from 'react';
import { Formik } from 'formik';

export const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {() => <>{children}</>}
        </Formik>
    );
};