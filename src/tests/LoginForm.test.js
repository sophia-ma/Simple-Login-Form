import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { render } from './test-utils';
import LoginForm from '../LoginForm';

it('renders the form', () => {
    const div = document.createElement('div');

    render(<LoginForm />, div);
});

it('should show validation on blur', async () => {
    const { getByTestId, container } = render(<LoginForm />);

    const username = container.querySelector('input[name="username"]');
    const password = container.querySelector('input[name="password"]');

    fireEvent.blur(username);
    fireEvent.blur(password);

    await waitFor(() => {
        expect(getByTestId('usernameError')).not.toBe(null);
        expect(getByTestId('usernameError')).toHaveTextContent(
            'Username is required'
        );
    });

    await waitFor(() => {
        expect(getByTestId('passwordError')).not.toBe(null);
        expect(getByTestId('passwordError')).toHaveTextContent(
            'Password is required'
        );
    });
});

it('should validate on click on submit', async () => {
    const { container, getByTestId } = render(<LoginForm />);

    const submit = container.querySelector('button[type="submit"]');

    fireEvent.click(submit);

    await waitFor(() => {
        expect(getByTestId('usernameError')).not.toBe(null);
        expect(getByTestId('usernameError')).toHaveTextContent(
            'Username is required'
        );
    });

    await waitFor(() => {
        expect(getByTestId('passwordError')).not.toBe(null);
        expect(getByTestId('passwordError')).toHaveTextContent(
            'Password is required'
        );
    });
});

it('submits correct values', async () => {
    const { container } = render(<LoginForm />);

    const username = container.querySelector('input[name="username"]');
    const password = container.querySelector('input[name="password"]');
    const formResults = container.querySelector('input[id="results"]');
    const submit = container.querySelector('button[type="submit"]');

    await waitFor(() => {
        fireEvent.change(username, { target: { value: 'mockName' } });
    });

    await waitFor(() => {
        fireEvent.change(password, { target: { value: 'mockPassword' } });
    });

    await waitFor(() => {
        fireEvent.click(submit);

        expect(formResults.value).toBe(
            '{"username":"mockName","password":"mockPassword"}'
        );
    });
});
