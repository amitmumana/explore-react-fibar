import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"

function App() {
  useFrame(() => {
    console.log("tick")
  })

  return (
    <>
      <mesh position-x={-2}>
        <sphereGeometry args={[1.5]} />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="blue" />
      </mesh>
      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  )
}

export default App
