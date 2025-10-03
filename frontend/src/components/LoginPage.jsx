import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import login from "../assets/login.png";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      // FIX: Changed the URL to include the /api/users prefix
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      // NOTE: The backend logic for /login does NOT currently return a 'token', 
      // but it does return the 'user' object. We'll proceed with this for now.
      
      // Save user details in localStorage
      localStorage.setItem('user', JSON.stringify(res.data.user));

      setMessage(`Welcome, ${res.data.user.username}`);

      // 👇 Redirect based on role
      if (res.data.user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard'); // tenant
      }

    } catch (err) {
      // Improved error handling to show specific backend message
      const errorMessage = err.response?.data?.error || err.response?.data?.message || 'An error occurred. Please try again.';
      setMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">
      <div className="flex-1 bg-[#CBE0F8] flex items-center justify-center p-4 rounded-lg">
        <img
          src={login}
          alt="Login illustration"
          className="w-full max-w-lg h-auto rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-1 bg-white flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full md:max-w-md">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-10 w-10 text-blue-500">
                <path fill="currentColor" d="M280.4 143.2L32 263.2V464h128V320h128v144h128V263.2l-248.4-120zM576 264L288 120 0 264v32h64v144h160V320h160v144h160V296h64V264z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">Login Now</h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              Welcome back! Login to access our exclusive contents
            </p>
          </div>
          {/* Use dynamic class for success/error message */}
          {message && <p className={`text-center mb-3 ${message.includes('Welcome') ? 'text-green-600' : 'text-red-500'}`}>{message}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 placeholder-gray-500 transition duration-300"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 placeholder-gray-500 transition duration-300"
            />
            <button
              type="submit"
              disabled={isLoading} 
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'LOADING...' : 'LOGIN'}
            </button>
          </form>
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">Don't have an account? </span>
            <a href="/signup" className="text-blue-600 font-semibold hover:underline">
              Signup now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
