"use client";
import { Ref, useEffect, useRef, useState } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import countries from "@/data/globe.json";
import land from "@/data/World_elevation_map.png";
import { Canvas, MeshProps, createRoot, useFrame, Vector3 } from '@react-three/fiber'
import { Mesh, Points } from "three";
import * as THREE from 'three';



export function Globe(props: any) {


    return (
        <>
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <Sphere position={[0, 0, 0]} />
            </Canvas>
        </>
    );
}


const Sphere = (props: any) => {
    const meshRef = useRef<Mesh>()
    const pointsRef = useRef<Points>();

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002
        }
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.002
        }
    })

    const generateFibonacciSpherePoints = (samples: number, radius: number) => {
        const points = [];
        const offset = 2 / samples;
        const increment = Math.PI * (3 - Math.sqrt(5));

 
        for (let i = 0; i < samples; i++) {
            const y = i * offset - 1 + (offset / 2);
            const r = Math.sqrt(1 - y * y);
            const phi = i * increment;

            const x = Math.cos(phi) * r * radius;
            const z = Math.sin(phi) * r * radius;
            points.push(new THREE.Vector3(x, y * radius, z));
        }
        return points;
    };

    useEffect(() => {
        const radius = 3.01; // Slightly larger than the sphere radius to avoid z-fighting
        const points = generateFibonacciSpherePoints(50000, radius);

        if (pointsRef.current) {
            // pointsRef.current.rotateX(50)
            pointsRef.current.geometry.setFromPoints(points);
        }
    }, []);

    const texture = useTexture(land); // Adjust the path


    console.log(pointsRef)

    return (
        <>
            <mesh
                {...props}
                ref={meshRef}
                scale={1}


            >
                <sphereGeometry args={[3, 64, 32]} />
                <meshStandardMaterial color='#4f46e5' map={texture} />
            </mesh>
            <points ref={pointsRef} >
                <bufferGeometry />
                <pointsMaterial color='#ffffff' size={0.01} depthTest={false} />
            </points>
        </>
    );
}

