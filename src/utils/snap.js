const svgAnimate = (allSvg) => {
    // console.log(allSvg);
    Object.values(allSvg).forEach((e, i) => {
      if (typeof e == "object") {
        setTimeout(() => {
          let s = Snap(`#${cash(e).attr("id")}`);
          let linePath =
            "M1.22453 157.589C24.7438 91.5367 131.484 -46.1672 290.711 74.6921C489.746 225.766 509.414 155.878 606.16 63.7344C702.905 -28.4092 804.537 3.49177 895.911 25.8446";
          let lineLength = Snap.path.getTotalLength(linePath);
          let lineDraw = s.path(linePath);
          // lineDraw.gradient("l(0, 0, 0, 1)#FF0000:25-#00FF00:75-#0000FF:50");
          // let shadow = s.filter(Snap.filter.shadow(0, 2, 3));
          var f = s.filter(Snap.filter.blur(0.05, 1));
          lineDraw.attr({
            fill: "none",
            filter: f,
            strokeWidth: 20,
            stroke: "L(0, 0, 200, 0)#222-#f00:25-#EDC85C",
            "stroke-dasharray": lineLength + " " + lineLength,
            "stroke-dashoffset": lineLength,
            "stroke-width": 0.2,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-miterlimit": 10,
          });
          lineDraw.animate(
            {
              strokeDashoffset: 0,
            },
            3000,
            mina.easein
          );
          // let i = 0;

          
          //     lineDraw.animate(
          //       {
          //         d: "m 1.2 157.6 c 127.8 -8.6 128.8 -128.6 247.8 -151.6 c 234 -37 330.4 144.9 427.2 52.7 c 96.7 -92.1 198.3 -60.2 289.7 -37.9",
          //       },
          //       2500
          //     );

          // setTimeout(() => {
          //   s.remove()
          // }, 10000);
            // if (i == 0) {
            //   i = 1;
            //   lineDraw.animate(
            //     {
            //       d: "m 1.2 157.6 c 127.8 -8.6 128.8 -128.6 247.8 -151.6 c 234 -37 330.4 144.9 427.2 52.7 c 96.7 -92.1 198.3 -60.2 289.7 -37.9",
            //     },
            //     2500
            //   );
            // } else {
            //   i = 0;
            //   lineDraw.animate(
            //     {
            //       d: "M1.22453 157.589C24.7438 91.5367 131.484 -46.1672 290.711 74.6921C489.746 225.766 509.414 155.878 606.16 63.7344C702.905 -28.4092 804.537 3.49177 895.911 25.8446",
            //     },
            //     2500
            //   );
            // }
        }, 30 * i);
      }
    });
  }

  export default svgAnimate;