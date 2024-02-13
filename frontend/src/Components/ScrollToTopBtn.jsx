import React from 'react';

function ScrollToTopBtn() {

    const generateGoToTopBtnDesign = () => {
        return (
            <div style={{transform: "rotate(180deg)", opacity: "0.75"}}>
                <svg width="30" height="30" viewBox="0 0 133 134" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <path d="M64.5251 96.4749C65.892 97.8417 68.108 97.8417 69.4749 96.4749L91.7487 74.201C93.1156 72.8342 93.1156 70.6181 91.7487 69.2513C90.3819 67.8844 88.1658 67.8844 86.799 69.2513L67 89.0503L47.201 69.2513C45.8342 67.8844 43.6181 67.8844 42.2513 69.2513C40.8844 70.6181 40.8844 72.8342 42.2513 74.201L64.5251 96.4749ZM63.5 40L63.5 94L70.5 94L70.5 40L63.5 40Z" fill="white"/>
                </svg>
            </div>
        );
    }

    return (
        <div className="flex justify-end mr-[3%]">
            <button onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' });}} className="fixed flex justify-center items-center z-10 bg-gray-800 hover:bg-gray-900 rounded-full w-10 h-10 bottom-14 opacity-75 transition duration-500 ease-in-out mr-1 shadow-lg border border-gray-700 text-white">
                {generateGoToTopBtnDesign()}
            </button>
        </div>  
    )
}

export default ScrollToTopBtn;
