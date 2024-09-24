// Mengimpor Three.js sebagai modul
import * as THREE from './three.js-r145/build/three.module.js';

// Membuat scene, kamera, dan renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webglCanvas') });
renderer.setSize(500, 500);
renderer.setClearColor(0xffffff, 1); // Mengatur background menjadi putih

// Membuat persegi (BoxGeometry dengan width dan height yang sama)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x33ffdd });
const square = new THREE.Mesh(geometry, material);
scene.add(square);

// Mengatur posisi kamera
camera.position.z = 5;

// Loop animasi
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Event listeners untuk tombol
document.getElementById('redButton').addEventListener('click', () => {
    square.material.color.set(0xff0000); // Mengatur warna persegi menjadi merah
});
document.getElementById('greenButton').addEventListener('click', () => {
    square.material.color.set(0x00ff00); // Mengatur warna persegi menjadi hijau
});
document.getElementById('blueButton').addEventListener('click', () => {
    square.material.color.set(0x0000ff); // Mengatur warna persegi menjadi biru
});
document.getElementById('resetButton').addEventListener('click', () => {
    square.material.color.set(0x33ffdd); // Mereset warna persegi menjadi putih
});
