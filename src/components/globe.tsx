"use client";
import { Ref, useEffect, useRef, useState } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import countries from "@/data/globe.json";
import land from "@/data/map.png";
import { Canvas, MeshProps, createRoot, useFrame, Vector3 } from '@react-three/fiber'
import { Mesh, Points } from "three";
import * as THREE from 'three';
import { MeshBVH, computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
import createGlobe from "cobe";



const Globe = (props: any) => {
    const canvasRef = useRef();


    useEffect(() => {
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 1000 * 2,
            height: 1000 * 2,
            phi: 0,
            theta: 0.2,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 20,
            baseColor: [0.5, 0.5, 0.5],
            markerColor: [0.1, 0.8, 1],
            opacity: 0.5,
            glowColor: [1, 1, 1],
            
            markers: [
                // longitude latitude
                // { location: [37.7595, -122.4367], size: 0.03 },
                // { location: [40.7128, -74.006], size: 0.1 }
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.004;
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);
    return (
        <>
            <canvas
                ref={canvasRef}
                className="w-[1000px] h-[1000px] max-w-full aspect-square"
            />
        </>
    );
}

export default Globe