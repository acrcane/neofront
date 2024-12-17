import React from "react";
import { FormAuth, Label, Input, Submit } from "./AuthForm.styled";

const SignInForm = () => {
    return (
        <FormAuth>
            <Label htmlFor="email">
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                />
            </Label>
            <Label htmlFor="password">
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                />
            </Label>
            <Submit type="submit">Sing In</Submit>
        </FormAuth>
    );
};

export default SignInForm;
