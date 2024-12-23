const projects = [
    {
      title: 'E-commerce Furniture Shop',
      description:
        'A full-stack e-commerce platform designed to facilitate online furniture shopping. Built using the MERN stack, this project includes features like product catalogs, secure payment integration, and a responsive user interface for seamless shopping experiences.',
      image: 'https://blog.converted.in/hubfs/AR%20and%20VR%20Furniture%20eCommerce.webp',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      link: '/' // Replace with the actual link when available
    },
    {
      title: 'Calculator App',
      description:
        'A responsive and user-friendly calculator application developed using React. This project demonstrates reusable components, efficient state management, and a clean user interface design.',
      image: 'https://img.pikbest.com/png-images/accounting-calculator-icon--vector-graphics_1790151.png!sw800',
      tags: ['React', 'JavaScript', 'CSS'],
      link: 'https://calculator-app-one-amber.vercel.app/' // Replace with the actual link when available
    }
  ];
  
  
  export function Projects() {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="block group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }