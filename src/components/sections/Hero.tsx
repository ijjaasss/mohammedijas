import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="min-h-screen relative flex items-center justify-center bg-gray-50 dark:bg-gray-900 bg-cover bg-center sm:bg-right"
      style={{ backgroundImage: "url('images/backgroundimage.png')" }} // Replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="text-center z-10">
        {/* Hollow Text */}
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mohammed Ijas</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Full Stack Developer
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/ijjaasss"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://linkedin.com/in/mohammed-ijas-k-p-97a22a322"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="mailto:ijasmuthu04@gmail.com"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
