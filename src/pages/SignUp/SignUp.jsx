import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, password, confirmPassword);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero my-10">
            <div className="flex flex-col gap-10 lg:flex-row">
                <div className="w-1/2">
                    <img src={img} alt="Login" />
                </div>
                <div className="card shrink-0 w-full max-w-sm border">
                    <form
                        onSubmit={handleSignUp}
                        className="card-body">
                        <h1 className="text-3xl font-bold text-center my-5">Sign up</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="Confirm password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-sm md:btn-md bg-[#FF3811] text-white">SIGN UP</button>
                        </div>
                        <h2 className='text-center my-5'>Already have an account? Please... <Link to='/login' className='text-[#FF3811] font-semibold underline'>Log in</Link></h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;