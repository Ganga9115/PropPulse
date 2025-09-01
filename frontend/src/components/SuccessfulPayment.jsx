import { useNavigate } from 'react-router-dom';

const SuccessfulPayment = () => {
    const navigate = useNavigate();

    const handleDoneClick = () => {
        // You can navigate to the dashboard or home page
        navigate('/dashboard'); 
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10 w-full max-w-2xl mx-auto text-center">
            {/* Header Section */}
            <div className="bg-blue-100 py-6 px-8 rounded-lg mb-8">
                <h1 className="text-3xl font-bold text-blue-900">Payment</h1>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-between items-center mb-10 pb-4 border-b-2 border-gray-200">
                <div className="flex flex-col items-center">
                    <span className="relative w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    <span className="mt-2 text-xs font-semibold text-gray-500">RENTAL DETAILS</span>
                </div>
                <div className="flex-1 h-1 bg-blue-500 mx-4"></div>
                <div className="flex flex-col items-center">
                    <span className="relative w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    <span className="mt-2 text-xs font-semibold text-blue-500">PAYMENT</span>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
                <div className="flex flex-col items-center">
                    <span className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold text-sm">3</span>
                    <span className="mt-2 text-xs font-semibold text-gray-500">CONFIRMATION</span>
                </div>
            </div>
            
            {/* Success Message */}
            <div className="flex flex-col items-center justify-center py-12">
                <div className="relative w-32 h-32 mb-6">
                    <svg className="w-full h-full text-blue-600" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0 Z"></path>
                        <path fill="#ffffff" d="M44.5 75.5 L25.5 56.5 C24.5 55.5 24.5 54.5 25.5 53.5 L28.5 50.5 C29.5 49.5 30.5 49.5 31.5 50.5 L45 64 L68.5 40.5 C69.5 39.5 70.5 39.5 71.5 40.5 L74.5 43.5 C75.5 44.5 75.5 45.5 74.5 46.5 L48.5 72.5 C47.5 73.5 46.5 73.5 45.5 72.5 Z"></path>
                    </svg>
                </div>
                <h3 className="text-xl lg:text-3xl font-bold text-blue-600 mb-8">
                    Payment Successfully Completed......
                </h3>
            </div>
            
            {/* Done Button */}
            <button
                onClick={handleDoneClick}
                className="w-full max-w-xs px-20 py-4 bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors duration-300 mx-auto"
            >
                Done
            </button>
        </div>
    );
};

export default SuccessfulPayment;