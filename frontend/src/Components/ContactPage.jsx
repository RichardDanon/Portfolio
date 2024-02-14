import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import OfficeImage from '../Images/office.jpg';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const linkdnIconSVG = () => {
    return (
      <svg width="35" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M88.8889 0C91.8357 0 94.6619 1.17063 96.7456 3.25437C98.8294 5.33811 100 8.16426 100 11.1111V88.8889C100 91.8357 98.8294 94.6619 96.7456 96.7456C94.6619 98.8294 91.8357 100 88.8889 100H11.1111C8.16426 100 5.33811 98.8294 3.25437 96.7456C1.17063 94.6619 0 91.8357 0 88.8889V11.1111C0 8.16426 1.17063 5.33811 3.25437 3.25437C5.33811 1.17063 8.16426 0 11.1111 0H88.8889ZM86.1111 86.1111V56.6667C86.1111 51.8633 84.203 47.2567 80.8065 43.8602C77.41 40.4637 72.8034 38.5556 68 38.5556C63.2778 38.5556 57.7778 41.4444 55.1111 45.7778V39.6111H39.6111V86.1111H55.1111V58.7222C55.1111 54.4444 58.5556 50.9444 62.8333 50.9444C64.8961 50.9444 66.8744 51.7639 68.3331 53.2225C69.7917 54.6811 70.6111 56.6594 70.6111 58.7222V86.1111H86.1111ZM21.5556 30.8889C24.0309 30.8889 26.4049 29.9056 28.1552 28.1552C29.9056 26.4049 30.8889 24.0309 30.8889 21.5556C30.8889 16.3889 26.7222 12.1667 21.5556 12.1667C19.0655 12.1667 16.6774 13.1558 14.9166 14.9166C13.1558 16.6774 12.1667 19.0655 12.1667 21.5556C12.1667 26.7222 16.3889 30.8889 21.5556 30.8889ZM29.2778 86.1111V39.6111H13.8889V86.1111H29.2778Z" fill="black"/>
      </svg>  
    )
  }

  const gitHubIconSVG = () => {
    return (
      <svg width="38" viewBox="0 0 84 82" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 0.362503C32.106 0.362282 22.5347 3.88285 14.999 10.2942C7.46334 16.7055 2.45503 25.5892 0.870326 35.3555C-0.714374 45.1218 1.22796 55.1334 6.34976 63.5985C11.4716 72.0637 19.4385 78.4301 28.825 81.5583C30.9083 81.925 31.6875 80.675 31.6875 79.5792C31.6875 78.5917 31.6375 75.3083 31.6375 71.8208C21.1667 73.7458 18.4583 69.2667 17.625 66.925C16.7006 64.6448 15.2347 62.6241 13.3542 61.0375C11.8958 60.2583 9.8125 58.3292 13.3 58.2792C14.6328 58.4234 15.9112 58.8869 17.0268 59.6304C18.1424 60.3738 19.0622 61.3754 19.7083 62.55C20.278 63.5737 21.0442 64.4748 21.9628 65.2019C22.8814 65.9289 23.9344 66.4675 25.0616 66.7869C26.1887 67.1062 27.3678 67.2 28.5313 67.0628C29.6947 66.9256 30.8197 66.5602 31.8417 65.9875C32.0221 63.8682 32.9669 61.8868 34.5 60.4125C25.2292 59.3708 15.5417 55.7792 15.5417 39.8417C15.4826 35.6999 17.0107 31.6926 19.8125 28.6417C18.5388 25.0426 18.6878 21.0929 20.2292 17.6C20.2292 17.6 23.7167 16.5083 31.6875 21.8708C38.5054 19.9956 45.703 19.9956 52.5208 21.8708C60.4875 16.4542 63.9792 17.6 63.9792 17.6C65.5209 21.0928 65.67 25.0426 64.3958 28.6417C67.2061 31.6873 68.7355 35.6982 68.6667 39.8417C68.6667 55.8292 58.925 59.3708 49.6583 60.4125C50.652 61.4207 51.4171 62.6309 51.9016 63.9609C52.3862 65.291 52.5789 66.7097 52.4667 68.1208C52.4667 73.6958 52.4167 78.175 52.4167 79.5792C52.4167 80.675 53.1958 81.975 55.2792 81.5583C64.6484 78.4039 72.5916 72.0224 77.691 63.5531C82.7903 55.0838 84.7139 45.078 83.1183 35.3216C81.5227 25.5653 76.5118 16.6935 68.98 10.2899C61.4483 3.88638 51.886 0.367878 42 0.362503Z" fill="black"/>
      </svg>
    )
  }

  const emailIconSVG = () => {
    return (
    <svg width="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M91.6667 25C91.6667 20.4167 87.9167 16.6667 83.3333 16.6667H16.6667C12.0833 16.6667 8.33333 20.4167 8.33333 25V75C8.33333 79.5833 12.0833 83.3333 16.6667 83.3333H83.3333C87.9167 83.3333 91.6667 79.5833 91.6667 75V25ZM83.3333 25L50 45.8333L16.6667 25H83.3333ZM83.3333 75H16.6667V33.3333L50 54.1667L83.3333 33.3333V75Z" fill="black"/>
    </svg>
    )
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xdoqgevg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          subject,
          message
        })
      });

      if (response.ok) {
        toast.success(`Email sent successfully!`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });

        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        toast.error(`Failed to send email. Please try again later.`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(`Failed to send email. Please try again later.`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <section className="flex flex-wrap md:flex-nowrap min-h-screen">
      {/* Right side - Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex-grow">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Me</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
              <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..." required></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black hover:bg-black-500 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full transition duration-300 ease-in-out">
              Send message
            </button>
          </form>
        </div>
        <footer className="text-center text-gray-500 text-sm p-4">
          © Copyright 2024. All rights reserved
        </footer>

        {/* Social media icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <a target='_blank' href="https://www.linkedin.com/in/richard-danon-woedey-5835a0292/" className="opacity-10 hover:opacity-100 duration-300 ease-in-out">{linkdnIconSVG()}</a>
          <a target='_blank' href="https://github.com/RichardDanon" className="opacity-10 hover:opacity-100 duration-300 ease-in-out">{gitHubIconSVG()}</a>
          <a target='_blank' href="mailto:richard2004danon@gmail.com" className="opacity-10 hover:opacity-100 duration-300 ease-in-out">{emailIconSVG()}</a>
        </div>
      </div>

      {/* Left side - Image */}
      <div className="hidden md:block md:w-1/2">
        <img src={OfficeImage} alt="Office" className="h-screen w-full object-cover" />
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
};

export default ContactPage;
