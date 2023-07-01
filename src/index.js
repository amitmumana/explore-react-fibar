import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Canvas } from "@react-three/fiber"
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Canvas 
     gl={{
       antialias: false ,
       toneMapping: THREE.ACESFilmicToneMapping,
       outputEncoding: THREE.sRGBEncoding
     }}
  //  flat  // to diseble tone maping  
  //  orthographic
  camera={ {
    // fav: 45,
    // zoom:100,
    near:0.1,
    far:200,
    position: [3,2,6]

  } } >
    <App />
  </Canvas>
)
