var renderer;
var scene;
var camera;
var controls;

var sceneStart = function() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000, 1.0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  camera = new THREE.PerspectiveCamera(45,
    window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.set(90, 32, 32);
  camera.lookAt(scene.position);

  controls = new THREE.OrbitControls(camera);

  scene.add(ambientLight());
  scene.add(directionalLight());
  scene.add(starfield());
  scene.add(particles(1000000));

  document.body.appendChild(renderer.domElement);
  window.addEventListener('resize', sceneResize, false);
  sceneRender();
};

var sceneRender = function() {
  controls.update();

  scene.getObjectByName('particles').rotation.y += 0.0005;

  renderer.render(scene, camera);
  requestAnimationFrame(sceneRender);
};

var sceneResize = function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

var loadTexture = function(texture, url) {
  var loader = new THREE.ImageLoader();

  loader.load(url, function(image) {
    texture.image = image;
    texture.needsUpdate = true;
  });
};
