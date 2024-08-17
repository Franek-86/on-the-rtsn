import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useForm } from "react-hook-form";
import { useUserContext } from "../userContext";
import { Navigate } from "react-router-dom";
// import { login } from "../server/controllers/questions";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {
    registerUser,
    login,
    isLoading,
    user,
    showAlert,
    member,
    setIsMember,
  } = useUserContext();

  const onSubmit = (data) => {
    if (!member) {
      registerUser(data);
    } else {
      login(data);
    }
  };
  const toggleMember = () => {
    setIsMember(!member);
  };

  return (
    <div className='form-page'>
      <div className='banner'>
        {user && <Navigate to='/rtsn' replace={true} />}
        <h2>{!member ? "Register" : "Login"}</h2>
        <Form className='form-container' onSubmit={handleSubmit(onSubmit)}>
          {showAlert && (
            <div className='alert alert-danger'>
              there was an error, please try again
            </div>
          )}
          <FloatingLabel
            controlId='floatingInput'
            label='Username'
            className='my-3'
          >
            <Form.Control
              type='text'
              placeholder='name@example.com'
              {...register("username", {
                maxLength: {
                  value: 12,
                  message: "username can't be longer then 12 characters",
                },
                minLength: {
                  value: 2,
                  message: "username can't be shorter then 2 characters",
                },
                required: {
                  value: true,
                  message: "username is required",
                },
              })}
            />
            <p className='form-validation-error'>{errors.username?.message}</p>
          </FloatingLabel>
          <FloatingLabel controlId='floatingPassword' label='Password'>
            <Form.Control
              type='password'
              placeholder='Password'
              {...register("password", {
                maxLength: {
                  value: 10,
                  message: "password max length is 10 characters",
                },
                minLength: {
                  value: 6,
                  message: "password minimum length is 6 characters",
                },
                required: {
                  value: true,
                  message: "password is required",
                },
              })}
            />
            <p className='form-validation-error'>{errors.password?.message}</p>
          </FloatingLabel>
          <Button
            className='my-3'
            variant='primary'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </Button>
          <p>
            {member ? "Not a member yet?" : "Already a member?"}

            <button type='button' onClick={toggleMember} className='member-btn'>
              {member ? "Register" : "Login"}
            </button>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
