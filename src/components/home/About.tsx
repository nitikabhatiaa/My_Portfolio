import React from 'react';
import { Award, Monitor, Code, Palette } from 'lucide-react';
import resumeFile from './resume.pdf';


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
          Hi! I’m a Machine Learning Engineer who loves transforming raw data into actionable insights and intelligent solutions. I specialize in building and deploying ML models that are scalable, efficient, and ready for real-world impact. My work spans across data preprocessing, model training, evaluation, and production deployment.</p>
            
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH06OhXv7JcYetZRtHfBF2Fmkv-jYMctgMHQ&s" 
              alt="About Nitika Bhatia" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
            As an ML Engineer, I design and deploy scalable machine learning systems and data-driven applications that address real-world challenges, turning complex data into actionable insights.
            </h3>
            <p className="text-gray-600 mb-6">
              Currently pursuing B.Tech in Computer Science at Lovely Professional University, I have gained extensive experience in Machine learning through various internships and projects.My work spans across data preprocessing, model training, evaluation, and production deployment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg transition-transform hover:scale-105">
                <Monitor className="text-blue-600 mb-2" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Machine Learning Development</h4>
                <p className="text-gray-600 text-sm">
                Building and deploying scalable machine learning models using Python, TensorFlow, and scikit-learn
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg transition-transform hover:scale-105">
                <Code className="text-blue-600 mb-2" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Data Engineering</h4>
                <p className="text-gray-600 text-sm">
                Processing and managing large datasets with Pandas, NumPy, and SQL
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg transition-transform hover:scale-105">
                <Palette className="text-blue-600 mb-2" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Database Management</h4>
                <p className="text-gray-600 text-sm">
                  Working with MySQL databases
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg transition-transform hover:scale-105">
                <Award className="text-blue-600 mb-2" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Problem Solving</h4>
                <p className="text-gray-600 text-sm">
                  Strong analytical and debugging skills
                </p>
              </div>
            </div>
            
            <a 
  href={resumeFile} 
  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
  target="_blank" 
  rel="noopener noreferrer"
>
  Download Resume
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;