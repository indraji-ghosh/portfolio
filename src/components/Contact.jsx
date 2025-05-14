import React from 'react'

function Contact() {
  return (
    <div className='contact relative min-h-[400px] '>
        <div class="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>

        <div className="flex items-center justify-center min-h-screen  p-6">
                <form
                    action="https://formsubmit.co/6dfba2e9a9bb3db6b5b3ecd50db5c27f"
                    method="POST"
                    className="rounded-2xl  p-8 w-full max-w-lg space-y-6"
                >
                    <h2 className="text-3xl font-bold text-center text-white">Contact Me</h2>

                    <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-white">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-white">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        required
                        placeholder="Write your message here..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    </div>

                    {/* Optional honeypot for spam prevention */}
                    <input type="text" name="_honey" className="hidden" />

                    {/* Redirect URL after submission */}
                    <input type="hidden" name="_next" value="https://indrajit.live/thank-you" />

                    {/* Disable CAPTCHA if desired */}
                    <input type="hidden" name="_captcha" value="false" />

                    <button
                    type="submit"
                    className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 font-semibold"
                    >
                    Send Message
                    </button>
                </form>
                </div>





    </div>
    
  )
}

export default Contact