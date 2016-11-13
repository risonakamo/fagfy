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
    console.log(word);

    var varray=word.match(/[aeiou]/g);

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
    
    // var replaceIndex=[];
    // var newIndex;
    // for (var x=0;x<replaceAmount;x++)
    // {
    //     newIndex=Math.floor(Math.random()*varray.length);
        
    //     if (replaceIndex.includes(newIndex))
    //     {
    //         x--;
    //     }

    //     else
    //     {
    //         replaceIndex.push(newIndex);
    //     }
    // }

    // var currVowel;
    // for (var x=0;x<replaceAmount;x++)
    // {
    //     currVowel=varray[replaceIndex[x]];

    //     varray[replaceIndex[x]]=randomVowel(currVowel);
    // }

    // var word2=word;
    // for (var x=word2.length-1;x>=0;x--)
    // {
    //     if (word2[x].search(/[aeiou]/)==0)
    //     {
    //         word2[x]=varray.pop();
    //     }
    // }

    // console.log(word2);
}

function getReplacementIndex(arraySize,randomAmount)
{
    var replacementIndex=[];
    var randomIndex=0;
    var minSize=0;

    for (var x=0;x<randomAmount;x++)
    {
        randomIndex=randomNum(arraySize,minSize);

        if (replacementIndex.include(randomIndex))
        {
            x--;
        }
        
        else
        {
            replacementIndex.push(randomIndex);
        }

        if (randomIndex==arraySize)
        {
            arraySize--;
        }

        if (randomIndex==minSize)
        {
            minSize++;
        }
    }

    return replacementIndex;
}

//inclusive
function randomNum(max,min)
{
    return Math.floor(Math.random()*(max-min+1))+min;
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
