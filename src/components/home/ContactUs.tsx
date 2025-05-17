import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Phone } from 'lucide-react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-royal-cream/30">
        <div className="royal-container">
            <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">تواصل معنا</h2>
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">            <div className="contact-card">
                <Mail className="contact-icon" />
                <h3 className="font-bold text-lg mb-2 font-arabic">البريد الإلكتروني</h3>
                <p className="text-royal-gray font-naskh">info@mohamed-ali.com</p>
                </div>
                
                <div className="contact-card">
                <Phone className="contact-icon" />
                <h3 className="font-bold text-lg mb-2">الهاتف</h3>
                <p className="text-royal-gray">+20 123 456 789</p>
                </div>
                
                <div className="contact-card">
                <MessageSquare className="contact-icon" />
                <h3 className="font-bold text-lg mb-2">المراسلة</h3>
                <p className="text-royal-gray">نسعد بتواصلكم معنا</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-royal-gold/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">                    <label htmlFor="name" className="block text-royal-blue font-semibold mb-2 font-arabic">
                        الاسم
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="contact-input font-naskh"
                        placeholder="أدخل اسمك"
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="email" className="block text-royal-blue font-semibold mb-2">
                        البريد الإلكتروني
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="contact-input"
                        placeholder="أدخل بريدك الإلكتروني"
                    />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="block text-royal-blue font-semibold mb-2">
                    الرسالة
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contact-input"
                    placeholder="اكتب رسالتك هنا"
                    />
                </div>

                <div className="text-center">                    <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-royal-blue text-white font-bold 
                            py-3 px-8 rounded-lg hover:bg-royal-blue/90 transform hover:scale-105
                            transition-all duration-300 shadow-md hover:shadow-lg font-arabic"
                    >
                    <Send size={20} />
                    إرسال الرسالة
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>
    );
};

export default ContactUs;