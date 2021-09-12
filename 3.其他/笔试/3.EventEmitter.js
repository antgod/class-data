/* --------- 题目：实现EventEmitter ----------- */
const EventEmitter = () => {
  const listenersMap = {};

  // 移除订阅函数
  const remove = (eventName, callback) => {
    const listeners = listenersMap[eventName] || [];
    const index = listeners.indexOf(callback);
    listeners.splice(index, 1);
  }

  // 移除全部订阅函数
  const off = (eventName) => {
    listenersMap[eventName] = [];
  }

  // 订阅函数
  const on = (eventName, callback) => {
    if (!listenersMap[eventName]) {
      listenersMap[eventName] = [];
    }
    listenersMap[eventName].push(callback);

    return () => {
      remove(eventName, callback);
    }
  }

  // 发布函数
  const trigger = (eventName, params) => {
    const listeners = listenersMap[eventName] || [];
    // 这里拷贝出来一份，防止运行时订阅或者移除回调的影响，参考redux源码思路： 
    // https://github.com/antgod/sourcecode-redux/blob/master/src/createStore.js
    listeners.slice().forEach(callback => callback(params));
  }

  return {
    remove,
    off,
    on,
    trigger,
  }
}

/* 实现事件处理器 EventEmitter ，有如下功能 */
const event = EventEmitter();

const name = 'test';
// 绑定事件
event.on(name, console.log);

// 触发事件
event.trigger(name, 'hello world');

// 取消绑定
event.off(name);

// 触发事件
event.trigger(name, 'bye bye');