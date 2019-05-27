import { JSONSchema7 } from 'json-schema';
import * as jsf from 'json-schema-faker';

jsf.option({
  alwaysFakeOptionals: true,
});

declare module 'json-schema' {
  interface JSONSchema7 {
    chance?: string;
  }
}

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
    lastName: {
      type: 'string',
      chance: 'last',
    },
  },
};

const personalInformation = jsf(personalInformationSchema);

console.log(personalInformation);
