import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <section className='container mx-auto'>
            <div className='flex flex-col items-center h-screen justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-accent text-center text-4xl'>Login</h2>
                    <div className=''>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className='border-[#CFCFCF] input w-screen max-w-xs' name='email'
                            {...register("mail",
                                { required: "Email Address is required" })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.mail && <p className='text-red-600' role="alert">{errors.mail?.message}</p>}
                    </div>
                    <div className=''>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' className='border-[#CFCFCF] input w-screen max-w-xs' name='name'
                            {...register("password",
                                { required: "Password is required" })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='w-80 btn mt-8 bg-accent' type="submit" />
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default Login;