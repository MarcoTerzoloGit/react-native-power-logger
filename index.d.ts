


// TODO: write extended function description and remove generic types
export declare global {

  // Basic interface for typescript usage
  interface RNLog {
    logBridge: (...args) => function;
    findInBridge: (...args) => function;
    logStorage: (...args) => function;
    enableArraysLogMap: (...args) => function;
    overrideArraysMap: (...args) => function;
    log: (...args) => function;
    info: (...args) => function;
    warn: (...args) => function;
    err: (...args) => function;
    trace: (...args) => function;
  }

  // This is merged into the console interface(Typescript)
  interface Console {
  
    pl: RNLog

  }
}