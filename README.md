# Re-Chord

## Description

Re-Chord is a Web App designed to help a new piano user learn chords. 
Re-Chord will take the signal from an incoming midi keyboard and convert it to sound.
Re-Chord allow a user to select a chord type and root ex: "C min9", the user will then play notes on their midi keyboard and be given a response if they are correct or not.
A user can go into training mode and select multiple different chords which will be practiced in a random order

## User Story
I am new to learning piano and want to learn how to play chords,   
I want an app that allows me to easily learn new chords and practice already learned chords. 
- As a user, I should be able to register up for an account.
- As a user, I should be able to login with a previously made account.
- As a logged in user, I should see an error message if I do not have a midi keyboard currently plugged in.
- As a logged in user, I should be able to select a chord from the interface to practice that chord.
- As a logged in user, I should be recieve feedback as to whether I am playing the current chord correctly.

## Technologies
* Angular
* Auth0
* WebAudioAPI
* WebMidiAPI
* Bootstrap
* Bootswatch

## Getting Started

*note: Re-Chord Will Require A Working Midi Keyboard To Function.*

- Wiew the app here:   
 https://re-chord.azurewebsites.net/


- Or to run the app locally,
  - you will need to install Node.js:

        https://nodejs.org/en/download/
      
  - Next you will need to install the Angular CLI:

        npm install -g @angular/cli

  - Clone repo from repository:

        git clone https://github.com/ColinMudie/MIDI.git
 
  - Once you have cloned or downloaded the repo you will need to install the necessary packages.    
    Enter the following command in your terminal:

        npm install
        
  - Compile code and open a local version of the project in your web browser at http://localhost:4200/

        ng serve --open
 
  - Log in to an account and connect your Midi Keyboard to enjoy!


## Links
[Github Repository](https://github.com/ColinMudie/MIDI)  
[Live Link](https://re-chord.azurewebsites.net/)

## License

MIT License

Copyright (c) 2022 Colin Mudie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
