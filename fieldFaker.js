import faker from "faker";

export const FieldTags = Object.freeze({
    //geo
    city: "city",
    state: "state",
    zipCode: "zipCode",
    addressLine1: "addressLine1",
    addressLine2: "addressLine2",
    longitude: "longitude",
    latitude: "latitude",
    // personal
    birthday: "birthday",
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    /* image of pwetty aminals */
    imageAnimals: "imageAnimals",
    /* image of a person */
    imagePerson: "imagePerson",
    /* Image of nature stuffs */
    imageNature: "imageNature",
    serialId: "serialId",
    pastDate: "pastDate",
    company: "company",
    phoneNumber: "phoneNumber",
    fiveStarRating: "fiveStarRating",
    // text
    loremSentence: "loremSentence",
    productDescription: "productDescription",
    huntingEventTitle: "huntingEventTitle",
    fishingEventTitle: "fishingEventTitle",
    outdoorEventTitle: "outdoorEventTitle",
    // numbers
    between1and10: "between1and10",
    price: "price"
    //
})

const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const generateHuntingEvent = () => {
    const animals = [faker.animal.bird(), faker.animal.rabbit(), faker.animal.bear(), faker.animal.crocodilia(), faker.animal.lion()];
    const animal = animals[[randomIntFromInterval(0, animals.length - 1)]];
    const adjective = ["Wild", "Peak Season", "Family", ""][randomIntFromInterval(0, 3)];
    const eventType = ["Hunting", "Tracking", "Watching", "Glassing"][randomIntFromInterval(0, 3)];
    const journeyNoun = ["Expedition", "Excursion", ""][randomIntFromInterval(0, 2)];

    return `${adjective} ${animal} ${eventType} ${journeyNoun}`
}

const generateFisingEvent = () => {
    const animal = faker.animal.fish();
    const adjective = ["Wild", "Peak Season", "Family", ""][randomIntFromInterval(0, 3)];
    const eventType = ["Fishing", "Tracking", "Catch And Release"][randomIntFromInterval(0, 2)];
    const journeyNoun = ["Expedition", "Excursion", "Trip"][randomIntFromInterval(0, 2)];

    return `${adjective} ${animal} ${eventType} ${journeyNoun}`;
}

export const fieldFakerMap = Object.freeze({
    // geo
    [FieldTags.city]:  faker.address.city,
    [FieldTags.state]:  faker.address.state,
    [FieldTags.zipCode]:  faker.address.zipCode,
    [FieldTags.addressLine1]:  faker.address.streetAddress,
    [FieldTags.addressLine2]: faker.address.secondaryAddress,
    [FieldTags.longitude]: faker.address.longitude,
    [FieldTags.latitude]: faker.address.latitude,
    //
    [FieldTags.birthday]: faker.date.past,
    [FieldTags.firstName]: faker.name.firstName,
    [FieldTags.lastName]: faker.name.lastName,
    [FieldTags.email]: faker.internet.email,
    /* image of pwetty aminals */
    [FieldTags.imageAnimals]: faker.image.animals,
    /* image of a person */
    [FieldTags.imagePerson]: faker.image.people,
    /* Image of nature stuffs */
    [FieldTags.imageNature]: faker.image.nature,
    [FieldTags.serialId]: () => Math.floor(Math.random() * 2000000000),
    [FieldTags.pastDate]: () => faker.date.past().toISOString(),
    [FieldTags.company]: faker.company.companyName,
    [FieldTags.phoneNumber]: () => `${randomIntFromInterval(100, 999)}${randomIntFromInterval(100, 999)}${randomIntFromInterval(1000, 9999)}`,
    [FieldTags.fiveStarRating]: () => randomIntFromInterval(1, 5),
    // text
    [FieldTags.loremSentence]: faker.lorem.sentence,
    [FieldTags.productDescription]: faker.commerce.productDescription,
    [FieldTags.huntingEventTitle]: generateHuntingEvent,
    [FieldTags.fishingEventTitle]: generateFisingEvent,
    [FieldTags.outdoorEventTitle]: () => [generateFisingEvent(), generateHuntingEvent()][randomIntFromInterval(0, 1)],

    // numbers
    [FieldTags.between1and10]: () => randomIntFromInterval(1, 10),
    [FieldTags.price]: faker.commerce.price,
    //

});
