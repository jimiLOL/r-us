<template>
  <div ref="block" class="flex gap-4 w-full flex-nowrap items-center">
    <div class="flex flex-col gap-6 w-full pt-14">
      <div class="flex flex-col gap-8">
        <h1 class="text-5xl font-bold">
          <i>Ритуальная служба в {{cityName}}</i>
        </h1>
        <vue-typed-js :showCursor="false" :startDelay="1000" :fadeOut="true" :fadeOutDelay="500" :shuffle="true" :strings="['Мы заботимся о каждой детали, чтобы вы могли попрощаться с любимым человеком', 'Профессиональная помощь в трудную минуту', 'Достойное прощание в последний путь']">
          <p class="typing"></p>
        </vue-typed-js>
      </div>

      <div
        class="
          inline-flex
          mt-11
          flex-col
          justify-center
          flex-nowrap
          xl:whitespace-nowrap
          text-theme-10
        "
      >
        <span>Горячая линия - <strong>Круглосуточно</strong></span>
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
            bg-gradient-to-t
            from-bt-2
            to-bt-1
            px-12
            py-4
            rounded-lg
            font-bold
            hover:bg-theme-10 hover:transform hover:scale-95 hover:underline
          "
          @click="callMe"
        >
          Заказать звонок
        </button>
        <button
          class="
            transition
            ease-in
            duration-1500
            transform
            bg-gradient-to-t
            from-bt-2
            to-bt-1
            px-12
            py-4
            rounded-lg
            font-bold
            hover:bg-theme-10 hover:transform hover:scale-95 hover:underline
          "
          @click="openModal"
        >
          Рассчитать стоимость похорон
        </button>
      </div>
    </div>
    <div id="container" class="h-full self-end" ref="canavs_wraper">
      <div class="img-cross"></div>
      <div class="img-position"></div>

      <!-- <img src="/line.svg" class="w-max-96 line" alt="" /> -->
    </div>
    <a v-if="load" href="#main"><SVGMouse class="mouse" /></a>
    <!-- <div class="wrapper_b"></div> -->

    <component :is="'style'">
      :root {--clientHeight:
      {{ Math.ceil(clientHeight.clientHeight * 1.35) }}px; --backgroundWraper:
      {{ backgroundWraper }}px; --clientH:
      {{ Math.ceil(clientHeight.clientHeight * 0.4) }}px; --wrapperTop:
      {{ Math.ceil(clientHeight.clientHeight * 1.68) }}px; --procentTop:
      {{ clientHeight.clientHeightWindow > 800 ? "10%" : "5%" }} }
    </component>
  </div>
</template>

<script>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import SVGMouse from "~/components/svg/Mouse.vue";
import {Getter} from "vuex-class";
import declineNoun from "~/utils/decline";

// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// import particleFs from "../3d_script/fs.glsl";
// import particleVs from "../3d_script/Ver.glsl";
// const rustModule = import("@/pkg/worker_bg.wasm").then((module) => {
//   console.log("ok import wasm");

//   return module;
// });
// import { TimelineMax } from "gsap";
// const OrbitControls = require("three-orbit-controls")(THREE);

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
    @Getter("city/CITY_G") CITY_G;

  get cityName() {
    return declineNoun(this.CITY_G.name);
  }
  @Prop({
    type: Object,
    default: () => ({ clientHeight: 500, clientHeightWindow: 600 }),
  })
  clientHeight;

  time = 0;

  @Watch("$route.fullPath")
  switchRoute() {
    this.time = 0;
  }

  get initAnimation() {
    return (
      this.clientHeight.clientHeightWindow > 500 && this.$route.path == "/"
    );
  }

  // @Watch("initAnimation")
  // initAnimationChange() {
  //   if (this.initAnimation) {
  //     this.animation();
  //   }
  // }

  @Watch("clientHeight")
  resize() {
    console.log("Resize..");
    console.log(this.clientHeight);
  }
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
  backgroundWraper = 350;
  openModal() {
    window.$nuxt.$emit("switchModal", true);
  }
  callMe() {
    window.$nuxt.$emit("callMe", true);
  }

  // animation() {
  //   const worker = this.$worker.createWorker();

  //   this.load = true;

  //   // console.log(this.$refs.block.clientHeight);
  //   this.$nuxt.$emit("resize");

  //   // let js = document.createElement("script");
  //   // js.type = "text/javascript";
  //   // js.text = ''

  //   this.loaded = true;
  //   let camera, pos, controls, scene, renderer, geometry, geometry1, material;
  //   let vm = this;

  //   // let loaderGLTF = new GLTFLoader();
  //   let startTime = new Date().getTime();

  //   function init() {
  //     scene = new THREE.Scene();

  //     // loaderGLTF.load("/imgs/bd8de77dac75915d76bc6f6fb0f629da.gltf", (mesh) => {
  //     //   console.log(mesh);
  //     //   const root = mesh.scene;
  //     //   scene.add(root);
  //     // });
  //     // scene.destination = { x: 0, y: 0 };
  //     // scene.background = new THREE.Color(0x000000); // уберется

  //     renderer = new THREE.WebGLRenderer({
  //       alpha: true,
  //       transparent: true,
  //       premultipliedAlpha: true,
  //     });

  //     renderer.setClearColor(0x000000, 0);

  //     renderer.setPixelRatio(window.devicePixelRatio);
  //     renderer.setSize(
  //       vm.clientHeight.clientHeight * 0.75,
  //       vm.clientHeight.clientHeight * 0.75
  //     );
  //     renderer.context.getExtension("OES_standard_derivatives");

  //     let container = document.getElementById("container");

  //     container.appendChild(renderer.domElement);

  //     camera = new THREE.PerspectiveCamera(70, 600 / 600, 0.001, 100);
  //     camera.position.set(0, 0, 0.7);

  //     // controls = new OrbitControls(camera, renderer.domElement);

  //     let canvas = document.createElement("canvas");
  //     let ctx = canvas.getContext("2d");

  //     let imgArray = [
  //       "/imgs/8491cdc37604857fc9872dbc4cd25f731.png",
  //       "/imgs/bd8de77dac75915d76bc6f6fb0f629da1.png",
  //       "/imgs/5443999f833ce70ed0853ed91982b49c1.png",
  //     ];

  //     let obj = [];
  //     imgArray.forEach((img) => {
  //       obj.push({ file: img });
  //     });

  //     loadImages(imgArray, (loadedImages) => {
  //       worker.onmessage = (e) => {
  //         // console.log(e.data);
  //         // obj = e.data.payload.obj;
  //         let index = e.data.payload.index;

  //         let img = loadedImages[index];

  //         let result = e.data.payload.result;

  //         let positions = e.data.payload.positions;

  //         obj[index].texture = THREE.ImageUtils.loadTexture(obj[index].file);

  //         obj[index].texture.transparent = true;
  //         obj[index].texture.premultiplyAlpha = true;

  //         obj[index].texture.needsUpdate = true;
  //         obj[index].texture.flipY = false;

  //         obj[index].image = img;
  //         obj[index].buffer = result;
  //         // console.log(obj);

  //         if (index == 2) {
  //           console.log("Start render..");
  //           let w = loadedImages[0].width;
  //           let h = loadedImages[0].height;

  //           vm.backgroundWraper = vm.$refs.canavs_wraper.clientWidth;

  //           positions = e.data.payload.positions;

  //           let uvs = new Float32Array((positions.length / 3) * 2); // необходимые вершины для отресовк

  //           let geometry = new THREE.BufferGeometry();

  //           geometry.setAttribute(
  //             "position",
  //             new THREE.BufferAttribute(positions, 3)
  //           );

  //           geometry.setAttribute(
  //             "source",
  //             new THREE.BufferAttribute(obj[0].buffer, 2)
  //           );
  //           geometry.setAttribute(
  //             "target",
  //             new THREE.BufferAttribute(obj[1].buffer, 2)
  //           );
  //           geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

  //           material = new THREE.RawShaderMaterial({
  //             uniforms: {
  //               sourceTex: { type: "t", value: obj[0].texture },
  //               targetTex: { type: "t", value: obj[1].texture },
  //               blend: { type: "f", value: 0 },
  //               size: { type: "f", value: 2.1 }, //window.devicePixelRatio },
  //               dimensions: { type: "v2", value: new THREE.Vector2(w, h) },
  //               premultipliedAlpha: true,
  //               depthWrite: true,
  //               // alpha: { value: 0.0625 },
  //             },
  //             transparent: true,
  //             premultiplyAlpha: true,
  //             depthWrite: false,
  //             premultipliedAlpha: true,
  //             vertexShader: particleVs,
  //             fragmentShader: particleFs,
  //           });
  //           // console.log(material);
  //           material.transparent = true;

  //           let points = new THREE.Points(geometry, material);
  //           scene.add(points);

  //           let tl = new TimelineMax({ paused: true });
  //           tl.to(material.uniforms.blend, 3, { value: 1 }, 0);
  //           cash("body").on("click", () => {
  //             if (cash("body").hasClass("done")) {
  //               tl.reverse();
  //               cash("body").removeClass("done");
  //             } else {
  //               tl.play();
  //               setTimeout(() => {
  //                 geometry.setAttribute(
  //                   "source",
  //                   new THREE.BufferAttribute(obj[2].buffer, 2)
  //                 );
  //                 material.uniforms.sourceTex.value = obj[2].texture;
  //                 // мы можем просто загрузить необходимые вершины и текстуры в gpu
  //               }, 6000);

  //               cash("body").addClass("done");
  //             }
  //           });
  //         }
  //       };

  //       obj.forEach((image, index) => {
  //         let img = loadedImages[index];
  //         canvas.width = 800;
  //         canvas.height = 800;
  //         ctx.drawImage(img, 0, 0);

  //         // document.body.appendChild(canvas);
  //         let data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //         let buffer = data.data;
  //         // console.log(buffer);
  //         worker.postMessage({
  //           buffer: buffer,
  //           obj: obj,
  //           index: index,
  //           img: { width: img.width, height: img.height },
  //         });
  //       });

  //       // let tl = new TimelineMax({ paused: true });
  //       // console.log(material);
  //       // tl.to(material.uniforms.blend, 3, { value: 1 }, 0);
  //       // cash("body").on("click", () => {
  //       //   if (cash("body").hasClass("done")) {
  //       //     tl.reverse();
  //       //     cash("body").removeClass("done");
  //       //   } else {
  //       //     tl.play();
  //       //     setTimeout(() => {
  //       //       geometry.setAttribute(
  //       //         "source",
  //       //         new THREE.BufferAttribute(obj[2].buffer, 2)
  //       //       );
  //       //       material.uniforms.sourceTex.value = obj[2].texture;
  //       //       // мы можем просто загрузить необходимые вершины и текстуры в gpu
  //       //     }, 6000);

  //       //     cash("body").addClass("done");
  //       //   }
  //       // });

  //       let endTime = new Date().getTime();
  //       animate();

  //       console.log(`Process time ${endTime - startTime} ms`);
  //     });
  //   }
  //   function loadImages(paths, whenLoaded) {
  //     var imgs = [];
  //     paths.forEach(function (path) {
  //       var img = new Image();
  //       img.onload = function () {
  //         imgs.push(img);
  //         console.log("Imgs loaded!");
  //         if (imgs.length === paths.length) whenLoaded(imgs);
  //       };
  //       img.src = path;
  //     });
  //   }
  //   // window.addEventListener("resize", resize);
  //   // function resize() {
  //   //   var w = window.innerWidth;
  //   //   var h = window.innerHeight;
  //   //   renderer.setSize(w, h);
  //   //   camera.aspect = w / h;
  //   //   camera.updateProjectionMatrix();
  //   // }

  //   // let time = 0;
  //   function animate() {
  //     if (vm.time < 10000) {
  //       vm.time++;
  //       // vm.material.uniforms.time.value = time;

  //       requestAnimationFrame(animate);
  //       render();
  //     }
  //   }

  //   function render() {
  //     // scene.rotation.x += (scene.destination.x - scene.rotation.x) * 0.05;
  //     // scene.rotation.y += (scene.destination.y - scene.rotation.y) * 0.05;
  //     renderer.render(scene, camera);
  //   }
  //   init();
  // }

  async mounted() {
    console.log(this.clientHeight);
    // if (this.initAnimation) {
    //   this.animation();
    // }
    // const rs = await rustModule;
    // console.log(rs);
    // let result = rs.test();
    // console.log(result);
    // console.log(result instanceof Uint32Array);
    // this.clientHeight = this.$refs.block.clientHeight;

    // if (this.clientHeight.clientHeightWindow > 500 && this.$route.path == "/") {
    //   init();
    // }
  }
}
</script>


<style scoped>
#container {
  z-index: 10;
  padding-top: var(--procentTop);
}

.wrapper_b {
  position: fixed;
  top: 99%;
  width: 98%;
  height: 0.1px;
  background: #22222200;
  z-index: 11;
  -webkit-box-shadow: 0px -20px 40px 60px #222222;
  box-shadow: 0px -10px 15px 25px #222222;
}

.img-position {
  position: absolute;
  top: 21.5%;
  height: 100%;
  width: 44%;
  right: 0;

  background: url("@/assets/imgs/dfeb34bf463d75ac4852b0cfbc3f8069.png") 28%
      72.5%/100% no-repeat,
    url("@/assets/imgs/86098fe20e6936fa3330334defb88880.png") 118% 74%/70%
      no-repeat;
}
.img-cross {
  height: 500px;
  width: 500px;
  /* border-radius: 400px; */
  /* box-shadow: inset 0px -10px 50px 3px #d6bb201c; */

  background: url("/imgs/8491cdc37604857fc9872dbc4cd25f731.png") 50% 50%/100% no-repeat;
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
  top: 80%;
  right: 50%;
  /* background: url("/mouse.svg") 50% 95%/1.3%
      no-repeat; */
}
</style>