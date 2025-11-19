export const planets = [
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
            { name: "Lua", size: 0.27, distance: 2, speed: 2, color: "#cccccc" }
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
            { name: "Europa", size: 0.2, distance: 3.5, speed: 1.5, color: "#f5f5f5" },
            { name: "Io", size: 0.25, distance: 4, speed: 2, color: "#ffffaa" }
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
            { name: "Titã", size: 0.4, distance: 4, speed: 1, color: "#eebb00" }
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
