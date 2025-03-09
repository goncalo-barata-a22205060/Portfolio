import React, { useState, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
                    href="mailto:goncalo.costa.barata@gmail.com"
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
                    href="tel:+351965376355"
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
            {/* Formulário agora usa FormSubmit para enviar os emails */}
            <form
              ref={formRef}
              action="https://formsubmit.co/goncalo.costa.barata@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark-gray mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
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
                  <Send size={18} className="mr-2" />
                  Send Message
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
