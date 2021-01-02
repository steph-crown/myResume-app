// This is a fake db of the reviews obj
let review = [
    {
        gender: 'male',
        firstName: 'Steph',
        review: 'This is a very nice tool. I have never created a resume before. No experience but the first time I used this my resume was ready in less than 4 minutes.'
    },
    {
        gender: 'female',
        firstName: 'Blessing',
        review: 'myResume was a live saver for me. I saw a job vacancy post and I was very much qualified for the job but did not have a resume. All I did was input my details and I got it.'
    },
    {
        gender: 'male',
        firstName: 'Kunle',
        review: 'I am a beginner frontend developer, although I have some basic projects. myResume helped me create a solid resume that showcased the few projects I have.'
    },
    {
        gender: 'male',
        firstName: 'Edet',
        review: 'This is the best resume builder I have used since I knew it was possible to build it online. Simple and straightforward.'
    },
    {
        gender: 'female',
        firstName: 'Joyce',
        review: 'Precisely straightforward with amazing features!'
    },
    {
        gender: 'male',
        firstName: 'Merson',
        review: 'I will recommend this myResume to anyone that wants to build an excellent resume seamlessly.'
    }
];

review.map(arr => {
    arr.review = arr.review.length > 152 ? arr.review.slice(0,144) + " . . ." : arr.review;
    return arr
})

export default review