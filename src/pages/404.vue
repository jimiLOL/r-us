<template>
 <div class="inner">

	<div class="kirin"></div>

	<svg id="wave" viewBox="0 0 746 300">

						<defs>
							<path id="curve" d="M.35 56.81c53.28 0 53.28 22 106.57 11s53.28-11 106.57-11 53.28 11 106.57 11 53.28-11 106.56-11 53.29 11 106.58 11 53.28-11 106.57-11 53.29 11 106.58 11" />
						</defs>

						<text id="desc" x="55%" text-anchor="middle" transform="translate(0, 0)">
							<textPath xlink:href="#curve">
								Opps! page not found !
							</textPath>
						</text>

						<text id="number" x="50%" text-anchor="middle" transform="translate(0, 140)">
							<textPath xlink:href="#curve">
								404
							</textPath>
						</text>

					</svg>

	<div class="wave-background">
		<div class="back"></div>
		<div class="middle"></div>
		<div class="front"></div>
	</div>

	<div class="w-max button">
		<button class="rounded-md border-2 border-theme-5 w-48 h-12" @click="$router.push('/')">На главную</button>
	</div>

</div>
</template>


<script>
import { Vue, Component } from "vue-property-decorator";
import { TweenMax } from "gsap";

// import ErrorLayout from "~/layouts/ErrorLayout.vue";

@Component({
  layout: "errorHandler",
})
export default class Page extends Vue {
	mounted() {
	// 	TweenMax.fromTo('textPath', 3, {attr: {startOffset: '0'}}, {attr: {startOffset: '28.8%'}, ease: Linear.easeNone, repeat: -1});
	// TweenMax.to('svg', 3, {x: '-28.8%', ease: Linear.easeNone, repeat: -1});
	
	}
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);

body {
	font-family: sourcehansans-tc,'Noto Sans S Chinese','Noto Sans TC','PingFang TC','Microsoft JhengHei',Tahoma,Verdana,Arial,Helvetica,sans-serif;
	background: #f7f7f6;
	overflow: hidden;
}

.button {
	margin: 0 auto;
  display: block;
}

#main {
	position: static;
}

#main > .inner {
	position: static;
	width: 100%;
}

svg {
	position: relative;
	display: block;
	width: 1000px;
	margin: 60px auto 0;
	z-index: 1;
}

path {
	fill: transparent;
	stroke: rgba(0,0,0,1);
}

text {
	position: relative;
	fill: #ffffff;
}

#desc {
	font-size: 15px;
}

#number {
	font-size: 140px;
	font-weight: 600;
}

.wave-background {
	position: absolute;
	top: -150px;
	left: 0;
	width: 100%;
	height: 50%;
	z-index: 0;
}

.wave-background > div {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background: #0068b6; /*e5e5e5*/
}

.wave-background > div:after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -100px;
	width: 100%;
	height: 100px;
	background-image: url(https://www.kirin.com.tw/blog/images/article/article-wave-hyoketsu.svg);
	background-position: 50px 0;
	background-repeat: repeat-x;
	background-size: 1848px 100px;
	transform: translate3d(0,0,0);
}

.wave-background .back {
	height: 380px;
	opacity: .3;
}

.wave-background .middle {
	height: 380px;
	opacity: .5;
}

.wave-background .front {
	height: 350px;
}

.wave-background .back:after {
	-webkit-animation: wave 17s linear -8s infinite;
	animation: wave 17s linear -8s infinite;
}

.wave-background .middle:after {
	-webkit-animation: wave 13s linear -4s infinite;
	animation: wave 13s linear -4s infinite;
}

.wave-background .front:after {
	-webkit-animation: wave 9s linear -1s infinite;
	animation: wave 9s linear -1s infinite;
}

.kirin {
	display: none;
	position: absolute;
	top: 240px;
	left: 50%;
	width: 150px;
	height: 77px;
	background: url(https://www.kirin.com.tw/images/common/kirin.svg) 0 0 no-repeat;
	background-size: contain;
	z-index: 1;
	margin-left: 180px;
	transform: translateX(75px);

	motion-path: path('M.35 56.81c53.28 0 53.28 22 106.57 11s53.28-11 106.57-11 53.28 11 106.57 11 53.28-11 106.56-11 53.29 11 106.58 11 53.28-11 106.57-11 53.29 11 106.58 11');
	offset-path: path('M.35 56.81c53.28 0 53.28 22 106.57 11s53.28-11 106.57-11 53.28 11 106.57 11 53.28-11 106.56-11 53.29 11 106.58 11 53.28-11 106.57-11 53.29 11 106.58 11');
	-webkit-animation: kirinMove 3s linear -.5s infinite;
	animation: kirinMove 3s linear -.5s infinite;

}

@-webkit-keyframes kirinMove {
	100% {
		motion-offset: 28.8%;
		offset-distance: 28.8%;
		margin-left: -35px;
	}
}

@keyframes kirinMove {
	100% {
		motion-offset: 28.8%;
		offset-distance: 28.8%;
		margin-left: -35px;
	}
}

@-webkit-keyframes wave {
	0% {
		background-position: 1848px top;
	}
	100% {
		background-position: 0px top;
	}
}

@keyframes wave {
	0% {
		background-position: 1848px top;
	}
	100% {
		background-position: 0px top;
	}
}


</style>