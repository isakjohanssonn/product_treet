import React, { useState } from "react";

const GetDemographicsEHR = () => {
  const [person, setPerson] = useState(
    {

      Forsamling: "01",
      Efternamn: "Lindberg",
      Fornamn: "Linnea Maria",
      Postnummer: "58221",
      Kon: "Kvinna",
      Personnummer: "192011189228",
      Postort: "LINKÖPING",
      Tilltalsnamn: "Maria",
      Adress: "EHÄLSOMYNDIGHETENSGATA 1",
      Kommun: "80",
      Lan: "05",


      GameLevel: "3",
      Achievments: ["one", "two", "three"],
      TreeLevel: "3",

      Anhorig1: {
        Namn: "Jonas Sjöstedt",
        Telefon: "0701234567"
      },

      Anhorig2: {
        Namn: " Patrik Ekvall",
        Telefon: "031-1337"
      }
    }


  )
  



  return (person)


}

export default GetDemographicsEHR;
