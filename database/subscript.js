const subscript = {

    name: "Subscript",

    enabled: true,

    symbols: [

        // --- 아랫첨자 숫자 및 기호 (+, -, =, (, )) ---
        {
            output: "₀",
            codepoint: 0x2080,

            latex: ["\\_0"],

            unicode: ["U+2080"],

            aliases: ["subscript zero"],

            description: "Subscript Zero"
        },

        {
            output: "₁",
            codepoint: 0x2081,

            latex: ["\\_1"],

            unicode: ["U+2081"],

            aliases: ["subscript one"],

            description: "Subscript One"
        },

        {
            output: "₂",
            codepoint: 0x2082,

            latex: ["\\_2"],

            unicode: ["U+2082"],

            aliases: ["subscript two"],

            description: "Subscript Two"
        },

        {
            output: "₃",
            codepoint: 0x2083,

            latex: ["\\_3"],

            unicode: ["U+2083"],

            aliases: ["subscript three"],

            description: "Subscript Three"
        },

        {
            output: "₄",
            codepoint: 0x2084,

            latex: ["\\_4"],

            unicode: ["U+2084"],

            aliases: ["subscript four"],

            description: "Subscript Four"
        },

        {
            output: "₅",
            codepoint: 0x2085,

            latex: ["\\_5"],

            unicode: ["U+2085"],

            aliases: ["subscript five"],

            description: "Subscript Five"
        },

        {
            output: "₆",
            codepoint: 0x2086,

            latex: ["\\_6"],

            unicode: ["U+2086"],

            aliases: ["subscript six"],

            description: "Subscript Six"
        },

        {
            output: "₇",
            codepoint: 0x2087,

            latex: ["\\_7"],

            unicode: ["U+2087"],

            aliases: ["subscript seven"],

            description: "Subscript Seven"
        },

        {
            output: "₈",
            codepoint: 0x2088,

            latex: ["\\_8"],

            unicode: ["U+2088"],

            aliases: ["subscript eight"],

            description: "Subscript Eight"
        },

        {
            output: "₉",
            codepoint: 0x2089,

            latex: ["\\_9"],

            unicode: ["U+2089"],

            aliases: ["subscript nine"],

            description: "Subscript Nine"
        },

        {
            output: "₊",
            codepoint: 0x208A,

            latex: ["\\_+"],

            unicode: ["U+208A"],

            aliases: ["subscript plus"],

            description: "Subscript Plus Sign"
        },

        {
            output: "₋",
            codepoint: 0x208B,

            latex: ["\\_-"],

            unicode: ["U+208B"],

            aliases: ["subscript minus"],

            description: "Subscript Minus Sign"
        },

        {
            output: "₌",
            codepoint: 0x208C,

            latex: ["\\_="],

            unicode: ["U+208C"],

            aliases: ["subscript equals"],

            description: "Subscript Equals Sign"
        },

        {
            output: "₍",
            codepoint: 0x208D,

            latex: ["\\_("],

            unicode: ["U+208D"],

            aliases: ["subscript left parenthesis"],

            description: "Subscript Left Parenthesis"
        },

        {
            output: "₎",
            codepoint: 0x208E,

            latex: ["\\_)"],

            unicode: ["U+208E"],

            aliases: ["subscript right parenthesis"],

            description: "Subscript Right Parenthesis"
        },

        // --- 아랫첨자 알파벳 소문자 ---
        {
            output: "ₐ",
            codepoint: 0x2090,

            latex: ["\\_a"],

            unicode: ["U+2090"],

            aliases: ["subscript a"],

            description: "Subscript Latin Small Letter A"
        },

        {
            output: "ₑ",
            codepoint: 0x2091,

            latex: ["\\_e"],

            unicode: ["U+2091"],

            aliases: ["subscript e"],

            description: "Subscript Latin Small Letter E"
        },

        {
            output: "ₕ",
            codepoint: 0x2095,

            latex: ["\\_h"],

            unicode: ["U+2095"],

            aliases: ["subscript h"],

            description: "Subscript Latin Small Letter H"
        },

        {
            output: "ᵢ",
            codepoint: 0x1D62,

            latex: ["\\_i"],

            unicode: ["U+1D62"],

            aliases: ["subscript i"],

            description: "Subscript Latin Small Letter I"
        },

        {
            output: "ⱼ",
            codepoint: 0x2C7C,

            latex: ["\\_j"],

            unicode: ["U+2C7C"],

            aliases: ["subscript j"],

            description: "Subscript Latin Small Letter J"
        },

        {
            output: "ₖ",
            codepoint: 0x2096,

            latex: ["\\_k"],

            unicode: ["U+2096"],

            aliases: ["subscript k"],

            description: "Subscript Latin Small Letter K"
        },

        {
            output: "ₗ",
            codepoint: 0x2097,

            latex: ["\\_l"],

            unicode: ["U+2097"],

            aliases: ["subscript l"],

            description: "Subscript Latin Small Letter L"
        },

        {
            output: "ₘ",
            codepoint: 0x2098,

            latex: ["\\_m"],

            unicode: ["U+2098"],

            aliases: ["subscript m"],

            description: "Subscript Latin Small Letter M"
        },

        {
            output: "ₙ",
            codepoint: 0x2099,

            latex: ["\\_n"],

            unicode: ["U+2099"],

            aliases: ["subscript n"],

            description: "Subscript Latin Small Letter N"
        },

        {
            output: "ₒ",
            codepoint: 0x2092,

            latex: ["\\_o"],

            unicode: ["U+2092"],

            aliases: ["subscript o"],

            description: "Subscript Latin Small Letter O"
        },

        {
            output: "ₚ",
            codepoint: 0x209A,

            latex: ["\\_p"],

            unicode: ["U+209A"],

            aliases: ["subscript p"],

            description: "Subscript Latin Small Letter P"
        },

        {
            output: "ᵣ",
            codepoint: 0x1D63,

            latex: ["\\_r"],

            unicode: ["U+1D63"],

            aliases: ["subscript r"],

            description: "Subscript Latin Small Letter R"
        },

        {
            output: "ₛ",
            codepoint: 0x209B,

            latex: ["\\_s"],

            unicode: ["U+209B"],

            aliases: ["subscript s"],

            description: "Subscript Latin Small Letter S"
        },

        {
            output: "ₜ",
            codepoint: 0x209C,

            latex: ["\\_t"],

            unicode: ["U+209C"],

            aliases: ["subscript t"],

            description: "Subscript Latin Small Letter T"
        },

        {
            output: "ᵤ",
            codepoint: 0x1D64,

            latex: ["\\_u"],

            unicode: ["U+1D64"],

            aliases: ["subscript u"],

            description: "Subscript Latin Small Letter U"
        },

        {
            output: "ᵥ",
            codepoint: 0x1D65,

            latex: ["\\_v"],

            unicode: ["U+1D65"],

            aliases: ["subscript v"],

            description: "Subscript Latin Small Letter V"
        },

        {
            output: "ₓ",
            codepoint: 0x2093,

            latex: ["\\_x"],

            unicode: ["U+2093"],

            aliases: ["subscript x"],

            description: "Subscript Latin Small Letter X"
        }

    ]

};