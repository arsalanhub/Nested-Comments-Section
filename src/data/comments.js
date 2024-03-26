const commentsData = [
    {
      id: 0,
      comment: "Breaking Bad is hands down one of the greatest TV shows of all time!",
      subComments: [
        {
          id: 1,
          comment: "Absolutely! The character development and storyline are just phenomenal.",
          subComments: [],
        },
        {
          id: 3,
          comment: "And let's not forget Jesse Pinkman's journey throughout the series. His character arc is so raw and emotional.",
          subComments: [
            {
              id: 4,
              comment: "Absolutely! Jesse's struggles with his conscience and his relationship with Walter add so much depth to the show.",
              subComments: [
                {
                  id: 11,
                  comment: "I completely agree! Jesse's growth from a troubled youth to a conflicted anti-hero is truly remarkable.",
                  subComments: []
                }
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      comment: "Artificial Intelligence (AI) is revolutionizing the way we interact with technology!",
      subComments: [
        {
          id: 7,
          comment: "It's incredible how AI is being integrated into everyday devices and services.",
          subComments: [
            {
              id: 8,
              comment: "Absolutely! From voice assistants like Siri and Alexa to recommendation systems on streaming platforms, AI is everywhere!",
              subComments: [
                {
                  id: 9,
                  comment: "And let's not forget about AI-powered chatbots, they've become so natural in conversation that sometimes we don't even realize we're talking to a machine!",
                  subComments: [
                    {
                      id: 10,
                      comment: "It's like having a virtual friend who's always there to help!",
                      subComments: [],
                    }
                  ],
                }
              ],
            }
          ],
        }
      ],
    },
  ];
  
  export default commentsData;