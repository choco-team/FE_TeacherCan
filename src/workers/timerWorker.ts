onmessage = (event: MessageEvent<number>) => {
  let time = event.data;
  setInterval(() => {
    time--;
    postMessage(time);
  }, 1000);
};
