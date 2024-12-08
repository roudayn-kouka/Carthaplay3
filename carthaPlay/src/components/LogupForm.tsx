import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Lock, Mail } from 'lucide-react';

interface LoginFormProps {
  role: 'teacher' | 'student';
}

export const LoginForm: React.FC<LoginFormProps> = ({ role }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName:'',
    SecondName:'',
    Email: '',
    Password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'teacher') {
      navigate('/teacher/dashboard');
    } else {
      navigate('/student/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="relative w-full max-w-md">
        {/* Floating shapes */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-12 left-12 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                {role === 'teacher' ? (
                  <GraduationCap className="w-12 h-12 text-white" />
                ) : (
                  <BookOpen className="w-12 h-12 text-white" />
                )}
              </div>
              <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Connexion {role === 'teacher' ? 'Enseignant' : 'Élève'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
                <input
                  type="name"
                  value={formData.FirstName}
                  onChange={(e) => setFormData({ ...formData, FirstName: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition-all duration-200"
                  placeholder="FirstName"
                  required
                />
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
                <input
                  type="name"
                  value={formData.SecondName}
                  onChange={(e) => setFormData({ ...formData, SecondName: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition-all duration-200"
                  placeholder="SecondName"
                  required
                />
              </div>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition-all duration-200"
                  placeholder="Adresse email"
                  required
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition-all duration-200"
                  placeholder="Mot de passe"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200"
              >
                créer 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};