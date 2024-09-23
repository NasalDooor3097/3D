import * as THREE from 'three';
import { alphaT, color } from 'three/webgpu';

const scene = new THREE.Scene({alpha: true});
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

//Establece el tamaño de la escena

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(1, 1, 1); //Importa la geometria y puedes modificar las dimensiones del objeto  
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } ); // Importa el material del objeto y puedes escojer el color 
const cube = new THREE.Mesh( geometry, material ); // Posiciona el objeto en la escena 
cube.castShadow = true;
cube.position.set = (1, 2, 2);
scene.add( cube ); 




//cOLOR DE FONDO
scene.background = new THREE.Color(0x666666666);
 
//Se agrega una maya
var grid = new THREE.GridHelper(100, 100);
scene.add(grid);



//Luces y ssombreados 
var ligth = new THREE.DirectionalLight(0xffffff, 1, 100);
ligth.position.set(0, 1, 1);
ligth.castShadow = true;

scene.add(ligth);

//Plane 
var planeGeometry = new THREE.PlaneGeometry(20, 20, 20, 20);
var planeMaterial = new THREE.MeshStandardMaterial({color: 0x666 });
var plane = new  THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);


camera.position.z = 5;
camera.position.y = -3;
camera.rotation.x = .5;

//Funcion para visualizar el bojeto 3d y meter las ediciones insanas :) :)
function animate() 
{
	cube.rotation.x += 0.01
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
