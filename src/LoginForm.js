import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    VisuallyHidden,
} from '@chakra-ui/core';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
    const [formResults, setFormResults] = useState('');

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log('%c Logging in -->', 'color: #FFEE57', values);

                    setFormResults(JSON.stringify(values));
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({ isSubmitting, handleSubmit }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Field name="username">
                            {({ field, form }) => (
                                <FormControl
                                    isInvalid={
                                        form.errors.username &&
                                        form.touched.username
                                    }
                                >
                                    <FormLabel htmlFor="username" color="white">
                                        User name
                                    </FormLabel>

                                    <Input
                                        {...field}
                                        id="username"
                                        placeholder="Enter your user name"
                                    />

                                    <FormErrorMessage data-testid="usernameError">
                                        {form.errors.username}
                                    </FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name="password">
                            {({ field, form }) => (
                                <FormControl
                                    isInvalid={
                                        form.errors.password &&
                                        form.touched.password
                                    }
                                >
                                    <FormLabel htmlFor="password" color="white">
                                        Password
                                    </FormLabel>

                                    <Input
                                        {...field}
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                    />

                                    <FormErrorMessage data-testid="passwordError">
                                        {form.errors.password}
                                    </FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Button
                            id="submit"
                            mt={6}
                            variantColor="green"
                            isLoading={isSubmitting}
                            type="submit"
                        >
                            Login
                        </Button>

                        <VisuallyHidden>
                            <Field
                                id="results"
                                data-testid="formResults"
                                value={formResults}
                            />
                        </VisuallyHidden>
                    </form>
                );
            }}
        </Formik>
    );
};

export default LoginForm;
