export default [
    {
        "part": "iron ingot",
        "recipes":[
            {
                "part": "iron ingot",
                "input1": "iron ore",
                "rate1": 30,
                "input2": null,
                "rate2": null,
                "output": 30,
                "power": 4,
                "building": "smelter",
                "weightedCost": 1,
                "resourceCost": {
                    "iron ore": 1,
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
                "part": "pure iron ingot",
                "input1": "iron ore",
                "rate1": 35,
                "input2": "water",
                "rate2": 20,
                "output": 65,
                "power": 30,
                "building": "refinery",
                "weightedCost": 0.538,
                "resourceCost": {
                    "iron ore": 0.538,
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
                "part": "iron alloy ingot",
                "input1": "iron ore",
                "rate1": 20,
                "input2": "copper ore",
                "rate2": 20,
                "output": 50,
                "power": 16,
                "building": "foundry",
                "weightedCost": 1.375,
                "resourceCost": {
                    "iron ore": 0.4,
                    "copper ore": 0.4,
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
        "part": "copper ingot",
        "recipes":[
            {
                "part": "copper ingot",
                "input1": "copper ore",
                "rate1": 30,
                "input2": null,
                "rate2": null,
                "output": 30,
                "power": 4,
                "building": "smelter",
                "weightedCost": 2.439,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 1,
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
                "part": "pure copper ingot",
                "input1": "copper ore",
                "rate1": 15,
                "input2": "water",
                "rate2": 10,
                "output": 37.5,
                "power": 30,
                "building": "refinery",
                "weightedCost": 0.9756,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0.4,
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
                "part": "copper alloy ingot",
                "input1": "copper ore",
                "rate1": 50,
                "input2": "iron ore",
                "rate2": 25,
                "output": 100,
                "power": 16,
                "building": "foundry",
                "weightedCost": 1.4695,
                "resourceCost": {
                    "iron ore": 0.25,
                    "copper ore": 0.5,
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
        "part": "steel ingot",
        "recipes":[
            {
                "part": "steel ingot",
                "input1": "iron ore",
                "rate1": 45,
                "input2": "coal",
                "rate2": 45,
                "output": 45,
                "power": 16,
                "building": "foundry",
                "weightedCost": 3.278,
                "resourceCost": {
                    "iron ore": 1,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 1,
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
                "part": "coke steel ingot",
                "input1": "iron ore",
                "rate1": 75,
                "input2": "petroleum coke",
                "rate2": 75,
                "output": 100,
                "power": 16,
                "building": "foundry",
                "weightedCost": 1.8778125,
                "resourceCost": {
                    "iron ore": 0.75,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0.188,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            },
            {
                "part": "compacted steel ingot",
                "input1": "iron ore",
                "rate1": 22.5,
                "input2": "compacted coal",
                "rate2": 11.25,
                "output": 37.5,
                "power": 16,
                "building": "foundry",
                "weightedCost": 4.3701,
                "resourceCost": {
                    "iron ore": 0.6,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0.3,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 0.3,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            },
            {
                "part": "solid steel ingot",
                "input1": "iron ingot",
                "rate1": 40,
                "input2": "coal",
                "rate2": 40,
                "output": 60,
                "power": 16,
                "building": "foundry",
                "weightedCost": 1.877641,
                "resourceCost": {
                    "iron ore": 0.359,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0.667,
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
        "part": "caterium ingot",
        "recipes":[
            {
                "part": "caterium ingot",
                "input1": "caterium ore",
                "rate1": 45,
                "input2": null,
                "rate2": null,
                "output": 15,
                "power": 4,
                "building": "smelter",
                "weightedCost": 19.125,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 3,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            },
            {
                "part": "pure caterium ingot",
                "input1": "caterium ore",
                "rate1": 24,
                "input2": "water",
                "rate2": 24,
                "output": 12,
                "power": 30,
                "building": "refinery",
                "weightedCost": 12.75,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 2,
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
        "part": "quartz crystal",
        "recipes":[
            {
                "part": "quartz crystal",
                "input1": "raw quartz",
                "rate1": 37.5,
                "input2": null,
                "rate2": null,
                "output": 22.5,
                "power": 4,
                "building": "constructor",
                "weightedCost": 11.1717,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 1.667,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            },
            {
                "part": "pure quartz crystal",
                "input1": "raw quartz",
                "rate1": 67.5,
                "input2": "water",
                "rate2": 37.5,
                "output": 52.5,
                "power": 30,
                "building": "refinery",
                "weightedCost": 8.6181,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 1.286,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            }
        ]
    },
    {
        "part": "silica",
        "recipes":[
            {
                "part": "silica",
                "input1": "raw quartz",
                "rate1": 22.5,
                "input2": null,
                "rate2": null,
                "output": 37.5,
                "power": 4,
                "building": "constructor",
                "weightedCost": 4.0218,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0.6,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            },
            {
                "part": "cheap silica",
                "input1": "raw quartz",
                "rate1": 11.25,
                "input2": "limestone",
                "rate2": 18.75,
                "output": 26.25,
                "power": 15,
                "building": "assembler",
                "weightedCost": 3.8234,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0.714,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0.429,
                    "bauxite": 0,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            }
        ]
    },
    {
        "part": "black powder",
        "recipes":[
            {
                "part": "black powder",
                "input1": "coal",
                "rate1": 7.5,
                "input2": "sulphur",
                "rate2": 15,
                "output": 7.5,
                "power": 15,
                "building": "assembler",
                "weightedCost": 22.856,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 1,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 2,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            },
            {
                "part": "gun powder",
                "input1": "compacted coal",
                "rate1": 3.75,
                "input2": "sulphur",
                "rate2": 7.5,
                "output": 15,
                "power": 15,
                "building": "assembler",
                "weightedCost": 8.28625,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0.25,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0,
                    "sulphur": 0.75,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            }
        ]
    },
    {
        "part": "compacted coal",
        "recipes":[
            {
                "part": "compacted coal",
                "input1": "coal",
                "rate1": 25,
                "input2": "sulphur",
                "rate2": 25,
                "output": 25,
                "power": 15,
                "building": "assembler"
            }
        ]
    },
    {
        "part": "alumina solution",
        "recipes":[
            {
                "part": "alumina solution",
                "input1": "bauxite",
                "rate1": 120,
                "input2": "water",
                "rate2": 180,
                "output": 120,
                "byProduct": "silica",
                "output2": 50,
                "power": 30,
                "building": "refinery",
                "weightedCost": 5.6029,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": -0.298,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": -0.179,
                    "bauxite": 1,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            },
            {
                "part": "sloppy alumina",
                "input1": "bauxite",
                "rate1": 200,
                "input2": "water",
                "rate2": 200,
                "output": 240,
                "power": 30,
                "building": "refinery",
                "weightedCost": 5.9967,
                "resourceCost": {
                    "iron ore": 0,
                    "copper ore": 0,
                    "limestone": 0,
                    "coal": 0,
                    "crude oil": 0,
                    "caterium ore": 0,
                    "raw quartz": 0,
                    "bauxite": 0.833,
                    "sulphur": 0,
                    "nitrogen": 0,
                    "uranium": 0,
                }
            }
        ]
    },
    {
        "part": "packaged alumina solution",
        "recipes":[
            {
                "part": "packaged alumina solution",
                "input1": "alumina solution",
                "rate1": 120,
                "input2": "empty canister",
                "rate2": 120,
                "output": 120,
                "power": 10,
                "building": "packager"
            }
        ]
    },
    {
        "part": "sulphuric acid",
        "recipes":[
            {
                "part": "sulphuric acid",
                "input1": "sulphur",
                "rate1": 50,
                "input2": "water",
                "rate2": 50,
                "output": 100,
                "power": 30,
                "building": "refinery"
            }
        ]
    }, 
    {
        "part": "packaged sulphuric acid",
        "recipes":[
            {
                "part": "packaged sulphuric acid",
                "input1": "sulphuric acid",
                "rate1": 40,
                "input2": "empty canister",
                "rate2": 40,
                "output": 40,
                "power": 10,
                "building": "packager"
            }
        ]
    }, 
    {
        "part": "packaged nitrogen gas",
        "recipes":[
            {
                "part": "packaged nitrogen gas",
                "input1": "nitrogen gas",
                "rate1": 240,
                "input2": "empty fluid tank",
                "rate2": 60,
                "output": 60,
                "power": 10,
                "building": "packager"
            }
        ]
    }
]