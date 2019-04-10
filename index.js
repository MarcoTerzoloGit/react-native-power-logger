

import { logFromReactNativeBridge, logItemsFromReactNativeBridge } from './src/utils.bridge';
import { logFromAsyncStorage } from './src/utils.storage';
import { logger } from './src/utils.logger';
import { enableLogMap, overrideNativeMap } from './src/utils.nativeExtensions';

export default class RNLogger {

  /**
   * Util to log the whole local async storage in React - Native
   *
   * you can also call "showAsyncStorageContentInDev()" in "React Native Debugger"
   * console to have a look in the async storage content!'
   *
   * @static
   * @memberof RNLogger
   */
  static logStorage() {
    logFromAsyncStorage();
  }

  /**
   *
   * Utils that enable the use of logMap, to be used where map would have been normally used
   * place it where logs from mapped array is needed, replace it with regular map before production
   *
   * @static
   * @memberof RNLogger
   */
  static enableArraysLogMap() {
    enableLogMap();
  }

  /**
   * Utils to override Array.prototype.map to dump data from any mapped array.
   * Remember that enabling this will dump all the logs from all the array's maps
   * ( INCUDED MAPS IN FRAMEWORK AND LIBRARIES )
   *
   * @static
   * @memberof RNLogger
   */
  static overrideArraysMap() {
    overrideNativeMap();
  }

  /**
   *
   * Util to log data sent and received through the React-Native bridge
   * Configurable to filter data flow direction of interest between native and local javascript
   *
   * @static
   * @param {*} versus
   * @param {string} [prefix='Bridge data']
   * @memberof RNLogger
   */
  static logBridge(versus, prefix) {
    logFromReactNativeBridge(versus, prefix);
  }

  /**
   *
   * Util to log specific data sent and received through the React-Native bridge
   * Finds all the targets methods and modules push in targets array when found in bridge
   *
   * @static
   * @param {*} [targets=[]]
   * @param {string} [prefix='Bridge data']
   * @memberof RNLogger
   */
  static findInBridge(targets, prefix) {
    logItemsFromReactNativeBridge(targets, prefix);
  }

  /**
   *
   * Util to log items of interest, configurable to express colors and prefixes
   *
   * @static
   * @param {*} target
   * @param {string} [prefix='Default prefix: >']
   * @param {string} [level='info']
   * @param {boolean} [lineBreak=true]
   * @param {string} [breakColor='orange']
   * @memberof RNLogger
   */
  static log(target, prefix, level, lineBreak, breakColor) {
    logger(target, prefix, level, lineBreak, breakColor);
  }

  /**
   * Util to simply log with "console.info" behaviour
   *
   * @static
   * @param {*} message
   * @memberof RNLogger
   */
  static info(message) {
    console.info(message);
  }

  /**
   * Util to simply log with "console.warn" behaviour
   *
   * @static
   * @param {*} message
   * @memberof RNLogger
   */
  static warn(message) {
    console.warn(message);
  }

  /**
   * Util to simply log with "console.err" behaviour
   *
   * @static
   * @param {*} message
   * @memberof RNLogger
   */
  static err(message) {
    console.error(message);
  }

  /**
   * Util to show the current stack trace
   *
   * @static
   * @memberof RNLogger
   */
  static trace() {
    console.trace();
  }
  
}
