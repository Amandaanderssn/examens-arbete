export interface SignUpComponentProps {
    handleSignUp: (value: SignUpFormValues) => Promise<SignUpFormValues | undefined>;
    errorMessage: string;
    usernameError: string;
}

export interface SignUpFormValues {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    qrCode: string;
}