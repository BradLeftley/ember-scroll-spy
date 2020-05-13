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

In this current version `0.0.2` you have two components an `nav-item` and an `section-item`. 
```
<SectionItem class="resume-section about" id="about">
  <div>
    <h2>some content</h2>
  </div>
</SectionItem>
```
The id `about` will now be tracked and if it is found in the viewport the corresponding `nav-item` with the same `linkId` will be given an active class in which you can style from.

```
<NavItem class="nav-link" href="#about" @linkId="about" @name="About" \>
```
Note: Section item will also give the `tagName` section. 

If the section corresponding with the `linkId` is found then the `active` will be given. You can also add the `name` arguement to pass through a value to the `nav-item`.

In future versions I hope to have both of these components very basic so you are not limited to navigation items and sections.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
