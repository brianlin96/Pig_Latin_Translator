
let pigLatin = () => {
    let strings = document.getElementById('input').value
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
    return document.getElementById('output').innerHTML = word.join(' ')
}
