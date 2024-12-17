import React from "react";
import { FormAuth, Label, Input, Submit } from "./AuthForm.styled";

const SignUpForm = () => {
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
            <Label htmlFor="repeatPassword">
                <Input
                    type="repeatPassword"
                    name="repeatPassword"
                    id="repeatPassword"
                    placeholder="Repeat password"
                />
            </Label>
            <Submit type="submit">Sing Up</Submit>
        </FormAuth>
    );
};

export default SignUpForm;
