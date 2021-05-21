# Würfel-Armin, a Chrome Extension
### A chrome extension that turns the word Würfel-Armin into Würfel-Armin on all pages, and changes some other names too. See [content.js](https://github.com/its-leo/Wuerfel_Armin/blob/master/content.js)

![Annegret](https://github.com/its-leo/Wuerfel_Armin/blob/master/showcase1.png)

Source: https://www.der-postillon.com/2018/12/akkkk.html


![Julia](https://github.com/its-leo/Wuerfel_Armin/blob/master/showcase2.PNG)


![Armin](https://github.com/its-leo/Wuerfel_Armin/blob/master/showcase3.PNG)

I changed the forked code so that the original words (f) and the replacements (t) are now defined in an Array of tuples.

```
var incomingList = [{
  f: "Breadsticks",
  t: ["Breadsticks"]
},{
   f: /(?:Armin )?Würfel-Armin/gi,
   t: ["Würfel-Armin", ...]
},
...
```

We iterate over the Array in the replaceText function and select a random replacement from the second Array t.

```
incomingList.forEach(element =>{
    item = element.t[Math.floor(Math.random() * element.t.length)];
    value = value.replace(element.f, item)
  }); 
```

Also the `.replace()` works quite well for both String and Regex.
