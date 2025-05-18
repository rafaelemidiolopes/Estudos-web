import * as THREE from "three";

const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0x555555);
scene.add(ambientLight);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(0, 10, 10);
scene.add(light);

// Floor
const floorGeometry = new THREE.PlaneGeometry(10, 10, 32, 32);
const floorMaterial = new THREE.MeshPhongMaterial({
  color: 0x808080,
  specular: 0x101010,
});

const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.receiveShadow = true;
floor.position.y = -0.01;
scene.add(floor);

// Paddle
const paddleWidth = 1.5;
const paddleHeight = 0.2;
const paddleDepth = 0.1;

const paddleGeometry = new THREE.BoxGeometry(
  paddleWidth,
  paddleHeight,
  paddleDepth
);

const paddleMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });

const paddle = new THREE.Mesh(paddleGeometry, paddleMaterial);
paddle.castShadow = true;
paddle.receiveShadow = true;
paddle.position.y = 0.1;

scene.add(paddle);

// Ball
const ballGeometry = new THREE.SphereGeometry(0.15, 32, 32);
const ballMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

const ball = new THREE.Mesh(ballGeometry, ballMaterial);
ball.castShadow = true;
ball.receiveShadow = true;

scene.add(ball);

// Resize
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Game
const ballSpeed = 0.1;
let ballAngle = 0;

function gameLoop() {
  // Ball movement
  ballAngle += ballSpeed;
  ball.position.x = Math.cos(ballAngle) * 3;
  ball.position.y = 0.15 + Math.sin(ballAngle) * 3;

  // Rendering
  renderer.render(scene, camera);

  // Call game loop again
  requestAnimationFrame(gameLoop);
}

// Keyboard
const keys = {};

function onKeyDown(event) {
  keys[event.code] = true;
}

function onKeyUp(event) {
  keys[event.code] = false;
}

function updatePaddle() {
  if (keys["ArrowLeft"]) {
    paddle.position.x -= 0.05;
  }

  if (keys["ArrowRight"]) {
    paddle.position.x += 0.05;
  }

  // Keep paddle inside the floor
  if (paddle.position.x < -paddleWidth / 2) {
    paddle.position.x = -paddleWidth / 2;
  }

  if (paddle.position.x > paddleWidth / 2) {
    paddle.position.x = paddleWidth / 2;
  }
}

// Start
resize();
gameLoop();

// Listeners
window.addEventListener("resize", resize);
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

setInterval(updatePaddle, 10);