export default [
    {
        "part": "iron plate",
        "recipes":[
            {
                "part": "iron plate",
                "input1": "iron ingot",
                "rate1": 30,
                "input2": null,
                "rate2": null,
                "output": 20,
                "power": 4,
                "building": "constructor"
            },
            {
                "part": "coated iron plate",
                "input1": "iron ingot",
                "rate1": 50,
                "input2": "plastic",
                "rate2": 10,
                "output": 75,
                "power": 15,
                "building": "assembler"
            },
            {
                "part": "steel coated plate",
                "input1": "steel ingot",
                "rate1": 7.5,
                "input2": "plastic",
                "rate2": 5,
                "output": 45,
                "power": 15,
                "building": "assembler"
            }
        ]
    },
    {
        "part": "iron rod",
        "recipes":[
            {
                "part": "iron rod",
                "input1": "iron ingot",
                "rate1": 15,
                "input2": null,
                "rate2": null,
                "output": 15,
                "power": 4,
                "building": "constructor"
            },
            {
                "part": "steel rod",
                "input1": "steel ingot",
                "rate1": 12,
                "input2": null,
                "rate2": null,
                "output": 48,
                "power": 4,
                "building": "constructor"
            }
        ]
    },
    {
        "part": "screw",
        "recipes":[
            {
                "part": "screw",
                "input1": "iron rod",
                "rate1": 10,
                "input2": null,
                "rate2": null,
                "output": 40,
                "power": 4,
                "building": "constructor"
            },
            {
                "part": "casted screw",
                "input1": "iron ingot",
                "rate1": 12.5,
                "input2": null,
                "rate2": null,
                "output": 50,
                "power": 4,
                "building": "constructor"
            },
            {
                "part": "steel screw",
                "input1": "steel beam",
                "rate1": 5,
                "input2": null,
                "rate2": null,
                "output": 260,
                "power": 4,
                "building": "constructor"
            }
        ]
    },
    {
        "part": "copper wire",
        "recipes":[
            {
                "part": "copper wire",
                "input1": "copper ingot",
                "rate1": 15,
                "input2": null,
                "rate2": null,
                "output": 30,
                "power": 4,
                "building": "constructor"
            },
            {
                "part": "fused wire",
                "input1": "copper ingot",
                "rate1": 12,
                "input2": "caterium ingot",
                "rate2": 3,
                "output": 90,
                "power": 15,
                "building": "assembler"
            },
            {
                "part": "iron wire",
                "input1": "iron ingot",
                "rate1": 12.5,
                "input2": null,
                "rate2": null,
                "output": 22.5,
                "power": 4,
                "building": "constructor"
            },
            {
                "part": "caterium wire",
                "input1": "caterium ingot",
                "rate1": 15,
                "input2": null,
                "rate2": null,
                "output": 120,
                "power": 4,
                "building": "constructor"
            }
        ]
    },
    {
        "part": "cable",
        "recipes":[
            {
                "part": "cable",
                "input1": "copper wire",
                "rate1": 60,
                "input2": null,
                "rate2": null,
                "output": 30,
                "power": 4,
                "building": "constructor"
            },
            {
                "part": "coated cable",
                "input1": "copper wire",
                "rate1": 37.5,
                "input2": "heavy oil residue",
                "rate2": 15,
                "output": 67.5,
                "power": 30,
                "building": "refinery"
            },
            {
                "part": "insulated cable",
                "input1": "copper wire",
                "rate1": 45,
                "input2": "rubber",
                "rate2": 30,
                "output": 100,
                "power": 15,
                "building": "assembler"
            },
            {
                "part": "quickwire cable",
                "input1": "quickwire",
                "rate1": 7.5,
                "input2": "rubber",
                "rate2": 5,
                "output": 27.5,
                "power": 15,
                "building": "assembler"
            }
        ]
    },
    {
        "part": "copper sheet",
        "recipes":[
            {
                "part": "copper sheet",
                "input1": "copper ingot",
                "rate1": 20,
                "input2": null,
                "rate2": null,
                "output": 10,
                "power": 4,
                "building": "constructor"
            },
            {
                "part": "steamed copper sheet",
                "input1": "copper ingot",
                "rate1": 22.5,
                "input2": "water",
                "rate2": 22.5,
                "output": 22.5,
                "power": 30,
                "building": "refinery"
            }
        ]
    },
    {
        "part": "concrete",
        "recipes":[
            {
                "part": "concrete",
                "input1": "limestone",
                "rate1": 45,
                "input2": null,
                "rate2": null,
                "output": 15,
                "power": 4,
                "building": "constructor"
            },
            {
                "part": "rubber concrete",
                "input1": "limestone",
                "rate1": 50,
                "input2": "rubber",
                "rate2": 10,
                "output": 45,
                "power": 15,
                "building": "assembler"
            },
            {
                "part": "wet concrete",
                "input1": "limestone",
                "rate1": 120,
                "input2": "water",
                "rate2": 100,
                "output": 80,
                "power": 30,
                "building": "refinery"
            },
            {
                "part": "fine concrete",
                "input1": "limestone",
                "rate1": 30,
                "input2": "silica",
                "rate2": 7.5,
                "output": 25,
                "power": 15,
                "building": "assembler"
            }
        ]
    },
    {
        "part": "steel pipe",
        "recipes":[
            {
                "part": "steel pipe",
                "input1": "steel ingot",
                "rate1": 30,
                "input2": null,
                "rate2": null,
                "output": 20,
                "power": 4,
                "building": "constructor"
            }
        ]
    },
    {
        "part": "steel beam",
        "recipes":[
            {
                "part": "steel beam",
                "input1": "steel ingot",
                "rate1": 60,
                "input2": null,
                "rate2": null,
                "output": 15,
                "power": 4,
                "building": "constructor"
            }
        ]
    },
    {
        "part": "quickwire",
        "recipes":[
            {
                "part": "quickwire",
                "input1": "caterium ingot",
                "rate1": 12,
                "input2": null,
                "rate2": null,
                "output": 60,
                "power": 4,
                "building": "constructor"
            },
            {
                "part": "fused quickwire",
                "input1": "caterium ingot",
                "rate1": 7.5,
                "input2": "copper ingot",
                "rate2": 37.5,
                "output": 90,
                "power": 15,
                "building": "assembler"
            }
        ]
    },
    {
        "part": "aluminium scrap",
        "recipes":[
            {
                "part": "aluminium scrap",
                "input1": "alumina solution",
                "rate1": 240,
                "input2": "coal",
                "rate2": 120,
                "output": 360,
                "byProduct": "water",
                "output2": 120,
                "power": 30,
                "building": "refinery"
            },
            {
                "part": "electrode scrap",
                "input1": "alumina solution",
                "rate1": 180,
                "input2": "petroleum coke",
                "rate2": 60,
                "output": 300,
                "byProduct": "water",
                "output2": 105,
                "power": 30,
                "building": "refinery"
            },
            {
                "part": "instant scrap",
                "input1": "bauxite",
                "rate1": 150,
                "input2": "coal",
                "rate2": 100,
                "input3": "sulphuric acid",
                "rate3": 50,
                "input4": "water",
                "rate4": 60,
                "output": 300,
                "byProduct": "water",
                "output2": 50,
                "power": 75,
                "building": "blender"
            }
        ]
    },
    {
        "part": "copper powder",
        "recipes":[
            {
                "part": "copper powder",
                "input1": "copper ingot",
                "rate1": 300,
                "input2": null,
                "rate2": null,
                "output": 50,
                "power": 4,
                "building": "constructor"
            }
        ]
    },
    {
        "part": "nitric acid",
        "recipes":[
            {
                "part": "nitric acid",
                "input1": "nitrogen gas",
                "rate1": 120,
                "input2": "water",
                "rate2": 30,
                "input3": "iron plate",
                "rate3": 10,
                "output": 30,
                "power": 75,
                "building": "blender"
            },
            {
                "part": "unpackaged nitric acid",
                "input1": "packaged nitric acid",
                "rate1": 20,
                "input2": null,
                "rate2": null,
                "output": 20,
                "byProduct": null,
                "output2": null,
                "power": 10,
                "building": "packager"
            }
        ]
    },
    {
        "part": "packaged nitric acid",
        "recipes":[
            {
                "part": "packaged nitric acid",
                "input1": "nitric acid",
                "rate1": 30,
                "input2": null,
                "rate2": null,
                "output": 30,
                "power": 10,
                "building": "packager"
            }
        ]
    }
]