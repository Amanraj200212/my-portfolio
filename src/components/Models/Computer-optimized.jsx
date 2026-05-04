import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Computer(props) {
  const { nodes, materials } = useGLTF('/models/computer-optimized-transformed.glb')

  useEffect(() => {
    // Nudge imported materials toward PBR (if applicable)
    Object.values(materials).forEach((mat) => {
      if (!mat || !mat.isMaterial) return
      if ('metalness' in mat) mat.metalness = Math.max(0, mat.metalness ?? 0.1)
      if ('roughness' in mat) mat.roughness = mat.roughness ?? 0.6
      mat.envMapIntensity = mat.envMapIntensity ?? 1
      mat.needsUpdate = true
    })
  }, [materials])

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube000_ComputerDesk_0001_1.geometry} material={materials['ComputerDesk.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube000_ComputerDesk_0001_2.geometry} material={materials['FloppyDisk.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/computer-optimized-transformed.glb')
