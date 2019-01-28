var simulatedData = [	{
    "Date": "01/27/19 08:11 AM",
    "Top Oil Temperature": "58",
    "Transformer Load": "1810",
    "Ambient Temperature": "34",
    "Calculated Ageing": "21",
    "Calculated Hotspot": "101",
    "Calculated Loss of life": "101",
    "Load Ratio": "68"
},
{
    "Date": "01/27/19 08:12 AM",
    "Top Oil Temperature": "58",
    "Transformer Load": "1806",
    "Ambient Temperature": "34",
    "Calculated Ageing": "21",
    "Calculated Hotspot": "101",
    "Calculated Loss of life": "101",
    "Load Ratio": "69"
},
{
    "Date": "01/27/19 08:13 AM",
    "Top Oil Temperature": "58",
    "Transformer Load": "1811",
    "Ambient Temperature": "34",
    "Calculated Ageing": "21",
    "Calculated Hotspot": "101",
    "Calculated Loss of life": "101",
    "Load Ratio": "69"
}

]

for (var i=0; i < simulatedData.length; i++){

    console.log(simulatedData[i]);

    if(i === (simulatedData.length - 1)){
        i=0;
    }
}