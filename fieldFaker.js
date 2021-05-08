import faker from "faker";

export const FieldKeys = Object.freeze({
    //geo
    city: "city",
    state: "state",
    zipCode: "zipCode",
    addressLine1: "addressLine1",
    addressLine2: "addressLine2",
    longitude: "longitude",
    latitude: "latitude",
    //
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
    [FieldKeys.city]:  faker.address.city,
    [FieldKeys.state]:  faker.address.state,
    [FieldKeys.zipCode]:  faker.address.zipCode,
    [FieldKeys.addressLine1]:  faker.address.streetAddress,
    [FieldKeys.addressLine2]: faker.address.secondaryAddress,
    [FieldKeys.longitude]: faker.address.longitude,
    [FieldKeys.latitude]: faker.address.latitude,
    //
    [FieldKeys.birthday]: faker.date.past,
    [FieldKeys.firstName]: faker.name.firstName,
    [FieldKeys.lastName]: faker.name.lastName,
    [FieldKeys.email]: faker.internet.email,
    /* image of pwetty aminals */
    [FieldKeys.imageAnimals]: faker.image.animals,
    /* image of a person */
    [FieldKeys.imagePerson]: faker.image.people,
    /* Image of nature stuffs */
    [FieldKeys.imageNature]: faker.image.nature,
    [FieldKeys.serialId]: () => Math.floor(Math.random() * 2000000000),
    [FieldKeys.pastDate]: faker.date.past,
    [FieldKeys.company]: faker.company.companyName,
    [FieldKeys.phoneNumber]: () => `${randomIntFromInterval(100, 999)}${randomIntFromInterval(100, 999)}${randomIntFromInterval(1000, 9999)}`,
    [FieldKeys.fiveStarRating]: () => randomIntFromInterval(1, 5),
    // text
    [FieldKeys.loremSentence]: faker.lorem.sentence,
    [FieldKeys.productDescription]: faker.commerce.productDescription,
    [FieldKeys.huntingEventTitle]: generateHuntingEvent,
    [FieldKeys.fishingEventTitle]: generateFisingEvent,
    [FieldKeys.outdoorEventTitle]: () => [generateFisingEvent(), generateHuntingEvent()][randomIntFromInterval(0, 1)],

    // numbers
    [FieldKeys.between1and10]: () => randomIntFromInterval(1, 10),
    [FieldKeys.price]: faker.commerce.price,
    //

});
