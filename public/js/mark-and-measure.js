window.addEventListener("load", thingToMeasure);

function thingToMeasure() {
    //const start = Date.now()
    performance.mark('start')
    fetch("/api")
        .then(result => result.json())
        .then(json => {
            json.images.forEach(image => console.log(image.name))
                //const end = Date.now()
            performance.mark('end')
                //const time = end - start
            performance.measure('fetching images', 'start', 'end')
                //console.log(time)
            const measurements = performance.getEntriesByType('measure')
            console.log(measurements)
        })
}