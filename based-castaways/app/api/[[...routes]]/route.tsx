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

        hello
        
      </div>
    ),
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

      first
        
      </div>
    ),
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

      2nd
        
      </div>
    ),
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

      3rd
        
      </div>
    ),
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

      fourth
        
      </div>
    ),
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

      fifth
        
      </div>
    ),
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
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmeFj4xhH2Rb39jyFxRd9qgbC35bepjMYsJyPeSZYnrdUP'
  });
});


app.frame('/personality2', (c) => {
  return c.res({
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmYE8oH8DssHXoeTnhV1L2jfuAgSW33fLXG293Ws9NqKGg'
  });
});

app.frame('/personality3', (c) => {
  return c.res({
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmcTv7LwT2AvWqT1vXrUp8QrLNUUyH6ssidUwNNYqJZono'
  });
});

app.frame('/personality4', (c) => {
  return c.res({
    image: 'https://coral-grieving-porpoise-728.mypinata.cloud/ipfs/QmVxruik75m7uxRsKpZJcH1L2htxAYw67RM1Afy8GcqhPL'
  });
});




devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
