import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
// import { useContext } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // const { signIn } = useContext(AuthContext);
    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };
                // Get access token
                axios.post('https://car-doctor-server-nine-ashen.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                            alert('Logged in successful')
                        }
                    })
            })
            .catch(error => {
                console.error(error);
                alert('Something wrong')
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
                        onSubmit={handleLogin}
                        className="card-body">
                        <h1 className="text-3xl font-bold text-center my-5">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-sm md:btn-md bg-[#FF3811] text-white">LOGIN</button>
                        </div>
                        <h2 className='text-center my-5'>New to Car Doctor? Please... <Link to='/signUp' className='text-[#FF3811] font-semibold underline'>Sign Up</Link></h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;