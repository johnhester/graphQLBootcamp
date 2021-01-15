const Query = {
    // required arguments: parent, args (arguments), ctx (context), info (information about operations sent along to server)
    users(parent, args, { db }, info) {
        if (!args.query) {
            return db.users;
        }

        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase());
        })
    },
    posts(parent, args, { db }, info) {
        if (!args.query) {
            return db.posts;
        }

        return db.posts.filter((post) => {
            if (post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase())) {
                return true;
            } else {
                return false
            }
        })
    },
    comments(parent, args, { db }, info) {
        return db.comments;
    },
    me() {
        return {
            id: 'abc1234',
            name: 'Duke Ellington',
            email: 'daDuke@doot.io'
        }
    },
    post() {
        return {
            id: '123412d',
            title: 'Lesser known Flemish Royalty',
            body: 'Turns out they\'re all lesser known! HAHA!',
            published: true
        }
    }
}

export { Query as default };