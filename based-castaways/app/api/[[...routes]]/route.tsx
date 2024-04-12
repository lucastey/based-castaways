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

// app.frame('/first', (c) => {
//   const { buttonValue } = c;
//   const state = c.deriveState(previousState => {
//     if (buttonValue === '1') previousState.points += 1;
//     if (buttonValue === '2') previousState.points += 2;
//     if (buttonValue === '3') previousState.points += 3;
//     if (buttonValue === '4') previousState.points += 4;
//   });
//   return c.res({
//     action:'/second',
//     image: (
//       <div
//       style={{
//         display: 'flex', // Ensuring proper handling of child components
//         flexDirection: 'column', // Organizes children vertically
//         color: 'white',
//         fontSize: 60,
//         fontStyle: 'normal',
//         letterSpacing: '-0.025em',
//         lineHeight: 1.4,
//         marginTop: 30,
//         padding: '0 120px',
//         whiteSpace: 'pre-wrap',
//       }}
//     >
//       hello     
//       </div>
//     image: (
//       <div>hello</div>
//     ),
//     intents: [
//       <Button value="1">1</Button>,
//       <Button value="2">2</Button>,
//       <Button value="3">3</Button>,
//       <Button value="4">4</Button>,
//     ],
//   });
// });

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
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmNvJcKRqVM5sn6gTS2N89j5gNDhhAh4zGswvrdD8nQRYL',
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
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmbCi8z813rU2huvqr1bqcZy78JKFGqMcx7AEnqAYzi3fn',
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
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmYWwCUgVebbBcHWq2j8FpZUv8ymBkpkxTP8G5wLTiMdWT',
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
    image:'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/Qma2NDsrCurRrC7PqEw9xzdeCBRfxUgsY7ZZujKWhyXH5W',
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
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmPFnJrn3UonPC96w15tmxmLBXALdb418ggBwrnaD1VftC',
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
    image: (
      <div
      style={{
        display: 'flex', // Ensuring proper handling of child components
        flexDirection: 'column', // Organizes children vertically
        color: 'white',
        fontSize: 60,
        fontStyle: 'normal',
        letterSpacing: '-0.025em',
        lineHeight: 1.4,
        marginTop: 30,
        padding: '0 120px',
        whiteSpace: 'pre-wrap',
      }}
    >
      person1
      </div>)
  });
});


app.frame('/personality2', (c) => {
  return c.res({
    image: (
      <div
      style={{
        display: 'flex', // Ensuring proper handling of child components
        flexDirection: 'column', // Organizes children vertically
        color: 'white',
        fontSize: 60,
        fontStyle: 'normal',
        letterSpacing: '-0.025em',
        lineHeight: 1.4,
        marginTop: 30,
        padding: '0 120px',
        whiteSpace: 'pre-wrap',
      }}
    >
      person2
      </div>)
  });
});

app.frame('/personality3', (c) => {
  return c.res({
    image: (
      <div
      style={{
        display: 'flex', // Ensuring proper handling of child components
        flexDirection: 'column', // Organizes children vertically
        color: 'white',
        fontSize: 60,
        fontStyle: 'normal',
        letterSpacing: '-0.025em',
        lineHeight: 1.4,
        marginTop: 30,
        padding: '0 120px',
        whiteSpace: 'pre-wrap',
      }}
    >
      person3
      </div>)
  });
});

app.frame('/personality4', (c) => {
  return c.res({
    image: (
      <div
      style={{
        display: 'flex', // Ensuring proper handling of child components
        flexDirection: 'column', // Organizes children vertically
        color: 'white',
        fontSize: 60,
        fontStyle: 'normal',
        letterSpacing: '-0.025em',
        lineHeight: 1.4,
        marginTop: 30,
        padding: '0 120px',
        whiteSpace: 'pre-wrap',
      }}
    >
      person4
      </div>)
  });
});




devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
