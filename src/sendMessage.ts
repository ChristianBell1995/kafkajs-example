import ProducerFactory from "./producerFactory";

(async () => {
  const messageProcessor = {
    processMessage: (message: any) => {
      return Promise.resolve(console.log(message));
    },
  };

  console.log("HELLO");
  // const consumer = new ExampleConsumer(messageProcessor);
  const producer = new ProducerFactory();
  await producer.start();
  // await consumer.startConsumer();
  await producer.sendBatch([{ a: "test" }]);
  console.log("SENT BATCH");
  // await producer.shutdown();
  // await consumer.startBatchConsumer();
  // await consumer.shutdown();
})();
