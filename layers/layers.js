var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_contenedores_nacional_22ago2022_1 = new ol.format.GeoJSON();
var features_contenedores_nacional_22ago2022_1 = format_contenedores_nacional_22ago2022_1.readFeatures(json_contenedores_nacional_22ago2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contenedores_nacional_22ago2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contenedores_nacional_22ago2022_1.addFeatures(features_contenedores_nacional_22ago2022_1);
var lyr_contenedores_nacional_22ago2022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contenedores_nacional_22ago2022_1, 
                style: style_contenedores_nacional_22ago2022_1,
                popuplayertitle: "contenedores_nacional_22ago2022",
                interactive: true,
                title: '<img src="styles/legend/contenedores_nacional_22ago2022_1.png" /> contenedores_nacional_22ago2022'
            });
var format_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2 = new ol.format.GeoJSON();
var features_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2 = format_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2.readFeatures(json_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2.addFeatures(features_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2);
var lyr_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2, 
                style: style_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2,
                popuplayertitle: "geoinfo_oficial_EC — ORGANIZACIÓN_TERRITORIAL_PROVINCIAL",
                interactive: true,
                title: '<img src="styles/legend/geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2.png" /> geoinfo_oficial_EC — ORGANIZACIÓN_TERRITORIAL_PROVINCIAL'
            });
var format_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3 = new ol.format.GeoJSON();
var features_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3 = format_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3.readFeatures(json_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3.addFeatures(features_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3);
var lyr_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3, 
                style: style_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3,
                popuplayertitle: "Informacion_patrimonial — sitios_arqueologicos_sipce_P_mar2023",
                interactive: true,
                title: '<img src="styles/legend/Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3.png" /> Informacion_patrimonial — sitios_arqueologicos_sipce_P_mar2023'
            });
var format_Informacion_patrimonialIBI_sipce_P_mar2023_4 = new ol.format.GeoJSON();
var features_Informacion_patrimonialIBI_sipce_P_mar2023_4 = format_Informacion_patrimonialIBI_sipce_P_mar2023_4.readFeatures(json_Informacion_patrimonialIBI_sipce_P_mar2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Informacion_patrimonialIBI_sipce_P_mar2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Informacion_patrimonialIBI_sipce_P_mar2023_4.addFeatures(features_Informacion_patrimonialIBI_sipce_P_mar2023_4);
var lyr_Informacion_patrimonialIBI_sipce_P_mar2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Informacion_patrimonialIBI_sipce_P_mar2023_4, 
                style: style_Informacion_patrimonialIBI_sipce_P_mar2023_4,
                popuplayertitle: "Informacion_patrimonial — IBI_sipce_P_mar2023",
                interactive: true,
                title: '<img src="styles/legend/Informacion_patrimonialIBI_sipce_P_mar2023_4.png" /> Informacion_patrimonial — IBI_sipce_P_mar2023'
            });

lyr_OSMStandard_0.setVisible(true);lyr_contenedores_nacional_22ago2022_1.setVisible(true);lyr_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2.setVisible(true);lyr_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3.setVisible(true);lyr_Informacion_patrimonialIBI_sipce_P_mar2023_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_contenedores_nacional_22ago2022_1,lyr_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2,lyr_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3,lyr_Informacion_patrimonialIBI_sipce_P_mar2023_4];
lyr_contenedores_nacional_22ago2022_1.set('fieldAliases', {'num': 'num', 'ZONAL': 'ZONAL', 'TIPO': 'TIPO', 'NOMBRE_DEL': 'NOMBRE_DEL', 'BIENES_CUL': 'BIENES_CUL', 'PROVINCIA': 'PROVINCIA', 'CANTÓN': 'CANTÓN', 'PARROQUIA': 'PARROQUIA', 'CIUDAD': 'CIUDAD', 'DIRECCIÓN': 'DIRECCIÓN', 'GEOREFEREN': 'GEOREFEREN', 'coord_x': 'coord_x', 'coord_y': 'coord_y', 'TENDENCIA': 'TENDENCIA', 'CONTENEDOR': 'CONTENEDOR', 'CÓDIGO_DE': 'CÓDIGO_DE', 'observ': 'observ', 'amena_Coto': 'amena_Coto', 'lat': 'lat', 'long': 'long', });
lyr_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'fcode': 'fcode', 'DPA_ANIO': 'DPA_ANIO', 'ZONA': 'ZONA', 'AREA': 'AREA', 'AREA_KM2': 'AREA_KM2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'FID_sitios': 'FID_sitios', 'codigo': 'codigo', 'codigo_de_': 'codigo_de_', 'nombre_t': 'nombre_t', 'provincia_': 'provincia_', 'canton_c': 'canton_c', 'parroquia_': 'parroquia_', 'tipo_de_ev': 'tipo_de_ev', 'tipo_de_ca': 'tipo_de_ca', 'situacion_': 'situacion_', 'situacion1': 'situacion1', 'categoria_': 'categoria_', 'x_t': 'x_t', 'y_t': 'y_t', 'altura_t': 'altura_t', 'direccion_': 'direccion_', 'FID_ORGANI': 'FID_ORGANI', 'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'DPA_ANIO': 'DPA_ANIO', 'txt': 'txt', 'fcode': 'fcode', 'rev_prov': 'rev_prov', 'rev_cant': 'rev_cant', 'rev_parroq': 'rev_parroq', 'observ': 'observ', 'lat': 'lat', 'long': 'long', });
lyr_Informacion_patrimonialIBI_sipce_P_mar2023_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'codigo': 'codigo', 'codigo_t': 'codigo_t', 'denominaci': 'denominaci', 'provincia_': 'provincia_', 'canton_c': 'canton_c', 'parroquia_': 'parroquia_', 'direccion': 'direccion', 'gen_fecha_': 'gen_fecha_', 'codigo_t1': 'codigo_t1', 'coordenda_': 'coordenda_', 'coordenada': 'coordenada', 'coordena_1': 'coordena_1', 'coordenda1': 'coordenda1', 'coordena_2': 'coordena_2', 'coordena_3': 'coordena_3', 'coordend_1': 'coordend_1', 'coordena_4': 'coordena_4', 'coordena_5': 'coordena_5', 'coordend_2': 'coordend_2', 'coordena_6': 'coordena_6', 'coordena_7': 'coordena_7', 'denomina_1': 'denomina_1', 'clave_cata': 'clave_cata', 'cuidad_c': 'cuidad_c', 'tipo_parro': 'tipo_parro', 'direccion_': 'direccion_', 'uso_origin': 'uso_origin', 'uso_actual': 'uso_actual', 'regimen_pr': 'regimen_pr', 'estado_de_': 'estado_de_', 'estado_c': 'estado_c', 'latitud': 'latitud', 'longitud': 'longitud', 'Fid_1': 'Fid_1', 'codigo_t_1': 'codigo_t_1', 'Prov_ubi': 'Prov_ubi', 'Prov': 'Prov', 'OID_': 'OID_', 'OriginObje': 'OriginObje', 'OriginOb_1': 'OriginOb_1', 'Destinatio': 'Destinatio', 'Destinat_1': 'Destinat_1', 'RuleType': 'RuleType', 'RuleDescri': 'RuleDescri', 'isExceptio': 'isExceptio', 'lat': 'lat', 'long': 'long', });
lyr_contenedores_nacional_22ago2022_1.set('fieldImages', {'num': '', 'ZONAL': '', 'TIPO': '', 'NOMBRE_DEL': '', 'BIENES_CUL': '', 'PROVINCIA': '', 'CANTÓN': '', 'PARROQUIA': '', 'CIUDAD': '', 'DIRECCIÓN': '', 'GEOREFEREN': '', 'coord_x': '', 'coord_y': '', 'TENDENCIA': '', 'CONTENEDOR': '', 'CÓDIGO_DE': '', 'observ': '', 'amena_Coto': '', 'lat': '', 'long': '', });
lyr_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'fcode': 'TextEdit', 'DPA_ANIO': 'TextEdit', 'ZONA': 'Range', 'AREA': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'FID_sitios': '', 'codigo': '', 'codigo_de_': '', 'nombre_t': '', 'provincia_': '', 'canton_c': '', 'parroquia_': '', 'tipo_de_ev': '', 'tipo_de_ca': '', 'situacion_': '', 'situacion1': '', 'categoria_': '', 'x_t': '', 'y_t': '', 'altura_t': '', 'direccion_': '', 'FID_ORGANI': '', 'DPA_PARROQ': '', 'DPA_DESPAR': '', 'DPA_CANTON': '', 'DPA_DESCAN': '', 'DPA_PROVIN': '', 'DPA_DESPRO': '', 'DPA_ANIO': '', 'txt': '', 'fcode': '', 'rev_prov': '', 'rev_cant': '', 'rev_parroq': '', 'observ': '', 'lat': '', 'long': '', });
lyr_Informacion_patrimonialIBI_sipce_P_mar2023_4.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'codigo': '', 'codigo_t': '', 'denominaci': '', 'provincia_': '', 'canton_c': '', 'parroquia_': '', 'direccion': '', 'gen_fecha_': '', 'codigo_t1': '', 'coordenda_': '', 'coordenada': '', 'coordena_1': '', 'coordenda1': '', 'coordena_2': '', 'coordena_3': '', 'coordend_1': '', 'coordena_4': '', 'coordena_5': '', 'coordend_2': '', 'coordena_6': '', 'coordena_7': '', 'denomina_1': '', 'clave_cata': '', 'cuidad_c': '', 'tipo_parro': '', 'direccion_': '', 'uso_origin': '', 'uso_actual': '', 'regimen_pr': '', 'estado_de_': '', 'estado_c': '', 'latitud': '', 'longitud': '', 'Fid_1': '', 'codigo_t_1': '', 'Prov_ubi': '', 'Prov': '', 'OID_': '', 'OriginObje': '', 'OriginOb_1': '', 'Destinatio': '', 'Destinat_1': '', 'RuleType': '', 'RuleDescri': '', 'isExceptio': '', 'lat': '', 'long': '', });
lyr_contenedores_nacional_22ago2022_1.set('fieldLabels', {'num': 'no label', 'ZONAL': 'no label', 'TIPO': 'no label', 'NOMBRE_DEL': 'inline label - always visible', 'BIENES_CUL': 'no label', 'PROVINCIA': 'no label', 'CANTÓN': 'no label', 'PARROQUIA': 'no label', 'CIUDAD': 'no label', 'DIRECCIÓN': 'no label', 'GEOREFEREN': 'no label', 'coord_x': 'no label', 'coord_y': 'no label', 'TENDENCIA': 'no label', 'CONTENEDOR': 'no label', 'CÓDIGO_DE': 'no label', 'observ': 'no label', 'amena_Coto': 'no label', 'lat': 'no label', 'long': 'no label', });
lyr_geoinfo_oficial_ECORGANIZACIN_TERRITORIAL_PROVINCIAL_2.set('fieldLabels', {'OBJECTID': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'fcode': 'no label', 'DPA_ANIO': 'no label', 'ZONA': 'no label', 'AREA': 'no label', 'AREA_KM2': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Informacion_patrimonialsitios_arqueologicos_sipce_P_mar2023_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'FID_sitios': 'no label', 'codigo': 'no label', 'codigo_de_': 'no label', 'nombre_t': 'inline label - always visible', 'provincia_': 'no label', 'canton_c': 'no label', 'parroquia_': 'no label', 'tipo_de_ev': 'no label', 'tipo_de_ca': 'no label', 'situacion_': 'no label', 'situacion1': 'no label', 'categoria_': 'no label', 'x_t': 'no label', 'y_t': 'no label', 'altura_t': 'no label', 'direccion_': 'no label', 'FID_ORGANI': 'no label', 'DPA_PARROQ': 'no label', 'DPA_DESPAR': 'no label', 'DPA_CANTON': 'no label', 'DPA_DESCAN': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'DPA_ANIO': 'no label', 'txt': 'no label', 'fcode': 'no label', 'rev_prov': 'no label', 'rev_cant': 'no label', 'rev_parroq': 'no label', 'observ': 'no label', 'lat': 'no label', 'long': 'no label', });
lyr_Informacion_patrimonialIBI_sipce_P_mar2023_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'codigo': 'no label', 'codigo_t': 'inline label - always visible', 'denominaci': 'no label', 'provincia_': 'no label', 'canton_c': 'no label', 'parroquia_': 'no label', 'direccion': 'no label', 'gen_fecha_': 'no label', 'codigo_t1': 'no label', 'coordenda_': 'no label', 'coordenada': 'no label', 'coordena_1': 'no label', 'coordenda1': 'no label', 'coordena_2': 'no label', 'coordena_3': 'no label', 'coordend_1': 'no label', 'coordena_4': 'no label', 'coordena_5': 'no label', 'coordend_2': 'no label', 'coordena_6': 'no label', 'coordena_7': 'no label', 'denomina_1': 'no label', 'clave_cata': 'no label', 'cuidad_c': 'no label', 'tipo_parro': 'no label', 'direccion_': 'no label', 'uso_origin': 'no label', 'uso_actual': 'no label', 'regimen_pr': 'no label', 'estado_de_': 'no label', 'estado_c': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'Fid_1': 'no label', 'codigo_t_1': 'no label', 'Prov_ubi': 'no label', 'Prov': 'no label', 'OID_': 'no label', 'OriginObje': 'no label', 'OriginOb_1': 'no label', 'Destinatio': 'no label', 'Destinat_1': 'no label', 'RuleType': 'no label', 'RuleDescri': 'no label', 'isExceptio': 'no label', 'lat': 'no label', 'long': 'no label', });
lyr_Informacion_patrimonialIBI_sipce_P_mar2023_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});