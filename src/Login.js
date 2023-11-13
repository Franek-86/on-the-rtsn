import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useForm } from "react-hook-form";
import { useUserContext } from "./userContext";
import { Navigate } from "react-router-dom";
// import { login } from "../server/controllers/questions";
const Login = () => {
  const [member, setIsMember] = React.useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { registerUser, login, isLoading, user, showAlert } = useUserContext();

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
              {...register("username")}
            />
          </FloatingLabel>
          <FloatingLabel controlId='floatingPassword' label='Password'>
            <Form.Control
              type='password'
              placeholder='Password'
              {...register("password")}
            />
          </FloatingLabel>
          <Button
            className='my-3'
            variant='primary'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? "Fetching User..." : "Submit"}
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
