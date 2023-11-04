var size = 0;
var placement = 'point';

var style_ZONAS_DE_LA_PAZ_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "26.0px \'Open Sans\', sans-serif";
    var labelFill = "#e6ff01";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,255,1,0.21)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}),fill: new ol.style.Fill({color: 'rgba(239,23,23,0.21)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
