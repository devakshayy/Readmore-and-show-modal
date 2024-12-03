import React, { useState } from 'react';

function Header({ person }) {
  return <h1 className="text-teal-300 mb-2 font-semibold">{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <div className="h-[320px] w-[350px]">
      <img
        className="rounded-lg h-full w-full"
        src={person.url}
        alt={person.name}
      />
      <p className="text-white p-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum doloremque
        iusto sapiente cumque harum aspernatur ut dicta vero? Consequuntur non
        itaque harum facilis dolore mollitia illo perferendis omnis ex iure.
      </p>
    </div>
  );
}

const Profile = ({ person }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-white bg-gray-800 p-4 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-2 rounded-lg border-blue-500 bg-slate-500 font-bold px-2 mb-4"
      >
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      {isOpen && (
        <>
          <Header person={person} />
          <Avatar person={person} />
        </>
      )}
    </div>
  );
};

function App() {
  const profiles = [
    {
      name: 'Arnold Pitambaran',
      url: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp',
    },
    {
      name: 'Albert Shibu',
      url: 'https://www.isme.in/wp-content/uploads/2017/12/instructor4.jpg',
    },
    {
      name: 'Arnold Pitambaran',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHvxVgtGqrVGGf2LV8KrkfdEMmudzlVXH_7oxnIvkpy_6y0vdrjPE8wjUYUfQkIM_Q1g&usqp=CAU',
    },
    {
      name: 'Arnold Pitambaran',
      url: 'https://limitlesspotentialsc.com/wp-content/uploads/2022/12/testimonial1.jpg',
    },
  ];

  return (
    <div className="flex min-h-screen">
      {profiles.map((profile, index) => (
        <Profile key={index} person={profile} />
      ))}
    </div>
  );
}

export default App;