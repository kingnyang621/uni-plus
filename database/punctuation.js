const punctuation = {

    name: "Punctuation",

    enabled: true,

    symbols: [

        // --- 1. 일반 및 학술 타이포그래피 부호 ---
        {
            output: "·",
            codepoint: 0x00B7,

            latex: ["\\middot"],

            unicode: ["U+00B7"],

            aliases: ["middle dot", "middot", "dot"],

            description: "Middle Dot"
        },

        {
            output: "…",
            codepoint: 0x2026,

            latex: ["\\dots", "\\ldots"],

            unicode: ["U+2026"],

            aliases: ["...", "ellipsis", "dots"],

            description: "Horizontal Ellipsis"
        },

        {
            output: "“",
            codepoint: 0x201C,

            latex: ["``"],

            unicode: ["U+201C"],

            aliases: ["lquote", "left double quote"],

            description: "Left Double Quotation Mark"
        },

        {
            output: "”",
            codepoint: 0x201D,

            latex: ["''"],

            unicode: ["U+201D"],

            aliases: ["rquote", "right double quote"],

            description: "Right Double Quotation Mark"
        },

        {
            output: "‘",
            codepoint: 0x2018,

            latex: ["`"],

            unicode: ["U+2018"],

            aliases: ["lsquote", "left single quote"],

            description: "Left Single Quotation Mark"
        },

        {
            output: "’",
            codepoint: 0x2019,

            latex: ["'"],

            unicode: ["U+2019"],

            aliases: ["rsquote", "right single quote"],

            description: "Right Single Quotation Mark"
        },

        {
            output: "—",
            codepoint: 0x2014,

            latex: ["\\mdash"],

            unicode: ["U+2014"],

            aliases: ["--", "mdash", "em dash"],

            description: "Em Dash"
        },

        {
            output: "–",
            codepoint: 0x2013,

            latex: ["\\ndash"],

            unicode: ["U+2013"],

            aliases: ["-", "ndash", "en dash"],

            description: "En Dash"
        },

        {
            output: "¿",
            codepoint: 0x00BF,

            latex: ["\\questiondown"],

            unicode: ["U+00BF"],

            aliases: ["?", "inverted question"],

            description: "Inverted Question Mark"
        },

        {
            output: "¡",
            codepoint: 0x00A1,

            latex: ["\\exclamedown"],

            unicode: ["U+00A1"],

            aliases: ["!", "inverted exclamation"],

            description: "Inverted Exclamation Mark"
        },

        {
            output: "¶",
            codepoint: 0x00B6,

            latex: ["\\paragraph", "\\P"],

            unicode: ["U+00B6"],

            aliases: ["paragraph", "pilcrow"],

            description: "Pilcrow Sign"
        },

        {
            output: "§",
            codepoint: 0x00A7,

            latex: ["\\section", "\\S"],

            unicode: ["U+00A7"],

            aliases: ["section"],

            description: "Section Sign"
        },

        {
            output: "†",
            codepoint: 0x2020,

            latex: ["\\dagger"],

            unicode: ["U+2020"],

            aliases: ["dagger"],

            description: "Dagger"
        },

        {
            output: "‡",
            codepoint: 0x2021,

            latex: ["\\ddagger"],

            unicode: ["U+2021"],

            aliases: ["ddagger", "double dagger"],

            description: "Double Dagger"
        },

        {
            output: "•",
            codepoint: 0x2022,

            latex: ["\\bullet"],

            unicode: ["U+2022"],

            aliases: ["bullet", "dot"],

            description: "Bullet"
        },

        {
            output: "‣",
            codepoint: 0x2023,

            latex: ["\\bullet_tri"],

            unicode: ["U+2023"],

            aliases: ["triangle bullet"],

            description: "Triangular Bullet"
        },

        // --- 2. 동아시아(한·중·일) 특수 문장 부호 ---
        {
            output: "ㆍ",
            codepoint: 0x318D,

            latex: ["\\kdot"],

            unicode: ["U+318D"],

            aliases: ["hangeul middledot", "araea"],

            description: "Hangeul Letter Araea (Korean Middle Dot)"
        },

        {
            output: "「",
            codepoint: 0x300C,

            latex: ["\\lcorner"],

            unicode: ["U+300C"],

            aliases: ["[[", "left corner bracket", "natpyo"],

            description: "Left Corner Bracket"
        },

        {
            output: "」",
            codepoint: 0x300D,

            latex: ["\\rcorner"],

            unicode: ["U+300D"],

            aliases: ["]]", "right corner bracket", "natpyo"],

            description: "Right Corner Bracket"
        },

        {
            output: "『",
            codepoint: 0x300E,

            latex: ["\\Lcorner"],

            unicode: ["U+300E"],

            aliases: ["{{{", "left white corner bracket", "gyeopnatpyo"],

            description: "Left White Corner Bracket"
        },

        {
            output: "』",
            codepoint: 0x300F,

            latex: ["\\Rcorner"],

            unicode: ["U+300F"],

            aliases: ["}}}", "right white corner bracket", "gyeopnatpyo"],

            description: "Right White Corner Bracket"
        },

        {
            output: "〈",
            codepoint: 0x3008,

            latex: ["\\langle"],

            unicode: ["U+3008"],

            aliases: ["<<", "left angle bracket", "hwasal"],

            description: "Left Angle Bracket"
        },

        {
            output: "〉",
            codepoint: 0x3009,

            latex: ["\\rangle"],

            unicode: ["U+3009"],

            aliases: [">>", "right angle bracket", "hwasal"],

            description: "Right Angle Bracket"
        },

        {
            output: "《",
            codepoint: 0x300A,

            latex: ["\\Langle"],

            unicode: ["U+300A"],

            aliases: ["<<<", "left double angle bracket", "gyeophwasal"],

            description: "Left Double Angle Bracket"
        },

        {
            output: "》",
            codepoint: 0x300B,

            latex: ["\\Rangle"],

            unicode: ["U+300B"],

            aliases: [">>>", "right double angle bracket", "gyeophwasal"],

            description: "Right Double Angle Bracket"
        },

        {
            output: "【",
            codepoint: 0x3010,

            latex: ["\\llenticular"],

            unicode: ["U+3010"],

            aliases: ["lbf", "left black lenticular bracket"],

            description: "Left Black Lenticular Bracket"
        },

        {
            output: "】",
            codepoint: 0x3011,

            latex: ["\\rlenticular"],

            unicode: ["U+3011"],

            aliases: ["rbf", "right black lenticular bracket"],

            description: "Right Black Lenticular Bracket"
        },

        {
            output: "〜",
            codepoint: 0x301C,

            latex: ["\\wave"],

            unicode: ["U+301C"],

            aliases: ["~~", "wave dash"],

            description: "Wave Dash"
        },

        // --- 3. 코딩 및 시스템 특수 문장 구분자 ---
        {
            output: "⁏",
            codepoint: 0x204F,

            latex: ["\\revsemi"],

            unicode: ["U+204F"],

            aliases: ["reversed semicolon"],

            description: "Reversed Semicolon"
        },

        {
            output: "⁒",
            codepoint: 0x2052,

            latex: ["\\commericalminus"],

            unicode: ["U+2052"],

            aliases: ["commercial minus"],

            description: "Commercial Minus Sign"
        },

        {
            output: "␣",
            codepoint: 0x2423,

            latex: ["\\visiblespace"],

            unicode: ["U+2423"],

            aliases: ["space", "open box", "blank"],

            description: "Open Box (Visible Space)"
        }

    ]

};