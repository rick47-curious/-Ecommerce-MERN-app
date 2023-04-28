import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import './css/LoginSection.css'

export const LoginSection = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const { 
        register: register2,
        handleSubmit: handleSubmit2,
        watch,
        formState: { errors: errors2 } 
      } = useForm();

      const [loginError,setLoginError] = useState("");
    const loginOptions = {
        email:{required: "Email is required",
        pattern:{
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message:"Invalid Email"
        }},
        loginPassword:{required: "Password is required",
        minLength:{
            value:8,
            message:'Password should be atleast 8 characters'
        }
    }
    }
    const password = React.useRef({});
    password.current = watch("registerPassword", "");

    const registerOptions = {
    name:{required:"Username is required",
    pattern:{
        value:/^[a-zA-Z]+$/,
        message: "Enter valid Username"
    }},
    email:{required:"Email is required",
    pattern:{
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message:"Invalid Email"
    }},
    registerPassword:{required: "Password is required",
    minLength:{
        value:8,
        message:'Password should be atleast 8 characters'
    }},
    confirmPassword:{required: "Confirm password is required",
        validate: (value) => value ===password.current || "Confirm password do not match with above password"
    },
    acceptTerms:{required:"Must agree to terms"}
    }
    const fulfillLogin = (data)=>{
        axios.post('/auth/login',data)
        .then(res=>res.status)
        .then(status=>{
            if (status === 200){
                window.location.href = "/";
            }   
        }).catch((error)=>{
            if (error.response.status === 401){
                setLoginError("Invalid Password provided");
            }else if (error.response.status === 400){
                setLoginError("User not found");
            }
        })
    }
    const handleLoginErrors = ()=>{}
    const fullfillRegistration = (data)=>{
        axios.post('/auth/register',data)
        .then(res=>res.status)
        .then(status=>{
            if (status === 200){
                window.location.href = "/";
            }
        }).catch(error=>{
            if (error.response.status === 500){
                setLoginError("Something went wrong, please try again later");
            }
        })
    }
    const handleRegisterFailure = ()=>{}

    const handleDisplay = (e)=>{
        e.preventDefault();
        document.getElementsByTagName("form")[0].style.display = "none";
        document.getElementsByTagName("form")[1].style.display = "block";
    }
    const goBack = (e)=>{
        e.preventDefault();
        window.history.back();
    }
    return (
        <>
            <section className="vh-100">
                <button type="button" className="btn btn-outline-primary" id="back-btn" onClick={goBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <span className='ms-1'>Back</span>
                </button>
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="item-brand" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit(fulfillLogin,handleLoginErrors)}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" name="email" {...register("email",loginOptions.email)} />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    <small className='text-danger ms-2'>{errors?.email && errors.email.message}</small>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" name="loginPassword" {...register("loginPassword",loginOptions.loginPassword)}/>
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <small className='text-danger ms-2'>{errors?.loginPassword && errors.loginPassword.message}</small>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{ "paddingLeft": "2.5rem", "paddingRight": "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        className="link-danger" onClick={handleDisplay}>Register</a></p>
                                </div>
                                <small className='text-danger'>{loginError && loginError?loginError:""}</small>
                            </form>
                            <form onSubmit={handleSubmit2(fullfillRegistration,handleRegisterFailure)} style={{ "display": "none" }}>
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                    <div className="d-flex flex-row align-items-center mb-1">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="text" id="form3Example1c" className="form-control"
                                            name="name" {...register2("name",registerOptions.name)} />
                                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                            <small className='text-danger ms-2'>{errors2?.name && errors2.name.message}</small>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-1">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="email" id="form3Example3c" className="form-control" 
                                            name="email" {...register2("email",registerOptions.email)}/>
                                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                            <small className='text-danger ms-2'>{errors2?.email && errors2.email.message}</small>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-1">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4c" className="form-control" 
                                            name="registerPassword" {...register2("registerPassword",registerOptions.registerPassword)}/>
                                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                                            <small className='text-danger ms-2'>{errors2?.registerPassword && errors2.registerPassword.message}</small>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-1">
                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4cd" className="form-control" 
                                            name="confirmPassword" {...register2("confirmPassword",registerOptions.confirmPassword)}/>
                                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                            <small className='text-danger ms-2'>{errors2?.confirmPassword && errors2.confirmPassword.message}</small>
                                        </div>
                                    </div>

                                    <div className="form-check d-flex justify-content-center mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" 
                                        name="acceptTerms" {...register2("acceptTerms",registerOptions.acceptTerms)}/>
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            I agree all statements in <a href="#!">Terms of service</a>
                                        </label>
                                        <small className='text-danger ms-2 d-block'>{errors2?.acceptTerms && errors2.acceptTerms.message}</small>
                                    </div>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                    </div>
                                    <small className='text-danger'>{loginError && loginError?loginError:""}</small>
                                </form>
                        </div>
                    </div>
                </div>
                <div id="footer" className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    {/* <!-- Copyright --> */}
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © {new Date().getFullYear()}. All rights reserved.
                    </div>


                </div>
            </section>
        </>
    )
}
