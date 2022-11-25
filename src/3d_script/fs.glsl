precision highp float;

varying vec3 vColor;

void main() {
     gl_FragColor = vec4(vColor, 1.5);
    // if (vColor == vec3(0, 0, 0)) {
    // gl_FragColor = vec4(vColor, 0);

        
    // }else {
    // gl_FragColor = vec4(vColor, 1.1);


    // }
    //  else if (vColor.x < 0.2) {
    // gl_FragColor = vec4(vColor, 0);

    // } 
}