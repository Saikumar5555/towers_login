// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
// import bg from './components/bg2.mp4';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const navigate = useNavigate(); // Change to useNavigate

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Define your navigation logic based on the email
//         if (email === 'user1@gmail.com') {
//             navigate('/page1'); // Use navigate instead of history.push
//         } else if (email === 'user2@gmail.com') {
//             navigate('/page2');
//         } else if (email === 'user3@gmail.com') {
//             navigate('/page3');
//         } else {
//             alert('Email not recognized');
//         }
//     };
    
    

//     return (
//         <div className="flex h-screen">
//             <div className="w-1/2 flex items-center justify-center bg-gray-100 flex-col">
//                 <h1 className='text-7xl font-semibold text-center mb-8'>Digital Twin</h1>
//                 <h1 className='text-3xl font-semibold text-center mb-8'>Revolutionize Your World!</h1>
//                 <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
//                     <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
//                     <div className="mb-4">
//                         <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full p-2 border border-gray-300 rounded"
//                             placeholder="you@example.com"
//                             required
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             className="w-full p-2 border border-gray-300 rounded"
//                             placeholder="********"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
//                     >
//                         Sign In
//                     </button>  
//                 </form>
//             </div>
//             <div className="w-1/2 relative overflow-hidden rounded-2xl bg-gray-100">
//             <video
//                 src={bg}
//                 autoPlay
//                 loop
//                 muted
//                 className="absolute top-0 left-0 w-full h-full object-cover rounded-s-2xl bg-gray-100"
//                 type="video/mp4"
//                 style={{ playbackRate: 0.2 }} // Adjust the rate as needed
//             />
//             </div>
//         </div>
//     );
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
// import bg from './components/bg4.mp4';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (email === 'user1@gmail.com') {
//             navigate('/page1');
//         } else if (email === 'user2@gmail.com') {
//             navigate('/page2');
//         } else if (email === 'user3@gmail.com') {
//             navigate('/page3');
//         } else {
//             alert('Email not recognized');
//         }
//     };

//     return (
//         <div className="relative h-screen">
//             <video
//                 src={bg}
//                 autoPlay
//                 loop
//                 muted
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 type="video/mp4"
//             />
//             <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center bg-opacity-80">
//                 <form onSubmit={handleSubmit} className="bg-black p-8 rounded-lg shadow-md w-96 bg-opacity-60"  style={{backgroundImage: 'linear-gradient(135deg, rgba(233, 222, 250, 0.8) 10%, rgba(251, 252, 219, 0.8) 100%)',}}>
//                     <h2 className="text-2xl font-bold mb-6 text-white text-center">Login</h2>
//                     <div className="mb-4">
//                         <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full p-2 border border-gray-300 rounded"
//                             placeholder="you@example.com"
//                             required
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             className="w-full p-2 border border-gray-300 rounded"
//                             placeholder="********"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
//                     >
//                         Sign In
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from './components/bg2.mp4';
import './styles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'user1@gmail.com') {
            navigate('/page1');
        } else if (email === 'user2@gmail.com') {
            navigate('/page2');
        } else if (email === 'user3@gmail.com') {
            navigate('/page3');
        } else {
            alert('Email not recognized');
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center bg-gray-100 flex-col">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="********"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
                    >
                        Sign In
                    </button>
                </form>
            </div>
            <div className="w-1/2 relative overflow-hidden rounded-2xl bg-gray-100">
                <video
                    src={bg}
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-s-2xl bg-gray-100"
                    type="video/mp4"
                    style={{ playbackRate: 0.2 }} // Adjust the rate as needed
                />
            </div>
        </div>
    );
};

export default Login;
