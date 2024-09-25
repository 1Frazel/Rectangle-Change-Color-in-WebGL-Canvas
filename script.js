import * as THREE from './three.js-r145/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webglCanvas') });
renderer.setSize(500, 500);
renderer.setClearColor(0xffffff, 1); 


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x33ffdd });
const square = new THREE.Mesh(geometry, material);
scene.add(square);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

document.getElementById('redButton').addEventListener('click', () => {
    square.material.color.set(0xff0000); 
});
document.getElementById('greenButton').addEventListener('click', () => {
    square.material.color.set(0x00ff00); 
});
document.getElementById('blueButton').addEventListener('click', () => {
    square.material.color.set(0x0000ff); 
});
document.getElementById('resetButton').addEventListener('click', () => {
    square.material.color.set(0x33ffdd); 
});
