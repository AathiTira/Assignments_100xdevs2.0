/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.   */

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

// Async function that uses Promise.all to wait for all three promises to resolve
async function waitForAll(t1, t2, t3) {
  const start = new Date().getTime(); // Record the start time

  // Wait for all promises to resolve
  await Promise.all([waitForT1(t1), waitForT2(t2), waitForT3(t3)]);

  const end = new Date().getTime(); // Record the end time
  const duration = end - start; // Calculate the duration in milliseconds
  return duration;
}

module.exports = waitForAll;
