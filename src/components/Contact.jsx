import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        const updatedData = {
            ...formData,
            time: new Date().toLocaleString()
        };

        try {
            // ✅ Email to YOU
            await emailjs.send(
                "service_2oxw0j6",            // 🔁 replace
                "template_o7xo6tf",           // 🔁 replace
                updatedData,
                "F-beJV4k2t5NBxwf7"             // 🔁 replace
            );

            // ✅ Auto reply to USER
            await emailjs.send(
                "service_2oxw0j6",
                "template_10u3385", // 🔁 replace
                updatedData,
                "F-beJV4k2t5NBxwf7"
            );

            setSuccess("✅ Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                subject: "",
                phone: "",
                message: ""
            });

        } catch (error) {
            console.error(error);
            setSuccess("❌ Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-16">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-4xl rounded-2xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 shadow-xl p-6 md:p-10"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    Contact <span className="gradient-text">Me</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-modern"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-modern"
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="input-modern"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="input-modern"
                        />
                    </div>

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="input-modern"
                    />

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-lg font-semibold 
                        bg-gradient-to-r from-purple-600 to-blue-600
                        hover:opacity-90 transition-all"
                    >
                        {loading ? "Sending..." : "Send Message 🚀"}
                    </button>

                    {/* Feedback */}
                    {success && (
                        <p className="text-center text-sm mt-2 text-gray-300">
                            {success}
                        </p>
                    )}
                </form>
            </motion.div>
        </div>
    );
}

export default Contact;