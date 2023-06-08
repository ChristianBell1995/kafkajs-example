import ExampleConsumer from "./consumerFactory";
import ProducerFactory from "./producerFactory";

(async () => {
  const messageProcessor = {
    processMessage: (message: any) => {
      return Promise.resolve(console.log(message));
    },
  };
  const consumer = new ExampleConsumer(messageProcessor);
  const producer = new ProducerFactory();
  await producer.start();
  await consumer.startConsumer();
  // await producer.sendBatch([{ a: "test" }]);
  // await producer.shutdown();
  // await consumer.shutdown();
})();
