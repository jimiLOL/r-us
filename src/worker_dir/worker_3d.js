
import * as THREE from "three";


onmessage = async (event) => {
    console.log(event.data);
    if (event.data.hasOwnProperty('buffer')) {
        let index = event.data.index;
        let buffer = event.data.buffer;
        let obj = event.data.obj;
        let {width, height} = event.data.img;
       
        let rgb = [];
        let c = new THREE.Color();


        for (var i = 0; i < buffer.length; i = i + 4) {
            c.setRGB(buffer[i], buffer[i + 1], buffer[i + 2]);

            rgb.push({ c: c.clone(), id: i / 4 });
          }
          let result = new Float32Array(width * height * 2);
          let j = 0;


          rgb.sort(function (a, b) {
            return a.c.getHSL(a.c).s - b.c.getHSL(a.c).s;
          });

          rgb.forEach((e) => {
            if (e.c.getHexString() != "000000") {
              result[j] = e.id % width;
              result[j + 1] = Math.floor(e.id / height);
              j = j + 2;
            } else {
              result[j] = result[j - 2] || e.id % width;
              result[j + 1] = Math.floor(result[j - 3] || e.id / height);
              j = j + 2;
            }
          });

          // console.log(result, "result");

      
        

    
    
        
    
       
          postMessage({ type: "response_worker_3d", payload: {index: index, obj: obj, result: result} });

    }
 


        
    



}



 