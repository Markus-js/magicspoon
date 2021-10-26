import { useState } from "react"
import type { GetServerSidePropsContext, NextPage } from 'next'
import { varients } from "../data"

interface IProducts {
  name: string;
  color: string;
}

const Home: NextPage = () => {

  const [pickedProduct, setPickedProduct] = useState(varients.items[0])
  console.log(pickedProduct)


  const handleVarient = (v: any) => {
    setPickedProduct(v)
  }
  const handleHover = (e: any, color: string) => {
    e.target.style.background = color;
  }

  return (
    <div style={{ background: pickedProduct }}>
      <ul>
        {varients.items.map((varient: IProducts, idx: number) => {
          let category = ""
          if (idx === 0) {
            category += "VARIETY PACKS"

          }
          if (idx === 3) {
            category += "CLASSIC FLAVORS"
          }
          return (
            <div key={idx}>
              {category && <h2>{category}</h2>}
              <button
                key={idx}
                onClick={() => handleVarient(varient)}
                onMouseOver={(e) => handleHover(e, varient.color)}
                onMouseLeave={(e) => handleHover(e, "white")}

              >
                {varient.name}
              </button>
            </div>

          )
        })}
      </ul>


    </div>
  )
}

export default Home




// export const getServerSideProps = async (context: GetServerSidePropsContext) => {

//   const res = await fetch("http://localhost:3000/api/varients")
//   const data = await res.json()


//   // console.log("SERVER", data)
//   // Tilpas props til endpoint
//   return {


//     // !!!!!!!! Brug den her istedet 
//     // props: {
//     //   hytter: data
//     // } 


//     //Endpoint => props:hytter => Home(hytter)
//     props: {
//       varients: data.varients
//     }


//   }
// }