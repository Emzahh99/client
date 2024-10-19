// Variables to hold the scene, camera, renderer, and controls
let scene, camera, renderer;
let lon = 0, lat = 0, phi = 0, theta = 0;
let isUserInteracting = false;
let onPointerDownPointerX = 0, onPointerDownPointerY = 0;
let onPointerDownLon = 0, onPointerDownLat = 0;

function init() {
    // Create a new scene
    scene = new THREE.Scene();

    // Set up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.target = new THREE.Vector3(0, 0, 0);

    // Set up the renderer and attach it to the container
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    // Load the 360-degree image texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('C:\Users\mathe\OneDrive\Desktop\TVH Group 11\New folder\client\src\equirectanglar_Image\IMG-20241019-WA0002.jpg', function (texture) {
        const geometry = new THREE.SphereGeometry(500, 60, 40);  // Large sphere
        geometry.scale(-1, 1, 1);  // Invert the sphere so we can view the inside

        const material = new THREE.MeshBasicMaterial({ map: texture });

        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
    });

    // Add event listeners for mouse interaction
    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);

    // Resize handler
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Event handlers for mouse interaction
function onDocumentMouseDown(event) {
    event.preventDefault();
    isUserInteracting = true;
    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;
    onPointerDownLon = lon;
    onPointerDownLat = lat;
}

function onDocumentMouseMove(event) {
    if (isUserInteracting) {
        lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
        lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
    }
}

function onDocumentMouseUp() {
    isUserInteracting = false;
}

// Update the camera position and render the scene
function animate() {
    requestAnimationFrame(animate);

    lat = Math.max(-85, Math.min(85, lat));
    phi = THREE.MathUtils.degToRad(90 - lat);
    theta = THREE.MathUtils.degToRad(lon);

    camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
    camera.target.y = 500 * Math.cos(phi);
    camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);
    camera.lookAt(camera.target);

    renderer.render(scene, camera);
}

// Initialize and start the animation loop
init();
animate();