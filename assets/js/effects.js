function global() {
    const div = document.querySelector('.github-contact')
    const div2 = document.querySelector('.linkedin-contact')
    const div3 = document.querySelector('.instagram-contact')

    const githubHover = document.querySelector('.github-hover')
    const linkedinHover = document.querySelector('.linkedin-hover')
    const instagramHover = document.querySelector('.instagram-hover')

    const githubBeforeHover = document.querySelector('.github-before-hover')
    const linkedinBeforeHover = document.querySelector('.linkedin-before-hover')
    const instagramBeforeHover = document.querySelector('.instagram-before-hover')



    div.addEventListener('mouseover', function(e){
        githubBeforeHover.style.display = 'none'
        githubHover.style.display = 'block'
    })

    div2.addEventListener('mouseover', function(e){
        linkedinBeforeHover.style.display = 'none'

        linkedinHover.style.display = 'block'

    })

    div3.addEventListener('mouseover', function(e){
        instagramBeforeHover.style.display = 'none'

        instagramHover.style.display = 'block'

    })


    div.addEventListener('mouseout', function(e){
        githubBeforeHover.style.display = 'block'

        githubHover.style.display = 'none'

    })

    div2.addEventListener('mouseout', function(e){
        linkedinBeforeHover.style.display = 'block'

        linkedinHover.style.display = 'none'

    })

    div3.addEventListener('mouseout', function(e){
        instagramBeforeHover.style.display = 'block'

        instagramHover.style.display = 'none'

    })

    console.log('Hmmm, it looks like you are looking at my code ... No problem, but if you want to see more, I recommend you go to my github (https://github.com/lanacleto68), there I leave several projects in which I did: )')

}

global()

