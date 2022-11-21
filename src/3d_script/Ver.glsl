// #version 300 es

precision highp float;

varying vec2 vUv;
varying vec3 vecPos;
varying vec3 v_position;

attribute vec3 position;
attribute vec2 source;
attribute vec2 target;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float size;
uniform float blend;
uniform sampler2D sourceTex;
uniform sampler2D targetTex;
uniform vec2 dimensions;

varying vec3 vColor;
void main() {
    vUv = uv;
    v_position = position.xyz;

    vec3 origin = vec3(source, 0.);
    vec3 destination = vec3(target, 0.);

    vec3 p = mix(origin, destination, blend);

    vec3 d = destination - origin;

    float r = length(d);

    p.z = 0.2 * r * sin(3.1415926 * blend);

    vColor = vec3(1.0, 0., 0.);

    vec2 uvSource = source / dimensions.x;
    vec2 uvTarget = target / dimensions.y;

    vColor = mix(texture2D(sourceTex, uvSource).rgb, texture2D(targetTex, uvTarget).rgb, blend);

    p.xy = p.xy - 0.5 * dimensions;

    p *= 1. / dimensions.x;

    p.y *= -1.;

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.);
    gl_PointSize = size * (1. / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}