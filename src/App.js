import { useEffect } from 'react';
import styles from "./styles/home.module.css";
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './lib/SceneInit';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('./assets/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      // console.log(loadedModel);

     // gltfScene.scene.rotation.y = Math.PI / 1;
      gltfScene.scene.position.y -= 100;
      gltfScene.scene.scale.set(1, 1, 1);
      gltfScene.scene.scale.setScalar(0.1);
      gltfScene.scene.position.set(0, -75,-650);
      //gltfScene.scene.priority = 0;
      test.scene.add(gltfScene.scene);
    });

    const animate = () => {
      if (loadedModel) {
       //loadedModel.scene.rotation.x += 0.01;
       loadedModel.scene.rotation.y += 0.01;
       // loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    
    <div>
 
      <div className={styles.coming}>
        <div className={styles.header}>
      unite hacks is coming this
      </div>
       <div className={styles.fall}>
       FALL 2022
       </div>
      </div>
      <Navbar />
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;