import React from 'react';
import {Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');

// -------------------------------HEIGHT---------------------------------------
export let Size = [
    Math.round(height * 0.001 / 10), // : 0
    Math.round(height * 0.016 / 10), // : 1
    Math.round(height * 0.032 / 10), // : 2
    Math.round(height * 0.047 / 10), // : 3
    Math.round(height * 0.063 / 10), // : 4
    Math.round(height * 0.079 / 10), // : 5
    Math.round(height * 0.094 / 10), // : 6
    Math.round(height * 0.110 / 10), // : 7
    Math.round(height * 0.130 / 10), // : 8
    Math.round(height * 0.141 / 10), // : 9
    Math.round(height * 0.157 / 10), // : 10
    Math.round(height * 0.173 / 10), // : 11
    Math.round(height * 0.188 / 10), // : 12
    Math.round(height * 0.204 / 10), // : 13
    Math.round(height * 0.220 / 10), // : 14
    Math.round(height * 0.235 / 10), // : 15
    Math.round(height * 0.250 / 10), // : 16
    Math.round(height * 0.266 / 10), // : 17
    Math.round(height * 0.282 / 10), // : 18
    Math.round(height * 0.297 / 10), // : 19
    Math.round(height * 0.314 / 10), // : 20
];
Size[25] = Math.round(height * 0.391 / 10) // : 25
Size[30] = Math.round(height * 0.470 / 10) // : 30
Size[35] = Math.round(height * 0.550 / 10) // : 35
Size[40] = Math.round(height * 0.630 / 10) // : 40
Size[45] = Math.round(height * 0.710 / 10) // : 45
Size[50] = Math.round(height * 0.785 / 10) // : 50
Size[55] = Math.round(height * 0.860 / 10) // : 55
Size[60] = Math.round(height * 0.940 / 10) // : 60
Size[65] = Math.round(height * 1.02 / 10) // : 65
Size[70] = Math.round(height * 1.1 / 10) // : 70
Size[75] = Math.round(height * 1.17 / 10) // : 75
Size[80] = Math.round(height * 1.25 / 10) // : 80
Size[85] = Math.round(height * 1.33 / 10) // : 85
Size[90] = Math.round(height * 1.41 / 10) // : 90
Size[95] = Math.round(height * 1.49 / 10) // : 95
Size[100] = Math.round(height * 1.56 / 10) // : 100

// -------------------------------WIDTH---------------------------------------
export let widthSize = [
    Math.round(width * 0.01 / 10), // : 0
    Math.round(width * 0.03 / 10), // : 1
    Math.round(width * 0.05 / 10), // : 2
    Math.round(width * 0.09 / 10), // : 3
    Math.round(width * 0.12 / 10), // : 4
    Math.round(width * 0.14 / 10), // : 5
    Math.round(width * 0.17 / 10), // : 6
    Math.round(width * 0.2 / 10), // : 7
    Math.round(width * 0.22 / 10), // : 8
    Math.round(width * 0.25 / 10), // : 9
    Math.round(width * 0.27 / 10), // : 10
    Math.round(width * 0.3 / 10), // : 11
    Math.round(width * 0.33 / 10), // : 12
    Math.round(width * 0.36 / 10), // : 13
    Math.round(width * 0.39 / 10), // : 14
    Math.round(width * 0.42 / 10), // : 15
    Math.round(width * 0.45 / 10), // : 16
    Math.round(width * 0.47 / 10), // : 17
    Math.round(width * 0.5 / 10), // : 18
    Math.round(width * 0.53 / 10), // : 19
    Math.round(width * 0.56 / 10), // : 20
];
widthSize[25] = Math.round(width * 0.7 / 10) // : 25
widthSize[30] = Math.round(width * 0.84 / 10) // : 30
widthSize[35] = Math.round(width * 0.98 / 10) // : 35
widthSize[40] = Math.round(width * 1.12 / 10) // : 40
widthSize[45] = Math.round(width * 1.25 / 10) // : 45
widthSize[50] = Math.round(width * 1.4 / 10) // : 50
widthSize[55] = Math.round(width * 1.53 / 10) // : 55
widthSize[60] = Math.round(width * 1.67 / 10) // : 60
widthSize[65] = Math.round(width * 1.81 / 10) // : 65
widthSize[70] = Math.round(width * 1.95 / 10) // : 70
widthSize[75] = Math.round(width * 2.08 / 10) // : 75
widthSize[80] = Math.round(width * 2.22 / 10) // : 80
widthSize[85] = Math.round(width * 2.36 / 10) // : 85
widthSize[90] = Math.round(width * 2.5 / 10) // : 90
widthSize[95] = Math.round(width * 2.65 / 10) // : 95
widthSize[100] = Math.round(width * 2.78 / 10) // : 100
