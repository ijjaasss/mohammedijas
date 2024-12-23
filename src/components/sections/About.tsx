export function About() {
    return (
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="images/myimage.jpeg"
              alt="Profile picture of Mohammed Ijas K P, Fullstack Developer"
              className="w-48 h-48 rounded-full object-cover"
            />
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                My name is Mohammed Ijas K P, and I am a passionate Fullstack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).
                With 1 year of professional experience at Bridgeon Solution, I have honed my skills in creating dynamic and user-friendly web applications. I have worked on impactful projects such as an e-commerce furniture shop, where I utilized the MERN stack to build a robust platform with secure payment integration and a seamless user interface.
              </p>
              <p>
                Additionally, I developed a responsive calculator project using React.js, showcasing my ability to design reusable components and modern user experiences. I am committed to learning, growing, and contributing to innovative solutions in the field of web development.
              </p>
             
             
            </div>
          </div>
        </div>
      </section>
    );
  }
  