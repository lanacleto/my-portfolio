(() => {
    const mapDom = [
        {
            div: document.querySelector('.github-contact'),
            hover: document.querySelector('.github-hover'),
            beforeHover: document.querySelector('.github-before-hover')
        },
        {
            div: document.querySelector('.linkedin-contact'),
            hover: document.querySelector('.linkedin-hover'),
            beforeHover: document.querySelector('.linkedin-before-hover')
        },
        {
            div: document.querySelector('.instagram-contact'),
            hover: document.querySelector('.instagram-hover'),
            beforeHover: document.querySelector('.instagram-before-hover')
        },
    ];

    mapDom.forEach(item => {
        item.div.addEventListener('mouseover', function(){
            item.hover.style.display = 'block';
            item.beforeHover.style.display = 'none';
        });

        item.div.addEventListener('mouseout', function(){
            item.hover.style.display = 'none';
            item.beforeHover.style.display = 'block';
        })
    });

    console.log('Hmmm, it looks like you are curious about how things works under the hoods ... No problem, but if you want to see more, just go to my github (https://github.com/lanacleto68), there I leave several projects in which I did :)')
})();