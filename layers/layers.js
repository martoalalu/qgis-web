var wms_layers = [];


        var lyr_GCBA_0 = new ol.layer.Tile({
            'title': 'GCBA',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://servicios.usig.buenosaires.gob.ar/mapcache/tms/1.0.0/amba_con_transporte_3857@GoogleMapsCompatible/{z}/{x}/{-y}.png'
            })
        });
var format_shp_1 = new ol.format.GeoJSON();
var features_shp_1 = format_shp_1.readFeatures(json_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_1.addFeatures(features_shp_1);
var lyr_shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shp_1, 
                style: style_shp_1,
                interactive: true,
    title: 'shp<br />\
    <img src="styles/legend/shp_1_0.png" /> 8 - 21<br />\
    <img src="styles/legend/shp_1_1.png" /> 21 - 34<br />\
    <img src="styles/legend/shp_1_2.png" /> 34 - 42<br />\
    <img src="styles/legend/shp_1_3.png" /> 42 - 54<br />\
    <img src="styles/legend/shp_1_4.png" /> 54 - 70<br />\
    <img src="styles/legend/shp_1_5.png" /> 70 - 96<br />\
    <img src="styles/legend/shp_1_6.png" /> 96 - 137<br />\
    <img src="styles/legend/shp_1_7.png" /> 137 - 190<br />\
    <img src="styles/legend/shp_1_8.png" /> 190 - 328<br />\
    <img src="styles/legend/shp_1_9.png" /> 328 - 2613<br />'
        });

lyr_GCBA_0.setVisible(true);lyr_shp_1.setVisible(true);
var layersList = [lyr_GCBA_0,lyr_shp_1];
lyr_shp_1.set('fieldAliases', {'barrio': 'barrio', 'Casos confirmados': 'comuna', });
lyr_shp_1.set('fieldImages', {'barrio': 'TextEdit', 'Casos confirmados': 'TextEdit', });
lyr_shp_1.set('fieldLabels', {'barrio': 'no label', 'Casos confirmados': 'inline label', });
lyr_shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});