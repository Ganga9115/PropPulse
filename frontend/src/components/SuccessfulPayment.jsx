import { useNavigate } from 'react-router-dom';

const SuccessfulPayment = () => {
    const navigate = useNavigate();

    const handleDoneClick = () => {
        navigate('/dashboard'); 
    };

    return (
        <div className="bg-white flex-1 flex flex-col items-center py-10 px-6">
            {/* Page Title & Progress Steps Container */}
            <div className="flex flex-col w-full max-w-5xl">
                {/* Page Title */}
                <div className="bg-[#E9F0FB] w-full py-6 px-12 rounded-t-lg">
                    <h1 className="text-3xl font-bold text-[#0D1B56]">Payment</h1>
                </div>

                {/* Progress Steps */}
                <div className="bg-white w-full py-8 px-12 shadow-sm">
                    <div className="flex items-center justify-start space-x-10">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                                ✓
                            </div>
                            <p className="mt-2 text-xs font-semibold text-gray-600">RENTAL DETAILS</p>
                        </div>

                        <div className="w-20 h-[2px] bg-blue-500"></div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                                ✓
                            </div>
                            <p className="mt-2 text-xs font-semibold text-gray-600">PAYMENT</p>
                        </div>

                        <div className="w-20 h-[2px] bg-gray-300"></div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">
                                3
                            </div>
                            <p className="mt-2 text-xs font-semibold text-gray-600">CONFIRMATION</p>
                        </div>
                    </div>
                </div>

                {/* Success Message & Done Button */}
                <div className="bg-white p-12 flex flex-col items-center justify-center mt-6">
                    <div className="w-48 h-48 mb-6">
                        <svg className="w-full h-full text-[#5A6FF0]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0 Z"></path>
                            <path fill="#ffffff" d="M44.5 75.5 L25.5 56.5 C24.5 55.5 24.5 54.5 25.5 53.5 L28.5 50.5 C29.5 49.5 30.5 49.5 31.5 50.5 L45 64 L68.5 40.5 C69.5 39.5 70.5 39.5 71.5 40.5 L74.5 43.5 C75.5 44.5 75.5 45.5 74.5 46.5 L48.5 72.5 C47.5 73.5 46.5 73.5 45.5 72.5 Z"></path>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-[#5A6FF0] mb-8">
                        Payment Successfully Completed......
                    </h3>
                    <button
                        onClick={handleDoneClick}
                        className="w-full max-w-sm px-20 py-4 bg-[#5A6FF0] text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-colors duration-300 mx-auto"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessfulPayment;