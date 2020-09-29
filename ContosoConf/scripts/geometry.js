﻿const radiusOfEarthInMiles = 3963.1676;

function radians(degrees) {
    return degrees * Math.PI / 180;
};

export function distanceInMiles(p1, p2) {
    let lat1 = p1.latitude; // inputs are in decimal degrees
    const lon1 = p1.longitude;
    let lat2 = p2.latitude;
    const lon2 = p2.longitude;

    const dLat = radians(lat2 - lat1);
    const dLon = radians(lon2 - lon1);
    lat1 = radians(lat1);
    lat2 = radians(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return radiusOfEarthInMiles * c;
};
