// scalar types - String, Boolean, Int, Float, ID
// custom types - created types, objects, set of defined fields

// Demo User Data

const users = [{
    id: '1',
    name: 'John',
    email: 'john@example.com',
    age: 29
},
{
    id: '2',
    name: 'Rachel',
    email: 'rachel@example.com'
},
{
    id: '3',
    name: 'Mike',
    email: 'mike@example.com',
    age: 32
},
{
    id: '4',
    name: 'Andrew',
    email: 'and@example.com'
}]

// Demo Post Data 
const posts = [{
    id: '1',
    title: 'Argonians, deep state operatives or not?',
    body: 'whatever',
    published: true,
    author: '1'
},
{
    id: '2',
    title: 'Defund the Blades protests sweep across Cyrodil',
    body: 'Detractors say that physical manifestations of Akatosh\'s will should not be hunted like skeevers',
    published: true,
    author: '1'
},
{
    id: '3',
    title: 'Lusty Argonian Maid Revealed?!',
    body: 'It was Tiber Septim all along! Stunning!',
    published: false,
    author: '2'
},
{
    id: '4',
    title: 'Shouts and Sobriety: A Dragon Priest\'s guide to better living',
    body: 'Step 1: Acknowledge that you have a problem',
    published: true,
    author: '3'
}]

// comment dummy data

const comments = [
    {
        id: '1',
        text: 'I am beset by mudcrabs :(',
        author: '1',
        post: '2'
    },
    {
        id: '2',
        text: 'The Imperials didn\'t win the election! This is all a deep deadric plot!',
        author: '2',
        post: '2'
    },
    {
        id: '3',
        text: 'Click on my profile to get 20% off BlackBriar Mead!!!!!1!',
        author: '3',
        post: '3'
    },
    {
        id: '4',
        text: 'Who else is high af rn?',
        author: '4',
        post: '3'
    },
    {
        id: '5',
        text: 'I think the Dark Brotherhood is a fine, reputable organization.',
        author: '2',
        post: '1'
    }

]

const db = {
    users,
    posts,
    comments
}

export { db as default }