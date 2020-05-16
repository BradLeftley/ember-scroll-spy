ember-scroll-spy
==============================================================================

Ember scroll spy allows you to easily replicate bootstrap's scroll spy functionality. Based on a section item being in the viewport the nav-link with the corresponding Id will be updated with an active class.

Simply pass through the the id to each component and the addon does the rest.

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-scroll-spy
```


Usage
------------------------------------------------------------------------------

In this current version `0.0.4` you have two components an `scroll-container` and an `anchor`. 
```
<ScrollContainer @linkId="about">
  <a class="nav-link js-scroll-trigger" href="#about">
     About
  </a>
</ScrollContainer>
```
The id `about` will now be tracked and if it is found in the viewport the corresponding `scroll-container` with the same `id` it will be given an active class in which you can style from.

```
<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="about">
  <Anchor @id="about" />
    <div>
     <p>Some content</p>
    </div>
<section>
```
Simply embed the `anchor` into your section, divs or any template and begin adding scroll spy to your apps. 

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
