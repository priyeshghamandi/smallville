const PageLoader: React.FC = (): JSX.Element => {
    return (
        <div className="w-full h-screen fixed block top-0 left-0 bg-white opacity-75 z-50">
            <div
                className="text-green-500 opacity-75 my-0 mx-auto relative w-full flex justify-center"
                style={{ top: '50%' }}
            >
                <svg
                    className="animate-spin  h-20 w-30 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#000"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="blue"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            </div>
        </div>
    );
};
export default PageLoader;