var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/SveltePage',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/bio-tarik/SveltePage.git',
        user: {
            name: 'Tarik Bet Ayoub',
            email: 'bio.tarik@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)

