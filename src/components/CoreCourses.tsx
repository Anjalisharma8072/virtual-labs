import React from 'react';

interface CoreCoursesProps {
  darkMode: boolean;
}

const CoreCourses: React.FC<CoreCoursesProps> = ({ darkMode }) => {
  const courses = [
    {
      title: "General Knowledge and Current affairs",
      description: "Helps in enhancing the academic level of students in many areas and also establish a connection of the student with the world."
    },
    {
      title: "Work Experience Courses",
      description: "A number of WECs are offered from which they can pick one of their choices."
    },
    {
      title: "Co-curricular Activities",
      description: "Cultural & Literary activities, Games and Sports, and Discipline are a compulsory part of the curriculum for the all-round development of the personality of each individual student."
    }
  ];

  return (
    <section id="courses" className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Core Courses in Faculty of Engineering
        </h2>
        <p className="text-center mb-12 text-gray-500 dark:text-gray-400">
          Comprehensive courses designed for holistic development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-xl ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } transform transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-500`}
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {course.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCourses;