$(document).ready(main);

function main()
{
    mainSearch();
}

function mainSearch()
{
    var sbox=$(".sbox-field");
    var sboxBox=$(".sbox-box");
    var outputBox=$(".output-box");
    sbox.focus();

    sbox.on("keydown",function(e){
        if (e.key=="Enter")
        {
            fgfy(sbox,sboxBox,outputBox);
        }       
    });
}

function fgfy(sbox,sboxBox,outputBox)
{
    var word=sbox[0].value;
    word=word.toLowerCase();

    var words=word.split(" ");

    var currWord;

    for (var x=0;x<words.length;x++)
    {
        currWord=words[x];

        if (currWord.length>2)
        {
            console.log(pairSwap(words[x]));
            words[x]=vowelReplace(words[x]);
        }
    }

    outputBox.text(words.join(" "));
    TweenMax.to(sboxBox,.2,{className:"+=sbox-moved"});
    TweenMax.to(outputBox,.2,{className:"+=show"});
}

function vowelReplace(word)
{
    var varray=word.match(/[aeiou]/g);
    var maxReplace=0;
    var word2=word.split("");
    
    if (!varray)
    {
        return;
    }

    if (varray.length<4)
    {
        maxReplace=1;
    }

    else
    {
        if (randomNum(1,0)==1)
        {
            maxReplace=1;
        }

        else
        {
            maxReplace=Math.floor(.4*varray.length);
        }
    }

    var replaceAmount=randomNum(maxReplace,1);
    var replaceIndex=getReplacementIndex(varray.length,replaceAmount);
    var currVowel;

    for (var x=0;x<replaceIndex.length;x++)
    {        
        currVowel=varray[replaceIndex[x]];

        varray[replaceIndex[x]]=randomVowel(currVowel);
    }

    var currentIndex=0;
    for (var x=0;x<word2.length;x++)
    {
        if (word2[x].search(/[aeiou]/)>=0)
        {
            word2[x]=varray[currentIndex];
            currentIndex++;
        }
    }

    return word2.join("");
}

function pairSwap(word)
{
    word=word.split("");

    var randomIndex=randomNum(word.length-1,2);
    var tempLetter;

    tempLetter=word[randomIndex];
    word[randomIndex]=word[randomIndex-1];
    word[randomIndex-1]=tempLetter;

    return word.join("");
}

function randomDupe(word)
{
    word=word.split("");

    var randomIndex=randomNum(word.length-1,0);

    word[randomIndex]=word[randomIndex]+word[randomIndex];

    return word.join("");
}

function doubleRemove(word)
{
    word=word.split("");

    for (var x=0;x<word.length;x++)
    {
        if (word[x]==word[x+1])
        {
            word[x+1]="";

            return word.join("");
        }
    }
}

function consonantRemove(word)
{
    word=word.split("");

    for (var x=1;x<word.length;x++)
    {
        if (word[x].search(/[aeiou]/)<0)
        {
            
        }
    }
}

function getReplacementIndex(arraySize,randomAmount)
{
    if (randomAmount>arraySize)
    {
        console.log("getReplacementIndex error: randomAmount > arraySize");
        return;
    }

    var replacementIndex=[];
    var randomIndex=0;
    var minSize=0;
    arraySize--;
   
    for (var x=0;x<randomAmount;x++)
    {
        randomIndex=randomNum(arraySize,minSize);

        if (replacementIndex.includes(randomIndex))
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

var randomVowel_vowels=["a","e","i","o","u",""];
function randomVowel(startVowel)
{
    var randomVowelNum;

    while (1)
    {
        randomVowelNum=randomNum(randomVowel_vowels.length,0);
        
        if (randomVowel_vowels[randomVowelNum]!=startVowel)
        {
            return randomVowel_vowels[randomVowelNum];
        }
    }
}
