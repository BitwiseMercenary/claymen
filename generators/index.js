import faker from "faker";
import { randomIntFromInterval, randomChoice } from "../utils.js";

const HUNTING_ADJECTIVES = Object.freeze(["Wild", "Peak Season", "Family", ""]);
const JOURNEY_NOUNS = Object.freeze(["Expedition", "Excursion", "Trip"]);

// start Activities ==============================================================================================
export const generateHuntingEvent = () => {
    const animals = [faker.animal.bird(), faker.animal.rabbit(),
        faker.animal.bear(), faker.animal.crocodilia(), faker.animal.lion()];
    const adjective = randomChoice(HUNTING_ADJECTIVES);
    const animal = randomChoice(animals);
    const eventType = randomChoice(["Hunting", "Tracking", "Watching", "Glassing"]);
    const journeyNoun = randomChoice(JOURNEY_NOUNS);

    return `${adjective} ${animal} ${eventType} ${journeyNoun}`.trim();
}

export const generateFishingEvent = () => {
    const animal = faker.animal.fish();
    const adjective = randomChoice(HUNTING_ADJECTIVES);
    const eventType = randomChoice(["Fishing", "Tracking", "Catch And Release"]);
    const journeyNoun = randomChoice(JOURNEY_NOUNS);

    return `${adjective} ${animal} ${eventType} ${journeyNoun}`.trim();
}

export const generateOutdoorEvent = () => randomChoice([generateFishingEvent(), generateHuntingEvent()]);

// End Activities =======================================================================================================

// Start Media =================================================================================================
export const generateAnimalPicture = (withId = false) => faker.image.animals() + (withId ? `?id=${faker.datatype.uuid()}` : "");
export const generateAnimalPicture500x500 = (withId = false) => faker.image.animals(500, 500, true) + (withId ? `?id=${faker.datatype.uuid()}` : "");
export const generateAnimalPicture1000x1000 = (withId = false) => faker.image.animals(1000, 1000, true) + (withId ? `?id=${faker.datatype.uuid()}` : "");
export const generateAnimalPictureWithId = generateAnimalPicture(true);
export const generateAnimalPicture500x500WithId = generateAnimalPicture500x500(true);
export const generateAnimalPicture1000x1000WithId = generateAnimalPicture1000x1000(true);
export const generateAnimalPictureVaried = (withId = false) => randomChoice([generateAnimalPicture(withId), generateAnimalPicture500x500(withId), generateAnimalPicture1000x1000(withId)]);
export const generateAnimalPictureVariedWithId = () => generateAnimalPictureVaried(true);

export const generatePersonPicture = (withId = false) => faker.image.people() + (withId ? `?id=${faker.datatype.uuid()}` : "");
export const generatePersonPicture500x500 = (withId = false) => faker.image.people(500, 500, true) + (withId ? `?id=${faker.datatype.uuid()}` : "");
export const generatePersonPicture1000x1000 = (withId = false) => faker.image.people(1000, 1000, true) + (withId ? `?id=${faker.datatype.uuid()}` : "");
export const generatePersonPictureWithId = generatePersonPicture(true);
export const generatePersonPicture500x500WithId = generatePersonPicture500x500(true);
export const generatePersonPicture1000x1000WithId = generatePersonPicture1000x1000(true);
export const generatePersonPictureVaried = (withId = false) => randomChoice([generatePersonPicture(withId), generatePersonPicture500x500(withId), generatePersonPicture1000x1000(withId)]);
export const generatePersonPictureVariedWithId = () => generatePersonPictureVaried(true);

export const generateNaturePicture = (withId = false) => faker.image.nature() + (withId ? `?id=${faker.datatype.uuid()}` : "");
export const generateNaturePicture500x500 = (withId = false) => faker.image.nature(500, 500, true) + (withId ? `?id=${faker.datatype.uuid()}` : "");
export const generateNaturePicture1000x1000 = (withId = false) => faker.image.nature(1000, 1000, true) + (withId ? `?id=${faker.datatype.uuid()}` : "");
export const generateNaturePictureWithId = generateNaturePicture(true);
export const generateNaturePicture500x500WithId = generateNaturePicture500x500(true);
export const generateNaturePicture1000x1000WithId = generateNaturePicture1000x1000(true);
export const generateNaturePictureVaried = (withId = false) => randomChoice([generateNaturePicture(withId), generateNaturePicture500x500(withId), generateNaturePicture1000x1000(withId)]);
export const generateNaturePictureVariedWithId = () => generateNaturePictureVaried(true);

export const generateOutdoorPictureVariedWithId = () => randomChoice([generateAnimalPictureVariedWithId(), generateNaturePictureVariedWithId()]);
// End Media ===================================================================================================

// Start Commerce ==============================================================================================
export const generateFiveStarRating = () => randomIntFromInterval(1, 5);
// End Commerce =================================================================================================

// Start PII ====================================================================================================
export const generatePhoneNumber = () => `${randomIntFromInterval(100, 999)}${randomIntFromInterval(100, 999)}${randomIntFromInterval(1000, 9999)}`
// End PII ======================================================================================================

// Start Time ===================================================================================================
export const generatePastDate = () => faker.date.past().toISOString()

export const generateDateOneDayAgo = () => faker.date.recent(1).toISOString();
export const generateDateTwoDaysAgo = () => faker.date.recent(2).toISOString();
export const generateDateThreeDaysAgo = () => faker.date.recent(3).toISOString();
export const generateDateFiveDaysAgo = () => faker.date.recent(5).toISOString();
export const generateDateEightDaysAgo = () => faker.date.recent(8).toISOString();
export const generateDate13DaysAgo = () => faker.date.recent(13).toISOString();
export const generateDate21DaysAgo = () => faker.date.recent(21).toISOString();

export const generateFutureDateOneDay = () => faker.date.soon(1).toISOString();
export const generateFutureDateTwoDays = () => faker.date.soon(2).toISOString();
export const generateFutureDateThreeDays = () => faker.date.soon(3).toISOString();
export const generateFutureDateFiveDays = () => faker.date.soon(5).toISOString();
export const generateFutureDateEightDays = () => faker.date.soon(8).toISOString();
export const generateFutureDate13Days = () => faker.date.soon(13).toISOString();
export const generateFutureDate21Days = () => faker.date.soon(21).toISOString();
// End Time =====================================================================================================

// Start numbers ================================================================================================
export const generateNumberBetween1and10 = () => randomIntFromInterval(1, 10);
// End numbers ==================================================================================================

// Start programming ==========================================================================================
export const generateDbSerialId = () => Math.floor(Math.random() * 2000000000);
// End programming ============================================================================================
