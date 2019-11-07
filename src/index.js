import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import { loadCsv, oneHot } from "./utils.js";


/**
 * 1. Load data from the train CSV file
 * 
 * Returns:
 *  an array of objects with the following structure
 *  e.g. [{#followers: 1000, #follows: 955, #posts: 32, ...}, ...]
 */
export async function loadData() {
  console.log("1. Loading data ...");
  const data = await loadCsv('./instagram_train.csv');
  return data;
} 

/**
 * 2. Prepare data 
 * Takes:
 * 
 * Returns:
 *  X - an array of arrays [[],[], ...]
 *  y - an array of labels
 */
export async function prepareData(data, features) {
  console.log("2. Preparing data ...");

}

/**
 * 3. Validation split
 * 
 */
export function splitData(X, y, validationSplit, batchSize) {
  console.log("3. Splitting data ...");

}

/**
 * 4. Define tensorflow sequential model with:
 *  - one output layer with 2 neurons (we're predicting probabilities of two outcomes)
 *  - with input shape of the number of features
 *  - softmax activation layer (because it's a classification problem)
 * 
 * Returns:
 *    tensorflow model
 */
export function getTfModel(features) {
  console.log("4. Getting tf model ...");

}

/**
 * 5. Compile model
 */
export function compileTfModel(model) {
  console.log("5. Compiling tf model ...");

}

/**
 * 6. Train tf model by:
 *  - converting training data into tf tensors
 *  - train the model itself using model.fitDataset
 */
export async function trainTfModel(model, trainDs, validationDs) {
  console.log("6. Training tf model ...");

}

/**
 * 7. Test results
 */
export async function testResults(model, X, y, split) {
  
}


(async () => {
  //  1. LOAD DATA
  const data = await loadData();
  console.log('Loaded data:', data);

  //  2. PREPARE DATA
  const features = [];
  const [X, y] = await prepareData(data, features);

  //  3. SPLIT DATA
  const [trainDs, validationDs] = splitData(X, y, .8, 16);

  //  4. GET TF MODEL
  const model = getTfModel(features);

  //  5. COMPILE TF MODEL
  compileTfModel(model);

  //  6. TRAIN TF MODEL
  await trainTfModel(model, trainDs, validationDs);

  //  7. TEST RESULTS
  testResults(model, X, y, .8);

  //  8. SAVE MODEL
  await model.save('downloads://pretrained-model');
})();
