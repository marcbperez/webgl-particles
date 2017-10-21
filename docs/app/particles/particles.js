var particles = function(quantity) {
  var particleGeometry = new THREE.Geometry();

  for (var i = 0; i < quantity; i++) {
  	var particle = new THREE.Vector3();
  	particle.x = THREE.Math.randFloatSpread(600);
  	particle.y = THREE.Math.randFloatSpread(600);
  	particle.z = THREE.Math.randFloatSpread(600);
  	particleGeometry.vertices.push(particle);
  }

  var particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    sizeAttenuation: false,
    size: 2
  });

  var particleField = new THREE.Points(particleGeometry, particleMaterial);
  particleField.name = 'particles';

  return particleField;
}
