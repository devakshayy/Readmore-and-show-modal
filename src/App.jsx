import ReadMore from './components/ReadMore'
import Profile from './components/Profile'

function App() {

   const profiles = [
    {
      name:'Arnold Pitambaran',
      profession:'Doctor',
      url:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp'
    },
    {
       name:'Devayani Valiyedath',
       url:'https://www.isme.in/wp-content/uploads/2017/12/instructor4.jpg',
       profession:'Scientist',
    },
    {
       name:'Jonny Suku',
       url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHvxVgtGqrVGGf2LV8KrkfdEMmudzlVXH_7oxnIvkpy_6y0vdrjPE8wjUYUfQkIM_Q1g&usqp=CAU',
       profession:'Teacher',
      },
    {
       name:'Natasha Kizkedath',
       url:'https://limitlesspotentialsc.com/wp-content/uploads/2022/12/testimonial1.jpg',
       profession:'Engineer',
    },
   ];
  
    return(
      <>
        <ReadMore/>
        <div className='flex min-h-screen'>
           {profiles.map((profile,index) => (
             <Profile key={index} profile={profile}/>
           ))}
        </div>
      </>
    )
  
}

export default App



