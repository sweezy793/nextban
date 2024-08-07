import { CardWrapper } from "./CardWrapper";

export const LoginForm = () => {
  return (
    <div>
      <CardWrapper
        headerLabel="Welcome back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/sign-up"
        showSocial
      >
        Login Form
      </CardWrapper>
    </div>
  );
};
