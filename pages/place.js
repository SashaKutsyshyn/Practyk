import Place from '../components/Place'


const placeMoreEx = {
      name:"Червоногородський замок",
      infoLong:"Поруч із Джуринський водоспадом розташовані руїни Червоногородського замку. Оборонна споруда біля зниклого колишнього міста Червоногорода, у першій половині XIX ст. Перебудована на палац.",
      region: "Тернопільська область",
      adress: "Нирків",
      geo: {let:48.805047473193255, lng: 25.587791198750157}
    }

const Placepage = ({place, placeMore=placeMoreEx}) =>{
  return (
    <div>
          <Place place={place} placeMore={placeMore}/>
    </div>
  )
}

Placepage.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/places/628118834e3c660f7eefe2e9');
  const { data } = await res.json();

  return { place: data }
}






export default Placepage;