export class Quiz {

    question = [
        {
            question: "わたし　は　やまだ　です。",
            answers: [

                { text: "My name is Yamada", correct: false },
                { text: "I am Yamada", correct: true },
                { text: "I am Japanese", correct: false },
                { text: "I am a teacher", correct: false },

            ]
        },
        {
            question: "おげんき　です　か。",
            answers: [

                { text: "How old are you", correct: false },
                { text: "How is your health", correct: false },
                { text: "How are you", correct: true },
                { text: "Where are you", correct: false },

            ]
        },
        {
            question: "にほんご　の　ほん。",
            answers: [

                { text: "Japanese Language", correct: false },
                { text: "English", correct: false },
                { text: "Japan", correct: false },
                { text: "Japanese Language Book", correct: true },


            ]
        },

        {
            question: "ほんだ　せんせい　は　にほんじん　です。",
            answers: [

                { text: "Honda san is a teacher", correct: false },
                { text: "Honda sensei is a Japanese person", correct: true },
                { text: "Honda san is from Japan", correct: false },
                { text: "Honda sensei is a teacher", correct: false },


            ]
        },

        {
            question: "おなまえ　は　なん　です　か。",
            answers: [

                { text: "Where are you from?", correct: false },
                { text: "What is your name?", correct: true },
                { text: "How are you?", correct: false },
                { text: "How old are you", correct: false },


            ]
        },
    ]
}
