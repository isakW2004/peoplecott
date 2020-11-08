# Peoplecott
Peoplecott lets you search for a brand name, see their parent company, and lets you easily see and understand controversial practices that the company does.

Big Companies seem to hide behind brand names, Peoplecott shows the parent company along with controversial practices of that company.

### Charles Stover's Peoplecott
This project is inspired heavily by CharlesStover/peoplecott, [check it out!](https://github.com/CharlesStover/peoplecott "check it out!")

This Peoplecott features a neumorphic UI and an easier way to understand the immoral behavior of companies. I also want to keep the same tenets as Charles' Peoplecott.

In addition, this project is rewritten in Javascript, and contains a restructured way to add brands.

## Contributing
Want to add a company? Simply clone this repository and edit the `brands.json` file.

To add an entire company, add something like this:
```json
{"name":"Evil Company", "brands":[{"name":"Children's Tears", "desc":"Bottled Water"}], "desc":"Add a description here.", "categories":["labor"], "info":["This description goes with the labor category."], "logo":"logos/brand.svg"}
```
The categories are:  "resources", "labor", "politics", "marketing", "other".

If you want to a brand, go to the parent company's object, then under "brands", add something like this:
```json
{"name":"Foo Foods", "desc":"Food"}
```
If you have anything else to add, feel free to open up a pull request with the changes you want to make!