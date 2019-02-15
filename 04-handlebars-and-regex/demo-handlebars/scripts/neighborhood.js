'use strict';

let neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood (rawDataObject) {
  for (let key in rawDataObject) {
    // console.log('key', key);
    this[key] = rawDataObject[key];
  }
}

Neighborhood.prototype.toHtml = function() {
  // 1. Get the template from the HTML document
  const template = $('#neighborhood-template').html(); // this needs to be assigned to... what?
  console.log(template);
  
  // 2. Use Handlebars to "compile" the HTML
  const compiled = Handlebars.compile(template); // this needs to be assigned to... what?
  console.log('compiled', compiled);

  // 3. Do not forget to return the HTML from this method...
  return compiled(this);
};

neighborhoodDataSet.forEach(neighborhoodObject => {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(ourNewNeighborhoodObject => {
  // What do we need to do here to render each of the neighborhoods to the DOM?
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});
