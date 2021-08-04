import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi babe', likes: 6},
        {id: 2, message: 'Ola todos!', likes: 2}
    ]
};

it('length of posts should be incremented', () => {
    //1. Test data
    let action = addPostActionCreator("it-timur");

    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    //1. Test data
    let action = addPostActionCreator("it-timur");

    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect(newState.posts[4].message).toBe("it-timur");
});

it('after deleting length of message should be decrement', () => {
    //1. Test data
    let action = deletePost(1);

    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect(newState.posts.length).toBe(3);
});

it('after deleting length of message should not be decrement if id is incorrect', () => {
    //1. Test data
    let action = deletePost(1000);

    //2. Action
    let newState = profileReducer(state, action);

    //3. Expectation
    expect(newState.posts.length).toBe(4);
});
