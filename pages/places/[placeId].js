import Image from 'next/image'
import Place from '../../components/Place'

const placeEx = {name:"Червоногородський замок",
infoShort: "Оборонна споруда біля зниклого колишнього міста Червоногорода, у першій половині XIX ст. Перебудована на палац. ",
mainPhoto: "https://upload.wikimedia.org/wikipedia/commons/0/08/Chervonohorod_chateu_ruins_Far.jpg",
region: "Тернопільська область",
area: "Чортківський район"
    }
const placeMoreEx = {
      name:"Червоногородський замок",
      infoLong:"Поруч із Джуринський водоспадом розташовані руїни Червоногородського замку. Оборонна споруда біля зниклого колишнього міста Червоногорода, у першій половині XIX ст. Перебудована на палац.",
      region: "Тернопільська область",
      adress: "Нирків",
      geo: {let:48.805047473193255, lng: 25.587791198750157}
    }

export default function Placepage ({place=placeEx, placeMore=placeMoreEx}){
  return (
    <div>
          <Place place={place} placeMore={placeMore}/>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const placeId = params.placeId;
  const place = await fetch(`http://localhost:3000/api/places/${placeId}`)
  const { data } = await place.json();
  return {
    props: {
      place: data
    }
  }
}

export const getStaticPaths = async (context) => {
  const places = await fetch(`http://localhost:3000/api/places`)
  const { data } = await places.json();
  return {
    paths: data.map(place => {
      const placeId = place._id;
      return {
        params: {
        placeId
        }
      }
    }),
    fallback: false
  }
}