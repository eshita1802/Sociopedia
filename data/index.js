import mongoose from "mongoose";

var newObjectId = new mongoose.Types.ObjectId();


export const posts = [

  {
    _id: newObjectId,
    userId: '6486c235c02d05537176eff4',
    firstName: "Jane",
    lastName: "Doe",
    location: "Utah, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "post3.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      ['6486bf1651026eb647f3abc8', true],
      ['6486c159894e20d02b104f65', true],
      ['6486c235c02d05537176eff4', true],
      
    ]),
    comments: [
      "one more random comment",
      "I lied, one more random comment",
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
    ],
  },
  
];

//Many lines have been deleted from this file, as there were of no use 
// to access those lines go to github