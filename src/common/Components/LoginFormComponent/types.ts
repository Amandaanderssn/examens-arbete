export default interface LoginFormValues {
    username: string;
    password: string;
}

export interface LoginComponentProps {
    handleLogin: (value: LoginFormValues) => LoginFormValues | undefined;
    errorMessage: string;
}