# Osamuyimen Samson Osunde — Portfolio

Personal portfolio site: data analyst (MSc, Dublin Business School) with a front-end development background.

## Stack

- HTML5 / CSS3
- Vanilla JavaScript (scroll reveal, contact popover, CV download)
- React (project detail modal, `react-app.js`)
- AngularJS (Skill Matrix section, `angular-app.js`)
- React and AngularJS libraries are bundled locally in `vendor/` rather than pulled from a CDN

## Structure

```
index.html          markup
style.css           all styling
script.js           plain JS behaviour
react-app.js         React project modal component
angular-app.js       AngularJS skill matrix controller
vendor/              local React, ReactDOM, and AngularJS library files
projects/            supporting project materials (reports, notebooks, slide decks)
```

## Running locally

Since this project uses relative script and file paths, open it through a local server rather than double-clicking the file:

```
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Deploying

Push to GitHub and enable **GitHub Pages** (Settings → Pages → Deploy from branch → `main`) to get a free live URL.

## Contact

- Email: osamuyimenosunde@gmail.com
- GitHub: [github.com/Osamuyi14](https://github.com/Osamuyi14)
