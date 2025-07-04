import React from 'react';

interface School {
  name: string;
  logo: string;
}

const CertifiedSchools: React.FC = () => {
  const schools: School[] = [
    { name: 'Harvard', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
    { name: 'MIT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
    { name: 'Stanford', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
    { name: 'Oxford', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
    { name: 'Cambridge', logo: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Cambridge_University_Coat_of_Arms.svghttps://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
    { name: 'Yale', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
    { name: 'Princeton', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
    { name: 'Columbia', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
  ];

  return (
    <section id="schools" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certified Schools
          </h2>
          <p className="text-xl text-gray-600">
            Proud to work with these outstanding educational institutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 gap-y-6 items-center">
          {schools.map((school, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              <img
                src={school.logo}
                alt={school.name}
                className="max-w-[90px] md:max-w-[120px] h-auto mx-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedSchools;