const apiTestLib = require('tc-api-testing-lib')
const logger = require('../../src/common/logger')
const helper = require('../../src/common/helper')
const config = require('config')

const healthCheckRequests = [
  {
    folder: 'health check request'
  }
]
const reviewTypeRequests = [
  {
    folder: 'create review type successfully',
    iterationData: require('./testData/review-type/create-review-type-successfully.json')
  },
  {
    folder: 'create review type by invalid token',
    iterationData: require('./testData/review-type/create-review-type-by-invalid-token.json')
  },
  {
    folder: 'create review type by invalid field 1',
    iterationData: require('./testData/review-type/create-review-type-by-invalid-field-1.json')
  },
  {
    folder: 'create review type by invalid field 2',
    iterationData: require('./testData/review-type/create-review-type-by-invalid-field-2.json')
  },
  {
    folder: 'create review type by missing field 1',
    iterationData: require('./testData/review-type/create-review-type-by-missing-field-1.json')
  },
  {
    folder: 'create review type by missing field 2',
    iterationData: require('./testData/review-type/create-review-type-by-missing-field-2.json')
  },
  {
    folder: 'create review type by unexpected field',
    iterationData: require('./testData/review-type/create-review-type-by-unexpected-field.json')
  },
  {
    folder: 'get review type successfully',
    iterationData: require('./testData/review-type/get-review-type-successfully.json')
  },
  {
    folder: 'get review type unsuccessfully',
    iterationData: require('./testData/review-type/get-review-type-unsuccessfully.json')
  },
  {
    folder: 'search review types successfully',
    iterationData: require('./testData/review-type/search-review-types-successfully.json')
  },
  {
    folder: 'search review types unsuccessfully',
    iterationData: require('./testData/review-type/search-review-types-unsuccessfully.json')
  },
  {
    folder: 'fully update review type successfully',
    iterationData: require('./testData/review-type/fully-update-review-type-successfully.json')
  },
  {
    folder: 'fully update review type by invalid token',
    iterationData: require('./testData/review-type/fully-update-review-type-by-invalid-token.json')
  },
  {
    folder: 'fully update review type by invalid field 1',
    iterationData: require('./testData/review-type/fully-update-review-type-by-invalid-field-1.json')
  },
  {
    folder: 'fully update review type by invalid field 2',
    iterationData: require('./testData/review-type/fully-update-review-type-by-invalid-field-2.json')
  },
  {
    folder: 'fully update review type by missing field 1',
    iterationData: require('./testData/review-type/fully-update-review-type-by-missing-field-1.json')
  },
  {
    folder: 'fully update review type by missing field 2',
    iterationData: require('./testData/review-type/fully-update-review-type-by-missing-field-2.json')
  },
  {
    folder: 'fully update review type by unexpected field',
    iterationData: require('./testData/review-type/fully-update-review-type-by-unexpected-field.json')
  },
  {
    folder: 'partially update review type successfully',
    iterationData: require('./testData/review-type/partially-update-review-type-successfully.json')
  },
  {
    folder: 'partially update review type by invalid token',
    iterationData: require('./testData/review-type/partially-update-review-type-by-invalid-token.json')
  },
  {
    folder: 'partially update review type by invalid field 1',
    iterationData: require('./testData/review-type/partially-update-review-type-by-invalid-field-1.json')
  },
  {
    folder: 'partially update review type by invalid field 2',
    iterationData: require('./testData/review-type/partially-update-review-type-by-invalid-field-2.json')
  },
  {
    folder: 'partially update review type by unexpected field',
    iterationData: require('./testData/review-type/partially-update-review-type-by-unexpected-field.json')
  },
  {
    folder: 'delete review type by invalid token',
    iterationData: require('./testData/review-type/delete-review-type-by-invalid-token.json')
  },
  {
    folder: 'delete review type by invalid field',
    iterationData: require('./testData/review-type/delete-review-type-by-invalid-field.json')
  },
  {
    folder: 'delete review type successfully',
    iterationData: require('./testData/review-type/delete-review-type-successfully.json')
  }
]
const submissionRequests = [
  {
    folder: 'create submission successfully 1',
    iterationData: require('./testData/submission/create-submission-successfully-1.json')
  },
  {
    folder: 'create submission successfully 2',
    iterationData: require('./testData/submission/create-submission-successfully-2.json')
  },
  {
    folder: 'create submission by invalid token',
    iterationData: require('./testData/submission/create-submission-by-invalid-token.json')
  },
  {
    folder: 'create submission by invalid field 1',
    iterationData: require('./testData/submission/create-submission-by-invalid-field-1.json')
  },
  {
    folder: 'create submission by invalid field 2',
    iterationData: require('./testData/submission/create-submission-by-invalid-field-2.json')
  },
  {
    folder: 'create submission by invalid field 3',
    iterationData: require('./testData/submission/create-submission-by-invalid-field-3.json')
  },
  {
    folder: 'create submission by invalid field 4',
    iterationData: require('./testData/submission/create-submission-by-invalid-field-4.json')
  },
  {
    folder: 'create submission by missing field 1',
    iterationData: require('./testData/submission/create-submission-by-missing-field-1.json')
  },
  {
    folder: 'create submission by missing field 2',
    iterationData: require('./testData/submission/create-submission-by-missing-field-2.json')
  },
  {
    folder: 'create submission by missing field 3',
    iterationData: require('./testData/submission/create-submission-by-missing-field-3.json')
  },
  {
    folder: 'get submission successfully',
    iterationData: require('./testData/submission/get-submission-successfully.json')
  },
  {
    folder: 'get submission unsuccessfully',
    iterationData: require('./testData/submission/get-submission-unsuccessfully.json')
  },
  {
    folder: 'get submission download successfully',
    iterationData: require('./testData/submission/get-submission-download-successfully.json')
  },
  {
    folder: 'get submission download unsuccessfully',
    iterationData: require('./testData/submission/get-submission-download-unsuccessfully.json')
  },
  {
    folder: 'search submissions successfully',
    iterationData: require('./testData/submission/search-submissions-successfully.json')
  },
  {
    folder: 'search submissions unsuccessfully',
    iterationData: require('./testData/submission/search-submissions-unsuccessfully.json')
  },
  {
    folder: 'fully update submission successfully',
    iterationData: require('./testData/submission/fully-update-submission-successfully.json')
  },
  {
    folder: 'fully update submission by invalid token',
    iterationData: require('./testData/submission/fully-update-submission-by-invalid-token.json')
  },
  {
    folder: 'fully update submission by invalid field 1',
    iterationData: require('./testData/submission/fully-update-submission-by-invalid-field-1.json')
  },
  {
    folder: 'fully update submission by invalid field 2',
    iterationData: require('./testData/submission/fully-update-submission-by-invalid-field-2.json')
  },
  {
    folder: 'fully update submission by missing field 1',
    iterationData: require('./testData/submission/fully-update-submission-by-missing-field-1.json')
  },
  {
    folder: 'fully update submission by missing field 2',
    iterationData: require('./testData/submission/fully-update-submission-by-missing-field-2.json')
  },
  {
    folder: 'fully update submission by missing field 3',
    iterationData: require('./testData/submission/fully-update-submission-by-missing-field-3.json')
  },
  {
    folder: 'fully update submission by unexpected field',
    iterationData: require('./testData/submission/fully-update-submission-by-unexpected-field.json')
  },
  {
    folder: 'partially update submission successfully',
    iterationData: require('./testData/submission/partially-update-submission-successfully.json')
  },
  {
    folder: 'partially update submission by invalid token',
    iterationData: require('./testData/submission/partially-update-submission-by-invalid-token.json')
  },
  {
    folder: 'partially update submission by invalid field 1',
    iterationData: require('./testData/submission/partially-update-submission-by-invalid-field-1.json')
  },
  {
    folder: 'partially update submission by invalid field 2',
    iterationData: require('./testData/submission/partially-update-submission-by-invalid-field-2.json')
  },
  {
    folder: 'partially update submission by unexpected field',
    iterationData: require('./testData/submission/partially-update-submission-by-unexpected-field.json')
  },
  {
    folder: 'delete submission by invalid token',
    iterationData: require('./testData/submission/delete-submission-by-invalid-token.json')
  },
  {
    folder: 'delete submission by invalid field',
    iterationData: require('./testData/submission/delete-submission-by-invalid-field.json')
  },
  {
    folder: 'delete submission successfully',
    iterationData: require('./testData/submission/delete-submission-successfully.json')
  }
]
const artifactRequests = [
  {
    folder: 'create artifact successfully',
    iterationData: require('./testData/artifact/create-artifact-successfully.json')
  },
  {
    folder: 'create artifact by invalid token',
    iterationData: require('./testData/artifact/create-artifact-by-invalid-token.json')
  },
  {
    folder: 'create artifact by invalid field',
    iterationData: require('./testData/artifact/create-artifact-by-invalid-field.json')
  },
  {
    folder: 'create artifact by missing field',
    iterationData: require('./testData/artifact/create-artifact-by-missing-field.json')
  },
  {
    folder: 'get artifact download successfully',
    iterationData: require('./testData/artifact/get-artifact-download-successfully.json')
  },
  {
    folder: 'get artifact download unsuccessfully',
    iterationData: require('./testData/artifact/get-artifact-download-unsuccessfully.json')
  },
  {
    folder: 'search artifacts successfully',
    iterationData: require('./testData/artifact/search-artifacts-successfully.json')
  },
  {
    folder: 'search artifacts unsuccessfully',
    iterationData: require('./testData/artifact/search-artifacts-unsuccessfully.json')
  },
  {
    folder: 'delete artifact by invalid token',
    iterationData: require('./testData/artifact/delete-artifact-by-invalid-token.json')
  },
  {
    folder: 'delete artifact by invalid field',
    iterationData: require('./testData/artifact/delete-artifact-by-invalid-field.json')
  },
  {
    folder: 'delete artifact successfully',
    iterationData: require('./testData/artifact/delete-artifact-successfully.json')
  }
]
const reviewRequests = [
  {
    folder: 'create review successfully',
    iterationData: require('./testData/review/create-review-successfully.json')
  },
  {
    folder: 'create review by invalid token',
    iterationData: require('./testData/review/create-review-by-invalid-token.json')
  },
  {
    folder: 'create review by invalid field',
    iterationData: require('./testData/review/create-review-by-invalid-field.json')
  },
  {
    folder: 'create review by missing field 1',
    iterationData: require('./testData/review/create-review-by-missing-field-1.json')
  },
  {
    folder: 'create review by missing field 2',
    iterationData: require('./testData/review/create-review-by-missing-field-2.json')
  },
  {
    folder: 'create review by missing field 3',
    iterationData: require('./testData/review/create-review-by-missing-field-3.json')
  },
  {
    folder: 'create review by missing field 4',
    iterationData: require('./testData/review/create-review-by-missing-field-4.json')
  },
  {
    folder: 'create review by missing field 5',
    iterationData: require('./testData/review/create-review-by-missing-field-5.json')
  },
  {
    folder: 'create review by unexpected field',
    iterationData: require('./testData/review/create-review-by-unexpected-field.json')
  },
  {
    folder: 'get review successfully',
    iterationData: require('./testData/review/get-review-successfully.json')
  },
  {
    folder: 'get review unsuccessfully',
    iterationData: require('./testData/review/get-review-unsuccessfully.json')
  },
  {
    folder: 'search reviews successfully',
    iterationData: require('./testData/review/search-reviews-successfully.json')
  },
  {
    folder: 'search reviews unsuccessfully',
    iterationData: require('./testData/review/search-reviews-unsuccessfully.json')
  },
  {
    folder: 'fully update review successfully',
    iterationData: require('./testData/review/fully-update-review-successfully.json')
  },
  {
    folder: 'fully update review by invalid token',
    iterationData: require('./testData/review/fully-update-review-by-invalid-token.json')
  },
  {
    folder: 'fully update review by invalid field',
    iterationData: require('./testData/review/fully-update-review-by-invalid-field.json')
  },
  {
    folder: 'fully update review by missing field 1',
    iterationData: require('./testData/review/fully-update-review-by-missing-field-1.json')
  },
  {
    folder: 'fully update review by missing field 2',
    iterationData: require('./testData/review/fully-update-review-by-missing-field-2.json')
  },
  {
    folder: 'fully update review by missing field 3',
    iterationData: require('./testData/review/fully-update-review-by-missing-field-3.json')
  },
  {
    folder: 'fully update review by missing field 4',
    iterationData: require('./testData/review/fully-update-review-by-missing-field-4.json')
  },
  {
    folder: 'fully update review by missing field 5',
    iterationData: require('./testData/review/fully-update-review-by-missing-field-5.json')
  },
  {
    folder: 'fully update review by unexpected field',
    iterationData: require('./testData/review/fully-update-review-by-unexpected-field.json')
  },
  {
    folder: 'partially update review successfully',
    iterationData: require('./testData/review/partially-update-review-successfully.json')
  },
  {
    folder: 'partially update review by invalid token',
    iterationData: require('./testData/review/partially-update-review-by-invalid-token.json')
  },
  {
    folder: 'partially update review by invalid field',
    iterationData: require('./testData/review/partially-update-review-by-invalid-field.json')
  },
  {
    folder: 'partially update review by unexpected field',
    iterationData: require('./testData/review/partially-update-review-by-unexpected-field.json')
  },
  {
    folder: 'delete review by invalid token',
    iterationData: require('./testData/review/delete-review-by-invalid-token.json')
  },
  {
    folder: 'delete review by invalid field',
    iterationData: require('./testData/review/delete-review-by-invalid-field.json')
  },
  {
    folder: 'delete review successfully',
    iterationData: require('./testData/review/delete-review-successfully.json')
  }
]
const reviewSummationRequests = [
  {
    folder: 'create review summation successfully',
    iterationData: require('./testData/review-summation/create-review-summation-successfully.json')
  },
  {
    folder: 'create review summation by invalid token',
    iterationData: require('./testData/review-summation/create-review-summation-by-invalid-token.json')
  },
  {
    folder: 'create review summation by invalid field',
    iterationData: require('./testData/review-summation/create-review-summation-by-invalid-field.json')
  },
  {
    folder: 'create review summation by missing field 1',
    iterationData: require('./testData/review-summation/create-review-summation-by-missing-field-1.json')
  },
  {
    folder: 'create review summation by missing field 2',
    iterationData: require('./testData/review-summation/create-review-summation-by-missing-field-2.json')
  },
  {
    folder: 'create review summation by missing field 3',
    iterationData: require('./testData/review-summation/create-review-summation-by-missing-field-3.json')
  },
  {
    folder: 'create review summation by missing field 4',
    iterationData: require('./testData/review-summation/create-review-summation-by-missing-field-4.json')
  },
  {
    folder: 'create review summation by unexpected field',
    iterationData: require('./testData/review-summation/create-review-summation-by-unexpected-field.json')
  },
  {
    folder: 'get review summation successfully',
    iterationData: require('./testData/review-summation/get-review-summation-successfully.json')
  },
  {
    folder: 'get review summation unsuccessfully',
    iterationData: require('./testData/review-summation/get-review-summation-unsuccessfully.json')
  },
  {
    folder: 'search review summations successfully',
    iterationData: require('./testData/review-summation/search-review-summations-successfully.json')
  },
  {
    folder: 'search review summations unsuccessfully',
    iterationData: require('./testData/review-summation/search-review-summations-unsuccessfully.json')
  },
  {
    folder: 'fully update review summation successfully',
    iterationData: require('./testData/review-summation/fully-update-review-summation-successfully.json')
  },
  {
    folder: 'fully update review summation by invalid token',
    iterationData: require('./testData/review-summation/fully-update-review-summation-by-invalid-token.json')
  },
  {
    folder: 'fully update review summation by invalid field',
    iterationData: require('./testData/review-summation/fully-update-review-summation-by-invalid-field.json')
  },
  {
    folder: 'fully update review summation by missing field 1',
    iterationData: require('./testData/review-summation/fully-update-review-summation-by-missing-field-1.json')
  },
  {
    folder: 'fully update review summation by missing field 2',
    iterationData: require('./testData/review-summation/fully-update-review-summation-by-missing-field-2.json')
  },
  {
    folder: 'fully update review summation by missing field 3',
    iterationData: require('./testData/review-summation/fully-update-review-summation-by-missing-field-3.json')
  },
  {
    folder: 'fully update review summation by missing field 4',
    iterationData: require('./testData/review-summation/fully-update-review-summation-by-missing-field-4.json')
  },
  {
    folder: 'fully update review summation by unexpected field',
    iterationData: require('./testData/review-summation/fully-update-review-summation-by-unexpected-field.json')
  },
  {
    folder: 'partially update review summation successfully',
    iterationData: require('./testData/review-summation/partially-update-review-summation-successfully.json')
  },
  {
    folder: 'partially update review summation by invalid token',
    iterationData: require('./testData/review-summation/partially-update-review-summation-by-invalid-token.json')
  },
  {
    folder: 'partially update review summation by invalid field',
    iterationData: require('./testData/review-summation/partially-update-review-summation-by-invalid-field.json')
  },
  {
    folder: 'partially update review summation by unexpected field',
    iterationData: require('./testData/review-summation/partially-update-review-summation-by-unexpected-field.json')
  },
  {
    folder: 'delete review summation by invalid token',
    iterationData: require('./testData/review-summation/delete-review-summation-by-invalid-token.json')
  },
  {
    folder: 'delete review summation by invalid field',
    iterationData: require('./testData/review-summation/delete-review-summation-by-invalid-field.json')
  },
  {
    folder: 'delete review summation successfully',
    iterationData: require('./testData/review-summation/delete-review-summation-successfully.json')
  }
]

const requests = [
  ...healthCheckRequests,
  ...reviewTypeRequests,
  ...submissionRequests,
  ...artifactRequests,
  ...reviewRequests,
  ...reviewSummationRequests
]

/**
 * Clear the test data.
 * @return {Promise<void>}
 */
async function clearTestData () {
  logger.info('Clear the Postman test data.')
  await helper.postRequest(`${config.API_BASE_URL}${config.API_VERSION}/submissions/internal/jobs/clean`)
  logger.info('Finished clear the Postman test data.')
}

/**
 * Run the postman tests.
 */
apiTestLib.runTests(requests, require.resolve('./submissions-api.postman_collection.json'),
  require.resolve('./submissions-api.postman_environment.json')).then(async () => {
  logger.info('newman test completed!')
  await clearTestData()
}).catch(async (err) => {
  logger.logFullError(err)

  // Only calling the clean up function when it is not validation error.
  if (err.name !== 'ValidationError') {
    await clearTestData()
  }
})
