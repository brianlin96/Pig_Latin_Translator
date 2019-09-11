describe("pigLatin", () => {
    test ("returns a translation of the string", () => {
        expect(pigLatin("eye throw")).toBe("eyeway owthray")
        // expect(pigLatin("throw")).toBe("owthray")
        // expect(pigLatin("yummy")).toBe("ummyyay")
        // expect(pigLatin("fry")).toBe("yfray")
        // expect(pigLatin("rythm")).toBe("ythmray")
        // expect(pigLatin("quiet")).toBe("ietquay")
        // expect(pigLatin("sequeal")).toBe("equealsay")
    })
})

let pigLatin = (strings) => {
    let stringsArr = strings.split(" ")
    var word = stringsArr.map(function (string){
        let vowelIndex
        let yIndex
        for(let i=0;i<string.length;i++){
            if (string.charAt(i)=='y'||string.charAt(i)=='Y'){
                yIndex = i
                break
            }
        }
        for(let i=0;i<string.length;i++){
            if(string.charAt(i)=='a'||string.charAt(i)=='e'||string.charAt(i)=='i'||string.charAt(i)=='o'||string.charAt(i)=='u'||string.charAt(i)=='A'||string.charAt(i)=='E'||string.charAt(i)=='I'||string.charAt(i)=='O'||string.charAt(i)=='U'){
                vowelIndex = i
                break
            }
        }
        if(vowelIndex==0){
            return string + "way"
        } else if(yIndex==0){
            return string.substring(vowelIndex)+string.substring(0,vowelIndex)+"ay"
        } else if(yIndex>0) {
            // console.log("yindex: "+ yIndex);
            // console.log("vowelindex: " + vowelIndex);
            vowelIndex=yIndex
            return string.substring(vowelIndex)+string.substring(0,vowelIndex)+"ay"
        } else if(string.indexOf("qu")== 0 ){
            return string.substring(vowelIndex + 1)+string.substring(0,vowelIndex + 1)+"ay"
        } else if (string.indexOf("qu")>0&&string.indexOf("qu")<vowelIndex) {
            return string.substring(vowelIndex + 1)+string.substring(0,vowelIndex + 1)+"ay"
        } else {
            return string.substring(vowelIndex)+string.substring(0,vowelIndex)+"ay"
        }
    })
    return word.join(' ')
}
pigLatin("eye throw")
// console.log(pigLatin("throw"))
// console.log(pigLatin("yummy"))
// console.log(pigLatin("fry"))
// console.log(pigLatin("rhythm"))
// console.log(pigLatin("quiet"))
// console.log(pigLatin("sequeal"))
