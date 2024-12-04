import React, { useState } from 'react'


function Header({profile}){
   return <h1 className='text-teal-300 mb-2 font-semibold'>{profile.name}</h1>
}

function Avatar({profile}){
    return(
        <div className='h-[320px] w-[350px] '>
            <img 
           className='rounded-lg h-full w-full' 
           src={profile.url} 
           alt={profile.name}
            />
            <h2 className='text-green-600 mt-2'>{`Profession: `+profile.profession}</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Cum doloremque iusto sapiente cumque harum aspernatur ut 
                dicta vero? Consequuntur non itaque harum facilis dolore 
                mollitia illo perferendis omnis ex iure.</p>
        </div>
    );
}

const Profile = ({profile}) => {

    const [profileOpen,setProfileOpen] = useState(false);

  return (
    <div className="border border-white bg-gray-800 p-4 rounded-lg ">
         <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className="border-2
                        rounded-lg
                        border-blue-500
                        bg-slate-500
                        font-bold
                        px-2
                        mb-4
                        " 
                    >{profileOpen?'Collapse':'Expand'}</button>
          {profileOpen?(
            <>
             <Header profile={profile} />
             <Avatar profile={profile} />
            </>
          ):null}
    </div>
  )
}

export default Profile
