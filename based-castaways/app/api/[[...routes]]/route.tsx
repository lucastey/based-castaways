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
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmNZjjvifEA7sJGEEbK5JVqt2kfomusSDR7xJKJGiKhcBW',
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
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmVtPkeUQLQ1P145qU3m6PaqxtPq3PmSSwxKFBHBXLRL4q',
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
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmWQivN2fZg2zpNqoJ8mZMx3Fcbbbo2vEHs8xMvSoFAZ7r',
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
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmYKCtLmGMGPwMLsCiZjt8P2A8dKfLVjADxCcfhGV2vEGS',
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
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmNhYvL8v3S8YYUnUMWXDe9KMjuuDujw8yJ8YcGqTng7YE',
    intents: [
      <Button value="1">1</Button>,
      <Button value="2">2</Button>,
      <Button value="3">3</Button>,
      <Button value="4">4</Button>,
    ],
  });
});

function determinePersonality(points: number) {
  if (points <= 4) return '/personality1';
  if (points <= 8) return '/personality2';
  if (points <= 14) return '/personality3';
  return '/personality4';
}

app.frame('/personality1', (c) => {
  return c.res({
    image: ('https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmeK7kjGoJJnAtCpwGNwX8dfsQNQ9hyDdo783B9r6XFAtT'),
    intents: [
      <Button.Link href='https://zora.co/collect/base:0xe352a11653abacc71740aadb7d17d3227e0a7d3b/premint-2'>Mint</Button.Link>,
      <Button.Reset>Retry</Button.Reset>,    
    ],
  });
});


app.frame('/personality2', (c) => {
  return c.res({
    image: ('https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmWAoqhjgwH6s49uWy8zzGVSpKCQCWbtz1HSbL76fEPwTQ'),
    intents: [
      <Button.Link href='https://zora.co/collect/base:0xe352a11653abacc71740aadb7d17d3227e0a7d3b/premint-3'>Mint</Button.Link>,
      <Button.Reset>Retry</Button.Reset>,
    ],
  });
});

app.frame('/personality3', (c) => {
  return c.res({
    image: ('https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmRH2GkZTtBdrt4zenQKYfnKWHqqLRdzLuaHy6sWHehfKR'),
    intents: [
      <Button.Link href='https://zora.co/collect/base:0xe352a11653abacc71740aadb7d17d3227e0a7d3b/premint-1'>Mint</Button.Link>,
      <Button.Reset>Retry</Button.Reset>,
    ],
  });
});

app.frame('/personality4', (c) => {
  return c.res({
    image: ('https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmVe4jmge9QbYoNH373UnAjfRodTjwh8G94M7mKRkKC6Uz'),
    intents: [
      <Button.Link href='https://zora.co/collect/base:0xe352a11653abacc71740aadb7d17d3227e0a7d3b/premint-4'>Mint</Button.Link>,
      <Button.Reset>Retry</Button.Reset>,
    ],
  });
});

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)