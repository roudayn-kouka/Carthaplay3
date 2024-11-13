import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, GraduationCap, Target } from 'lucide-react';

export const StudentDashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subject: '',
    teacher: '',
    lesson: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/student/games');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Trouvez votre jeu éducatif
          </span>
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <BookOpen className="absolute left-3 top-[2.1rem] transform w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Matière
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition-all duration-200"
                required
              >
                <option value="">Sélectionner une matière</option>
                <option value="math">Mathématiques</option>
                <option value="french">Français</option>
                <option value="science">Sciences</option>
              </select>
            </div>

            <div className="relative group">
              <GraduationCap className="absolute left-3 top-[2.1rem] transform w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enseignant
              </label>
              <input
                type="text"
                value={formData.teacher}
                onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition-all duration-200"
                placeholder="Nom de l'enseignant"
                required
              />
            </div>

            <div className="relative group">
              <Target className="absolute left-3 top-[2.1rem] transform w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Leçon
              </label>
              <input
                type="text"
                value={formData.lesson}
                onChange={(e) => setFormData({ ...formData, lesson: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-200 transition-all duration-200"
                placeholder="Titre de la leçon"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200"
            >
              Rechercher des jeux
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};