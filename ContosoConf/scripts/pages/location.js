﻿import { distanceInMiles } from "../geometry.js";

const conferenceLocation = {
    latitude: 47.6097,  // decimal degrees
    longitude: 122.3331 // decimal degrees
};

const maximumDistanceInMilesFromConferenceToShowVenue = 10;

const distanceElement = document.getElementById("distance");
const travelSection = document.querySelector("section.travel");
const venueSection = document.querySelector("section.venue");

function distanceFromConference(coords) {
    return Math.floor(distanceInMiles(coords, conferenceLocation));
};

function showDistanceMessage(distance) {
    const message = "Tú eres " + distance + " a kilómetros de la conferencia";
    distanceElement.textContent = message;
};

function moveVenueSectionToTop() {
    travelSection.parentNode.insertBefore(venueSection, travelSection);
};

function updateUIForPosition(position) {
    // TODO: Calculate the distance from the conference
    const distance = distanceFromConference(position.coords);

    showDistanceMessage(distance);
    const isNearToConference = distance < maximumDistanceInMilesFromConferenceToShowVenue;
    if (isNearToConference) {
        moveVenueSectionToTop();
    }
};

function error() {
    distanceElement.textContent = "No pude detectar su ubicación actual.";
};

// TODO: Get current position from the geolocation API.
//       Call updateUIForPosition for success and error for failure.
navigator.geolocation.getCurrentPosition(updateUIForPosition, error);

