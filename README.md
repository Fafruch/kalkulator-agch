# Kalkulator AGH
Aplikacja służąca do liczenia punktów rekrutacyjnych na studia I stopnia na Akedemii Górniczo-Hutniczej w Krakowie.

![Screenshot](https://cdn.pbrd.co/images/GBNMd3q.png)

 ## Instalacja

1.  Sklonuj repozytorium: https://github.com/Fafruch/kalkulator-agh.git
2.  `cd kalkulator-agh`
3. `npm install`
4. `npm start`
5.  Wejdź na: http://localhost:3000

## Opis

Projekt [ReactJS](http://facebook.github.io/react/index.html) + [React Redux](https://github.com/reactjs/react-redux)
powstały w oparciu o [React React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit).  

Dodatkowo wykorzystuje:
* [React Transition Group](https://github.com/reactjs/react-transition-group/tree/v1-stable)
* [uuid](https://github.com/kelektiv/node-uuid)

Stan aplikacji zapisywany jest w window.localStorage na podstawie 
https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage, ale zapisuje stan tylko przy opuszczaniu strony.
