"use client";

import React, { useState, useEffect, JSX } from 'react';
import {Layers, Cpu, Github, Twitter, Instagram, Code, TrendingUp, Play} from 'lucide-react';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): CountdownTime => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: CountdownTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const EsyaLandingPage: React.FC = () => {
  const targetDate = '2025-07-21T09:00:00'; 
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof CountdownTime;
    if (!timeLeft[key] && key !== 'seconds') return; 

    timerComponents.push(
      <div key={key} className="flex flex-col items-center mx-2 md:mx-4">
        <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-400">
          {timeLeft[key] < 10 && timeLeft[key] >= 0 ? `0${timeLeft[key]}` : timeLeft[key]}
        </span>
        <span className="text-sm md:text-lg lg:text-xl text-gray-300 uppercase mt-1">
          {key.slice(0, -1)}{key === 'days' ? '' : 's'}
        </span>
      </div>
    );
  });


  const speakers = [
    { name: 'Dr. Anya Sharma', title: 'AI Ethics Lead, QuantumLabs', image: 'avatar_1.png' },
    { name: 'Prof. Leo Chen', title: 'Chief Quantum Architect, NovaTech', image: '/avatar_2.png' },
    { name: 'Ms. Maya Singh', title: 'Cybersecurity Strategist, DefenSys', image: '/avatar_3.png' },
    { name: 'Mr. Alex Vance', title: 'Founder & CEO, Neural Innovations', image: '/avatar_4.png' },
  ];

  const partners = [
    'TechGiant Solutions', 'InnovateX Corp', 'Future Systems Inc.',
    'Global AI Hub', 'CyberGuard Nexus', 'Quantum Leap Labs',
    'Synergy Ventures', 'Digital Frontiers', 'NextGen Computing'
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white font-rajdhani overflow-hidden">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-blue-700 opacity-5 blur-3xl rounded-full animate-float-slow transform-gpu"></div>
        <div className="absolute bottom-1/3 right-[5%] w-80 h-80 bg-cyan-700 opacity-5 blur-3xl rounded-full animate-float-slow animation-delay-2000 transform-gpu"></div>
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-teal-500 opacity-[0.03] blur-3xl rounded-full animate-float-slower transform-gpu"></div>
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-500 opacity-[0.03] blur-3xl rounded-full animate-float-slower animation-delay-1000 transform-gpu"></div>

        <div className="absolute inset-0 bg-[length:100px_100px] opacity-[0.03] animate-streak-diag" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.01) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.01) 75%, rgba(255,255,255,0.01) 100%)',
        }}></div>
      </div>

      <nav className="relative z-20 flex justify-between items-center px-6 py-4 md:px-12 lg:px-20 backdrop-filter backdrop-blur-xl bg-gray-800 bg-opacity-10 border-b border-white border-opacity-10 shadow-lg">
        <div className="text-2xl font-bold font-orbitron text-white">
          ESYA <span className="text-cyan-400">25</span>
        </div>
        <ul className="flex space-x-6 md:space-x-10 text-lg">
          <li><a href="#home" className="hover:text-cyan-300 transition duration-300 relative group">Home<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a></li>
          <li><a href="#explore" className="hover:text-cyan-300 transition duration-300 relative group">Explore<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a></li>
          <li><a href="#speakers" className="hover:text-cyan-300 transition duration-300 relative group">Speakers<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a></li>
          <li><a href="#partners" className="hover:text-cyan-300 transition duration-300 relative group">Partners<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a></li>
          <li><a href="#contact" className="hover:text-cyan-300 transition duration-300 relative group">Contact<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span></a></li>
        </ul>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8 text-center">

        <section id="home" className="mb-20 pt-16 animate-fade-in-up">
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-orbitron leading-none text-gray-200"
              style={{ textShadow: '0 0 10px rgba(0,255,255,0.2), 0 0 20px rgba(0,255,255,0.1)' }}>
              ESYA <span className="text-cyan-400">25</span>
            </h1>
            <div className="absolute inset-x-0 bottom-[-10px] h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 opacity-50 blur-sm animate-underglow"></div>
          </div>

          <p className="text-xl md:text-3xl lg:text-4xl font-light text-gray-400 mt-6 font-rajdhani">
            Unleashing Tomorrow&apos;s Innovations
          </p>

          <div className="mt-12">
            <button
              className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-orbitron uppercase tracking-wide
              text-white border border-transparent rounded-full overflow-hidden
              bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-500 hover:via-cyan-400 hover:to-teal-300
              transition-all duration-500 ease-out transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                <Play className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" />
                Watch Teaser
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white group-hover:border-opacity-50 transition-all duration-300 ease-out"></span>
            </button>
          </div>
        </section>

        <section id="explore" className="w-full max-w-6xl mb-20 animate-fade-in-up animation-delay-500">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-orbitron text-gray-200"
              style={{ textShadow: '0 0 5px rgba(0,255,255,0.1), 0 0 10px rgba(0,255,255,0.05)' }}>
                Explore the Dimensions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="relative bg-gray-900 bg-opacity-50 rounded-lg p-6 border border-blue-700 overflow-hidden
                            shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-300 ease-out"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <Cpu className="h-16 w-16 text-blue-400 mb-4 animate-float-icon" />
                        <h3 className="text-2xl font-semibold mb-2 font-orbitron text-blue-300">Cognitive AI</h3>
                        <p className="text-gray-400 text-base font-rajdhani">Delve into the future of intelligent systems and advanced machine learning models.</p>
                    </div>
                </div>
                <div className="relative bg-gray-900 bg-opacity-50 rounded-lg p-6 border border-cyan-700 overflow-hidden
                            shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-cyan-500 rounded-lg transition-all duration-300 ease-out"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <Layers className="h-16 w-16 text-cyan-400 mb-4 animate-float-icon animation-delay-200" />
                        <h3 className="text-2xl font-semibold mb-2 font-orbitron text-cyan-300">Quantum Realms</h3>
                        <p className="text-gray-400 text-base font-rajdhani">Explore the principles and potential of next-generation computational paradigms.</p>
                    </div>
                </div>
                <div className="relative bg-gray-900 bg-opacity-50 rounded-lg p-6 border border-teal-700 overflow-hidden
                            shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-teal-500 rounded-lg transition-all duration-300 ease-out"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <Code className="h-16 w-16 text-teal-400 mb-4 animate-float-icon animation-delay-400" />
                        <h3 className="text-2xl font-semibold mb-2 font-orbitron text-teal-300">Secure Architectures</h3>
                        <p className="text-gray-400 text-base font-rajdhani">Understand the critical challenges and solutions in safeguarding digital ecosystems.</p>
                    </div>
                </div>
                <div className="relative bg-gray-900 bg-opacity-50 rounded-lg p-6 border border-emerald-700 overflow-hidden
                            shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-emerald-500 rounded-lg transition-all duration-300 ease-out"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <TrendingUp className="h-16 w-16 text-emerald-400 mb-4 animate-float-icon animation-delay-600" />
                        <h3 className="text-2xl font-semibold mb-2 font-orbitron text-emerald-300">Tech Frontiers</h3>
                        <p className="text-gray-400 text-base font-rajdhani">Spotlight on disruptive innovations and the startups shaping tomorrow&apos;s landscape.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="speakers" className="w-full max-w-6xl mb-20 animate-fade-in-up animation-delay-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-orbitron text-gray-200"
              style={{ textShadow: '0 0 5px rgba(0,255,255,0.1), 0 0 10px rgba(0,255,255,0.05)' }}>
                Distinguished Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {speakers.map((speaker, index) => (
                    <div key={index} className="relative bg-gray-900 bg-opacity-50 rounded-lg p-6 border border-gray-700 overflow-hidden
                                shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                        <div className="absolute inset-0 border-4 border-transparent group-hover:border-cyan-500 rounded-lg transition-all duration-300 ease-out"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <img src={speaker.image} alt={speaker.name} className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-cyan-500 group-hover:border-blue-400 transition-colors duration-300" />
                            <h3 className="text-xl font-semibold mb-1 font-orbitron text-white">{speaker.name}</h3>
                            <p className="text-gray-400 text-sm font-rajdhani">{speaker.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12">
                <button className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-orbitron uppercase tracking-wide
                  text-white border border-transparent rounded-full overflow-hidden
                  bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-500 hover:via-cyan-400 hover:to-teal-300
                  transition-all duration-500 ease-out transform hover:scale-105">
                    <span className="relative z-10">View All Speakers</span>
                    <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white group-hover:border-opacity-50 transition-all duration-300 ease-out"></span>
                </button>
            </div>
        </section>

        <section id="partners" className="w-full mb-20 animate-fade-in-up animation-delay-900">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-orbitron text-gray-200"
              style={{ textShadow: '0 0 5px rgba(0,255,255,0.1), 0 0 10px rgba(0,255,255,0.05)' }}>
                Our Valued Partners
            </h2>
            <div className="relative w-full overflow-hidden py-4 bg-gray-900 bg-opacity-70 rounded-lg border border-cyan-700 shadow-xl">
                <div className="flex animate-marquee whitespace-nowrap">
                    {partners.concat(partners).map((partner, index) => (
                        <span key={index} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500 mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300 font-orbitron flex-shrink-0"
                            style={{ textShadow: '0 0 5px rgba(0,255,255,0.05)' }}>
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>

        <section id="venue" className="w-full max-w-4xl mb-20 animate-fade-in-up animation-delay-1100">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-orbitron text-gray-200"
              style={{ textShadow: '0 0 5px rgba(0,255,255,0.1), 0 0 10px rgba(0,255,255,0.05)' }}>
                The Hub of Innovation
            </h2>
            <div className="relative bg-gray-900 bg-opacity-70 rounded-lg p-8 border border-blue-700 shadow-xl">
                <p className="text-lg text-gray-300 mb-6 font-rajdhani">
                    ESYA &apos;25 will take place at the state-of-the-art **Innovation Center Auditorium**,
                    a premier venue designed for immersive experiences and groundbreaking discussions.
                    Prepare to be inspired in an environment fostering collaboration and technological advancement.
                </p>
                <div className="w-full h-64 bg-gray-800 rounded-md flex items-center justify-center text-gray-500 text-xl border border-gray-700">
                    [Interactive Map / Venue Visual Coming Soon]
                </div>
                <button className="mt-8 group relative inline-flex items-center justify-center px-6 py-3 text-lg font-orbitron uppercase tracking-wide
                  text-white border border-transparent rounded-full overflow-hidden
                  bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-500 hover:via-cyan-400 hover:to-teal-300
                  transition-all duration-500 ease-out transform hover:scale-105">
                    <span className="relative z-10">Get Directions</span>
                    <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white group-hover:border-opacity-50 transition-all duration-300 ease-out"></span>
                </button>
            </div>
        </section>

        <section className="w-full max-w-2xl bg-gray-900 bg-opacity-70 rounded-lg p-6 border border-blue-700 shadow-xl animate-fade-in-up animation-delay-1300">
          <h3 className="text-2xl font-bold mb-4 text-blue-300 font-orbitron">Initiation Sequence in:</h3>
          <div className="flex justify-center flex-wrap">
              {timerComponents.length ? timerComponents : <span className="text-2xl text-white font-orbitron">ESYA &apos;25 is LIVE!</span>}
          </div>
        </section>

      </main>

      <footer id="contact" className="relative z-20 w-full pt-8 pb-4 text-gray-500 text-sm text-center font-rajdhani border-t border-gray-800 bg-gray-900 bg-opacity-30 mt-16">
        <p className="mb-4">&copy; {new Date().getFullYear()} ESYA &apos;25. IIIT Delhi. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-xl">
            <a href="https://github.com/iiitd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <Github className="h-7 w-7" />
            </a>
            <a href="https://twitter.com/iiitdelhi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                <Twitter className="h-7 w-7" />
            </a>
            <a href="https://instagram.com/iiitdelhi" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">
                <Instagram className="h-7 w-7" />
            </a>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }

        @keyframes underglow {
            0% { transform: scaleX(0); opacity: 0.5; }
            50% { transform: scaleX(1); opacity: 0.7; }
            100% { transform: scaleX(0); opacity: 0.5; }
        }
        .animate-underglow {
            animation: underglow 3s cubic-bezier(0.65, 0, 0.35, 1) infinite alternate;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(5%, 10%); }
          50% { transform: translate(10%, 0%); }
          75% { transform: translate(5%, -10%); }
        }
        @keyframes float-slower {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-7%, 8%) scale(1.05); }
            66% { transform: translate(7%, -8%) scale(0.95); }
        }

        @keyframes streak-diag {
            from { background-position: 0 0; }
            to { background-position: 100px 100px; }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        @keyframes float-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite; /* Adjust duration for speed */
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1100 { animation-delay: 1.1s; }
        .animation-delay-1300 { animation-delay: 1.3s; }
        .animation-delay-2000 { animation-delay: 2s; }

        .glow-effect {
          box-shadow: 0 0 10px rgba(0,198,255,0.5), inset 0 0 5px rgba(0,198,255,0.3);
        }
      `}</style>
    </div>
  );
};

export default EsyaLandingPage;
