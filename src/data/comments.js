const commentsData = [
    {
      id: 0,
      comment: "Lorem Ipsum 1",
      subComments: [
        {
          id: 1,
          comment: "Lorem Ipsum 2",
          subComments: [],
        },
        {
          id: 2,
          comment: "Lorem Ipsum 3",
          subComments: [],
        },
        {
          id: 3,
          comment: "Lorem Ipsum 4",
          subComments: [
            {
              id: 4,
              comment: "Lorem Ipsum 5",
              subComments: [],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      comment: "Lorem ipsum 6",
      subComments: [
        {
          id: 7,
          comment: "Lorem Ipsum 7",
          subComments: [
            {
              id: 8,
              comment: "Lorem Ipsum 8",
              subComments: [
                {
                  id: 9,
                  comment: "Lorem Ipsum 9",
                  subComments: [
                    {
                      id: 10,
                      comment: "Lorem Ipsum 10",
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