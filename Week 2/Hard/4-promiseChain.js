/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

// Function that returns a promise that resolves after t1 seconds
function waitForT1(t1) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve();
      }, t1 * 1000); // Convert seconds to milliseconds
  });
}

// Function that returns a promise that resolves after t2 seconds
function waitForT2(t2) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve();
      }, t2 * 1000); // Convert seconds to milliseconds
  });
}

// Function that returns a promise that resolves after t3 seconds
function waitForT3(t3) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve();
      }, t3 * 1000); // Convert seconds to milliseconds
  });
}

// Async function that sequentially calls waitForT1, waitForT2, and waitForT3
async function waitForAllSequential(t1, t2, t3) {
  const start = new Date().getTime(); // Record the start time

  // Sequentially wait for each promise to resolve
  await waitForT1(t1);
  await waitForT2(t2);
  await waitForT3(t3);

  const end = new Date().getTime(); // Record the end time
  const duration = end - start; // Calculate the duration in milliseconds
  return duration;
}

module.exports = waitForAllSequential;
