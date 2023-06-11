const script = [
    { //dialogue 1
      "bg": "bg1",
      "char1": {
        "emotion": "IDLE",
        "name": "STOPLOOKINGHERE"
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Hanako"
      },
      "talker": "char2",
      "say": "Это мой первый раз так что..."
    },
    { //dialogue 2
      "bg": "bg2",
      "char1": {
        "name": "STOPLOOKINGHERE"
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Hanako"
      },
      "talker": "char2",
      "say": "Прошу, будь понежнее..."
    },
    { //dialogue 3
      "bg": "bg2",
      "char1": {
        "emotion": "IDLE",
        "name": "STOPLOOKINGHERE"
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Hanako"
      },
      "talker": "char1",
      "say": "Несмотря на то что мы были наедине, она всё ещё пыталась скрыть свои ожоги"
    },
    { //dialogue 4
      "bg": "bg2",
      "char1": {
        "emotion": "IDLE",
        "name": "STOPLOOKINGHERE"
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Hanako"
      },
      "talker": "char1",
      "say": "Она стыдится их, но они меня даже заводят"
    },
    { //dialogue 5
      "bg": "bg3",
      "char1": {
        "emotion": "IDLE",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Hanako"
      },
      "talker": "char1",
      "say": "Так поциент по какой причине жалуемся?"
    },
    { //dialogue 6
      "bg": "bg4",
      "char1": {
        "emotion": "IDLE",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Hanako"
      },
      "talker": "char1",
      "say": "..."
    },
    { //dialogue 7
      "bg": "bg5",
      "char1": {
        "emotion": "IDLE",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Hanako"
      },
      "talker": "char1",
      "say": "ЛОБАНООООООВ"
    },
    { //dialogue 8
      "bg": "bg6",
      "char1": {
        "emotion": "ANGRY",
        "animation": "appear",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "animation": "appear",
        "name": "Лобанов"
      },
      "talker": "char1",
      "say": "ЛОБАНОВ СУКА ТЫ КУДА СВОИ РУЧЁНКИ ПОЦИЕНТАМ ПИХАЕШЬ СУКА"
    },
    { //dialogue 9
      "bg": "bg6",
      "char1": {
        "emotion": "CONFUSED",
        "name": "Быков",
      },
      "char2": {
        "emotion": "VPIZDU",
        "name": "Лобанов"
      },
      "talker": "char2",
      "say": "догадайся"
    },
    { //dialogue 10
      "bg": "bg6",
      "char1": {
        "emotion": "CONFUSED",
        "name": "Быков",
      },
      "char2": {
        "emotion": "VPIZDU",
        "name": "Лобанов"
      },
      "talker": "char1",
      "say": "...."
    },
    { //dialogue 11
      "bg": "bg6",
      "char1": {
        "emotion": "ANGRY",
        "animation": "shake",
        "name": "Быков",
      },
      "char2": {
        "emotion": "VPIZDU",
        "name": "Лобанов"
      },
      "talker": "char1",
      "say": "ЛОБААААНОООООООВ"
    },
    { //dialogue 12
      "bg": "bg6",
      "char1": {
        "emotion": "ANGRY",
        "name": "Быков",
      },
      "char2": {
        "emotion": "ANGRY",
        "name": "Лобанов"
      },
      "talker": "char2",
      "say": "да блять быкав сука ты другие слова знаешь?"
    },
    { //dialogue 13
      "bg": "bg6",
      "char1": {
        "emotion": "HAPPY",
        "name": "Быков",
      },
      "char2": {
        "emotion": "ANGRY",
        "name": "Лобанов"
      },
      "talker": "char1",
      'say': 'Да знаю, "ты уволен"'
    },
    { //dialogue 14
      "bg": "bg6",
      "char1": {
        "emotion": "CONFUSED",
        "name": "Быков",
      },
      "char2": {
        "emotion": "HAPPY",
        "name": "Лобанов"
      },
      "talker": "char2",
      'say': 'а вот хуй там, это словосочетание еблан'
    },
    { //dialogue 15
      "bg": "bg6",
      "char1": {
        "emotion": "ANGRY",
        "animation": "shake",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Лобанов"
      },
      "talker": "char1",
      'say': 'ЛОБАНОВ СУКА Я ТЕБЕ ЩА ВЪЕБУ БЛЯТЬ ТЫ ЗАЕБАЛ КАДРИТЬ ПАЦИЕНТОВ'
    },
    { //dialogue 16
      "bg": "bg6",
      "char1": {
        "emotion": "IDLE",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Лобанов"
      },
      "talker": "char2",
      'say': 'да не кадрил я никого я тут'
    },
    { //dialogue 17
      "bg": "bg6",
      "char1": {
        "emotion": "IDLE",
        "name": "Быков",
      },
      "char2": {
        "emotion": "CONFUSED",
        "name": "Лобанов"
      },
      "talker": "char2",
      'say': '...'
    },
    { //dialogue 18
      "bg": "bg6",
      "char1": {
        "emotion": "IDLE",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Лобанов"
      },
      "talker": "char2",
      'say': 'пациента лечил'
    },
    { //dialogue 19
      "bg": "bg6",
      "char1": {
        "emotion": "ANGRY",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Лобанов"
      },
      "talker": "char1",
      'say': 'КАКОЙ ЛЕЧИЛ СУКА ЛОБАНОВ ТЫ НЕ ГЕНИКОЛОГ'
    },
    { //dialogue 20
      "bg": "bg6",
      "char1": {
        "emotion": "IDLE",
        "name": "Быков",
      },
      "char2": {
        "emotion": "HAPPY",
        "name": "Лобанов"
      },
      "talker": "char2",
      'say': 'а я переквалифицировался'
    },
    { //dialogue 21
      "bg": "bg6",
      "char1": {
        "emotion": "ANGRY",
        "animation": "shake",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Лобанов"
      },
      "talker": "char1",
      'say': 'ТЫ БЛЯТЬ В ШИЗОЙДА ЕБАННОГО ПЕРЕКВАЛИФИЦИРОВАЛСЯ '
    },
    { //dialogue 22
      "bg": "bg6",
      "char1": {
        "emotion": "ANGRY",
        "animation": "shake",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "name": "Лобанов"
      },
      "talker": "char1",
      'say': 'ВАЛИ ОТСЮДА БЛЯТЬ ПОКА Я ТЕБЕ ПИЗДЫ НЕ ДАЛ'
    },
    { //dialogue 23
      "bg": "bg6",
      "char1": {
        "emotion": "ANGRY",
        "animation": "disappear",
        "name": "Быков",
      },
      "char2": {
        "emotion": "IDLE",
        "animation": "disappear",
        "name": "Лобанов"
      },
      "talker": "char2",
      'say': 'да валю уже блять заебал'
    },
    { //dialogue 23
      "bg": "bg6",
      "char1": {
        "emotion": "IDLE",
        "name": "STOPLOOKINGHERE",
      },
      "talker": "char1",
      'say': 'после этого рабочего дня Быков отпиздил Лобанова за гаражами'
    },
    { //dialogue 23
      "bg": "bg6",
      "char1": {
        "emotion": "IDLE",
        "name": "STOPLOOKINGHERE",
      },
      "talker": "char1",
      'say': 'конец'
    },
  ];
  const exit = "https://mvdmedia.ru/upload/resize_cache/iblock/d77/1170_1080_112e23092a5dbb905c83b3ae67db670d0/d777c1a83f7583d9a5da9eec8137c3ab.jpg";