
## .fetch .then .catch
### 
 

```javascript
<body>
    <div id="content">
    </div>

    <script>
        fetch('https://swapi.co/api/people/')
        .then((response) => {
            return response.json();
        })
        .then ((json) => {
            var content = document.getElementById('content');
            
            json.results.forEach(function(figur, index){
                if(index < 10){

                
                content.innerHTML += '<h1>'+ figur.name + '</h1>'
                content.innerHTML += '<h2>' + "Height: " + figur.height + '</h2>'
                content.innerHTML += '<h3>' + "Weight: " + figur.mass + '</h3>'
                content.innerHTML += '<h4>' + "Birth: " + figur.birth_year + '</h4>'
                // '<h1>' + json.results[0].name + '</h1>'
                // + '<h2>' + json.results[0].height + '</h2>'
                // + '<h3>' + json.results[0].mass + '</h3>'
                // + '<h4>' + json.results[0].gender + '</h4>';
                  }
            }).catch((Error) => {
                console.log(Error);
            })
        })
        

    </script>
</body>
```



