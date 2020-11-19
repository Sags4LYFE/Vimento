﻿

var string1 = replaceLetters('f&#230;');
describe("string should be fæ", () => {

    it('Expected fæ', () => {
        expect(string1).toBe('fæ');
    })
});

var string2 = replaceLetters('F&#198;');
describe("string should be FÆ", () => {

    it('Expected sø', () => {
        expect(string2).toBe('FÆ');
    })
});

var string3 = replaceLetters('caf&#233;');
describe("string should be café", () => {

    it('Expected café', () => {
        expect(string3).toBe('café');
    })
});

var string4 = replaceLetters('s&#248;');
describe("string should be sø", () => {

    it('Expected sø', () => {
        expect(string4).toBe('sø');
    })
});

var string5 = replaceLetters('S&#216;');
describe("string should be SØ", () => {

    it('Expected SØ', () => {
        expect(string5).toBe('SØ');
    })
});

var string6 = replaceLetters('f&#229;r');
describe("string should be får", () => {

    it('Expected får', () => {
        expect(string6).toBe('får');
    })
});

var string7 = replaceLetters('F&#197;R');
describe("string should be FÅR", () => {

    it('Expected FÅR', () => {
        expect(string7).toBe('FÅR');
    })
});


//var markersArray = new Array();
//var mMob = new L.circleMarker([0.00, 0.00]);
//mMob.business = "r&#248;dgr&#248;d k&#229;lorm &#230;sel";
//markersArray.push(mMob);

//fixFormat(markersArray);
//describe("Array business should be rødgrød kålorm æsel", () => {

//    it('Expected rødgrød kålorm æsel', () => {
//        expect(markersArray[0].business).toBe('rødgrød kålorm æsel');
//    })
//});