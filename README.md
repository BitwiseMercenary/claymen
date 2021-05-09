# Claymen

A Library for generating fake data for schemas

## Configuration

Claymen looks for configurations in a `/clay` directory
in your root project directory. Output will be placed into
a `/clayput` directory in your project root.

The configuration instructs Claymen how to generate
fake data for the specified fields.

* **tableName**: The name of the generated csv
* **createThisMany**: Amount of fake records to generate
* **fields**: An array containing the configuration for each of the fields
that compose the entity you want to created fake data for.
  * **name**: The name of the field you want to created fake data for
  * **fakeDataType**: choose a FieldTag that accurately defines that type of
    fake data you want to generate. Consult the list of FieldTags for choices.
  * **customGenerator**: Instead of defining a fakeDataType you can define a custom
    generator that will be used to generate fake data.
  * **foreignDependency**: If this field has a foreignDependency then you can specify
    the `tableName` and field name in this format: `tableName.fieldName`. When generating
    fake data, Claymen will use the data of foreignDependency to populate this field.
  * **isForeignDepedency**: a boolean flag that signals that the field is foreignDependency.

Example Construction:
```
{
        tableName: String,
        fields: [
            {name: string, fakeDataType: FieldTags, isForeignDependency: boolean },
            ...
        ],
        createThisMany: number
    },
```

Practical Example:
```
import { FieldTags, createClaymen } from "claymen"

config = [{
        tableName: "People",
        fields: [
            {name: "id", fakeDataType: FieldTags.serialId, isForeignDependency: true },
            {name: "firstName", fakeDataType: FieldTags.firstName }
        ],
        createThisMany: 10
    },
    {
        tableName: "Cars",
        fields: [
            {name: "id", fakeDataType: FieldTags.serialId },
            {name: "make", customGenerator: () => "Honda" },
            {name: "owner", foreignDependency: "Peopel.id" },
        ],
        createThisMany: 10
    }]
    
    createClaymen();
```

## Field Tags

Field tags represent supported keys that are mapped to
fake data generators.

### List of Field Tags

#### Geo
* **city**: A random city
* **state**: A random state
* **zipCode**: A random zip code
* **addressLine1**: A random line 1 of an address
* **addressLine2**: A random line 2 of an address
* **longitude**: A random longitude value
* **latitude**: A random latitude value
#### PII
* **birthday**: A random date in the past
* **firstName**: A random first name
* **lastName**: A random last name
* **email**: A random email
* **phoneNumber**: A random 10 digit phone number
#### programming
* **serialId**: A random numeric serial id. Intended for DB serial columns.
#### time
* **pasteDate**: A random datetime in the past year.
* **pastDate1Day**: A random datetime in the past day
* **pastDate2Days**: A random datetime in the two days
* **pastDate3Days**: ...
* **pastDate5Days**: ...
* **pastDate8Days**: ...
* **pastDate13Days**: ...
* **pastDate21Days**: ...
* **futureDate1Day**: a random datetime in the future one day,
* **futureDate2Days**: ...
* **futureDate3Days**: ...
* **futureDate5Days**: ...
* **futureDate8Days**: ...
* **futureDate13Days**: ...
* **futureDate21Days**: ...
#### commerce
* **company**: A random company name,
* **fiveStarRating**: A random numerical rating between 1 and 5 (inclusive),
#### media
* **imageAnimals**: A random image of animals
* **imagePerson**: A random image of a person
* **imageNature**: A random image of a natural setting
* **imageAnimalsWithId**: A random image of animals with an attached id
* **imagePersonWithId**: A random image of a person with an attached id
* **imageNatureWithId**: A random image of a nature setting with an attached id
* **imageOutdoorWithId**: A random picture of an animal or nature with an id
#### text
* **loremSentence**: A latin sentence
* **loremParagraph**: A latin paragraph
* **loremParagraphs**: latin paragraphs
* **productDescription**: A random description of a product
* **huntingEventTitle**: A randomly generated title of a hunting event
* **fishingEventTitle**: A randomly generated title of a fishing event
* **outdoorEventTitle**: A random hunting or fishing event title
#### numbers
* **between1and10**: A random number between one and 10
* **price**: A random price

