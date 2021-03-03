const posts = [
  {
    user: 'smith doe',
    location: 'University City Campus',
    date: '03/19/2021',
    contracted: 'yes',
    img:
      'https://d13b2ieg84qqce.cloudfront.net/f7ecb2ccb2eb309102010a4a9944285832fe3976.jpg'
  },
  {
    user: 'jane doe',
    location: 'Center City Campus',
    date: '03/18/2021',
    contracted: 'no',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/HahnemannUHospital_crop.jpg/1920px-HahnemannUHospital_crop.jpg'
  },
  {
    user: 'sam doe',
    location: 'Queen Lane Campus',
    date: '03/17/2021',
    contracted: 'yes',
    img: 'https://theperfectmed.com/wp-content/uploads/2020/10/Drexel.jpg'
  },
  {
    user: 'john doe',
    location: 'Natural Sciences',
    date: '03/16/2021',
    contracted: 'yes',
    img:
      'https://ansp.org/~/media/Images/ans/visit/plan/ANS%20Exterior-636.ashx?la=en'
  }
];

const users = [
  {
    name: 'john doe',
    password: '12345',
    address: 'University City Campus',
    alert: [
      {
        name: 'smith doe',
        location: 'University City Campus',
        date: '03/19/2021',
        contracted: 'yes'
      }
    ]
  },

  {
    name: 'jane doe',
    password: '12345',
    address: 'Queen Lane Campus',
    alert: [
      {
        name: 'sam doe',
        location: 'Queen Lane Campus',
        date: '03/17/2021',
        contracted: 'yes'
      }
    ]
  },
  {
    name: 'same doe',
    password: '12345',
    address: 'Center City Campus',
    alert: [
      {
        name: 'jane doe',
        location: 'Center City Campus',
        date: '03/18/2021',
        contracted: 'no'
      }
    ]
  },
  {
    name: 'smith doe',
    password: '12345',
    address: 'Natural Sciences',
    alert: [
      {
        name: 'john doe',
        location: 'Natural Sciences',
        date: '03/16/2021',
        contracted: 'yes'
      }
    ]
  }
];

export { posts, users };
