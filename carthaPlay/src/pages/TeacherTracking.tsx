import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, ChevronRight, Plus } from 'lucide-react';
import { CreateClassForm } from '../components/CreateClassForm';

interface Class {
  id: string;
  name: string;
  level: string;
  studentsCount: number;
}

export const TeacherTracking = () => {
  const navigate = useNavigate();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [classes, setClasses] = useState<Class[]>([
    { id: '1', name: '4A', level: 'group 1', studentsCount: 25 },
    { id: '2', name: '5A', level: 'group 2', studentsCount: 24 },
    { id: '3', name: '6A', level: 'group 3', studentsCount: 26 },
  ]);

  const handleCreateClass = (classData: any) => {
    const newClass = {
      id: (classes.length + 1).toString(),
      name: classData.name,
      level: `${classData.level}ème année`,
      studentsCount: parseInt(classData.capacity),
    };
    setClasses([...classes, newClass]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Suivi des classes
            </span>
          </h1>
          <button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors duration-200"
          >
            <Plus className="h-5 w-5" />
            <span>Créer une classe</span>
          </button>
        </div>

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

        {showCreateForm && (
          <CreateClassForm
            onClose={() => setShowCreateForm(false)}
            onSubmit={handleCreateClass}
          />
        )}
      </div>
    </div>
  );
};
