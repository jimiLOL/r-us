<template>
  <div ref="block" class="grid grid-cols-2 grid-rows-1 gap-4 w-full">
    <div class="row-span-1 flex flex-col gap-6 w-full pt-20 pb-24">
      <div class="flex flex-col gap-8">
        <h1 class="text-6xl font-bold">
          <i>Ритуальная служба в</i><i class="text-theme-1"> Кургане</i>
        </h1>
        <p>
          Значимость этих проблем настолько очевидна, что семантический разбор
          внешних противодействий предоставляет широкие возможности для вывода
          текущих активов.
        </p>
      </div>

      <div
        class="
          inline-flex
          flex-col
          justify-center
          flex-nowrap
          xl:whitespace-nowrap
        "
      >
        <span
          >Горячая линия -
          <strong class="text-theme-1">Круглосуточно</strong></span
        >
        <a href="tel:+73522610630" class="font-bold text-2xl"
          >+7 (3522) 610‒630</a
        >
      </div>
      <div class="flex gap-6 text-theme-8">
        <button
          class="
            transition
            ease-in
            duration-1500
            transform
            bg-theme-9
            px-12
            py-4
            rounded-sm
            font-bold
            hover:bg-theme-10 hover:transform hover:scale-95 hover:underline
          "
        >
          Заказать звонок
        </button>
        <button
          class="
            transition
            ease-in
            duration-1500
            transform
            bg-theme-9
            px-12
            py-4
            rounded-sm
            font-bold
            hover:bg-theme-10 hover:transform hover:scale-95 hover:underline
          "
        >
          Расчитать стоимость похорон
        </button>
      </div>
    </div>
    <div
      id="container"
      class="row-span-2 flex justify-center h-screen img-cross"
    >
      <!-- <div class="img-position max-w-full"></div> -->

      <!-- <img src="/line.svg" class="w-max-96 line" alt="" /> -->
    </div>
    <a v-if="load" href="#main"><SVGMouse class="mouse" /></a>

    <component :is="'style'">
      :root {--clientHeight: {{ clientHeight }}px; }
    </component>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import SVGMouse from "~/components/svg/Mouse.vue";

import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import particleFs from '../3d_script/fs.glsl';
import particleVs from '../3d_script/Ver.glsl';

import { TimelineMax } from "gsap";
const OrbitControls = require("three-orbit-controls")(THREE);

@Component({
  components: { SVGMouse },
  head() {
    return {
      // script: [
      //   {
      //     id: "particle-vs",
      //     type: "x-shader/x-fragment",
      //     src: "../3d_script/particle-vs.js",
      //   },
      //   {
      //     id: "particle-fs",
      //     type: "x-shader/x-fragment",
      //     src: "../3d_script/particle-fs.js",
      //   },
      // ],
    };
  },
})
export default class Hover extends Vue {
  @Prop({ type: Number, default: 700 }) clientHeight;
  // clientHeight = null;
  data() {
    return {
      load: false,
      loaded: false,
      currentSlide: 0,
      material: {},
      isActive: true,
      hasError: false,
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 10000,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              dots: true,
            },
          },
        ],
      },
    };
  }

  mounted() {
    // this.clientHeight = this.$refs.block.clientHeight;

    this.load = true;

    console.log(this.$refs.block.clientHeight);
    this.$nuxt.$emit("resize");

    // let js = document.createElement("script");
    // js.type = "text/javascript";
    // js.text = ''

    this.loaded = true;
    let camera, pos, controls, scene, renderer, geometry, geometry1, material;
    let vm = this;

    // let loaderGLTF = new GLTFLoader();

    function init() {
      scene = new THREE.Scene();

      // loaderGLTF.load("/imgs/bd8de77dac75915d76bc6f6fb0f629da.gltf", (mesh) => {
      //   console.log(mesh);
      //   const root = mesh.scene;
      //   scene.add(root);
      // });
      // scene.destination = { x: 0, y: 0 };
      // scene.background = new THREE.Color(0x000000); // уберется

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        transparent: true,
        premultipliedAlpha: true,
      });

      renderer.setClearColor(0x000000, 0);

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(600, 600);
 renderer.context.getExtension('OES_standard_derivatives');

      // let container = document.getElementById('container')
      let container = document.getElementById("container");

      container.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(70, 600 / 600, 0.001, 100);
      camera.position.set(0, 0, 1);

      controls = new OrbitControls(camera, renderer.domElement);

      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");

      // document.body.appendChild(canvas);

      let imgArray = [
        "/imgs/5443999f833ce70ed0853ed91982b49c-removebg-preview.png",
        "/imgs/bd8de77dac75915d76bc6f6fb0f629da-removebg-preview.png",
      ];

      let obj = [];
      imgArray.forEach((img) => {
        obj.push({ file: img });
      });
      // console.log(obj);

      loadImages(imgArray, (loadedImages) => {
        obj.forEach((image, index) => {
          let img = loadedImages[index];
          console.log(img);
          canvas.width = 600;
          canvas.height = 600;
          ctx.drawImage(img, 0, 0);

          // document.body.appendChild(canvas);
          let data = ctx.getImageData(0, 0, canvas.width, canvas.height);
          let buffer = data.data;
          // console.log(buffer);

          let rgb = [];
          let c = new THREE.Color();

          for (var i = 0; i < buffer.length; i = i + 4) {
            // if (
            //   index != 1 &&
            //   buffer[i] != 255 &&
            //   buffer[i + 1] != 255 &&
            //   buffer[i + 2] != 255
            // ) {

            // }
            c.setRGB(buffer[i], buffer[i + 1], buffer[i + 2]);
            rgb.push({ c: c.clone(), id: i / 4 });
          }
          let result = new Float32Array(img.width * img.height * 2);
          let j = 0;
          // console.log("Init");

          rgb.sort(function (a, b) {
            // console.log(a.c.getHSL(a.c).s);
            // process.exit(1)

            // if (index == 1 && a.c.getHexString() == "000000") {
            //   a.c.setStyle("#222222");
            //   // console.log(a.c.getHexString());
            // }
            return a.c.getHSL(a.c).s - b.c.getHSL(a.c).s;
          });

          rgb.forEach((e) => {
            result[j] = e.id % img.width;
            result[j + 1] = Math.floor(e.id / img.height);
            j = j + 2;
          });
          console.log(result, "result");

          obj[index].image = img;
          // obj[index].texture = new THREE.Texture(img);
          obj[index].texture = THREE.ImageUtils.loadTexture(image.file);
          //  obj[index].texture = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture(image.file), transparent: true, opacity: 0.5, color: 0xFF0000 })
          obj[index].buffer = result;
          obj[index].texture.transparent = true;
          obj[index].texture.premultiplyAlpha = true;

          console.log(obj[index].texture);

          obj[index].texture.needsUpdate = true;
          obj[index].texture.flipY = false;
        });

        var w = loadedImages[0].width;
        var h = loadedImages[0].height;

        let positions = new Float32Array(w * h * 3);
        let index = 0;
        for (var i = 0; i < w; i++) {
          for (var j = 0; j < h; j++) {
            positions[index * 3] = j;
            positions[index * 3 + 1] = i;
            positions[index * 3 + 2] = 0;
            index++;
          }
        }


        let uvs = new Float32Array(positions.length/3 * 2); // необходимые вершины для отресовк

        // let uvs = new Float32Array([0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0]);

        let geometry = new THREE.BufferGeometry();

        // geometry.setIndex([0,1,2, 2,3,0]);

        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );

        geometry.setAttribute(
          "source",
          new THREE.BufferAttribute(obj[0].buffer, 2)
        );
        geometry.setAttribute(
          "target",
          new THREE.BufferAttribute(obj[1].buffer, 2)
        );
        geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

        material = new THREE.RawShaderMaterial({
          uniforms: {
            sourceTex: { type: "t", value: obj[0].texture },
            targetTex: { type: "t", value: obj[1].texture },
            blend: { type: "f", value: 0 },
            size: { type: "f", value: 2.1 }, //window.devicePixelRatio },
            dimensions: { type: "v2", value: new THREE.Vector2(w, h) },
            alpha: {value: 0.0625}
          },
          transparent: true,
          premultiplyAlpha: true,
          depthWrite: false,
          // opacity: 0.5,
          premultipliedAlpha: true,
          vertexShader: particleVs,
          fragmentShader: particleFs,
          // glslVersion: THREE.GLSL3
        });
        material.transparent = true;

        let points = new THREE.Points(geometry, material);
        scene.add(points);

        let tl = new TimelineMax({ paused: true });
        console.log(material);
        tl.to(material.uniforms.blend, 3, { value: 1 }, 0);
        cash("body").on("click", () => {
          if (cash("body").hasClass("done")) {
            tl.reverse();
            cash("body").removeClass("done");
          } else {
            tl.play();
            cash("body").addClass("done");
          }
        });
      });
    }
    function loadImages(paths, whenLoaded) {
      var imgs = [];
      paths.forEach(function (path) {
        var img = new Image();
        img.onload = function () {
          imgs.push(img);
          console.log("Imgs loaded!");
          if (imgs.length === paths.length) whenLoaded(imgs);
        };
        img.src = path;
      });
    }
    window.addEventListener("resize", resize);
    function resize() {
      var w = window.innerWidth;
      var h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    let time = 0;
    function animate() {
      time++;
      // vm.material.uniforms.time.value = time;

      requestAnimationFrame(animate);
      render();
    }

    function render() {
      // scene.rotation.x += (scene.destination.x - scene.rotation.x) * 0.05;
      // scene.rotation.y += (scene.destination.y - scene.rotation.y) * 0.05;
      renderer.render(scene, camera);
    }

    init();
    animate();
  }
}
</script>


<style scoped>
/* canvas {
  position: absolute;
  z-index: 100;
  opacity: 1;
} */
.img-position {
  /* position: absolute; */
  /* top: 75%; */
  /* height: 300px; */
  width: 100%;
  /* background-position: center 200px center 200px; */
  /* rotate: 10deg; */
  /* background-size: 100%; */
  /* background-repeat: no-repeat; */
  /* background-position: bottom; */
  background: url("@/assets/imgs/dfeb34bf463d75ac4852b0cfbc3f8069.png") -50% 70%/80%
      no-repeat,
    url("@/assets/imgs/86098fe20e6936fa3330334defb88880.png") 70% 70%/ 80% no-repeat;
  /* background-position: center center;
  
  background-repeat: no-repeat; */
  /* background-size: cover; */

  /* border-radius: 25% 75% / 50%; */
}
.img-cross {
  /* background-size: 40%; */
  /* background-repeat: no-repeat; */
  /* background-position: top; */

  /* background-image: radial-gradient(#d6bc2038, 20%, #0d080505); */
  background: url("@/assets/imgs/8491cdc37604857fc9872dbc4cd25f73.png") 30% 0%/40%
      no-repeat,
    radial-gradient(farthest-corner at 40% 40%, #d6bc2000, 20%, #0a161e00);
}
.line {
  position: absolute;
  top: 30%;
  right: 0;
  max-height: 50%;
}
.mouse {
  position: absolute;
  width: 5%;
  height: 5%;
  top: var(--clientHeight);
  right: 50%;
  /* background: url("/mouse.svg") 50% 95%/1.3%
      no-repeat; */
}
</style>