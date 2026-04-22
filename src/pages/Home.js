import React from 'react';
import myProfilePic from '../assets/lakshay.jpeg';
import { Mail, Phone, GraduationCap, BookOpen, Cpu } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <img 
          src={myProfilePic} 
          alt="Lakshay Beesabathini" 
          className="w-40 h-40 rounded-2xl bg-indigo-50 border-4 border-indigo-100"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Lakshay Beesabathini</h1>
          <p className="text-indigo-600 font-medium mb-4">Artificial Intelligence Student @ Mahindra University</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
            <p className="flex items-center gap-2"><Phone size={16}/> +91 9100798144</p>
            <p className="flex items-center gap-2"><Mail size={16}/> lakshay1112b@gmail.com</p>
            <p className="flex items-center gap-2 font-semibold"><Mail size={16}/> se23uari019@mahindrauniversity.edu.in</p>
          </div>
        </div>
      </section>

      {/* Research & Education */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
            <BookOpen className="text-indigo-600" size={20}/> Research Interests
          </h2>
          <ul className="space-y-2 text-slate-600">
            <li>• Software Engineering</li>
            <li>• Deep Neural Networks</li>
            <li>• Natural Language Processing (NLP)</li>
            <li>• Game Theory</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
            <Cpu className="text-indigo-600" size={20}/> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Python', 'C', 'Java', 'HTML/CSS', 'JS', 'React', 'Git', 'SQL'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;