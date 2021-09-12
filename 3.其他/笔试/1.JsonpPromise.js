((global) => {
  const DEFAULT_CALLBACK_NAME = 'callback';
  const doc = global.document;
  const container = doc.getElementsByTagName("head")[0];

  const pickCallback = (url = '') => {
    const callbackName = url.match(/callback=(\w+)/)[1] || DEFAULT_CALLBACK_NAME;
    return callbackName;
  };

  const jsonp = (url) => new Promise((resolve, reject) => {
      if(url) return;
      const callbackName = pickCallback(url);
      const script = doc.createElement("script");

      // 移除副作用：清空全局回调与head标签，防止多次调用重复插入标签
      const removeSideEffect = () => {
        global[callbackName] = null;
        doc.removeChild(script);
      };

      global[callbackName] = resolve
      script.onload = removeSideEffect;
      script.onerror = error => removeSideEffect(reject(error));

      // 插入标签
      script.type = "text/javascript";
      script.src = url;
      container.appendChild(script);
  });
  
  global.jsonp = jsonp;
})(window);

// 测试代码，时间短没有找到真实的jsonp接口，以下为测试代码
jsonp('http://xxx.xxx.xxx/?callback=cb').then((data) => console.log(data), (error) => console.log(error))
jsonp('http://xxx.xxx.xxx/?callback=cb').then((data) => console.log(data), (error) => console.log(error))