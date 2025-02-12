import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { 
  Code, 
  Database, 
  Server, 
  Laptop, 
  GitBranch, 
  Box, 
  Figma,
  Calendar,
  Award,
  ExternalLink,
  Codepen,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  Brain,
  FileJson2,
  IdCard,
  Atom,
  Instagram,
  Moon, Sun,
  Send,
  User,
  Mail,
  MessageCircle  
} from 'lucide-react';
import resume from '/Portfolio/src/assets/resume.pdf';
import profile from '/Portfolio/src/assets/profile.jpg';



const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Creating refs for each section for smooth scrolling
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    certifications: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId].current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };


  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'];

  const skills = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'React', icon: <Atom className="w-5 h-5" /> },
        { name: 'TypeScript', icon: <Codepen className="w-5 h-5" /> },
        { name: 'Tailwind CSS', icon: <Laptop className="w-5 h-5" /> },
        { name: 'Next.js', icon: <Box className="w-5 h-5" /> }
      ] 
    },

    { 
      category: 'Backend', 
      items: [
        { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
        { name: 'Python', icon: <Code className="w-5 h-5" /> },
        { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
        { name: 'AWS', icon: <Box className="w-5 h-5" /> }
      ] 
    },
    { 
      category: 'Tools', 
      items: [
        { name: 'Git', icon: <GitBranch className="w-5 h-5" /> },
        { name: 'Docker', icon: <Box className="w-5 h-5" /> },
        { name: 'Figma', icon: <Figma className="w-5 h-5" /> },
        { name: 'VS Code', icon: <Laptop className="w-5 h-5" /> }
      ] 
    }
  ];

  const certifications = [
    {
      name: "React Bootcamp",
      issuer: "Letsupgrade",
      date: "2025",
      credentialId: "LUERJSFEB125946",
      link: "assets/certificates/React.png",
      icon: <Atom className="w-6 h-6" />
    },
    {
      name: "Python Bootcamp",
      issuer: "Letsupgrade",
      date: "2025",
      credentialId: "LUEPYTJAN1252608",
      link: "assets/certificates/Python.png",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "SQL Bootcamp",
      issuer: "Letsupgrade",
      date: "2025",
      credentialId: "LUESQLJAN125686",
      link: "assets/certificates/SQL.png",
      icon: <Database className="w-6 h-6" />
    },
    {
      name: "HTML & CSS Bootcamp",
      issuer: "Letsupgrade",
      date: "2025",
      credentialId: "LUEHTMLJAN1253046",
      link: "assets/certificates/HTML.png",
      icon: <FileJson2 className="w-6 h-6" />
    },
    {
      name: "Prompt Engineering Bootcamp",
      issuer: "Letsupgrade",
      date: "2024",
      credentialId: "LUEPEJUL124330",
      link: "assets/certificates/Prompt.png",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const projects = [
    {
      title: 'Weather App',
      description: 'A full-stack Weather App built with React and vite using open weather API',
      technologies: ['React', 'API', 'Vite'],
      github: 'https://github.com/Saurabh-shukla1/WeatherApp',
      live: 'https://weather-app-one-navy-81.vercel.app/'
    },
    {
      title: 'PresentationPilot',
      description: 'A geture controlled presentation app built with Flask and OpenCV',
      technologies: ['HTML/CSS/JS', 'Flask', 'Firebase'],
      github: 'https://github.com/Saurabh-shukla1/PresentationPilot',
      live: 'https://presentationpilot.onrender.com'
    }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full shadow-sm z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              Portfolio
            </span>
           
             
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-600 hover:text-gray-900 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href={resume}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                download
              >
                Resume
              </a>
              {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className={`px-3 py-1 rounded-2xl ${
                isDarkMode 
                  ? 'bg-gray-700 text-yellow-400' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden px-2 py-1 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  {item}
                </button>
                
              ))}
              <a
                href="/public/assets/resume.pdf"
                className="block w-full text-left px-3 py-2 text-blue-600 hover:text-blue-700"
                download
              >
                Download Resume
              </a>
              {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className={`px-3 py-1 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-700 text-yellow-400' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            </div>
            
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section 
          ref={sectionRefs.home}
          className={`min-h-screen flex items-center justify-center transition-opacity duration-1000 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} ${
            isVisible ? 'opacity-100' : 'opacity-0'
            
          }`}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hello, I'm <span className="text-blue-600">Saurabh Shukla</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full Stack Developer | UI/UX Enthusiast | Problem Solver | Data Science Enthusiast
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/Saurabh-shukla1" className="text-gray-600 hover:text-gray-900 px-4 py-2">
             <GithubIcon className="w-5 h-5" />Github
              </a>
              <a href="https://www.linkedin.com/in/saurabh-shukla-a459b7256/" className="text-gray-600 hover:text-gray-900 px-4 py-2">
              <LinkedinIcon className="w-5 h-5" />Linkedin
              </a>
              <a href="https://www.linkedin.com/in/saurabh-shukla-a459b7256/" className="text-gray-600 hover:text-gray-900 px-4 py-2">
              <Instagram className="w-5 h-5" />Instagram
              </a>
              <a href="SaurabhShukla6392@gmail.com" className="text-gray-600 hover:text-gray-900 px-4 py-2">
                <MailIcon className="w-5 h-5" />Mail
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={sectionRefs.about} className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}" >About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={profile}
                  alt="Profile"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className={`text-gray-600 mb-6  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                I am a passionate and detail-oriented BSc IT graduate with a strong foundation in Data Science, Machine Learning, and Generative AI. My expertise includes exploratory data analysis (EDA), machine learning models, and data-driven decision-making. I have hands-on experience working with React, Vite, and Firebase etc. for web development.
                </p>
                <p className={`text-gray-600 mb-6  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  I'm passionate about solving complex problems and creating intuitive user 
                  experiences. My approach combines technical expertise with creative 
                  problem-solving to deliver high-quality solutions.
                </p>
                <p className={`text-gray-600 mb-6  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                I enjoy solving complex problems and continuously learning new technologies to 
                enhance my skills. Currently, I am seeking opportunities where I can apply my
                 knowledge, collaborate with a dynamic team, and contribute to impactful
                  projects.
                </p>
                
                <p className={`text-gray-600 mb-6  ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                Let’s connect and create something amazing together!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}

        <section ref={sectionRefs.skills} className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-gray-100' : ''}`}>
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map(({ category, items }) => (
                <div 
                  key={category}
                  className={`p-6 rounded-lg hover:shadow-lg transition-shadow ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                      : 'bg-gray-50 hover:shadow-lg'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <div
                        key={item.name}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                          isDarkMode 
                            ? 'bg-gray-600 text-gray-200' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {item.icon}
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={sectionRefs.projects} className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-gray-100' : ''}`}>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map(project => (
                <div
                  key={project.title}
                  className={`p-6 rounded-lg hover:shadow-lg transition-shadow ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-200 ' 
                      : 'bg-gray-50'
                  }`}
                >
                  <h3 
                  className={`text-xl font-semibold mb-2 ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-200' 
                      : 'bg-gray-50'
                  }`}>{project.title}</h3>
                  <p 
                  className={`${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-200' 
                      : 'bg-gray-50'
                  }`}
                  >{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-gray-600 hover:text-blue-900 "
                    >
                      View Code →
                    </a>
                    <a
                      href={project.live}
                      className="text-gray-600 hover:text-blue-900 "
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Certifications Section */}
        <section ref={sectionRefs.certifications} className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-gray-100' : ''}`}>
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <div
                  key={cert.credentialId}
                  className={`p-6 rounded-lg transition-shadow hover:shadow-xl ${
                    isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-2 rounded-full ${
                      isDarkMode ? 'bg-gray-600' : 'bg-blue-100'
                    }`}>
                      {cert.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className={`flex items-center gap-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <Award className="w-4 h-4" />
                      {cert.issuer}
                    </p>
                    <p className={`flex items-center gap-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </p>
                    <p className={`flex items-center gap-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <IdCard className="w-4 h-4" />
                      {cert.credentialId}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 mt-4 ${
                        isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      Verify Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        
        {/* Contact Section */}
        <section ref={sectionRefs.contact} className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-gray-100' : ''}`}>
            Get In Touch
          </h2>
          <form 
            onSubmit={handleSubmit}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <input 
              type="hidden" 
              name="access_key" 
              value="b867992d-90bf-4687-b6cb-24af4647fc19" 
            />

            <div>
              <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <User className="inline-block mr-2 w-5 h-5" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 text-gray-200 border-gray-600' 
                    : 'bg-white border-gray-300'
                } focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Mail className="inline-block mr-2 w-5 h-5" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 text-gray-200 border-gray-600' 
                    : 'bg-white border-gray-300'
                } focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <MessageCircle className="inline-block mr-2 w-5 h-5" />
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 text-gray-200 border-gray-600' 
                    : 'bg-white border-gray-300'
                } focus:ring-2 focus:ring-blue-500`}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 ${
                isDarkMode 
                  ? 'bg-blue-700 text-white hover:bg-blue-600' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } transition-colors`}
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </section>
               

      </main>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-900 text-white'} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Saurabh ❤️. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
