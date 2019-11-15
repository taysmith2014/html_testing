(function(window, undefined) {
  var dictionary = {
    "38445444-8cb3-4d7c-8d7f-2d8d0aced313": "city_detail",
    "3148796e-a3be-472f-a348-56aff4c1ddfb": "cities",
    "f59703af-d6c7-442e-bf74-ed2f73529667": "homepage",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "5234a8a3-5b5c-497a-8d40-fc947c2788d3": "Template 1",
    "62d81dd0-357d-4ceb-bb6b-fe4a6f684a36": "uh",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);