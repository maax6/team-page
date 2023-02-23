import membersData from './assets/members.json'
import './sass/App.scss'

function App() {
   const members = membersData.members;
   console.log(members);
   const memberCards = members.map((member, index) => (
      <div className="member-card" key={index}>
         <p className="member-card__position">{member.position}</p>
         <img
            src={member.photo}
            alt={member.name}
            className="member-card__photo"
         />
         <figcaption className="member-card__name">{member.name}</figcaption>
      </div>
   ))
   
   return (
      <div className="App">
         <header className="header">
            <h1
               className="header__h1"
               style={{ fontFamily: 'PT Serif', color: '#000000' }}
            >
               The creative crew
            </h1>
            <div className="header__texts">
               <h3
                  className="header__texts__h3"
                  style={{ fontFamily: 'Poppins' }}
               >
                  WHO WE ARE
               </h3>
               <p className="header__texts__p">
                  We are team of creatively diverse. driven. innovative
                  individuals working in various locations from the world.
               </p>
            </div>
         </header>
         <div className="member-cards">{memberCards}</div>
      </div>
   )
}

export default App
