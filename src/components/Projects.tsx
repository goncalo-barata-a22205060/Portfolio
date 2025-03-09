
import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Deisi Chess 👨‍💻',
      description: 'Chess game inspired by J.R.R. Tolkiens saga. The Lord of the Rings on the black pieces side, the evil forces play, where the Eye of Sauron takes the position of the King. On the white pieces side, we have the forces of good, with Aragorn also taking the position of the King. The main approach used was object-oriented programming in Java.',
      technologies: ['Java', 'Git', 'JUnit', 'Github', 'Kotlin', 'IntelliJ IDEA', 'Object-Oriented Programming (OOP)'],
      image: '/deisi_chess.png',
      githubUrl: 'https://github.com/goncalo-barata-a22205060/DEISI_ChessP1_a22205060',
    },
    {
      title: 'The Night Of The Living Deisi 👨‍💻',
      description: 'Board game with various classes to manage pieces, equipment, turns, and the board itself. Created by myself and a colleague.',
      technologies: ['Java', 'Git', 'JUnit', 'Github', 'Kotlin', 'IntelliJ IDEA', 'Object-Oriented Programming (OOP)'],
      image: '/the_night_living_deisi.png',
      githubUrl: 'https://github.com/ULHT-LP2-2024-25-students/projecto-lp2-prof-bc-andre-ghira-22207598-barata-22205060',

    },
    {
      title: 'Deisi World Meter 👨‍💻',
      description: 'DEISI World Meter is a Java application that allows for the manipulation and analysis of geographic and demographic data of countries and cities around the world. The system is designed to load data from CSV files, process the information, and execute specific queries on this data.',
      technologies: ['Java', 'Git', 'JUnit', 'GitHub','IntelliJ IDEA'],
      image: 'deisi_world_meter.png',
      githubUrl: 'https://github.com/goncalo-barata-a22205060/Deisi_World_Meter',

    },
    {
      title: 'Bank 👨‍💻',
      description: 'This project is a simulation of a banking system that uses inter-process communication in C, with multiple clients and basic operations. The system comprises two main programs: server and client, which communicate with each other through FIFOs and share information through shared memory. The server manages the accounts and processes client requests. Clients can send requests such as deposits, transfers, withdrawals, and balance inquiries. Additionally, the server can respond to external signals to close or open the bank, allowing it to be dynamically controlled.',
      technologies: ['C', 'VsCode'],
      image: '/bank.png',
      githubUrl: 'https://github.com/goncalo-barata-a22205060/Banco',
    },
    {
      title: 'Automated Control and Management System for a Pavilion 👨‍💻',
      description: 'Automated Control and Management System for a Pavilion, where I integrated an Arduino Mega and an Arduino Uno R3 with various sensors and components to create an intelligent system that allows automated and optimized management of the pavilion.',
      technologies: ['C++', 'Arduinos', 'Sensors'],
      image: 'arduino.png',
      pdfUrl: 'TF_G20 (9).pdf',

    },

    {
      title: 'Street_Combat 👨‍💻',
      description: 'Simple fighting game in C language, where two players will face off in an epic showdown. Each player will have the opportunity to choose a set of attacks in each round, but they will also have to manage their stamina. Additionally, depending on their stamina, the player can activate a combo, which is an attack that causes significant damage and consumes more stamina. As a special attack, when a player is losing, it is possible to rewind time, undoing a certain number of attacks.',
      technologies: ['C', 'Replit', 'VsCode'],
      image: 'street_combat.png',
      githubUrl: 'https://github.com/goncalo-barata-a22205060/Street_Combat',
    },

    {
      title: 'DataBase - SQL 👨‍💻',
      description: 'This project aims to improve an online platform used to manage Final Year Projects (FYP) in my university. The platform was created in 2018 and has been updated over time to better meet users needs. It helps manage topics, assessments, and generate data reports. In this course project, we were asked to apply the knowledge taught to us, such as retrieving specific information from the database or altering database columns.',
      technologies: ['SQL', 'MySQL', 'Docker'],
      image: 'base_dados.png',
      githubUrl: 'https://github.com/goncalo-barata-a22205060/Base-Dados---TFC',
    },
    {
      title: 'Mobile Prototype for App Hospitals 👨‍💻',
      description: 'Prototype of a mobile app that helps people find nearby hospitals and obtain important information. The app displays various details such as whether the hospital has emergency services, user reviews, medical specialties, and wait times. I used Axure RP to create the prototype, prioritizing an easy-to-use design with a simple and interactive interface.',
      technologies: ['Axure RP', 'Interactive Prototyping', 'Design'],
      image: '/axure.png',
      liveUrl: 'https://8mqhsh.axshare.com/?code=eb38272659cf0268ae32fed5d6e49591&g=4&id=xgk0wy&p=pagina_inicial'
    },

    {
      title: 'Popular Movies 👨‍💻',
      description: 'I developed a dynamic website that showcases the most popular movies of the moment, using the TMDB (The Movie Database) API. The site offers an intuitive and visually appealing interface, where users can explore, search, and get detailed information about trending movies. The integration with the TMDB API ensures that the data is updated in real-time.',
      technologies: ['Python', 'Django', 'HTML','CSS','JavaScript'],
      image: '/filmes_populares.png',
      liveUrl: 'https://a22205060.pythonanywhere.com/movies/'
    },
    {
      title: 'Meteorology in Portugal 🌤️',
      description: 'Fully Functional Weather Forecast Application, Implemented with a Google API',
      technologies: ['Python', 'Django', 'HTML', 'JavaScript', 'CSS'],
      image: '/meterologia.png',
      liveUrl: 'https://a22205060.pythonanywhere.com/meteo/lisboahoje/'
    },
    {
      title: 'Ronaldo App ⚽️ (Quite Simple)',
      description: 'Simple Biographical Website about Ronaldo, 100% Functional.',
      technologies: ['Python', 'Django', 'HTML', 'JavaScript', 'CSS'],
      image: '/ronaldo.png',
      liveUrl: 'https://a22205060.pythonanywhere.com/novaapp/biografia/'
    },
  ];
  
  return (
    <section id="projects" className="section bg-portfolio-light-gray">
      <div className="section-container">
        <SectionTitle 
          title="My Projects" 
          subtitle="Here are some of the projects I've worked on recently."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              className="reveal"
              // Add staggered animation delay based on index
              // style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
