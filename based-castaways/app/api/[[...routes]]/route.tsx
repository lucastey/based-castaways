/** @jsxImportSource frog/jsx */

import { Button, Frog} from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

type State = {
  points: number
};

const app = new Frog<{ State: State }>({
  initialState: {
    points: 0
  },
  assetsPath: '/',  // Ensures static assets are served correctly.
  basePath: '/api' // Ensures API endpoints are prefixed with '/api'.
})
// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  // const quiz = inputText || buttonValue
  return c.res({
    action:'/first',
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmU5HmEGDNP7J4QK7K7fUfJwZccRCwsdZkCjVfNb36H9NN',
    intents: [
      <Button >Start Now!</Button>,
    
    ],
  });
});

app.frame('/first', (c) => {
  const { buttonValue } = c
  const state = c.deriveState(previousState => {
    if (buttonValue === '1') previousState.points += 1;
    if (buttonValue === '2') previousState.points += 2;
    if (buttonValue === '3') previousState.points += 3;
    if (buttonValue === '4') previousState.points += 4;
  });
  console.log("Current Points:", state.points);
  return c.res({
    action:'/second',
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmWm4GCKv1t4aQhjV9U4mYxL9uXiMP6o14JWXxRNGpw5x1',
    intents: [
      <Button value="1">1</Button>,
      <Button value="2">2</Button>,
      <Button value="3">3</Button>,
      <Button value="4">4</Button>,
    ],
  });
});

app.frame('/second', (c) => {
  const { buttonValue, inputText, status } = c
  const state = c.deriveState(previousState => {
    if (buttonValue === '1') previousState.points += 1;
    if (buttonValue === '2') previousState.points += 2;
    if (buttonValue === '3') previousState.points += 3;
    if (buttonValue === '4') previousState.points += 4;
  });
  console.log("Current Points:", state.points);
  return c.res({
    action:'/third',
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmUmFzt1nXVrNyEXWJNCZeMrxAQyg8CqBm3TNufNVbVG1S',
    intents: [
      <Button value="1">1</Button>,
      <Button value="2">2</Button>,
      <Button value="3">3</Button>,
      <Button value="4">4</Button>,
    
    ],
  });
});


app.frame('/third', (c) => {
  const { buttonValue, inputText, status } = c
  const state = c.deriveState(previousState => {
    if (buttonValue === '1') previousState.points += 1;
    if (buttonValue === '2') previousState.points += 2;
    if (buttonValue === '3') previousState.points += 3;
    if (buttonValue === '4') previousState.points += 4;
  });
  console.log("Current Points:", state.points);
  return c.res({
    action:'/fourth',
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmbpGCvG1q9Hdj3wahNSqSN55At9C59rmeMSahm5bkWNj2',
    intents: [
      <Button value="1">1</Button>,
      <Button value="2">2</Button>,
      <Button value="3">3</Button>,
      <Button value="4">4</Button>,
    
    ],
  });
});


app.frame('/fourth', (c) => {
  const { buttonValue, inputText, status } = c
  const state = c.deriveState(previousState => {
    if (buttonValue === '1') previousState.points += 1;
    if (buttonValue === '2') previousState.points += 2;
    if (buttonValue === '3') previousState.points += 3;
    if (buttonValue === '4') previousState.points += 4;
  });
  console.log("Current Points:", state.points);
  return c.res({
    action:'/fifth',
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmZzLd59XiZEydxikLUENkpZ7UcjRzzJL1d7xMTwfj9DW1',
    intents: [
      <Button value="1">1</Button>,
      <Button value="2">2</Button>,
      <Button value="3">3</Button>,
      <Button value="4">4</Button>,
    ],
  });
});


app.frame('/fifth', (c) => {
  const { buttonValue, inputText, status } = c
  const state = c.deriveState(previousState => {
    if (buttonValue === '1') previousState.points += 1;
    if (buttonValue === '2') previousState.points += 2;
    if (buttonValue === '3') previousState.points += 3;
    if (buttonValue === '4') previousState.points += 4;
  });
  console.log("Current Points:", state.points);
  const nextAction = determinePersonality(state.points);
  return c.res({
    action: nextAction,
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmcacreJEUaoJ6BYxoN9iU1zVNFb2KaCcKQV9Gr3VK8QFr',
    intents: [
      <Button value="1">1</Button>,
      <Button value="2">2</Button>,
      <Button value="3">3</Button>,
      <Button value="4">4</Button>,
    ],
  });
});

function determinePersonality(points) {
  if (points <= 6) return '/personality1';
  if (points <= 10) return '/personality2';
  if (points <= 14) return '/personality3';
  return '/personality4';
}

app.frame('/personality1', (c) => {
  return c.res({
    image: ('https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmeK7kjGoJJnAtCpwGNwX8dfsQNQ9hyDdo783B9r6XFAtT'),
    intents: [
      <Button.Link href='https://zora.co/collect/base:0x3329c282ebf00d01bf735d2477161014269fd5e6/premint-2'>Mint</Button.Link>,
      <Button.Reset>Retry</Button.Reset>,    
    ],
  });
});


app.frame('/personality2', (c) => {
  return c.res({
    image: ('https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmbaKd6ERmgh4hQjWRKGoA81WVTGQXowBECLhAXWdSqTBu'),
    intents: [
      <Button.Link href='https://zora.co/collect/base:0x3329c282ebf00d01bf735d2477161014269fd5e6/premint-3'>Mint</Button.Link>,
      <Button.Reset>Retry</Button.Reset>,
    ],
  });
});

app.frame('/personality3', (c) => {
  return c.res({
    image: ('https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmPMjEMYKvPts34FVW7u3spA7m6qfeVP5BbdByLVSLR1c6'),
    intents: [
      <Button.Link href='https://zora.co/collect/base:0x3329c282ebf00d01bf735d2477161014269fd5e6/premint-1'>Mint</Button.Link>,
      <Button.Reset>Retry</Button.Reset>,
    ],
  });
});

app.frame('/personality4', (c) => {
  return c.res({
    image: ('https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmU7mQUt8FSFRNXWSfgW6nGNQQwiuEjd6MCDBAXz9vbbbQ'),
    intents: [
      <Button.Link href='https://zora.co/collect/base:0x3329c282ebf00d01bf735d2477161014269fd5e6/premint-4'>Mint</Button.Link>,
      <Button.Reset>Retry</Button.Reset>,
    ],
  });
});

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
