import * as THREE from "three";

//renderer setup
const w = window.innerWidth;
const h = window.innerHeight; 
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

//Camera setup

const fov = 75;
const aspect = w/h;
const near = 0.1;
const far  = 1000;
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.set(0,0,2);
const scene = new THREE.Scene();




//CubeMesh
const geo = new THREE.BoxGeometry( 1, 1, 1 );
const Mat = new THREE.MeshBasicMaterial({
    color:0xffffdd,
    
});

const mesh = new THREE.Mesh(geo,Mat);

scene.add(mesh);

//Light
const hemiLight = new THREE.HemisphereLight(0x0099ff,0xaa5500);
scene.add(hemiLight);

//Render
function animate(t = 0) {

    mesh.rotation.y += 0.002;
    mesh.rotation.z += 0.0005; 

    requestAnimationFrame(animate);

    renderer.render(scene, camera);

}
animate();

// Event-Listener für das Resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
