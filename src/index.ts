import * as jsf from 'json-schema-faker';
import { JSONSchema7 } from 'json-schema';

jsf.option({
  alwaysFakeOptionals: true,
});

const personalInformationSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'integer',
      minimum: 1,
    },
    birthday: {
      type: 'string',
      format: 'date-time',
    },
    employed: {
      type: 'boolean',
    },
    favoriteColor: {
      type: 'string',
      pattern: '^#[0-9]{6}$',
    },
    hobbies: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    languages: {
      type: 'object',
      patternProperties: {
        '^[a-z]{2,10}$': {
          type: 'string',
        },
      },
    },
  },
};

const personalInformation = jsf(personalInformationSchema);

console.log(personalInformation);
