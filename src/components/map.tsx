import React, {useCallback, useEffect, useState} from 'react';
import Map, {FillLayer, Layer, MapLayerMouseEvent, Source} from "react-map-gl";
import {CountryData, countryData} from "../data/data";

const dataLayer: FillLayer = {
    id: 'data',
    type: 'fill',
    paint: {
        'fill-color': {
            property: 'visa_level',
            stops: [
                [0, '#fee08b'], // Self employed
                [1, '#66c2a5'], // Good
                [2, '#ff9696'], // Revoked
                [3, '#5e4aa9'], // Coming
                [4, '#c6ffc2'], // Partial
            ]
        },
        'fill-opacity': 0.8
    }
};

const COUNTRY_GEO_KEY = "ISO_A3";

export const MapElement = (props: { className: string }) => {
    const [hoverInfo, setHoverInfo] = useState<{x: number, y: number, data: CountryData}>(null);
    const [allData, setAllData] = useState(null);
    useEffect(() => {
        /* global fetch */
        fetch(
            'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'
        )
            .then(resp => resp.json())
            .then(json => setAllData(augmentData(json)))
            .catch(err => console.error('Could not load data', err)); // eslint-disable-line
    }, []);


    const onHover = useCallback<(arg: MapLayerMouseEvent) => void>(event => {
        const {
            features,
            point: {x, y},
        } = event;
        const hoveredFeature = features && features[0];
        const data = hoveredFeature && countryData[hoveredFeature.properties[COUNTRY_GEO_KEY]]

        setHoverInfo(data && {x, y, data});
    }, []);

    return (
        <div className={props.className}>
            <Map
                initialViewState={{
                    latitude: 40,
                    longitude: -100,
                    zoom: 3
                }}
                mapStyle="mapbox://styles/mapbox/light-v9"
                mapboxAccessToken={"pk.eyJ1IjoiY21heTEzZyIsImEiOiJjbGViOG9iMmwwcWR1M3dvOTkzbTByYjloIn0.8d-ftzyZ7av0N2_UpiMbCQ"}
                interactiveLayerIds={['data']}
                onMouseMove={onHover}
                onClick={onHover}
            >

                <Source type="geojson" data={allData}>
                    <Layer {...dataLayer} />
                </Source>
                {hoverInfo && (
                    <div className="w-80 absolute bg-white p-2 md:text-2xl lg:text-base" style={{left: hoverInfo.x, top: hoverInfo.y}}>
                        <HoverRow label="VISA Cost">{hoverInfo.data.cost}</HoverRow>
                        <HoverRow label="Savings Needed">{hoverInfo.data.savings_needed}</HoverRow>
                        <HoverRow label="Income Req. (per month)">{hoverInfo.data.income_per_month_needed}</HoverRow>
                        <HoverRow label="Last Updated">{hoverInfo.data.last_updated}</HoverRow>
                        <div className={"w-25 mt-5 mb-5"}>{hoverInfo.data.comments}</div>
                        {hoverInfo.data.official_url && <a className={"font-medium text-blue-600 dark:text-blue-500 hover:underline"} href={hoverInfo.data.official_url} target="_blank">Official Url </a>}
                    </div>
                )}
            </Map>
            <Legend />
        </div>
    )
}

function HoverRow(props: {label: string, children: string | number | JSX.Element}) {
    return (
        props.children &&
        <div>
            <span className="font-bold mr-1 w-60 inline-block text-large">{props.label}</span>
            <span>{props.children}</span>
        </div>
    )
}

function hasVisa(countryCode: string) {
    return countryCode.toUpperCase() in countryData
}

function augmentData(data: GeoJSON.FeatureCollection<GeoJSON.Geometry>): GeoJSON.FeatureCollection<GeoJSON.Geometry> {
    const mapped = {
        ...data,
        features: data.features.filter(f => hasVisa(f.properties["ISO_A3"])).map(f => {
            return {
                ...f,
                properties: {...f.properties, "visa_level": countryData[f.properties["ISO_A3"]].visa_support_level.valueOf()}
            }
        })
    }

    console.log(mapped)
    return mapped
}

function Legend() {
    const itemClasses = "w-4 h-4 mr-2 inline-block "
    return (
        <div className="absolute left-1 top-0 border-1 padding-10 bg-white text-xl">
            <div className={"bg-[#fee08b] " + itemClasses}/><span>Self Employeed only</span><br />
            <div className={"bg-[#66c2a5] " + itemClasses}/><span>Full Digital Nomad Visa</span><br />
            <div className={"bg-[#c6ffc2] " + itemClasses}/><span>Partial Support (certain territories)</span><br />
            <div className={"bg-[#5e4aa9] " + itemClasses}/><span>Announced & Coming</span><br />
            <div className={"bg-[#ff9696] " + itemClasses}/><span>Revoked</span><br />
        </div>
    )
}