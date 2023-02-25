import membersData from './assets/members.json'

import './sass/App.scss'

function App() {
   const members = membersData.members
   console.log(members)
   const memberCards = members.map((member) => (
      <div className="member__card" key={member.id}>
         <p className="member__card__position">{member.position}</p>
         <div className='member__card__photo'>
            <img
               src={member.photo}
               alt={member.name}
               className="member__card__photo__img"
            />
            <figcaption className="member__card__photo_name">{member.name}</figcaption>
         </div>
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
         <div className="member">{memberCards}</div>
      </div>
   )
}

export default App
