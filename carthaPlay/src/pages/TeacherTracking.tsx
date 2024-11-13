import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, ChevronRight } from 'lucide-react';

interface Class {
  id: string;
  name: string;
  level: string;
  studentsCount: number;
}

export const TeacherTracking = () => {
  const navigate = useNavigate();
  const [classes] = useState<Class[]>([
    { id: '1', name: '4A', level: '4ème année', studentsCount: 25 },
    { id: '2', name: '4B', level: '4ème année', studentsCount: 23 },
    { id: '3', name: '5A', level: '5ème année', studentsCount: 24 },
    { id: '4', name: '5B', level: '5ème année', studentsCount: 22 },
    { id: '5', name: '6A', level: '6ème année', studentsCount: 26 },
    { id: '6', name: '6B', level: '6ème année', studentsCount: 25 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Suivi des classes
          </span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <button
              key={classItem.id}
              onClick={() => navigate(`/teacher/tracking/${classItem.id}`)}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-[1.02] text-left"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Classe {classItem.name}
                  </h3>
                  <p className="text-sm text-gray-600">{classItem.level}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {classItem.studentsCount} élèves
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};