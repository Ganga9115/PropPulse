import { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/signup', {
        username: name,
        email,
        password
      });
      setMessage(res.data.message);
      // Clear form
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error occurred');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen font-sans bg-gray-900 text-gray-800">

      {/* Left side */}
      <div className="flex-1 flex items-center justify-center p-4" style={{ backgroundColor: '#CBE0F8' }}>
        <img
          src="https://placehold.co/600x400/b0c1db/b0c1db?text="
          alt="Illustration"
          className="w-full max-w-lg h-auto"
        />
      </div>

      {/* Right side - form */}
      <div className="flex-1 bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full md:max-w-md">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-10 w-10 text-blue-500">
                <path fill="currentColor" d="M280.4 143.2L32 263.2V464h128V320h128v144h128V263.2l-248.4-120zM576 264L288 120 0 264v32h64v144h160V320h160v144h160V296h64V264z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">Sign Up</h2>
            <p className="text-sm text-gray-500 text-center mt-1">Join us today! Sign Up to access our exclusive contents</p>
          </div>

          {message && <p className="text-red-500 text-center mb-3">{message}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 placeholder-gray-500 transition duration-300"
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 placeholder-gray-500 transition duration-300"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              SIGN UP
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">Already have an account? </span>
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
