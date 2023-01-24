---
templateKey: blog-post
title: A beginner's guide to Valmi.io
date: 2017-01-04T15:04:10.000Z
description: Brewing with a Chemex probably seems like a complicated,
  time-consuming ordeal, but once you get used to the process, it becomes a
  soothing ritual that's worth the effort every time.
featuredpost: false
featuredimage: /img/chemex.jpg
tags:
  - brewing
  - chemex
---
![chemex](/img/chemex.jpg)

```
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };
```

## The little secrets of Chemex brewing

The Chemex Coffeemaker consists of an hourglass-shaped glass flask with a conical funnel-like neck (rather than the cylindrical neck of an Erlenmeyer flask) and uses proprietary filters, made of bonded paper (thicker-gauge paper than the standard paper filters for a drip-method coffeemaker) that removes most of the coffee oils, brewing coffee with a taste that is different than coffee brewed in other coffee-making systems; also, the thicker paper of the Chemex coffee filters may assist in removing cafestol, a cholesterol-containing compound found in coffee oils. Here’s three important tips newbies forget about:

* Always buy dedicated Chemex filters.
* Use a scale, don’t try to eyeball it.
* Never skip preheating the glass.
* Timing is key, don’t forget the clock.

The most visually distinctive feature of the Chemex is the heatproof wooden collar around the neck, allowing it to be handled and poured when full of hot water. This is turned, then split in two to allow it to fit around the glass neck. The two pieces are held loosely in place by a tied leather thong. The pieces are not tied tightly and can still move slightly, retained by the shape of the conical glass.

For a design piece that became popular post-war at a time of Modernism and precision manufacture, this juxtaposition of natural wood and the organic nature of a hand-tied knot with the laboratory nature of glassware was a distinctive feature of its appearance.