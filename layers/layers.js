ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([475322.532871, 8011295.222218, 834237.316297, 8223584.735492]);
var wms_layers = [];


        var lyr_satelital_0 = new ol.layer.Tile({
            'title': 'satelital',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_LA_PAZ_1 = new ol.format.GeoJSON();
var features_LA_PAZ_1 = format_LA_PAZ_1.readFeatures(json_LA_PAZ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_LA_PAZ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LA_PAZ_1.addFeatures(features_LA_PAZ_1);
var lyr_LA_PAZ_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LA_PAZ_1, 
                style: style_LA_PAZ_1,
                interactive: true,
                title: '<img src="styles/legend/LA_PAZ_1.png" /> LA_PAZ'
            });
var format_ZONAS_DE_LA_PAZ_2 = new ol.format.GeoJSON();
var features_ZONAS_DE_LA_PAZ_2 = format_ZONAS_DE_LA_PAZ_2.readFeatures(json_ZONAS_DE_LA_PAZ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_ZONAS_DE_LA_PAZ_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAS_DE_LA_PAZ_2.addFeatures(features_ZONAS_DE_LA_PAZ_2);
var lyr_ZONAS_DE_LA_PAZ_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONAS_DE_LA_PAZ_2, 
                style: style_ZONAS_DE_LA_PAZ_2,
                interactive: true,
                title: '<img src="styles/legend/ZONAS_DE_LA_PAZ_2.png" /> ZONAS_DE_LA_PAZ'
            });
var format_BN_LA_PAZ_3 = new ol.format.GeoJSON();
var features_BN_LA_PAZ_3 = format_BN_LA_PAZ_3.readFeatures(json_BN_LA_PAZ_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_BN_LA_PAZ_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BN_LA_PAZ_3.addFeatures(features_BN_LA_PAZ_3);
var lyr_BN_LA_PAZ_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BN_LA_PAZ_3, 
                style: style_BN_LA_PAZ_3,
                interactive: true,
                title: '<img src="styles/legend/BN_LA_PAZ_3.png" /> BN_LA_PAZ'
            });

lyr_satelital_0.setVisible(true);lyr_LA_PAZ_1.setVisible(true);lyr_ZONAS_DE_LA_PAZ_2.setVisible(true);lyr_BN_LA_PAZ_3.setVisible(true);
var layersList = [lyr_satelital_0,lyr_LA_PAZ_1,lyr_ZONAS_DE_LA_PAZ_2,lyr_BN_LA_PAZ_3];
lyr_LA_PAZ_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_ZONAS_DE_LA_PAZ_2.set('fieldAliases', {'ZONA DE RE': 'ZONA DE RE', 'MACRO DIST': 'MACRO DIST', 'ZONA': 'ZONA', 'SUB ALCALD': 'SUB ALCALD', 'CODIGO ZON': 'CODIGO ZON', 'DISTRITO': 'DISTRITO', });
lyr_BN_LA_PAZ_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ZONA': 'ZONA', 'ELEVACION': 'ELEVACION', });
lyr_LA_PAZ_1.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_ZONAS_DE_LA_PAZ_2.set('fieldImages', {'ZONA DE RE': 'TextEdit', 'MACRO DIST': 'TextEdit', 'ZONA': 'TextEdit', 'SUB ALCALD': 'TextEdit', 'CODIGO ZON': 'TextEdit', 'DISTRITO': 'TextEdit', });
lyr_BN_LA_PAZ_3.set('fieldImages', {'NOMBRE': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ZONA': 'TextEdit', 'ELEVACION': 'TextEdit', });
lyr_LA_PAZ_1.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_ZONAS_DE_LA_PAZ_2.set('fieldLabels', {'ZONA DE RE': 'inline label', 'MACRO DIST': 'inline label', 'ZONA': 'inline label', 'SUB ALCALD': 'inline label', 'CODIGO ZON': 'inline label', 'DISTRITO': 'inline label', });
lyr_BN_LA_PAZ_3.set('fieldLabels', {'NOMBRE': 'inline label', 'ESTE': 'inline label', 'NORTE': 'inline label', 'LATITUD': 'inline label', 'LONGITUD': 'inline label', 'ZONA': 'inline label', 'ELEVACION': 'inline label', });
lyr_BN_LA_PAZ_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});