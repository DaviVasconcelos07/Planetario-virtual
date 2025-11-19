module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/testeAntigravity/components/Moon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Moon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
;
;
;
function Moon({ name, size, distance, speed, color }) {
    const moonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const orbitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    // Random start angle
    const [angle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Math.random() * Math.PI * 2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state, delta)=>{
        if (orbitRef.current) {
            orbitRef.current.rotation.y += speed * delta * 0.5;
        }
        if (moonRef.current) {
            moonRef.current.rotation.y += delta * 0.5;
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: orbitRef,
        rotation: [
            0,
            angle,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            ref: moonRef,
            position: [
                distance,
                0,
                0
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                    args: [
                        size,
                        16,
                        16
                    ]
                }, void 0, false, {
                    fileName: "[project]/testeAntigravity/components/Moon.js",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: color
                }, void 0, false, {
                    fileName: "[project]/testeAntigravity/components/Moon.js",
                    lineNumber: 24,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/testeAntigravity/components/Moon.js",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/testeAntigravity/components/Moon.js",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
}),
"[project]/testeAntigravity/components/Planet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Planet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/drei/core/shaderMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$Moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/Moon.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const PlanetAtmosphereMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shaderMaterial"])({
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0.0, 0.0, 0.0),
    viewVector: new __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0)
}, // Vertex Shader
`
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `, // Fragment Shader
`
    uniform vec3 color;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
      gl_FragColor = vec4(color, intensity);
    }
  `);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
    PlanetAtmosphereMaterial
});
function Planet({ name, size, distance, color, speed, description, moons, setSelectedPlanet }) {
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const orbitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [hovered, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Random start angle
    const [angle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Math.random() * Math.PI * 2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state, delta)=>{
        if (orbitRef.current) {
            // Rotate the orbit group to simulate orbit
            orbitRef.current.rotation.y += speed * delta * 0.5;
        }
        if (meshRef.current) {
            // Rotate planet on its axis
            meshRef.current.rotation.y += delta;
        }
    });
    const handleClick = ()=>{
        setSelectedPlanet({
            name,
            size,
            distance,
            color,
            speed,
            description
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: orbitRef,
        rotation: [
            0,
            angle,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            position: [
                distance,
                0,
                0
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    ref: meshRef,
                    onPointerOver: ()=>{
                        setHover(true);
                        document.body.style.cursor = 'pointer';
                    },
                    onPointerOut: ()=>{
                        setHover(false);
                        document.body.style.cursor = 'auto';
                    },
                    onClick: handleClick,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                            args: [
                                size,
                                32,
                                32
                            ]
                        }, void 0, false, {
                            fileName: "[project]/testeAntigravity/components/Planet.js",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: color,
                            roughness: 0.7,
                            metalness: 0.1
                        }, void 0, false, {
                            fileName: "[project]/testeAntigravity/components/Planet.js",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this),
                        hovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                            distanceFactor: 15,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "planet-label",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/testeAntigravity/components/Planet.js",
                                lineNumber: 78,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/testeAntigravity/components/Planet.js",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/testeAntigravity/components/Planet.js",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    scale: 1.2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                            args: [
                                size,
                                32,
                                32
                            ]
                        }, void 0, false, {
                            fileName: "[project]/testeAntigravity/components/Planet.js",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("planetAtmosphereMaterial", {
                            transparent: true,
                            side: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackSide"],
                            blending: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                            color: color
                        }, void 0, false, {
                            fileName: "[project]/testeAntigravity/components/Planet.js",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/testeAntigravity/components/Planet.js",
                    lineNumber: 86,
                    columnNumber: 17
                }, this),
                moons && moons.map((moon, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$Moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        ...moon
                    }, index, false, {
                        fileName: "[project]/testeAntigravity/components/Planet.js",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/testeAntigravity/components/Planet.js",
            lineNumber: 59,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/testeAntigravity/components/Planet.js",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
}),
"[project]/testeAntigravity/components/SaturnRings.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SaturnRings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
;
;
;
function SaturnRings({ distance }) {
    const ringsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state, delta)=>{
        if (ringsRef.current) {
            ringsRef.current.rotation.z += delta * 0.1;
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ringsRef,
        position: [
            distance,
            0,
            0
        ],
        rotation: [
            Math.PI / 2.5,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                args: [
                    1.8,
                    3.2,
                    64
                ]
            }, void 0, false, {
                fileName: "[project]/testeAntigravity/components/SaturnRings.js",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#C9B18F",
                opacity: 0.7,
                transparent: true,
                side: 2,
                emissive: "#C9B18F",
                emissiveIntensity: 0.2
            }, void 0, false, {
                fileName: "[project]/testeAntigravity/components/SaturnRings.js",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/testeAntigravity/components/SaturnRings.js",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/testeAntigravity/components/Sun.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sun
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/drei/core/shaderMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
;
;
;
;
// Custom shader for the Sun's glow effect
const SunGlowMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shaderMaterial"])({
    time: 0,
    color: new __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]('#ffaa00')
}, // Vertex shader
`
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `, // Fragment shader
`
    uniform float time;
    uniform vec3 color;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
      vec3 glow = color * intensity;
      
      // Pulsing effect
      float pulse = sin(time * 2.0) * 0.1 + 0.9;
      
      gl_FragColor = vec4(glow * pulse, 1.0);
    }
  `);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
    SunGlowMaterial
});
function Sun() {
    const sunRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const glowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        if (glowRef.current) {
            glowRef.current.time = state.clock.elapsedTime;
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    0
                ],
                ref: sunRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            2.5,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Sun.js",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        emissive: "#ffaa00",
                        emissiveIntensity: 3,
                        color: "#ffaa00"
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Sun.js",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        intensity: 3,
                        distance: 100,
                        decay: 2,
                        color: "#ffaa00"
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Sun.js",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/testeAntigravity/components/Sun.js",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    0
                ],
                scale: 1.2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            2.5,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Sun.js",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sunGlowMaterial", {
                        ref: glowRef,
                        transparent: true,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackSide"],
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Sun.js",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/testeAntigravity/components/Sun.js",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    0
                ],
                scale: 1.4,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            2.5,
                            32,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Sun.js",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("sunGlowMaterial", {
                        transparent: true,
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackSide"],
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                        color: new __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]('#ff4400')
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Sun.js",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/testeAntigravity/components/Sun.js",
                lineNumber: 70,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/testeAntigravity/components/Sun.js",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
}),
"[project]/testeAntigravity/components/OrbitLine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrbitLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
;
function OrbitLine({ distance }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                args: [
                    distance - 0.05,
                    distance + 0.05,
                    64
                ]
            }, void 0, false, {
                fileName: "[project]/testeAntigravity/components/OrbitLine.js",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                color: "#ffffff",
                opacity: 0.1,
                transparent: true,
                side: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
            }, void 0, false, {
                fileName: "[project]/testeAntigravity/components/OrbitLine.js",
                lineNumber: 7,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/testeAntigravity/components/OrbitLine.js",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/testeAntigravity/data/planets.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "planets",
    ()=>planets
]);
const planets = [
    {
        name: "Mercúrio",
        size: 0.4,
        distance: 5,
        color: "#A5A5A5",
        speed: 1.5,
        description: "O menor e mais interno planeta do Sistema Solar.",
        gravity: "3.7 m/s²",
        temperature: "167°C",
        dayLength: "1408h"
    },
    {
        name: "Vênus",
        size: 0.9,
        distance: 8,
        color: "#E3BB76",
        speed: 1.2,
        description: "O segundo planeta do Sol. É o mais quente.",
        gravity: "8.87 m/s²",
        temperature: "464°C",
        dayLength: "5832h"
    },
    {
        name: "Terra",
        size: 1,
        distance: 12,
        color: "#2233FF",
        speed: 1,
        description: "Nosso lar. O único planeta conhecido com vida.",
        gravity: "9.8 m/s²",
        temperature: "15°C",
        dayLength: "24h",
        moons: [
            {
                name: "Lua",
                size: 0.27,
                distance: 2,
                speed: 2,
                color: "#cccccc"
            }
        ]
    },
    {
        name: "Marte",
        size: 0.5,
        distance: 16,
        color: "#FF3300",
        speed: 0.8,
        description: "O Planeta Vermelho. Possui a montanha mais alta do sistema solar.",
        gravity: "3.71 m/s²",
        temperature: "-63°C",
        dayLength: "25h"
    },
    {
        name: "Júpiter",
        size: 2.2,
        distance: 24,
        color: "#D9A066",
        speed: 0.4,
        description: "O maior planeta do Sistema Solar. Um gigante gasoso.",
        gravity: "24.79 m/s²",
        temperature: "-108°C",
        dayLength: "10h",
        moons: [
            {
                name: "Europa",
                size: 0.2,
                distance: 3.5,
                speed: 1.5,
                color: "#f5f5f5"
            },
            {
                name: "Io",
                size: 0.25,
                distance: 4,
                speed: 2,
                color: "#ffffaa"
            }
        ]
    },
    {
        name: "Saturno",
        size: 1.8,
        distance: 32,
        color: "#EAD6B8",
        speed: 0.3,
        description: "Famoso por seus anéis complexos e proeminentes.",
        gravity: "10.44 m/s²",
        temperature: "-139°C",
        dayLength: "11h",
        moons: [
            {
                name: "Titã",
                size: 0.4,
                distance: 4,
                speed: 1,
                color: "#eebb00"
            }
        ]
    },
    {
        name: "Urano",
        size: 1.2,
        distance: 40,
        color: "#D1F5F8",
        speed: 0.2,
        description: "Um gigante de gelo com uma atmosfera fria.",
        gravity: "8.69 m/s²",
        temperature: "-197°C",
        dayLength: "17h"
    },
    {
        name: "Netuno",
        size: 1.2,
        distance: 48,
        color: "#5B5DDF",
        speed: 0.1,
        description: "O planeta mais distante do Sol. Ventos supersônicos.",
        gravity: "11.15 m/s²",
        temperature: "-201°C",
        dayLength: "16h"
    }
];
}),
"[project]/testeAntigravity/components/SolarSystem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SolarSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$Planet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/Planet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$SaturnRings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/SaturnRings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$Sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/Sun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$OrbitLine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/OrbitLine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$data$2f$planets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/data/planets.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function SolarSystem({ setSelectedPlanet }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$Sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/testeAntigravity/components/SolarSystem.js",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$data$2f$planets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["planets"].map((planet, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$OrbitLine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            distance: planet.distance
                        }, void 0, false, {
                            fileName: "[project]/testeAntigravity/components/SolarSystem.js",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$Planet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            ...planet,
                            setSelectedPlanet: setSelectedPlanet
                        }, void 0, false, {
                            fileName: "[project]/testeAntigravity/components/SolarSystem.js",
                            lineNumber: 18,
                            columnNumber: 21
                        }, this),
                        planet.name === "Saturno" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$SaturnRings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            distance: planet.distance
                        }, void 0, false, {
                            fileName: "[project]/testeAntigravity/components/SolarSystem.js",
                            lineNumber: 19,
                            columnNumber: 51
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/testeAntigravity/components/SolarSystem.js",
                    lineNumber: 16,
                    columnNumber: 17
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/testeAntigravity/components/SolarSystem.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/testeAntigravity/components/UI/Overlay.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeButton": "Overlay-module__OGTWkG__closeButton",
  "description": "Overlay-module__OGTWkG__description",
  "detailPanel": "Overlay-module__OGTWkG__detailPanel",
  "fadeInDown": "Overlay-module__OGTWkG__fadeInDown",
  "fadeInUp": "Overlay-module__OGTWkG__fadeInUp",
  "footer": "Overlay-module__OGTWkG__footer",
  "header": "Overlay-module__OGTWkG__header",
  "overlay": "Overlay-module__OGTWkG__overlay",
  "planetColor": "Overlay-module__OGTWkG__planetColor",
  "planetName": "Overlay-module__OGTWkG__planetName",
  "slideInRight": "Overlay-module__OGTWkG__slideInRight",
  "stat": "Overlay-module__OGTWkG__stat",
  "statLabel": "Overlay-module__OGTWkG__statLabel",
  "statValue": "Overlay-module__OGTWkG__statValue",
  "stats": "Overlay-module__OGTWkG__stats",
  "subtitle": "Overlay-module__OGTWkG__subtitle",
  "title": "Overlay-module__OGTWkG__title",
});
}),
"[project]/testeAntigravity/components/UI/Overlay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Overlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/UI/Overlay.module.css [app-ssr] (css module)");
;
;
function Overlay({ selectedPlanet, setSelectedPlanet }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "PLANETÁRIO VIRTUAL"
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                        lineNumber: 7,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Explore o Sistema Solar"
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                        lineNumber: 8,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            selectedPlanet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeButton,
                        onClick: ()=>setSelectedPlanet(null),
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planetName,
                        children: selectedPlanet.name
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].planetColor,
                        style: {
                            backgroundColor: selectedPlanet.color
                        }
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                        lineNumber: 20,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                        children: selectedPlanet.description
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: "Tamanho Relativo"
                                    }, void 0, false, {
                                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                        lineNumber: 24,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                        children: [
                                            selectedPlanet.size.toFixed(1),
                                            "×"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                        lineNumber: 25,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: "Gravidade"
                                    }, void 0, false, {
                                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                        lineNumber: 28,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                        children: selectedPlanet.gravity
                                    }, void 0, false, {
                                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: "Temperatura"
                                    }, void 0, false, {
                                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                        lineNumber: 32,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                        children: selectedPlanet.temperature
                                    }, void 0, false, {
                                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                        lineNumber: 33,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: "Dia"
                                    }, void 0, false, {
                                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                        lineNumber: 36,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                        children: selectedPlanet.dayLength
                                    }, void 0, false, {
                                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stat,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: "Distância"
                                    }, void 0, false, {
                                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                        children: [
                                            selectedPlanet.distance,
                                            " UA"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                lineNumber: 12,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Arraste para girar • Scroll para zoom • Clique nos planetas"
                }, void 0, false, {
                    fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/testeAntigravity/components/UI/Overlay.js",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/testeAntigravity/components/CameraController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CameraController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function CameraController({ selectedPlanet }) {
    const { camera, controls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const targetPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const targetLookAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const isTransitioning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedPlanet) {
            // Calculate target position based on planet distance and size
            // We want to be close enough to see details but far enough to see the whole planet
            const offset = selectedPlanet.size * 4 + 2;
            // We'll position the camera slightly above and to the side
            targetPosition.current.set(selectedPlanet.distance + offset, offset * 0.5, offset);
            targetLookAt.current.set(selectedPlanet.distance, 0, 0);
            isTransitioning.current = true;
        } else {
            // Reset to default view
            targetPosition.current.set(0, 20, 40);
            targetLookAt.current.set(0, 0, 0);
            isTransitioning.current = true;
        }
    }, [
        selectedPlanet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state, delta)=>{
        if (!isTransitioning.current) return;
        // Smoothly interpolate camera position
        camera.position.lerp(targetPosition.current, delta * 2);
        // Smoothly interpolate controls target (where the camera looks)
        if (controls) {
            controls.target.lerp(targetLookAt.current, delta * 2);
            controls.update();
        }
        // Stop transition when close enough
        if (camera.position.distanceTo(targetPosition.current) < 0.1) {
            isTransitioning.current = false;
        }
    });
    return null;
}
}),
"[project]/testeAntigravity/components/Scene.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/@react-three/drei/core/Stars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$SolarSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/SolarSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/UI/Overlay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$CameraController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/CameraController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Scene({ selectedPlanet, setSelectedPlanet }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        20,
                        40
                    ],
                    fov: 60
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                        attach: "background",
                        args: [
                            '#000008'
                        ]
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Scene.js",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 0.1
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Scene.js",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        position: [
                            0,
                            0,
                            0
                        ],
                        intensity: 2,
                        color: "#ffaa00",
                        distance: 100,
                        decay: 2
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Scene.js",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stars"], {
                        radius: 300,
                        depth: 60,
                        count: 20000,
                        factor: 7,
                        saturation: 0,
                        fade: true,
                        speed: 1
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Scene.js",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Stars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stars"], {
                        radius: 100,
                        depth: 50,
                        count: 5000,
                        factor: 10,
                        saturation: 0,
                        fade: true,
                        speed: 2
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Scene.js",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: null,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$SolarSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            setSelectedPlanet: setSelectedPlanet
                        }, void 0, false, {
                            fileName: "[project]/testeAntigravity/components/Scene.js",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Scene.js",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$CameraController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        selectedPlanet: selectedPlanet
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Scene.js",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        makeDefault: true,
                        enablePan: false,
                        minDistance: 5,
                        maxDistance: 200
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/Scene.js",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/testeAntigravity/components/Scene.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$Overlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                selectedPlanet: selectedPlanet,
                setSelectedPlanet: setSelectedPlanet
            }, void 0, false, {
                fileName: "[project]/testeAntigravity/components/Scene.js",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/testeAntigravity/components/UI/WelcomeScreen.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonAppear": "WelcomeScreen-module__EdFi1q__buttonAppear",
  "buttonIcon": "WelcomeScreen-module__EdFi1q__buttonIcon",
  "buttonText": "WelcomeScreen-module__EdFi1q__buttonText",
  "container": "WelcomeScreen-module__EdFi1q__container",
  "content": "WelcomeScreen-module__EdFi1q__content",
  "contentSlideIn": "WelcomeScreen-module__EdFi1q__contentSlideIn",
  "description": "WelcomeScreen-module__EdFi1q__description",
  "divider": "WelcomeScreen-module__EdFi1q__divider",
  "dividerExpand": "WelcomeScreen-module__EdFi1q__dividerExpand",
  "exploreButton": "WelcomeScreen-module__EdFi1q__exploreButton",
  "hint": "WelcomeScreen-module__EdFi1q__hint",
  "star": "WelcomeScreen-module__EdFi1q__star",
  "starsContainer": "WelcomeScreen-module__EdFi1q__starsContainer",
  "subtitle": "WelcomeScreen-module__EdFi1q__subtitle",
  "textFadeIn": "WelcomeScreen-module__EdFi1q__textFadeIn",
  "title": "WelcomeScreen-module__EdFi1q__title",
  "titleFadeIn": "WelcomeScreen-module__EdFi1q__titleFadeIn",
  "twinkle": "WelcomeScreen-module__EdFi1q__twinkle",
  "visible": "WelcomeScreen-module__EdFi1q__visible",
});
}),
"[project]/testeAntigravity/components/UI/WelcomeScreen.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WelcomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/UI/WelcomeScreen.module.css [app-ssr] (css module)");
;
;
;
function WelcomeScreen({ onExplore }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Trigger entrance animations
        setIsVisible(true);
    }, []);
    const handleExplore = ()=>{
        // Fade out before transitioning
        setIsVisible(false);
        setTimeout(()=>{
            onExplore();
        }, 800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container} ${isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visible : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].starsContainer,
                children: [
                    ...Array(20)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].star,
                        style: {
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }
                    }, i, false, {
                        fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "PLANETÁRIO VIRTUAL"
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                        children: "Bem-vindo à sua jornada pelo cosmos"
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Explore os planetas do nosso Sistema Solar em uma experiência 3D interativa. Descubra informações fascinantes sobre cada corpo celeste."
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exploreButton,
                        onClick: handleExplore,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonText,
                                children: "Explorar Agora"
                            }, void 0, false, {
                                fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonIcon,
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hint,
                        children: "Arraste para girar • Scroll para zoom • Clique nos planetas"
                    }, void 0, false, {
                        fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/testeAntigravity/components/UI/WelcomeScreen.js",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
}),
"[project]/testeAntigravity/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$Scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/Scene.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/components/UI/WelcomeScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/testeAntigravity/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Home() {
    const [selectedPlanet, setSelectedPlanet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showWelcome, setShowWelcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleExplore = ()=>{
        setShowWelcome(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            width: '100vw',
            height: '100vh'
        },
        children: showWelcome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$UI$2f$WelcomeScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onExplore: handleExplore
        }, void 0, false, {
            fileName: "[project]/testeAntigravity/app/page.js",
            lineNumber: 18,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$testeAntigravity$2f$components$2f$Scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            selectedPlanet: selectedPlanet,
            setSelectedPlanet: setSelectedPlanet
        }, void 0, false, {
            fileName: "[project]/testeAntigravity/app/page.js",
            lineNumber: 20,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/testeAntigravity/app/page.js",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5a80b798._.js.map