export default [
    {
        "part": "smart plating",
        "sinkPoints": 520,
        "recipes":[
            {
                "part": "smart plating",
                "input1": "reinforced iron plate",
                "rate1": 2,
                "input2": "rotor",
                "rate2": 2,
                "input3": null,
                "rate3": null,
                "input4": null,
                "rate4": null,
                "output": 2,
                "power": 15,
                "building": "assembler",
                "weightedCost": 0,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            },
            {
                "part": "plastic smart plating",
                "input1": "reinforced iron plate",
                "rate1": 2.5,
                "input2": "rotor",
                "rate2": 2.5,
                "input3": "plastic",
                "rate3": 7.5,
                "input4": null,
                "rate4": null,
                "output": 5,
                "power": 55,
                "building": "manufacturer",
                "weightedCost": 0,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            }
        ]
    },
    {
        "part": "automated wiring",
        "sinkPoints": 1440,
        "recipes":[
            {
                "part": "automated wiring",
                "input1": "stator",
                "rate1": 2.5,
                "input2": "cable",
                "rate2": 50,
                "input3": null,
                "rate3": null,
                "input4": null,
                "rate4": null,
                "output": 2.5,
                "power": 15,
                "building": "assembler",
                "weightedCost": 0,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            },
            {
                "part": "high speed wiring",
                "input1": "stator",
                "rate1": 3.75,
                "input2": "copper wire",
                "rate2": 75,
                "input3": "high speed connector",
                "rate3": 1.875,
                "input4": null,
                "rate4": null,
                "output": 7.5,
                "power": 55,
                "building": "manufacturer",
                "weightedCost": 0,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            }
        ]
    },
    {
        "part": "versatile framework",
        "sinkPoints": 1176,
        "recipes":[
            {
                "part": "versatile framework",
                "input1": "modular frame",
                "rate1": 2.5,
                "input2": "steel beam",
                "rate2": 30,
                "input3": null,
                "rate3": null,
                "input4": null,
                "rate4": null,
                "output": 5,
                "power": 15,
                "building": "assembler",
                "weightedCost": 0,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            },
            {
                "part": "flexible framework",
                "input1": "modular frame",
                "rate1": 3.75,
                "input2": "steel beam",
                "rate2": 22.5,
                "input3": "rubber",
                "rate3": 30,
                "input4": null,
                "rate4": null,
                "output": 7.5,
                "power": 55,
                "building": "manufacturer",
                "weightedCost": 0,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            }
        ]
    },
    {
        "part": "modular engine",
        "sinkPoints": 9960,
        "recipes":[
            {
                "part": "modular engine",
                "input1": "motor",
                "rate1": 2,
                "input2": "rubber",
                "rate2": 15,
                "input3": "smart plating",
                "rate3": 2,
                "input4": null,
                "rate4": null,
                "output": 1,
                "power": 55,
                "building": "manufacturer"
            }
        ]
    },
    {
        "part": "adaptive control unit",
        "sinkPoints": 86120,
        "recipes":[
            {
                "part": "adaptive control unit",
                "input1": "automated wiring",
                "rate1": 7.5,
                "input2": "circuit board",
                "rate2": 5,
                "input3": "heavy modular frame",
                "rate3": 1,
                "input4": "computer",
                "rate4": 1,
                "output": 1,
                "power": 55,
                "building": "manufacturer"
            }
        ]
    },
    {
        "part": "assembly director system",
        "sinkPoints": 543632,
        "recipes":[
            {
                "part": "assembly director system",
                "input1": "adaptive control unit",
                "rate1": 1.5,
                "input2": "super computer",
                "rate2": 0.75,
                "input3": null,
                "rate3": null,
                "input4": null,
                "rate4": null,
                "output": 0.75,
                "power": 15,
                "building": "assembler"
            }
        ]
    },
    {
        "part": "magnetic field generator",
        "sinkPoints": 15650,
        "recipes":[
            {
                "part": "magnetic field generator",
                "input1": "versatile framework",
                "rate1": 2.5,
                "input2": "electromagnetic control rod",
                "rate2": 1,
                "input3": "battery",
                "rate3": 5,
                "input4": null,
                "rate4": null,
                "output": 1,
                "power": 55,
                "building": "manufacturer",
            }
        ]
    },
    {
        "part": "nuclear pasta",
        "sinkPoints": 543424,
        "recipes":[
            {
                "part": "nuclear pasta",
                "input1": "copper powder",
                "rate1": 100,
                "input2": "pressure conversion cube",
                "rate2": 0.5,
                "input3": null,
                "rate3": null,
                "input4": null,
                "rate4": null,
                "output": 0.5,
                "power": 1500,
                "building": "particle accelerator",
            }
        ]
    },
    {
        "part": "thermal propulsion rocket",
        "sinkPoints": 732956,
        "recipes":[
            {
                "part": "thermal propulsion rocket",
                "input1": "modular engine",
                "rate1": 2.5,
                "input2": "turbo motor",
                "rate2": 1,
                "input3": "cooling system",
                "rate3": 3,
                "input4": "fused modular frame",
                "rate4": 1,
                "output": 1,
                "power": 55,
                "building": "manufacturer",
            }
        ]
    }
]