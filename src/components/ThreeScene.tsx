"use client"

import React, {useRef, useEffect} from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

interface KeyFrame {
    rotation: {x:number, y:number, z:number},
    position: {x:number, y:number, z:number},
    frame: number,
}

interface ThreeSceneProps {
    keyFrames: KeyFrame[];
}

const ThreeScene = ({ keyFrames }: ThreeSceneProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const modelRef = useRef<THREE.Group | null>(null);

    const [progress, setProgress] = React.useState(0);

    const currentKeyFrame = useRef<KeyFrame>(
        keyFrames[1]
    );

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            document.body.clientWidth / document.body.scrollHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 6);


        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(document.body.clientWidth, document.body.scrollHeight);
        containerRef.current.appendChild(renderer.domElement);

        const keyLight = new THREE.DirectionalLight(0xffffff, 2);
        keyLight.position.set(-2, 10, 5);
        scene.add(keyLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const loader = new GLTFLoader();
        loader.load(
            "/models/Porsche.glb",
            (gltf) => {
                const car = gltf.scene;
                car.rotation.set(currentKeyFrame.current.rotation.x, currentKeyFrame.current.rotation.y, currentKeyFrame.current.rotation.z);
                car.position.set(currentKeyFrame.current.position.x, currentKeyFrame.current.position.y, currentKeyFrame.current.position.z);
                scene.add(car);
                modelRef.current = car;
                setProgress(100);
            },
            (xhr) => {
                if (xhr.lengthComputable) {
                    const percentComplete = (xhr.loaded / xhr.total) * 100;
                    setProgress(percentComplete);
                } else {
                    // Fallback: estimate using bytes
                    setProgress(Math.min(99, (xhr.loaded / 1000000) * 100));
                }
            },
            (error) => console.error(error)
        );

        const closerModel = () => {
            const currentFrame = Math.max(keyFrames[0].frame, Math.min(window.scrollY, keyFrames[keyFrames.length - 1].frame));

            let currentIndex = keyFrames.findIndex(kf => kf.frame > currentFrame) - 1;
            currentIndex = Math.max(0, Math.min(currentIndex, keyFrames.length - 2));


            if (!modelRef.current) return;
            if (!keyFrames[currentIndex] || !keyFrames[currentIndex + 1]) return;

            const kf1 = keyFrames[currentIndex];
            const kf2 = keyFrames[currentIndex + 1];

            const progress = (currentFrame - kf1.frame) / (kf2.frame - kf1.frame);
            const clampedProgress = Math.max(0, Math.min(1, progress));

            modelRef.current.rotation.x =
                kf1.rotation.x + (kf2.rotation.x - kf1.rotation.x) * clampedProgress;

            if (currentFrame >= keyFrames[keyFrames.length - 1].frame) {
                modelRef.current.rotation.x = keyFrames[keyFrames.length - 1].position.x;
            }

            modelRef.current.rotation.y =
                kf1.rotation.y + (kf2.rotation.y - kf1.rotation.y) * clampedProgress;

            if (currentFrame >= keyFrames[keyFrames.length - 1].frame) {
                modelRef.current.rotation.y = keyFrames[keyFrames.length - 1].position.y;
            }

            modelRef.current.rotation.z =
                kf1.rotation.z + (kf2.rotation.z - kf1.rotation.z) * clampedProgress;

            if (currentFrame >= keyFrames[keyFrames.length - 1].frame) {
                modelRef.current.rotation.z = keyFrames[keyFrames.length - 1].position.z;
            }

            modelRef.current.position.x =
                kf1.position.x + (kf2.position.x - kf1.position.x) * clampedProgress;

            if (currentFrame >= keyFrames[keyFrames.length - 1].frame) {
                modelRef.current.position.x = keyFrames[keyFrames.length - 1].position.x;
            }

            modelRef.current.position.y =
                kf1.position.y + (kf2.position.y - kf1.position.y) * clampedProgress;

            if (currentFrame >= keyFrames[keyFrames.length - 1].frame) {
                modelRef.current.position.y = keyFrames[keyFrames.length - 1].position.y;
            }

            modelRef.current.position.z =
                kf1.position.z + (kf2.position.z - kf1.position.z) * clampedProgress;

            if (currentFrame >= keyFrames[keyFrames.length - 1].frame) {
                modelRef.current.position.z = keyFrames[keyFrames.length - 1].position.z;
            }
        };


        const animate = () => {
            closerModel();
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            renderer.dispose();
        };
    }, [keyFrames]);


    return (
        <>
            {progress < 100 && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50 transition-opacity duration-500"
                     style={{ opacity: progress === 100 ? 0 : 1 }}>
                    <div className="w-1/2 h-4 bg-gray-800 rounded">
                        <div
                            className="h-full bg-yellow-500 rounded text-black text-xs flex items-center justify-center"
                            style={{ width: `${progress}%` }}
                        >
                            {Math.round(progress)}%
                        </div>
                    </div>
                </div>
            )}
            <div
                ref={containerRef}
                style={{
                    position: "absolute",
                    top: 0,
                    zIndex: 0,
                }}
            />
        </>
    );
};

export default ThreeScene;