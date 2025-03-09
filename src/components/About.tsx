import React, { useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { Briefcase, GraduationCap, Languages, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  // Reveal animation on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Initial check on page load
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <section id="about" className="section bg-portfolio-light-gray">
      <div className="section-container">
        <SectionTitle title="About Me" />

        {/* Imagem e texto introdutório */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal">
            <div className="relative">
              <img
                src="/imagem_about.jpg"
                alt="Gonçalo Barata"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                onError={(e) => {
                  console.error('Image failed to load');
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d';
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-portfolio-accent/10 rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="reveal">
            <p className="text-portfolio-muted mb-6">
              I am a 20-year-old final-year Computer Engineering student originally from Lisbon, Portugal, at Universidade Lusófona. Throughout my studies, I have gained knowledge in various programming languages, including Java, Kotlin, Python, C, C#, C++, and SQL.
            </p>

            <p className="text-portfolio-muted mb-6">
              I have developed several projects that demonstrate my skills, with Java, Python, and Kotlin being the languages I am most proficient in. Additionally, I acquired web development knowledge through HTML, CSS, and JavaScript in Django, which enabled me to create this portfolio and other projects.
            </p>

            <p className="text-portfolio-muted mb-6">
              Currently, I am learning Data Science with a focus on Python, a field that interests me greatly due to its connection with mathematics, statistics, and artificial intelligence. From a young age, I have always enjoyed mathematics and statistics, and so far, Data Science has been the area I have most enjoyed exploring throughout my education.
            </p>

            <p className="text-portfolio-muted mb-6">
              Recently, I was accepted into the Master's Degree in Information Management, with a Specialization in Business Intelligence at NOVA IMS, which I will start in September 2025. It has been ranked as the best Master's program in Business Intelligence and Strategy in the world by Eduniversal for the sixth consecutive year, an international agency that publishes annual rankings of the best Master's programs and MBAs worldwide.
            </p>

            <p className="text-portfolio-muted">
              In addition, I enjoy sports and have been playing federated tennis since the age of 8. This sport has helped me develop as a person, teaching me the importance of discipline, perseverance, and always respecting others.
            </p>
          </div>
        </div>

        {/*abaixo da imagem e texto */}
        <div className="reveal mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-portfolio-dark-gray flex items-center gap-2">
              <GraduationCap size={20} className="text-portfolio-accent" />
              Education
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-white p-4 h-32 rounded-lg shadow-sm flex flex-col ">
                <h4 className="font-medium">Bachelor's Degree in Computer Engineering</h4>
                <p className="text-sm text-portfolio-muted">Universidade Lusófona (Portugal, Lisbon) • 2022 - July 2025</p>
                <p className="text-sm mt-2"></p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium">Master's Degree in Information Management, with a Specialization in Business Intelligence</h4>
                <p className="text-sm text-portfolio-muted">Nova IMS (Portugal, Lisbon) • Starts September 2025</p>
                <p></p>
                <p className="text-sm mt-2">
                The best Master's program in the world in Business Intelligence and Strategy, according to the Best Masters
                Ranking 2024 by Eduniversal </p>
                <a href="https://www.best-masters.com/ranking-master-business-intelligence-and-strategy.html" className="inline-block mt-4 py-2 px-4 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors "> Click Here</a>
              </div>
            </div>
          </div>
        </div>

        {/* Experiência Profissional */}
        <div className="reveal mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-portfolio-dark-gray flex items-center gap-2">
              <Briefcase size={20} className="text-portfolio-accent" />
              Professional Experience
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium">Academic Mentor - Computer Engineering Department</h4>
                <p className="text-sm text-portfolio-muted">Universidade Lusófona • 01/10/2023 - Present</p>

                <p className="text-sm mt-2">
                    - I'm in the mentorship program of the Computer Engineering Department at my college, where I assist students in courses I had already completed during my bachelor's degree.
                </p>

                <p className="text-sm mt-2">
                    - I help my students understand concepts and solve practical exercises.
                </p>

                <p className="text-sm mt-2">
                    - I develop effective study strategies, improving the academic performance of the students.
                </p>

                <p className="text-sm mt-2">
                    - This experience fosters a collaborative environment, encouraging the exchange of knowledge among students.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium">Experience In Tennis Instructor (2021)</h4>


                <p className="text-sm mt-2">
                    - I developed and implemented tennis training programs for children aged 6 to 12, adapting technical instruction to each student's skill level.
                </p>

                <p className="text-sm mt-2">
                    - Focused on teaching basic techniques such as forehand, backhand, serve, volleys, and movement.
                </p>

                <p className="text-sm mt-2">
                    - Encouraged sportsmanship, discipline, and teamwork, creating a positive and motivating learning environment.
                </p>

                <p className="text-sm mt-2">
                    - Organized and supervised internal social tournaments, promoting socialization among students.
                </p>

                <p className="text-sm mt-2">
                    - Maintained regular communication with parents, providing feedback on students' progress.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-portfolio-dark-gray flex items-center gap-2">
                <Languages size={20} className="text-portfolio-accent" />
                Languages
              </h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Portuguese</h4>
                    <span className="text-sm text-portfolio-accent">Native</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <h4 className="font-medium">English</h4>
                    <span className="text-sm text-portfolio-accent">B2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-portfolio-dark-gray flex items-center gap-2">
                <HeartHandshake size={20} className="text-portfolio-accent" />
                Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Gym', emoji: '💪' },
                  { name: 'Tennis', emoji: '🎾' },
                  { name: 'Beach', emoji: '🏖️' },
                  { name: 'Surf', emoji: '🏄‍♂️' },
                  { name: 'Padel', emoji: '🏓' },
                  { name: 'Cooking', emoji: '👨‍🍳' },
                  { name: 'Travelling', emoji: '✈️' },
                  { name: 'Photography', emoji: '📸' }
                ].map((hobby, index) => (
                  <span
                    key={index}
                    className="py-2 px-4 bg-white rounded-full shadow-lg text-sm font-medium transition-all transform hover:scale-110 hover:bg-portfolio-accent hover:text-white hover:shadow-xl duration-300 flex items-center gap-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-lg">{hobby.emoji}</span>
                    <span>{hobby.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
