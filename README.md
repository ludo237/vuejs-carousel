# VueJs Carousel

    Clean and neat carousel based on VueJs


## How to install
- Either download or clone this repository
- Run `npm install` this will install all the necessary tools from NPM
- Run `npm run build` this will create the dist folder
- Grab the file inside the dist folder and follow the [How to use section](#how-to-use)


## How to use
This carousel is pretty easy to use. Put the source code inside your page:

     <script src="dist/carousel.js"></script>

Add the component to your page:

    <div id="your-application-id">
      <carousel source="your-api-source"></carousel>
    </div>

Try it with a source, for example you can use [Json Placeholder](http://jsonplaceholder.typicode.com/photos?_limit=10)


## Configuration
The current state of the component have an array of `photos` object and it expects this attributes:

- albumId
- id
- thumbnailUrl
- title
- url

**Be Aware**: If you have a different API structure you have to change the code a little bit in particular
you have to change the attributes of `selectedPhoto` and of `photos`. I will try to make this as dynamic as 
possibile but I'm still learning Javascript.


## License

See [License file](LICENSE) for further details.

## Changelog

See [Changelog File](CHANGELOG) for further details.