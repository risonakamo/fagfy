$(document).ready(main);

function main()
{
    mainSearch();
}

function mainSearch()
{
    var sbox=$(".sbox-field");
    var sboxBox=$(".sbox-box");

    sbox.on("keydown",function(e){
        if (e.key=="Enter")
        {
            fgfy(sbox,sboxBox);
        }       
    });
}

function fgfy(sbox,sboxBox)
{
    TweenMax.to(sboxBox,.2,{className:"+=sbox-moved"});

    var word=sbox[0].value;

    vowelReplace(word);
}

function vowelReplace(word)
{
    var varray=word.match(/[aeiou]/g);
    console.log(varray);

    var maxReplace=0;
    
    if (varray.length<4)
    {
        maxReplace=1;
    }

    else
    {
        maxReplace=Math.floor(.4*varray.length);
    }

    var replaceAmount=Math.floor(Math.random()*maxReplace)+1;
    
    var replaceIndex=[];
    var newIndex;
    for (var x=0;x<replaceAmount;x++)
    {
        newIndex=Math.floor(Math.random()*varray.length);
        
        if (replaceIndex.includes(newIndex))
        {
            x--;
        }

        else
        {
            replaceIndex.push(newIndex);
        }
    }

    var currVowel;
    for (var x=0;x<replaceAmount;x++)
    {
        currVowel=varray[replaceIndex[x]];

        varray[replaceIndex[x]]=randomVowel(currVowel);
    }

    console.log(varray);
}

var randomVowel_vowels=["a","e","i","o","u"];
function randomVowel(startVowel)
{
    var randomVowelNum;

    while (1)
    {
        randomVowelNum=Math.floor(Math.random()*5);
        
        if (randomVowel_vowels[randomVowelNum]!=startVowel)
        {
            return randomVowel_vowels[randomVowelNum];
        }
    }
}
