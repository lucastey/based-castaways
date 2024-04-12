/** @jsxImportSource frog/jsx */

import { Button, Frog} from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
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

app.frame('/first', (c) => {
  const { buttonValue, inputText, status } = c
  const quiz = inputText || buttonValue
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

      hello
        
      </div>
    ),
    intents: [
      <Button >Act Steady</Button>,
      <Button >Mug like siao</Button>,
      <Button >Burn Midnight Oil</Button>,
      <Button >Chill </Button>,
    
    ],
  });
});

app.frame('/second', (c) => {
  const { buttonValue, inputText, status } = c
  const quiz = inputText || buttonValue
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

      hello
        
      </div>
    ),
    intents: [
      <Button >Take picture</Button>,
      <Button >Queue before get longer</Button>,
      <Button >Why so many people</Button>,
      <Button >Go next time</Button>,
    
    ],
  });
});


app.frame('/third', (c) => {
  const { buttonValue, inputText, status } = c
  const quiz = inputText || buttonValue
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

      hello
        
      </div>
    ),
    intents: [
      <Button >Finish it for good luck</Button>,
      <Button >Faster finish it</Button>,
      <Button >Serious meh</Button>,
      <Button >New generation already </Button>,
    
    ],
  });
});


app.frame('/fourth', (c) => {
  const { buttonValue, inputText, status } = c
  const quiz = inputText || buttonValue
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

      hello
        
      </div>
    ),
    intents: [
      <Button >Flex favourite food</Button>,
      <Button >Plan in advance</Button>,
      <Button >Go first think later</Button>,
      <Button >Chill </Button>,
    
    ],
  });
});


app.frame('/fifth', (c) => {
  const { buttonValue, inputText, status } = c
  const quiz = inputText || buttonValue
  return c.res({
    action:'',
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
      <Button >Good</Button>,
    
    ],
  });
});


devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
