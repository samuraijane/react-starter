/**
 * Delays the execution of a function.
 * @param fn - The function to be debounced.
 * @param delay - The delay in milliseconds
 * @returns 
 */
export const debounce = (fn: Function, delay: number) => { // [1]
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

/*
NOTES
  [1] This function comes from a combination of the sources below.
      • decipher.dev/30-seconds-of-typescript/docs/debounce/
      • dev.to/jeetvora331/javascript-debounce-easiest-explanation--29hc
*/
