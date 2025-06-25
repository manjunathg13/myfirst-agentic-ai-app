// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AltPartRecommendation } = initSchema(schema);

export { AltPartRecommendation};