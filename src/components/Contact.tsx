
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section bg-white">
      <div className="section-container">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Feel free to contact me for any work or suggestions."
        />
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 reveal">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-dark-gray">Contact Information</h3>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-full text-portfolio-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-portfolio-muted hover:text-portfolio-accent transition-colors"
                  >
                    goncalo.costa.barata@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-full text-portfolio-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-portfolio-muted hover:text-portfolio-accent transition-colors"
                  >
                    +351 965 376 355
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-full text-portfolio-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-portfolio-muted">
                    Lisbon, Portugal
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark-gray mb-1">
                    Name
                  </label>
                  <input 
                    id="name"
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-dark-gray mb-1">
                    Email
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-dark-gray mb-1">
                  Subject
                </label>
                <input 
                  id="subject"
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-dark-gray mb-1">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-accent focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-portfolio-accent hover:bg-blue-600 transition-colors disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
