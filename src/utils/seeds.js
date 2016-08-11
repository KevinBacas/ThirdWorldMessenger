const User = [
  {
    id: '07b25144-269e-40f7-a8bf-6058a76fed7b',
    username: 'Kevbac',
    email: 'bacas.kevin@hotmail.fr',
  },
  {
    id: 'fd7b84b2-7347-4ad6-ad0c-2c6c14b1ed95',
    username: 'RT',
    email: 'RT@officiel.fr',
  },
];

const Thread = [
  {
    id: '116c7b23-bd3d-40c6-8170-35a786524910',
    name: 'QQorp',
  },
];

const ThreadUserXREF = [
  {
    FK_Thread_ID: '116c7b23-bd3d-40c6-8170-35a786524910',
    FK_User_ID: '07b25144-269e-40f7-a8bf-6058a76fed7b',
  },
  {
    FK_Thread_ID: '116c7b23-bd3d-40c6-8170-35a786524910',
    FK_User_ID: 'fd7b84b2-7347-4ad6-ad0c-2c6c14b1ed95',
  },
]

const Message = [
  {
    id: '88673ee1-0200-4b6d-8973-288f68683135',
    FK_User_ID: '07b25144-269e-40f7-a8bf-6058a76fed7b',
    FK_Thread_ID: '116c7b23-bd3d-40c6-8170-35a786524910',
    content: 'Hello world!',
  },
  {
    id: '530864b0-24f0-4781-9a27-ef54532fad08',
    FK_User_ID: 'fd7b84b2-7347-4ad6-ad0c-2c6c14b1ed95',
    FK_Thread_ID: '116c7b23-bd3d-40c6-8170-35a786524910',
    content: 'Hey Kevbac!',
  },
  {
    id: 'c6f24462-863b-4a2a-8a3b-ce0253133635',
    FK_User_ID: 'fd7b84b2-7347-4ad6-ad0c-2c6c14b1ed95',
    FK_Thread_ID: '116c7b23-bd3d-40c6-8170-35a786524910',
    content: 'How are you?',
  },
  {
    id: '248daf6d-0e2f-483c-97a4-97f22873fb81',
    FK_User_ID: '07b25144-269e-40f7-a8bf-6058a76fed7b',
    FK_Thread_ID: '116c7b23-bd3d-40c6-8170-35a786524910',
    content: 'Fine thanks!',
  },
];

module.exports = {
  User,
  Thread,
  ThreadUserXREF,
  Message,
};
