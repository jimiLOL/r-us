


onmessage = async (event) => {
    console.log(event.data);


    let imgArray = [
        "/imgs/8491cdc37604857fc9872dbc4cd25f731.png",
        "/imgs/bd8de77dac75915d76bc6f6fb0f629da1.png",
        "/imgs/5443999f833ce70ed0853ed91982b49c1.png",
      ];

      let obj = [];
      imgArray.forEach((img) => {
        obj.push({ file: img });
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