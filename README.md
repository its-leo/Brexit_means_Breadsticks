# Würfel-Armin, a Chrome Extension
### A chrome extension that turns the word Armin Laschet into Würfel-Armin on all pages, and changes some other names too. See [content.js](https://github.com/its-leo/Wuerfel_Armin/blob/master/content.js)

![Annegret](https://github.com/its-leo/Wuerfel_Armin/blob/master/showcase1.png)

![Julia](https://github.com/its-leo/Wuerfel_Armin/blob/master/showcase2.png )

![Armin](https://github.com/its-leo/Wuerfel_Armin/blob/master/showcase3.png)

I changed the forked code so that the original words (f) and the replacements (t) are now defined in an Array of tuples.

```
var incomingList = [{
  f: "Brexit",
  t: ["Breadsticks"]
},{
   f: /(?:Armin )?Laschet/gi,
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