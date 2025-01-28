import React from 'react';
import image from "../logo/image.png";
const HiringServices: React.FC = () => {
  const team = [
    "Mr. Ajay Kant Upadhyay", "Ms. Shivangi Gupta", "Mr. Anand Swarup Chandrakar",
    "Mr. Dinesh Kumar Verma", "Mr. Sumit Sharma", "Mr. Hritiv Gupta",
    "Mr. Tapish Raj", "Mr. Aman Sharma", "Mr. Lakshya Bhardwaj",
    "Mr. Arpit Kumar", "Mr. Varun Shrivastav", "Mr. Nivesh Mishra",
    "Ms. Kanishka Pathik", "Ms. Sania Verma", "Mr. Shreshta Mittal",
    "Mr. Anuj Tripathi", "Ms. Yashi Agrawal", "Ms. Mansi Singhal",
    "Mr. Shyamendra Singh", "Mr. Nihalsarandas Duggirala", "Mr. Vageesh Amoriya",
    "Ms. Nidhi Tyagi", "Mr. Harsh Pathak", "Mr. Praveen Kumar",
    "Mr. Kanhiya Lal", "Mr. Sajal Satsangi", "Mr. Ansh Mathur",
    "Ms. Shinu Pachauri", "Ms. Ana Rehman", "Mr. Priyam Pratap Singh",
    "Mr. A. Gurucharan", "Mr. Varun Pal Singh", "Mr. Ashutosh Singh Chauhan",
    "Mr. Abhishek Toofani", "Mr. Sarth Gupta", "Mr. Nitin Parmar",
    "Ms. Aysha", "Mr. Prateek Dubey", "Mr. Himanshu Bansal",
    "Mr. Mohit Yadav", "Mr. Ashutosh Sharma", "Ms. Niharika",
    "Mr. Aditya Vardhan", "Ms. Saloni Upadhyay", "Mr. Shubham Kumar",
    "Mr. Amol Satsangi", "Mr. Vishal Sharma", "Mr. Deepak Kumar",
    "Ms. Shaurya Jain", "Mr. Akash Kumar"
  ];

  return (
    <section id="hiring" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Hiring Services for Virtual Lab Phase-III Extended
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <p className="text-center font-medium text-gray-800">{member}</p>
            </div>
          ))}
        </div>
        <img src={image} alt='imageee'></img>
      </div>

    </section>
  );
};

export default HiringServices;