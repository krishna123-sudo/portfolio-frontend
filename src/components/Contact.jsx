import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form Data:", formData);

        try {
            // Replace with your backend API
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            console.log(data);

            alert("Message sent successfully!");
            setFormData({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            });

        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="min-h-screen  text-white flex items-center justify-center px-4">
            <div className="w-full max-w-xl border p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-950 hover:bg-blue-900 transition-all py-3 rounded-lg font-semibold"
                    >
                        Send Message
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Contact;