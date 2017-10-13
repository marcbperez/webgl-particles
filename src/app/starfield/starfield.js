var starfield = function() {
  var geometry  = new THREE.SphereGeometry(90, 32, 32);

  var texture = new THREE.Texture();
  loadTexture(texture, 'app/starfield/starfield-map.png');

  var material = new THREE.MeshBasicMaterial();
  material.map = texture;
  material.side = THREE.BackSide;

  var mesh  = new THREE.Mesh(geometry, material)
  mesh.name = 'starfieldMesh';

  return mesh;
};
