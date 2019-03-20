
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue'; // dependency
import { logger } from './utils.logger';


export function logFromReactNativeBridge(versus, prefix = 'Bridge data: >') {

  const toNative = 'toNative';
  const toJavascript = 'toJavascript';

  const configureBridgeLogger = (targetMsg) => {
    switch (versus) {
      case toJavascript: if (targetMsg.type === 0) logger(targetMsg, prefix); break;
      case toNative: if (targetMsg.type === 1) logger(targetMsg, prefix); break;
      default: logger(targetMsg, prefix);
    }
  };

  MessageQueue.spy(configureBridgeLogger);
}

export function logItemsFromReactNativeBridge(targets = [], prefix = 'Bridge data: >') {

  const configureBridgeFinder = (targetMsg) => {
    targets.map(item => (targetMsg.module === item || targetMsg.method === item) && logger(targetMsg, prefix));
  };
  MessageQueue.spy(configureBridgeFinder);
}
