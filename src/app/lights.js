var ambientLight = function() {
  var light = new THREE.AmbientLight(0x111111);
  light.name = 'ambientLight';

  return light;
};

var directionalLight = function() {
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.name = 'directionalLight';
  light.position.set(100, 10, -50);

  return light;
};
