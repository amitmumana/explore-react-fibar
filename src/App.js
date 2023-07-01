import React, { useRef } from "react"
import { useThree,extend ,useFrame } from "@react-three/fiber"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import CustomObject from "./components/CustomObject"


extend({ OrbitControls })

function App() {

  const {camera, gl} = useThree()
  const cubeRef = useRef()
  const groupRef = useRef()
  
  
  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime * 0.3  
    //  state.camera.position.x = Math.sin(angle) * 7
    //  state.camera.position.z = Math.cos(angle) * 7
    //  state.camera.lookAt(0,0,0)

    cubeRef.current.rotation.y += delta
    //   groupRef.current.rotation.y += delta
  })


  return (
    <>

     <orbitControls args={[camera, gl.domElement]} />

     <directionalLight position={[1,2,3 ]} intensity={1.5} />
     <ambientLight intensity={0.3} />
    <group ref={ groupRef } >
       <mesh position-x={-2}>
           <sphereGeometry args={[1.5]} />
           <meshStandardMaterial color="orange" />
         </mesh>
   
         <mesh ref={ cubeRef } rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
           <boxGeometry />
           <meshStandardMaterial color="blue" />
         </mesh>
    </group>
  
      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject/>

    </>
  )
}

export default App
