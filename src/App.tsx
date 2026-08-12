import { useEffect, useState } from 'react'
import './App.css'

import Grid from '@mui/material/Grid2'
import DishTable from './components/DishTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz - Creada
import { type Dish } from './interface/Dish'


function App() {

  const [data, setData] = useState<Dish[]>([])

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"

  // PENDIENTE: Variable de estado y la función de modificación. 


  //Requerimiento con Cadena de promesas
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])




  return (
    <Grid container spacing={5}>

      {/* Student */}
      <Grid size={{ xs: 12 }}>

        {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
        <Student
          apellidos="Carriel Moreira"
          nombres="Ayrton Andres"
          paralelo="2"
        ></Student>

      </Grid>

      {/* DishTable */}
      <Grid size={{ xs: 12 }}>

        {/* PENDIENTE: Envíe la variable de estado como prop */}
        <DishTable data={data}></DishTable>

      </Grid>


    </Grid>
  )
}

export default App
