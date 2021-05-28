# KiwiPhone 3000 - Client side

## Description

This is the front end side of an app developed as part of a tech challenge posed during a recruitment process.  It represents a retro mobile phone (Nokia style) with a series of mocked typical phone features: making calls, browsing contacts, checking date & time and writing SMS.

The main goal of the challenge was to mimic the so-called T9 or predictive text technology that boasted the most state-of-the-art models of the time, by which the phone could infer the word intented by the user just with a few button taps. 

## Technologies

- Base language: JavaScript
- Front end libraries & frameworks: React.js, Axios (HTTP requests)

  

## User stories / Features

- **Navigation menu:** Users can navigate the various sections of the menu  (in some instances a few levels down) by pressing the navigation buttons in the keypad. 

- **Contact browsing:** Users can access a mock contact listing and perform a fake call to the only member. 

- **Mock calling:** Users can type in numbers at any time and proceed to perform a fake call.

- **Date & time check:** Users get a couple of screens with updated info about local date and time.. 

- **Mock SMS composition:** Users can write messages (short words of up to 6 letters, rather) mimicking the performance of the aforementioned T9 predictive text technology. 
  
  

## Component structure

### General Overview:

`<App>`

​		`<Screen />`

​		`<Keyboard />`

`</App>`



### Breakdown:

#### APP

The main component of the map represents the phone itself and holds its general state.

#### SCREEN

A presentational component that receives props from the main component and renders a different set of subscreens (subcomponents) according to the parameters of navigation. 

#### KEYBOARD

This component holds the logic needed to operate the keyboard and allow user navigation.



## Instructions

### Getting started:

```
$ git clone https://github.com/zombicat79/kiwi_client.git
$ npm run start
```

The app will start running on http://localhost:3000/

### Phone operation:

1. Switch on the phone by pressing the red button on the right-hand corner.
2. Navigate the main options of the menu by pressing "<" and ">" buttons.
3. When encountered a section in CAPITAL LETTERS, press "1" (Select) in order to navigate a level down. Press "0" (Back) to move back to the previous step.
4. Press any number on the keypad at any moment to start typing a phone number. Press button "<" to mend mistakes and move backwards. Press ">" to make the call. While calling, press "0" to hang up.
5. When writing messages, press the button in the keypad containing the intended letter. Press button "<" to mend mistakes and move backwards. Press "1" (Select) to save a certain word to your collection of preferred ones (better for performance purposes). Press "0" (Back) to leave the writing screen.
6. Switch off the phone by pressing the red button on the right-hand corner.

