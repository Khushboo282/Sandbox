// ============================================================
//  BTS COMPLETE DISCOGRAPHY DATA
// ============================================================

const GROUP_ALBUMS = [
  {
    id: "g1",
    title: "2 COOL 4 SKOOL",
    year: "2013",
    cover: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)",
    emoji: "🎧",
    type: "Single Album",
    songs: [
      "We Are Bulletproof Pt.1",
      "Skit: Circle Room Talk",
      "No More Dream",
      "Interlude",
      "Like It",
      "Outro: Circle Room Cypher",
      "Path"
    ]
  },
  {
    id: "g2",
    title: "O!RUL8,2?",
    year: "2013",
    cover: "linear-gradient(135deg,#2d1b69,#11998e,#38ef7d)",
    emoji: "🌙",
    type: "Mini Album",
    songs: [
      "Intro: O!RUL8,2?",
      "N.O",
      "We On",
      "Skit: R U Happy Now?",
      "If I Ruled the World",
      "Coffee",
      "BTS Cypher Pt.1",
      "Attack on Bangtan",
      "Paldogangsan (사투리랩)",
      "Outro: Luv in Skool"
    ]
  },
  {
    id: "g3",
    title: "Skool Luv Affair",
    year: "2014",
    cover: "linear-gradient(135deg,#e96c5c,#f7971e,#ffd200)",
    emoji: "💌",
    type: "Mini Album",
    songs: [
      "Intro: Skool Luv Affair",
      "Boy In Luv",
      "Skit: Soulmate",
      "Where Did You Come From",
      "Just One Day",
      "Tomorrow",
      "BTS Cypher Pt.2: Triptych",
      "Spine Breaker",
      "Jump",
      "Outro: Propose"
    ]
  },
  {
    id: "g4",
    title: "Dark & Wild",
    year: "2014",
    cover: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
    emoji: "🐺",
    type: "Studio Album",
    songs: [
      "Intro: What Am I To You",
      "Danger",
      "War of Hormone",
      "Hip Hop Lover",
      "Let Me Know",
      "Rain",
      "BTS Cypher Pt.3: Killer",
      "Interlude: What Are You Doing",
      "Could You Turn Off Your Cell Phone",
      "Blanket Kick",
      "24/7=Heaven",
      "Look Here",
      "2nd Grade",
      "Outro: Does That Make Sense?"
    ]
  },
  {
    id: "g5",
    title: "The Most Beautiful Moment In Life Pt.1",
    year: "2015",
    cover: "linear-gradient(135deg,#f8cdda,#1d2671,#c33764)",
    emoji: "🌸",
    type: "Mini Album",
    songs: [
      "Intro: The Most Beautiful Moment in Life",
      "I NEED U",
      "Hold Me Tight",
      "Skit: Expectation!",
      "Dope",
      "Boyz with Fun",
      "Converse High",
      "Moving On",
      "Outro: Love Is Not Over"
    ]
  },
  {
    id: "g6",
    title: "The Most Beautiful Moment In Life Pt.2",
    year: "2015",
    cover: "linear-gradient(135deg,#f7971e,#ffd200,#e96c5c)",
    emoji: "🍂",
    type: "Mini Album",
    songs: [
      "Intro: Never Mind",
      "Run",
      "Butterfly",
      "Whalien 52",
      "Ma City",
      "Silver Spoon (뱁새)",
      "Skit: One Night in a Strange City",
      "Outro: House of Cards"
    ]
  },
  {
    id: "g7",
    title: "The Most Beautiful Moment In Life: Young Forever",
    year: "2016",
    cover: "linear-gradient(135deg,#1a1a2e,#e91e8c,#2575fc)",
    emoji: "✨",
    type: "Special Album",
    songs: [
      "Intro: The Most Beautiful Moment in Life",
      "I NEED U (Urban Mix)",
      "Hold Me Tight (Urban Mix)",
      "Run (BTS Original Mix)",
      "Butterfly (Prologue Mix)",
      "Whalien 52",
      "Ma City",
      "Silver Spoon",
      "Converse High",
      "Moving On",
      "Epilogue: Young Forever",
      "Fire",
      "Save Me",
      "Butterfly (Original Mix)",
      "I NEED U (Original)",
      "Run (Original Mix)"
    ]
  },
  {
    id: "g8",
    title: "Wings",
    year: "2016",
    cover: "linear-gradient(135deg,#0f0c29,#302b63,#a8edea)",
    emoji: "🦋",
    type: "Studio Album",
    songs: [
      "Intro: Boy Meets Evil",
      "Blood Sweat & Tears",
      "Begin",
      "Lie",
      "Stigma",
      "First Love",
      "Reflection",
      "MAMA",
      "Awake",
      "Lost",
      "BTS Cypher 4",
      "Am I Wrong",
      "21st Century Girl",
      "Two! Three!",
      "Interlude: Wings",
      "A Supplementary Story: You Never Walk Alone"
    ]
  },
  {
    id: "g9",
    title: "You Never Walk Alone",
    year: "2017",
    cover: "linear-gradient(135deg,#cfd9df,#e2ebf0,#667eea)",
    emoji: "🌟",
    type: "Special Album",
    songs: [
      "Intro: Boy Meets Evil",
      "Blood Sweat & Tears",
      "Begin",
      "Lie",
      "Stigma",
      "First Love",
      "Reflection",
      "MAMA",
      "Awake",
      "Lost",
      "BTS Cypher 4",
      "Am I Wrong",
      "21st Century Girl",
      "Two! Three!",
      "Spring Day",
      "Not Today",
      "Outro: Wings",
      "A Supplementary Story: You Never Walk Alone"
    ]
  },
  {
    id: "g10",
    title: "Love Yourself: Her",
    year: "2017",
    cover: "linear-gradient(135deg,#f953c6,#b91d73,#ff6b6b)",
    emoji: "💕",
    type: "Mini Album",
    songs: [
      "Intro: Serendipity",
      "DNA",
      "Best Of Me",
      "Dimple (Bojolyoum)",
      "Pied Piper",
      "Skit: Billboard Music Awards Speech",
      "MIC Drop",
      "Go Go",
      "Outro: Her"
    ]
  },
  {
    id: "g11",
    title: "Love Yourself: Tear",
    year: "2018",
    cover: "linear-gradient(135deg,#141e30,#243b55,#485563)",
    emoji: "💔",
    type: "Studio Album",
    songs: [
      "Intro: Singularity",
      "Fake Love",
      "The Truth Untold",
      "134340",
      "Paradise",
      "Love Maze",
      "Magic Shop",
      "Airplane Pt.2",
      "Anpanman",
      "So What",
      "Outro: Tear"
    ]
  },
  {
    id: "g12",
    title: "Love Yourself: Answer",
    year: "2018",
    cover: "linear-gradient(135deg,#f7971e,#ffd200,#21d4fd)",
    emoji: "💛",
    type: "Compilation Album",
    songs: [
      "Euphoria",
      "Trivia 起: Just Dance",
      "Serendipity (Full Length Edition)",
      "DNA",
      "Trivia 承: Love",
      "Her",
      "Singularity",
      "Fake Love",
      "The Truth Untold",
      "Trivia 轉: Seesaw",
      "Tear",
      "Epiphany",
      "I'm Fine",
      "IDOL",
      "Answer: Love Myself",
      "MIC Drop",
      "DNA",
      "Fake Love",
      "IDOL"
    ]
  },
  {
    id: "g13",
    title: "Map of the Soul: Persona",
    year: "2019",
    cover: "linear-gradient(135deg,#f953c6,#ff6b6b,#ffd200)",
    emoji: "🎭",
    type: "Mini Album",
    songs: [
      "Intro: Persona",
      "Boy With Luv (feat. Halsey)",
      "Make It Right",
      "HOME",
      "Jamais Vu",
      "Dionysus"
    ]
  },
  {
    id: "g14",
    title: "Map of the Soul: 7",
    year: "2020",
    cover: "linear-gradient(135deg,#232526,#414345,#e0c3fc)",
    emoji: "🌌",
    type: "Studio Album",
    songs: [
      "Interlude: Shadow",
      "Black Swan",
      "Filter",
      "My Time",
      "Louder than Bombs",
      "ON",
      "UGH!",
      "00:00 (Zero O'Clock)",
      "Inner Child",
      "Friends",
      "Moon",
      "Respect",
      "We are Bulletproof: the Eternal",
      "Outro: Ego",
      "ON (Ft. Sia)"
    ]
  },
  {
    id: "g15",
    title: "BE",
    year: "2020",
    cover: "linear-gradient(135deg,#ece9e6,#ffffff,#b3cdd1)",
    emoji: "🌿",
    type: "Studio Album",
    songs: [
      "Life Goes On",
      "Fly To My Room",
      "Blue & Grey",
      "Skit",
      "Telepathy",
      "Dis-ease",
      "Stay",
      "Dynamite"
    ]
  },
  {
    id: "g16",
    title: "Butter",
    year: "2021",
    cover: "linear-gradient(135deg,#f7971e,#ffd200,#fffde4)",
    emoji: "🧈",
    type: "Single Album",
    songs: [
      "Butter",
      "Permission to Dance"
    ]
  },
  {
    id: "g17",
    title: "Proof",
    year: "2022",
    cover: "linear-gradient(135deg,#000000,#434343,#7f00ff)",
    emoji: "📜",
    type: "Anthology Album",
    songs: [
      "Born Singer",
      "No More Dream",
      "N.O",
      "Boy In Luv",
      "Danger",
      "I NEED U",
      "Run",
      "Blood Sweat & Tears",
      "Spring Day",
      "DNA",
      "Fake Love",
      "IDOL",
      "Boy With Luv",
      "ON",
      "Dynamite",
      "Life Goes On",
      "Butter",
      "Yet To Come (The Most Beautiful Moment)",
      "Run BTS",
      "For Youth",
      "Quotation Mark",
      "Young Forever",
      "Save Me",
      "Epilogue: Young Forever"
    ]
  },
  {
    id: "g18",
    title: "Take Two",
    year: "2023",
    cover: "linear-gradient(135deg,#89f7fe,#66a6ff,#ff6b6b)",
    emoji: "🎬",
    type: "Single",
    songs: [
      "Take Two"
    ]
  }
];

const SOLO_ALBUMS = [
  // RM
  {
    id: "s1",
    title: "RM",
    year: "2015",
    artist: "RM",
    cover: "linear-gradient(135deg,#1a1a2e,#16213e,#533483)",
    emoji: "📚",
    type: "Mixtape",
    songs: [
      "Intro",
      "Voice",
      "Do You",
      "Joke",
      "Awakening",
      "I Believe",
      "Wind",
      "God Rap",
      "Throw It",
      "Monster",
      "Seoul"
    ]
  },
  {
    id: "s2",
    title: "mono.",
    year: "2018",
    artist: "RM",
    cover: "linear-gradient(135deg,#2c3e50,#4ca1af,#c5c6c7)",
    emoji: "🌧",
    type: "Playlist",
    songs: [
      "tokyo",
      "Seoul (prod. HONNE)",
      "moonchild",
      "badbye (with eAeon)",
      "uhgood",
      "everythingoes (with Nell)",
      "forever rain"
    ]
  },
  {
    id: "s3",
    title: "Indigo",
    year: "2022",
    artist: "RM",
    cover: "linear-gradient(135deg,#1565c0,#1e88e5,#42a5f5,#afd6f5)",
    emoji: "🔵",
    type: "Studio Album",
    songs: [
      "Yun (with Erykah Badu)",
      "Still Life (with Anderson .Paak)",
      "All Day (with Tablo)",
      "Closer (with Paul Blanco, mahalia)",
      "Forg_tful (with Kim Sa-wol)",
      "No. 2 (with Colde)",
      "Hectic (with Benny Blanco)",
      "Wild Flower (with youjeen)",
      "For",
      "Down Pages (with Erykah Badu)"
    ]
  },
  {
    id: "s4",
    title: "Right Place, Wrong Person",
    year: "2024",
    artist: "RM",
    cover: "linear-gradient(135deg,#ff6b6b,#ee0979,#c0392b)",
    emoji: "🗺",
    type: "Studio Album",
    songs: [
      "LOST!",
      "Nuts",
      "Out of Love (with Tei)",
      "Running (with Bears)",
      "Domodachi (with Moses Sumney)",
      "Heaven (with Erykah Badu)",
      "Like Crazy (feat. RM)",
      "Come back to me",
      "Around the World in a Day",
      "Groin",
      "Happy"
    ]
  },

  // SUGA / Agust D
  {
    id: "s5",
    title: "Agust D",
    year: "2016",
    artist: "Suga (Agust D)",
    cover: "linear-gradient(135deg,#000000,#4b6cb7,#182848)",
    emoji: "🖤",
    type: "Mixtape",
    songs: [
      "Intro: Dt sugA (ft. DJ Friz)",
      "Agust D",
      "give it to me",
      "Skit",
      "724148",
      "140503 at dawn",
      "The Last",
      "Tony Montana (ft. Yankie)",
      "Interlude: Dream, Reality",
      "So Far Away (ft. Suran)"
    ]
  },
  {
    id: "s6",
    title: "D-2",
    year: "2020",
    artist: "Suga (Agust D)",
    cover: "linear-gradient(135deg,#1a1a2e,#e94560,#0f3460)",
    emoji: "⚔️",
    type: "Mixtape",
    songs: [
      "Moonlight",
      "Daechwita",
      "What do you think?",
      "Honsool (ft. Epik High)",
      "Burn It (ft. MAX)",
      "Strange (ft. RM)",
      "28",
      "Dear my friend (ft. Kim Jong Wan)",
      "People",
      "Assailant",
      "Interlude: Set Me Free"
    ]
  },
  {
    id: "s7",
    title: "D-DAY",
    year: "2023",
    artist: "Suga (Agust D)",
    cover: "linear-gradient(135deg,#c94b4b,#4b134f,#000000)",
    emoji: "🔥",
    type: "Studio Album",
    songs: [
      "Haegeum",
      "SDL (ft. RYUICHI SAKAMOTO)",
      "HUH?! (ft. j-hope)",
      "Polar Night",
      "Snooze (ft. Ryuichi Sakamoto, Woosung of THE ROSE)",
      "AMYGDALA",
      "Interlude: regeneration",
      "Life Goes On",
      "People Pt.2 (ft. IU)",
      "Cirque du Soleil",
      "TRANSITION (ft. Tablo)",
      "Road / Path"
    ]
  },

  // J-HOPE
  {
    id: "s8",
    title: "Hope World",
    year: "2018",
    artist: "j-hope",
    cover: "linear-gradient(135deg,#f7971e,#ffd200,#11998e)",
    emoji: "🌈",
    type: "Mixtape",
    songs: [
      "Hope World",
      "P.O.P (Piece Of Peace) Pt.1",
      "Daydream (백일몽)",
      "Base Line",
      "HANGSANG (ft. Supreme Boi)",
      "Airplane",
      "Blue Side (Outro)"
    ]
  },
  {
    id: "s9",
    title: "Jack In The Box",
    year: "2022",
    artist: "j-hope",
    cover: "linear-gradient(135deg,#000000,#e94560,#f7971e)",
    emoji: "🃏",
    type: "Studio Album",
    songs: [
      "Intro",
      "Pandora's Box",
      "MORE",
      "STOP",
      "= (Equal Sign)",
      "Music Box : Reflection",
      "What If...",
      "SAFETY ZONE",
      "= (Equal Sign) (Outro)"
    ]
  },
  {
    id: "s10",
    title: "Hope on the Street Vol.1",
    year: "2024",
    artist: "j-hope",
    cover: "linear-gradient(135deg,#3a1c71,#d76d77,#ffaf7b)",
    emoji: "🏙",
    type: "EP",
    songs: [
      "Intro (HOPE ON THE STREET)",
      "i Wonder... (ft. Jung Kook)",
      "NEURON (ft. Gaeko, Yoon Mirae)",
      "On The Street (ft. J. Cole)"
    ]
  },

  // JIMIN
  {
    id: "s11",
    title: "FACE",
    year: "2023",
    artist: "Jimin",
    cover: "linear-gradient(135deg,#1a1a2e,#16213e,#e94560)",
    emoji: "🪞",
    type: "Studio Album",
    songs: [
      "Interlude: Dive",
      "Face-off",
      "Alone",
      "Set Me Free Pt.2",
      "Like Crazy"
    ]
  },
  {
    id: "s12",
    title: "MUSE",
    year: "2024",
    artist: "Jimin",
    cover: "linear-gradient(135deg,#0f0c29,#302b63,#b980f0)",
    emoji: "🎨",
    type: "Studio Album",
    songs: [
      "Rebirth",
      "Serenade",
      "Closer Than This",
      "Who",
      "Be Mine",
      "Interlude: Beg For More (ft. Lil Uzi Vert)",
      "Slow Dance (ft. Sofia Carson)"
    ]
  },

  // V (KIM TAEHYUNG)
  {
    id: "s13",
    title: "Layover",
    year: "2023",
    artist: "V",
    cover: "linear-gradient(135deg,#a8c0ff,#3f2b96,#232526)",
    emoji: "🌙",
    type: "Studio Album",
    songs: [
      "Rainy Days",
      "Blue",
      "Slow Dancing",
      "For Us",
      "Love Me Again",
      "Wherever U Are"
    ]
  },

  // JUNGKOOK
  {
    id: "s14",
    title: "Golden",
    year: "2023",
    artist: "Jung Kook",
    cover: "linear-gradient(135deg,#f7971e,#ffd200,#fffde4)",
    emoji: "🏆",
    type: "Studio Album",
    songs: [
      "INTRO",
      "Standing Next to You",
      "Hate You",
      "Yes or No",
      "3D (ft. Jack Harlow)",
      "Somebody",
      "Shot Glass of Tears",
      "Please Don't Change (ft. DJ Snake)",
      "Closer to You (ft. Major Lazer)",
      "Too Sad to Dance",
      "Seven (ft. Latto)",
      "OUTRO"
    ]
  },

  // JIN
  {
    id: "s15",
    title: "Happy",
    year: "2024",
    artist: "Jin",
    cover: "linear-gradient(135deg,#11998e,#38ef7d,#a8edea)",
    emoji: "😄",
    type: "Studio Album",
    songs: [
      "Running Wild",
      "Abyss",
      "I'll Be There",
      "Happy",
      "Falling",
      "Another Level"
    ]
  }
];