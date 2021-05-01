var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


// Kolory
const colors = {
    Green : "#2fd438",
    Red : "#fa0404",
    Orange: "#fa3d04",
    LightOrange: "#fa7b04",
    DeepYellow:  "#fab804",
    Yellow : "#c3d42f",
    Black : "#000000",
    DimGrey: "#696969",
    Grey: "#808080",
    Violet: "#EE82EE",
    Brown: "#8B4513",
    GrassGreen: "#288005",
    GrassLightGreen: "#207800",
};



// statyczne obiekty na mapie


// Funkcje rysowania

function draw (startWithX, startWithY, moveToX, moveToY, color){    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startWithX-0.5, startWithY-0.5);
    ctx.lineTo(moveToX-0.5, moveToY-0.5);
    ctx.stroke();
    ctx.closePath();
};

function draw2 (startWithX, startWithY, moveToX, moveToY, color){    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(startWithX, startWithY);
    ctx.lineTo(moveToX, moveToY);
    ctx.stroke();
    ctx.closePath();
};


function simpleSquareObject (x,y,diagonal,color){  
// x y na osi czyli gdzie znajduje sie obiekt
//   i przekatna obiektu czyli na jej podstawie ustala sie wielkosc
x2 = x;
y2 = y + diagonal;
x3 = x + diagonal;
y3 = y + diagonal;
x4 = x + diagonal;
y4 = y;
draw(x,y,x2,y2,color);
draw(x2,y2,x3,y3,color);
draw(x3,y3,x4,y4,color);
draw(x4,y4,x,y,color);
}; 

function squarePixel(x,y,color){
    // samo simpleSqureObject o diagonalu-1 ma 2 pixele, Square pixel to 4x4 pixele
    simpleSquareObject(x,y,1,color);
    simpleSquareObject(x+2,y,1,color);
    simpleSquareObject(x,y+2,1,color);
    simpleSquareObject(x+2,y+2,1,color);
};

// function squreCustomPixel(x,y,diagonal,color){
//     simpleSquareObject(100,100,1,colors.green);
//     simpleSquareObject(102,100,1,colors.green);
//     simpleSquareObject(100,102,1,colors.green);
//     simpleSquareObject(102,102,1,colors.green);
// };


// podaje wspolrzedne i rysuje kwadraciki na tych wspolrzednych
function sketch(x,y,color,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,
    x21,x22,x23,x24,x25,x26,x27,x28,x29,x30,x31,x32,x33,x34,x35,x36,x37,x38,x39,x40,x41,x42,
    x43,x44,x45,x46,x47,x48,x49,x50,x51,x52,x53,x54,x55,x56,x57,x58,x59,x60,x61,x62,x63,x64,x65,x66,
    x67,x68,x69,x70,x71,x72,x73,x74,x75,x76,x77,x78,x79,x80,x81,x82,x83,x84,x85,x86,x87,x88,x89,x90,
    x91,x92,x93,x94,x95,x96,x97,x98,x99,x100){
    
    if(x1 == 1){
        draw (x, y, x+1, y, color);
    };
    if(x2 == 1){
        draw (x+1, y, x+2, y, color);
    };
    if(x3 == 1){
        draw (x+2, y, x+3, y, color);
    };
    if(x4 == 1){
        draw (x+3, y, x+4, y, color);
    };
    if(x5 == 1){
        draw (x+4, y, x+5, y, color);
    };
    if(x6 == 1){
        draw (x+5, y, x+6, y, color);
    };
    if(x7 == 1){
        draw (x+6, y, x+7, y, color);
    };
    if(x8 == 1){
        draw (x+7, y, x+8, y, color);
    };
    if(x9 == 1){
        draw (x+8, y, x+9, y, color);
    };
    if(x10 == 1){
        draw (x+9, y, x+10, y, color);
    };
    if(x11 == 1){
        draw (x, y+1, x+1, y+1, color);
    };
    if(x12 == 1){
        draw (x+1, y+1, x+2, y+1, color);
    };
    if(x13 == 1){
        draw (x+2, y+1, x+3, y+1, color);
    };
    if(x14 == 1){
        draw (x+3, y+1, x+4, y+1, color);
    };
    if(x15 == 1){
        draw (x+4, y+1, x+5, y+1, color);
    };
    if(x16 == 1){
        draw (x+5, y+1, x+6, y+1, color);
    };
    if(x17 == 1){
        draw (x+6, y+1, x+7, y+1, color);
    };
    if(x18 == 1){
        draw (x+7, y+1, x+8, y+1, color);
    };
    if(x19 == 1){
        draw (x+8, y+1, x+9, y+1, color);
    };
    if(x20 == 1){
        draw (x+9, y+1, x+10, y+1, color);
    };
    if(x21 == 1){
        draw (x, y+2, x+1, y+2, color);
    };
    if(x22 == 1){
        draw (x+1, y+2, x+2, y+2, color);
    };
    if(x23 == 1){
        draw (x+2, y+2, x+3, y+2, color);
    };
    if(x24 == 1){
        draw (x+3, y+2, x+4, y+2, color);
    };
    if(x25 == 1){
        draw (x+4, y+2, x+5, y+2, color);
    };
    if(x26 == 1){
        draw (x+5, y+2, x+6, y+2, color);
    };
    if(x27 == 1){
        draw (x+6, y+2, x+7, y+2, color);
    };
    if(x28 == 1){
        draw (x+7, y+2, x+8, y+2, color);
    };
    if(x29 == 1){
        draw (x+8, y+2, x+9, y+2, color);
    };
    if(x30 == 1){
        draw (x+9, y+2, x+10, y+2, color);
    };
    if(x31 == 1){
        draw (x, y+3, x+1, y+3, color);
    };
    if(x32 == 1){
        draw (x+1, y+3, x+2, y+3, color);
    };
    if(x33 == 1){
        draw (x+2, y+3, x+3, y+3, color);
    };
    if(x34 == 1){
        draw (x+3, y+3, x+4, y+3, color);
    };
    if(x35 == 1){
        draw (x+4, y+3, x+5, y+3, color);
    };
    if(x36 == 1){
        draw (x+5, y+3, x+6, y+3, color);
    };
    if(x37 == 1){
        draw (x+6, y+3, x+7, y+3, color);
    };
    if(x38 == 1){
        draw (x+7, y+3, x+8, y+3, color);
    };
    if(x39 == 1){
        draw (x+8, y+3, x+9, y+3, color);
    };
    if(x40 == 1){
        draw (x+9, y+3, x+10, y+3, color);
    };
    if(x41 == 1){
        draw (x, y+4, x+1, y+4, color);
    };
    if(x42 == 1){
        draw (x+1, y+4, x+2, y+4, color);
    };
    if(x43 == 1){
        draw (x+2, y+4, x+3, y+4, color);
    };
    if(x44 == 1){
        draw (x+3, y+4, x+4, y+4, color);
    };
    if(x45 == 1){
        draw (x+4, y+4, x+5, y+4, color);
    };
    if(x46 == 1){
        draw (x+5, y+4, x+6, y+4, color);
    };
    if(x47 == 1){
        draw (x+6, y+4, x+7, y+4, color);
    };
    if(x48 == 1){
        draw (x+7, y+4, x+8, y+4, color);
    };
    if(x49 == 1){
        draw (x+8, y+4, x+9, y+4, color);
    };
    if(x50 == 1){
        draw (x+9, y+4, x+10, y+4, color);
    };
    if(x51 == 1){
        draw (x, y+5, x+1, y+5, color);
    };
    if(x52 == 1){
        draw (x+1, y+5, x+2, y+5, color);
    };
    if(x53 == 1){
        draw (x+2, y+5, x+3, y+5, color);
    };
    if(x54 == 1){
        draw (x+3, y+5, x+4, y+5, color);
    };
    if(x55 == 1){
        draw (x+4, y+5, x+5, y+5, color);
    };
    if(x56 == 1){
        draw (x+5, y+5, x+6, y+5, color);
    };
    if(x57 == 1){
        draw (x+6, y+5, x+7, y+5, color);
    };
    if(x58 == 1){
        draw (x+7, y+5, x+8, y+5, color);
    };
    if(x59 == 1){
        draw (x+8, y+5, x+9, y+5, color);
    };
    if(x60 == 1){
        draw (x+9, y+5, x+10, y+5, color);
    };
    if(x61 == 1){
        draw (x, y+6, x+1, y+6, color);
    };
    if(x62 == 1){
        draw (x+1, y+6, x+2, y+6, color);
    };
    if(x63 == 1){
        draw (x+2, y+6, x+3, y+6, color);
    };
    if(x64 == 1){
        draw (x+3, y+6, x+4, y+6, color);
    };
    if(x65 == 1){
        draw (x+4, y+6, x+5, y+6, color);
    };
    if(x66 == 1){
        draw (x+5, y+6, x+6, y+6, color);
    };
    if(x67 == 1){
        draw (x+6, y+6, x+7, y+6, color);
    };
    if(x68 == 1){
        draw (x+7, y+6, x+8, y+6, color);
    };
    if(x69 == 1){
        draw (x+8, y+6, x+9, y+6, color);
    };
    if(x70 == 1){
        draw (x+9, y+6, x+10, y+6, color);
    };
    if(x71 == 1){
        draw (x, y+7, x+1, y+7, color);
    };
    if(x72 == 1){
        draw (x+1, y+7, x+2, y+7, color);
    };
    if(x73 == 1){
        draw (x+2, y+7, x+3, y+7, color);
    };
    if(x74 == 1){
        draw (x+3, y+7, x+4, y+7, color);
    };
    if(x75 == 1){
        draw (x+4, y+7, x+5, y+7, color);
    };
    if(x76 == 1){
        draw (x+5, y+7, x+6, y+7, color);
    };
    if(x77 == 1){
        draw (x+6, y+7, x+7, y+7, color);
    };
    if(x78 == 1){
        draw (x+7, y+7, x+8, y+7, color);
    };
    if(x79 == 1){
        draw (x+8, y+7, x+9, y+7, color);
    };
    if(x80 == 1){
        draw (x+9, y+7, x+10, y+7, color);
    };
    if(x81 == 1){
        draw (x, y+8, x+1, y+8, color);
    };
    if(x82 == 1){
        draw (x+1, y+8, x+2, y+8, color);
    };
    if(x83 == 1){
        draw (x+2, y+8, x+3, y+8, color);
    };
    if(x84 == 1){
        draw (x+3, y+8, x+4, y+8, color);
    };
    if(x85 == 1){
        draw (x+4, y+8, x+5, y+8, color);
    };
    if(x86 == 1){
        draw (x+5, y+8, x+6, y+8, color);
    };
    if(x87 == 1){
        draw (x+6, y+8, x+7, y+8, color);
    };
    if(x88 == 1){
        draw (x+7, y+8, x+8, y+8, color);
    };
    if(x89 == 1){
        draw (x+8, y+8, x+9, y+8, color);
    };
    if(x90 == 1){
        draw (x+9, y+8, x+10, y+8, color);
    };
    if(x91 == 1){
        draw (x, y+9, x+1, y+9, color);
        };
    if(x92 == 1){
        draw (x+1, y+9, x+2, y+9, color);
        };
    if(x93 == 1){
        draw (x+2, y+9, x+3, y+9, color);
        };
    if(x94 == 1){
        draw (x+3, y+9, x+4, y+9, color);
        };
    if(x95 == 1){
        draw (x+4, y+9, x+5, y+9, color);
        };
    if(x96 == 1){
        draw (x+5, y+9, x+6, y+9, color);
        };
    if(x97 == 1){
        draw (x+6, y+9, x+7, y+9, color);
        };
    if(x98 == 1){
        draw (x+7, y+9, x+8, y+9, color);
        };
    if(x99 == 1){
        draw (x+8, y+9, x+9, y+9, color);
        };
    if(x100 == 1){
        draw (x+9, y+9, x+10, y+9, color);
        };
};

function sketch2(x,y,x1,color1,x2,color2,x3,color3,x4,color4,x5,color5,x6,color6,x7,color7,x8,color8,x9,color9,x10,color10,
    x11,color11,x12,color12,x13,color13,x14,color14,x15,color15,x16,color16,x17,color17,x18,color18,x19,color19,x20,color20,
    x21,color21,x22,color22,x23,color23,x24,color24,x25,color25,x26,color26,x27,color27,x28,color28,x29,color29,x30,color30,
    x31,color31,x32,color32,x33,color33,x34,color34,x35,color35,x36,color36,x37,color37,x38,color38,x39,color39,x40,color40,
    x41,color41,x42,color42,x43,color43,x44,color44,x45,color45,x46,color46,x47,color47,x48,color48,x49,color49,x50,color50,
    x51,color51,x52,color52,x53,color53,x54,color54,x55,color55,x56,color56,x57,color57,x58,color58,x59,color59,x60,color60,
    x61,color61,x62,color62,x63,color63,x64,color64,x65,color65,x66,color66,x67,color67,x68,color68,x69,color69,x70,color70,
    x71,color71,x72,color72,x73,color73,x74,color74,x75,color75,x76,color76,x77,color77,x78,color78,x79,color79,x80,color80,
    x81,color81,x82,color82,x83,color83,x84,color84,x85,color85,x86,color86,x87,color87,x88,color88,x89,color89,x90,color90,
    x91,color91,x92,color92,x93,color93,x94,color94,x95,color95,x96,color96,x97,color97,x98,color98,x99,color99,x100,color100){
    
    // squarePixel to 4x4 pixele wiec sketch2 (czyli pole, jedna kratka) to 4x4 x 10 = 40 x 40

    if(x1 == 1){
        // draw (x, y, x+1, y, color);
        squarePixel(x,y,color1);
    };
    if(x2 == 1){
        // draw (x+1, y, x+2, y, color);
        squarePixel(x+4,y,color2);
    };
    if(x3 == 1){
        // draw (x+2, y, x+3, y, color);
        squarePixel(x+8,y,color3);
    };
    if(x4 == 1){
        // draw (x+3, y, x+4, y, color);
        squarePixel(x+12,y,color4);
    };
    if(x5 == 1){
        // draw (x+4, y, x+5, y, color);
        squarePixel(x+16,y,color5);
    };
    if(x6 == 1){
        // draw (x+5, y, x+6, y, color);
        squarePixel(x+20,y,color6);
    };
    if(x7 == 1){
        // draw (x+6, y, x+7, y, color);
        squarePixel(x+24,y,color7);
    };
    if(x8 == 1){
        // draw (x+7, y, x+8, y, color);
        squarePixel(x+28,y,color8);
    };
    if(x9 == 1){
        // draw (x+8, y, x+9, y, color);
        squarePixel(x+32,y,color9);
    };
    if(x10 == 1){
        // draw (x+9, y, x+10, y, color);
        squarePixel(x+36,y,color10);
    };
    if(x11 == 1){
        // draw (x, y+1, x+1, y+1, color);
        squarePixel(x,y+4,color11);
    };
    if(x12 == 1){
        // draw (x+1, y+1, x+2, y+1, color);
        squarePixel(x+4,y+4,color12);
    };
    if(x13 == 1){
        // draw (x+2, y+1, x+3, y+1, color);
        squarePixel(x+8,y+4,color13);
    };
    if(x14 == 1){
        // draw (x+3, y+1, x+4, y+1, color);
        squarePixel(x+12,y+4,color14);
    };
    if(x15 == 1){
        // draw (x+4, y+1, x+5, y+1, color);
        squarePixel(x+16,y+4,color15);
    };
    if(x16 == 1){
        // draw (x+5, y+1, x+6, y+1, color);
        squarePixel(x+20,y+4,color16);
    };
    if(x17 == 1){
        // draw (x+6, y+1, x+7, y+1, color);
        squarePixel(x+24,y+4,color17);
    };
    if(x18 == 1){
        // draw (x+7, y+1, x+8, y+1, color);
        squarePixel(x+28,y+4,color18);
    };
    if(x19 == 1){
        // draw (x+8, y+1, x+9, y+1, color);
        squarePixel(x+32,y+4,color19);
    };
    if(x20 == 1){
        // draw (x+9, y+1, x+10, y+1, color);
        squarePixel(x+36,y+4,color20);
    };
    if(x21 == 1){
        // draw (x, y+2, x+1, y+2, color);
        squarePixel(x,y+8,color21);
    };
    if(x22 == 1){
        // draw (x+1, y+2, x+2, y+2, color);
        squarePixel(x+4,y+8,color22);
    };
    if(x23 == 1){
        // draw (x+2, y+2, x+3, y+2, color);
        squarePixel(x+8,y+8,color23);
    };
    if(x24 == 1){
        // draw (x+3, y+2, x+4, y+2, color);
        squarePixel(x+12,y+8,color24);
    };
    if(x25 == 1){
        // draw (x+4, y+2, x+5, y+2, color);
        squarePixel(x+16,y+8,color25);
    };
    if(x26 == 1){
        // draw (x+5, y+2, x+6, y+2, color);
        squarePixel(x+20,y+8,color26);
    };
    if(x27 == 1){
        // draw (x+6, y+2, x+7, y+2, color);
        squarePixel(x+24,y+8,color27);
    };
    if(x28 == 1){
        // draw (x+7, y+2, x+8, y+2, color);
        squarePixel(x+28,y+8,color28);
    };
    if(x29 == 1){
        // draw (x+8, y+2, x+9, y+2, color);
        squarePixel(x+32,y+8,color29);
    };
    if(x30 == 1){
        // draw (x+9, y+2, x+10, y+2, color);
        squarePixel(x+36,y+8,color30);
    };
    if(x31 == 1){
        // draw (x, y+3, x+1, y+3, color);
        squarePixel(x,y+12,color31);
    };
    if(x32 == 1){
        // draw (x+1, y+3, x+2, y+3, color);
        squarePixel(x+4,y+12,color32);
    };
    if(x33 == 1){
        // draw (x+2, y+3, x+3, y+3, color);
        squarePixel(x+8,y+12,color33);
    };
    if(x34 == 1){
        // draw (x+3, y+3, x+4, y+3, color);
        squarePixel(x+12,y+12,color34);
    };
    if(x35 == 1){
        // draw (x+4, y+3, x+5, y+3, color);
        squarePixel(x+16,y+12,color35);
    };
    if(x36 == 1){
        // draw (x+5, y+3, x+6, y+3, color);
        squarePixel(x+20,y+12,color36);
    };
    if(x37 == 1){
        // draw (x+6, y+3, x+7, y+3, color);
        squarePixel(x+24,y+12,color37);
    };
    if(x38 == 1){
        // draw (x+7, y+3, x+8, y+3, color);
        squarePixel(x+28,y+12,color38);
    };
    if(x39 == 1){
        // draw (x+8, y+3, x+9, y+3, color);
        squarePixel(x+32,y+12,color39);
    };
    if(x40 == 1){
        // draw (x+9, y+3, x+10, y+3, color);
        squarePixel(x+36,y+12,color40);
    };
    if(x41 == 1){
        // draw (x, y+4, x+1, y+4, color);
        squarePixel(x,y+16,color41);
    };
    if(x42 == 1){
        // draw (x+1, y+4, x+2, y+4, color);
        squarePixel(x+4,y+16,color42);
    };
    if(x43 == 1){
        // draw (x+2, y+4, x+3, y+4, color);
        squarePixel(x+8,y+16,color43);
    };
    if(x44 == 1){
        // draw (x+3, y+4, x+4, y+4, color);
        squarePixel(x+12,y+16,color44);
    };
    if(x45 == 1){
        // draw (x+4, y+4, x+5, y+4, color);
        squarePixel(x+16,y+16,color45);
    };
    if(x46 == 1){
        // draw (x+5, y+4, x+6, y+4, color);
        squarePixel(x+20,y+16,color46);
    };
    if(x47 == 1){
        // draw (x+6, y+4, x+7, y+4, color);
        squarePixel(x+24,y+16,color47);
    };
    if(x48 == 1){
        // draw (x+7, y+4, x+8, y+4, color);
        squarePixel(x+28,y+16,color48);
    };
    if(x49 == 1){
        // draw (x+8, y+4, x+9, y+4, color);
        squarePixel(x+32,y+16,color49);
    };
    if(x50 == 1){
        // draw (x+9, y+4, x+10, y+4, color);
        squarePixel(x+36,y+16,color50);
    };
    if(x51 == 1){
        // draw (x, y+5, x+1, y+5, color);
        squarePixel(x,y+20,color51);
    };
    if(x52 == 1){
        // draw (x+1, y+5, x+2, y+5, color);
        squarePixel(x+4,y+20,color52);
    };
    if(x53 == 1){
        // draw (x+2, y+5, x+3, y+5, color);
        squarePixel(x+8,y+20,color53);
    };
    if(x54 == 1){
        // draw (x+3, y+5, x+4, y+5, color);
        squarePixel(x+12,y+20,color54);
    };
    if(x55 == 1){
        // draw (x+4, y+5, x+5, y+5, color);
        squarePixel(x+16,y+20,color55);
    };
    if(x56 == 1){
        // draw (x+5, y+5, x+6, y+5, color);
        squarePixel(x+20,y+20,color56);
    };
    if(x57 == 1){
        // draw (x+6, y+5, x+7, y+5, color);
        squarePixel(x+24,y+20,color57);
    };
    if(x58 == 1){
        // draw (x+7, y+5, x+8, y+5, color);
        squarePixel(x+28,y+20,color58);
    };
    if(x59 == 1){
        // draw (x+8, y+5, x+9, y+5, color);
        squarePixel(x+32,y+20,color59);
    };
    if(x60 == 1){
        // draw (x+9, y+5, x+10, y+5, color);
        squarePixel(x+36,y+20,color60);
    };
    if(x61 == 1){
        // draw (x, y+6, x+1, y+6, color);
        squarePixel(x,y+24,color61);
    };
    if(x62 == 1){
        // draw (x+1, y+6, x+2, y+6, color);
        squarePixel(x+4,y+24,color62);
    };
    if(x63 == 1){
        // draw (x+2, y+6, x+3, y+6, color);
        squarePixel(x+8,y+24,color63);
    };
    if(x64 == 1){
        // draw (x+3, y+6, x+4, y+6, color);
        squarePixel(x+12,y+24,color64);
    };
    if(x65 == 1){
        // draw (x+4, y+6, x+5, y+6, color);
        squarePixel(x+16,y+24,color65);
    };
    if(x66 == 1){
        // draw (x+5, y+6, x+6, y+6, color);
        squarePixel(x+20,y+24,color66);
    };
    if(x67 == 1){
        // draw (x+6, y+6, x+7, y+6, color);
        squarePixel(x+24,y+24,color67);
    };
    if(x68 == 1){
        // draw (x+7, y+6, x+8, y+6, color);
        squarePixel(x+28,y+24,color68);
    };
    if(x69 == 1){
        // draw (x+8, y+6, x+9, y+6, color);
        squarePixel(x+32,y+24,color69);
    };
    if(x70 == 1){
        // draw (x+9, y+6, x+10, y+6, color);
        squarePixel(x+36,y+24,color70);
    };
    if(x71 == 1){
        // draw (x, y+7, x+1, y+7, color);
        squarePixel(x,y+28,color71);
    };
    if(x72 == 1){
        // draw (x+1, y+7, x+2, y+7, color);
        squarePixel(x+4,y+28,color72);
    };
    if(x73 == 1){
        // draw (x+2, y+7, x+3, y+7, color);
        squarePixel(x+8,y+28,color73);
    };
    if(x74 == 1){
        // draw (x+3, y+7, x+4, y+7, color);
        squarePixel(x+12,y+28,color74);
    };
    if(x75 == 1){
        // draw (x+4, y+7, x+5, y+7, color);
        squarePixel(x+16,y+28,color75);
    };
    if(x76 == 1){
        // draw (x+5, y+7, x+6, y+7, color);
        squarePixel(x+20,y+28,color76);
    };
    if(x77 == 1){
        // draw (x+6, y+7, x+7, y+7, color);
        squarePixel(x+24,y+28,color77);
    };
    if(x78 == 1){
        // draw (x+7, y+7, x+8, y+7, color);
        squarePixel(x+28,y+28,color78);
    };
    if(x79 == 1){
        // draw (x+8, y+7, x+9, y+7, color);
        squarePixel(x+32,y+28,color79);
    };
    if(x80 == 1){
        // draw (x+9, y+7, x+10, y+7, color);
        squarePixel(x+36,y+28,color80);
    };
    if(x81 == 1){
        // draw (x, y+8, x+1, y+8, color);
        squarePixel(x,y+32,color81);
    };
    if(x82 == 1){
        // draw (x+1, y+8, x+2, y+8, color);
        squarePixel(x+4,y+32,color82);
    };
    if(x83 == 1){
        // draw (x+2, y+8, x+3, y+8, color);
        squarePixel(x+8,y+32,color83);
    };
    if(x84 == 1){
        // draw (x+3, y+8, x+4, y+8, color);
        squarePixel(x+12,y+32,color84);
    };
    if(x85 == 1){
        // draw (x+4, y+8, x+5, y+8, color);
        squarePixel(x+16,y+32,color85);
    };
    if(x86 == 1){
        // draw (x+5, y+8, x+6, y+8, color);
        squarePixel(x+20,y+32,color86);
    };
    if(x87 == 1){
        // draw (x+6, y+8, x+7, y+8, color);
        squarePixel(x+24,y+32,color87);
    };
    if(x88 == 1){
        // draw (x+7, y+8, x+8, y+8, color);
        squarePixel(x+28,y+32,color88);
    };
    if(x89 == 1){
        // draw (x+8, y+8, x+9, y+8, color);
        squarePixel(x+32,y+32,color89);
    };
    if(x90 == 1){
        // draw (x+9, y+8, x+10, y+8, color);
        squarePixel(x+36,y+32,color90);
    };
    if(x91 == 1){
        // draw (x, y+9, x+1, y+9, color);
        squarePixel(x,y+36,color91);
        };
    if(x92 == 1){
        // draw (x+1, y+9, x+2, y+9, color);
        squarePixel(x+4,y+36,color92);
        };
    if(x93 == 1){
        // draw (x+2, y+9, x+3, y+9, color);
        squarePixel(x+8,y+36,color93);
        };
    if(x94 == 1){
        // draw (x+3, y+9, x+4, y+9, color);
        squarePixel(x+12,y+36,color94);
        };
    if(x95 == 1){
        // draw (x+4, y+9, x+5, y+9, color);
        squarePixel(x+16,y+36,color95);
        };
    if(x96 == 1){
        // draw (x+5, y+9, x+6, y+9, color);
        squarePixel(x+20,y+36,color96);
        };
    if(x97 == 1){
        // draw (x+6, y+9, x+7, y+9, color);
        squarePixel(x+24,y+36,color97);
        };
    if(x98 == 1){
        // draw (x+7, y+9, x+8, y+9, color);
        squarePixel(x+28,y+36,color98);
        };
    if(x99 == 1){
        // draw (x+8, y+9, x+9, y+9, color);
        squarePixel(x+32,y+36,color99);
        };
    if(x100 == 1){
        // draw (x+9, y+9, x+10, y+9, color);
        squarePixel(x+36,y+36,color100);
        };
};

// function tree(x,y,color){
// sketch(x,y,color,
//     0,0,0,0,1,1,1,0,0,0,
//     0,0,1,1,1,1,1,1,0,0,
//     0,1,1,1,1,1,1,1,1,0,
//     1,1,1,1,1,1,1,1,1,0,
//     1,1,1,1,1,1,1,1,0,0,
//     0,1,1,1,1,1,1,1,1,0,
//     0,0,1,0,1,1,1,1,1,0,
//     0,0,0,0,1,1,0,1,0,0,
//     0,0,0,0,1,1,0,0,0,0,
//     0,0,0,0,1,1,0,0,0,0);
// };

function tree(x,y){
    sketch2(x,y,
        0,colors.Green,0,colors.Green,0,colors.Green,0,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,0,colors.Green,0,colors.Green,0,colors.Green,
        0,colors.Green,0,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,0,colors.Green,0,colors.Green,
        0,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,0,colors.Green,
        1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,0,colors.Green,
        1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,0,colors.Green,0,colors.Green,
        0,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,0,colors.Green,
        0,colors.Green,0,colors.Green,1,colors.Green,0,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,1,colors.Green,0,colors.Green,
        0,colors.Green,0,colors.Green,0,colors.Green,0,colors.Green,1,colors.Brown,1,colors.Brown,0,colors.Green,1,colors.Green,0,colors.Green,0,colors.Green,
        0,colors.Green,0,colors.Green,0,colors.Green,0,colors.Green,1,colors.Brown,1,colors.Brown,0,colors.Green,0,colors.Green,0,colors.Green,0,colors.Green,
        0,colors.Green,0,colors.Green,0,colors.Green,0,colors.Green,1,colors.Brown,1,colors.Brown,0,colors.Green,0,colors.Green,0,colors.Green,0,colors.Brown)
    };

function character(x,y){
    sketch2(x,y,
        0,colors.Grey,0,colors.Grey,0,colors.Grey,0,colors.Grey,0,colors.Grey,0,colors.Grey,0,colors.green,0,colors.green,0,colors.green,0,colors.green,
        0,colors.Grey,0,colors.DimGrey,1,colors.DimGrey,0,colors.Grey,1,colors.DimGrey,0,colors.Grey,0,colors.Grey,1,colors.DimGrey,0,colors.green,0,colors.green,
        0,colors.Grey,0,colors.DimGrey,1,colors.DimGrey,0,colors.Grey,1,colors.Grey,1,colors.Grey,1,colors.Grey,1,colors.Grey,0,colors.Grey,0,colors.green,
        0,colors.Grey,0,colors.green,1,colors.DimGrey,0,colors.green,1,colors.Black,1,colors.Black,1,colors.Black,1,colors.Grey,0,colors.Grey,0,colors.green,
        0,colors.Grey,0,colors.green,1,colors.DimGrey,0,colors.green,1,colors.Grey,1,colors.Black,1,colors.Grey,1,colors.Grey,0,colors.Grey,0,colors.green,
        0,colors.Grey,0,colors.green,1,colors.green,1,colors.green,1,colors.Grey,1,colors.Grey,1,colors.DimGrey,1,colors.orange,1,colors.DimGrey,0,colors.green,
        0,colors.green,0,colors.green,0,colors.green,0,colors.green,1,colors.Grey,1,colors.Grey,1,colors.DimGrey,1,colors.Grey,1,colors.DimGrey,0,colors.green,
        0,colors.green,0,colors.green,0,colors.green,0,colors.green,1,colors.Grey,1,colors.Grey,1,colors.DimGrey,1,colors.DimGrey,1,colors.DimGrey,0,colors.green,
        0,colors.green,0,colors.green,0,colors.green,0,colors.green,1,colors.green,0,colors.green,0,colors.green,1,colors.green,0,colors.green,0,colors.green,
        0,colors.green,0,colors.green,0,colors.green,0,colors.green,0,colors.green,0,colors.green,0,colors.green,0,colors.green,0,colors.green,0,colors.Green)
};

function grass(x,y){
    sketch2(x,y,
        1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,
        1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,
        1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,
        1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,
        1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,
        1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,
        1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,
        1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,
        1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,
        1,colors.GrassLightGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassGreen,1,colors.GrassLightGreen,1,colors.GrassGreen
    )
};


//  T
//  A
//  N
//  K
var tank = {
     health : 100,
     visible : 0,
     xOnMap : 507,
     yOnMap : 507,
     x : 250,
     y : 250,
     diagonal : 10,
     color : colors.green,
     rotation: 'down',
     previousRotation: 'down',

    drawTank(x,y) {

        if(tank.visible == 1){
            
            // ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
        
            tank.visible = 0;
            
        }

        character(x,y)

        // simpleSquareObject(x,y,diagonal,color);

        tank.x = x;
        tank.y = y;
        tank.visible = tank.visible+1;
    },

};


var bullet = {
    ammo : 0,
    // x1 : tank.x + tank.diagonal/2,
    // y1 : tank.y + tank.diagonal/2,
    x : tank.x + tank.diagonal/2,
    y : tank.y + tank.diagonal/2,
    xOnFly : 0,
    yOnFly : 0,
    direction : tank.rotation,
    color : colors.green,
    travelDistance : 0,
    speed : 4,
    bulletBurnout : 199, 
    fly : 0,

    fire(){
        if(bullet.ammo == 1){
            bullet.ammo = 0;
        }
    },

    reload(){
        if(bullet.ammo == 0){
            bullet.ammo = 1;
        }
    },

    reset(){
        bullet.travelDistance = 0;
        bullet.x = tank.x + tank.diagonal/2;
        bullet.y = tank.y + tank.diagonal/2;
        bullet.ammo = 0;
    },


    fireBullet(){
        if(bullet.ammo == 1){
            if(bullet.fly == 0){
                bullet.direction = tank.rotation;
                bullet.xOnFly = tank.x + tank.diagonal/2;
                bullet.yOnFly = tank.y + tank.diagonal/2;
            }
            if(bullet.direction == "left"){
                bullet.fly = 1;
                bullet.xOnFly -= bullet.speed;
                this.travelDistance += bullet.speed;
                bullet.direction = "left";
            }
            if(bullet.direction == "up"){
                bullet.fly = 1;
                bullet.yOnFly -= bullet.speed;
                this.travelDistance += bullet.speed;
                bullet.direction = "up";
            }
            if(bullet.direction == "right"){
                bullet.fly = 1;
                bullet.xOnFly += bullet.speed;
                this.travelDistance += bullet.speed;
                bullet.direction = "right";
            }
            if(bullet.direction == "down"){
                bullet.fly = 1;
                bullet.yOnFly += bullet.speed;
                this.travelDistance += bullet.speed;
                bullet.direction = "down";
            }

            if(this.travelDistance > this.bulletBurnout){
                bullet.reset();
                bullet.fly = 0;
                bullet.xOnFly = 0;
                bullet.yOnFly = 0;
            }
        }
 
    },

    drawBullet(){
        simpleSquareObject(bullet.xOnFly,bullet.yOnFly,1)
    },

};

document.onkeydown = function() {
    if(tank.health > 1){
    switch (window.event.keyCode) {
        case 32:
        // tank.fireBullet(tank.x,tank.y,tank.rotation);
        bullet.reload();
        break;

        case 37:
        //  tank.drawTank(tank.x-10,tank.y,tank.diagonal,tank.color); 
        if(tank.xOnMap > 26 && (map[tank.xOnMap - 1][tank.yOnMap] != 2)){
            // tank.x -= 10;
            // bullet.x -=10;
            tank.xOnMap -= 1;
            bullet.x -= 1;
        }
        tank.rotation = 'left';
        tank.previousRotation = 'left';
         break;

        case 38:
        // tank.drawTank(tank.x,tank.y-10,tank.diagonal,tank.color);
        if(tank.yOnMap > 26 && (map[tank.xOnMap][tank.yOnMap - 1] != 2)){
            // tank.y -= 10;
            // bullet.y -= 10;
            tank.yOnMap -= 1;
            bullet.y -= 1;
        }
        tank.rotation = 'up';
        tank.previousRotation = 'up';
         break;

        case 39:
        // tank.drawTank(tank.x+10,tank.y,tank.diagonal,tank.color); 
        if(tank.xOnMap < 974 && (map[tank.xOnMap + 1][tank.yOnMap] != 2)){
            // tank.x += 10;
            // bullet.x += 10;
            tank.xOnMap += 1;
            bullet.x += 1;
        }
        tank.rotation = 'right';
        tank.previousRotation = 'right';
         break;

        case 40:
        // tank.drawTank(tank.x,tank.y+10,tank.diagonal,tank.color);
        if(tank.yOnMap < 974 && (map[tank.xOnMap][tank.yOnMap + 1] != 2)){
        // tank.y += 10;
        // bullet.y += 10;
            tank.yOnMap += 1;
            bullet.y += 1;
        }
        tank.rotation = 'down';
        tank.previousRotation = 'down';
        break;
    }
    }
};
// T
// A
// N
// K


var loop;

function bulletMechanics(){
    bullet.drawBullet();
    bullet.fireBullet();
}


function mapDrawing(){

    //tank x1,y1 = 510
    let xOnCanvas = 0;
    let yOnCanvas = 0;
    let currrentx = tank.xOnMap - 25;
    let currrenty = tank.yOnMap - 25;

    for(let i = 0; i < 50; i++){
        if(map[currrentx][currrenty] == 2){
            simpleSquareObject(xOnCanvas,yOnCanvas,10,colors.green);
            xOnCanvas += 10;
            currrentx += 1;
            for(let j = 0; j < 50; j++){
                if(map[currrentx][currrenty] == 2)
                    simpleSquareObject(xOnCanvas,yOnCanvas,10,colors.green);
                    yOnCanvas += 10;
                    currrenty += 1;
            }
        }
    }
};


//x
var map = new Array(1000);
//y
function createMap(){
    for (let i = 1; i < 1001; i++ ){
        map[i] = new Array(1000);
    }

};
createMap();


console.log(map[1][1]);

function assignOneOnMap(){
    let counter = 1;
    let x = 1;
    let y = 1;
    for(let i = 1; i < 1000001; i++){  

                x += 1;
                if(Math.floor(Math.random() * 10) == 2){
                map[x][y] = 2;
                }
                counter += 1;
                if(counter == 1000){
                    y += 1;
                    x = 0;

                    counter = 0;
                }
        }
};

assignOneOnMap();

map[520][527] = 2;
map[521][526] = 2;
map[520][526] = 2;
map[520][525] = 2;
map[523][511] = 2;
map[525][511] = 2;
map[526][512] = 2;
map[527][511] = 2;
map[528][512] = 2;
map[529][512] = 2;
map[529][514] = 2;
map[529][513] = 2;
map[529][514] = 2;
map[530][514] = 2;
map[509][514] = 2;
map[513][514] = 2;
map[514][514] = 2;
map[512][512] = 2;
map[511][511] = 2;
map[511][510] = 2;
map[524][524] = 2;
map[529][521] = 2;
map[521][522] = 2;
map[520][523] = 2;
map[522][521] = 2;
map[522][522] = 2;
map[521][521] = 2;
map[520][520] = 2;
map[552][538] = 2;
map[551][539] = 2;
map[556][539] = 2;
map[557][544] = 2;
map[557][543] = 2;
map[556][543] = 2;
map[535][544] = 2;
map[535][558] = 2;
map[566][558] = 2;
map[556][560] = 2;
map[550][539] = 2;
map[531][531] = 2;
map[539][539] = 2;
map[533][532] = 2;
map[532][533] = 2;
map[531][533] = 2;
map[524][524] = 2;
map[490][490] = 2;
map[400][400] = 2;
map[300][300] = 2;
map[590][590] = 2;
map[999][999] = 2;
map[1000][1000] = 2;
map[1][1] = 2;
map[1000][1] = 2;
map[1][1000] = 2;
map[506][506] = 2;
map[505][505] = 2;
map[501][501] = 2;
map[513][513] = 2;
map[513][501] = 2;
map[501][513] = 2;


for(let i = 1; i < 26; i++){
    map[i][1] = 2;
    for(let j = 1; j < 1000; j++){
        map[i][j] = 2;
    }
};

function mapDrawing2(){
    var xOnMap = tank.xOnMap - 6;
    var yOnMap = tank.yOnMap - 6;
    var xOnCanvas = 0;
    var yOnCanvas = 0;
    var rowCounter = 1;
    for(let i = 1; i < 170; i++){
        grass(xOnCanvas,yOnCanvas);
        // sprawdza czy narysowac drzewo
        if(map[xOnMap][yOnMap] == 2){
            tree(xOnCanvas,yOnCanvas);
        }
        if(xOnMap == tank.xOnMap && yOnMap == tank.yOnMap){
            // tank.drawTank(tank.x,tank.y,tank.diagonal,tank.color);
            character(xOnCanvas,yOnCanvas);
        }

        // dodaje wpolrzedne na plotnie (zeby szukac drzewa w nastp kwadracie) dodaje tez jedno miejsce na liscie, jesli nie ma zmmiany rzadu
        if(rowCounter != 13){
            xOnCanvas += 40;
            xOnMap += 1;
        }
        // sprawdza czy trzeba zmienic rzad,
        if(rowCounter == 13){
            rowCounter = 0;
    
            yOnMap += 1;
            yOnCanvas += 40;

            xOnMap -= 12;
            xOnCanvas = 0;
        }
    
        rowCounter += 1;
    }
    };

    var updateX = 1;
    var updateY = 1;

loop = function() {

if(tank.xOnMap != updateX || tank.yOnMap != updateY){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

    // tank.drawTank(tank.x,tank.y,tank.diagonal,tank.color);

    bulletMechanics();

    mapDrawing2();


    document.getElementById("output1").innerHTML=tank.xOnMap;
    document.getElementById("output2").innerHTML=tank.yOnMap;
    updateX = tank.xOnMap;
    updateY = tank.yOnMap;

    };

    window.requestAnimationFrame(loop);
};

// setInterval(window.requestAnimationFrame(loop), 33);
setTimeout(window.requestAnimationFrame(loop), 5);
// window.requestAnimationFrame(loop);



