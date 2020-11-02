import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from '@chakra-ui/core';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

const LoginForm = () => (
    <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log('Logging in', values);
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

                                <FormErrorMessage>
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
                                    placeholder="Enter your password"
                                />

                                <FormErrorMessage>
                                    {form.errors.password}
                                </FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>

                    <Button
                        mt={6}
                        variantColor="green"
                        isLoading={isSubmitting}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            );
        }}
    </Formik>
);

export default LoginForm;
