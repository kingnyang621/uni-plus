const superscript = {

    name: "Superscript",

    enabled: true,

    symbols: [

        {
            output: "⁰",
            codepoint: 0x2070,

            latex: ["\\^0"],

            unicode: ["U+2070"],

            aliases: ["superscript zero"],

            description: "Superscript Zero"
        },

        // --- 윗첨자 숫자 및 기호 (+, -, =, (, )) ---
        {
            output: "¹",
            codepoint: 0x00B9,

            latex: ["\\^1"],

            unicode: ["U+00B9"],

            aliases: ["superscript one"],

            description: "Superscript One"
        },

        {
            output: "²",
            codepoint: 0x00B2,

            latex: ["\\^2"],

            unicode: ["U+00B2"],

            aliases: ["superscript two"],

            description: "Superscript Two"
        },

        {
            output: "³",
            codepoint: 0x00B3,

            latex: ["\\^3"],

            unicode: ["U+00B3"],

            aliases: ["superscript three"],

            description: "Superscript Three"
        },

        {
            output: "⁴",
            codepoint: 0x2074,

            latex: ["\\^4"],

            unicode: ["U+2074"],

            aliases: ["superscript four"],

            description: "Superscript Four"
        },

        {
            output: "⁵",
            codepoint: 0x2075,

            latex: ["\\^5"],

            unicode: ["U+2075"],

            aliases: ["superscript five"],

            description: "Superscript Five"
        },

        {
            output: "⁶",
            codepoint: 0x2076,

            latex: ["\\^6"],

            unicode: ["U+2076"],

            aliases: ["superscript six"],

            description: "Superscript Six"
        },

        {
            output: "⁷",
            codepoint: 0x2077,

            latex: ["\\^7"],

            unicode: ["U+2077"],

            aliases: ["superscript seven"],

            description: "Superscript Seven"
        },

        {
            output: "⁸",
            codepoint: 0x2078,

            latex: ["\\^8"],

            unicode: ["U+2078"],

            aliases: ["superscript eight"],

            description: "Superscript Eight"
        },

        {
            output: "⁹",
            codepoint: 0x2079,

            latex: ["\\^9"],

            unicode: ["U+2079"],

            aliases: ["superscript nine"],

            description: "Superscript Nine"
        },

        {
            output: "⁺",
            codepoint: 0x207A,

            latex: ["\\^+"],

            unicode: ["U+207A"],

            aliases: ["superscript plus"],

            description: "Superscript Plus Sign"
        },

        {
            output: "⁻",
            codepoint: 0x207B,

            latex: ["\\^-"],

            unicode: ["U+207B"],

            aliases: ["superscript minus"],

            description: "Superscript Minus Sign"
        },

        {
            output: "⁼",
            codepoint: 0x207C,

            latex: ["\\^="],

            unicode: ["U+207C"],

            aliases: ["superscript equals"],

            description: "Superscript Equals Sign"
        },

        {
            output: "⁽",
            codepoint: 0x207D,

            latex: ["\\^("],

            unicode: ["U+207D"],

            aliases: ["superscript left parenthesis"],

            description: "Superscript Left Parenthesis"
        },

        {
            output: "⁾",
            codepoint: 0x207E,

            latex: ["\\^)"],

            unicode: ["U+207E"],

            aliases: ["superscript right parenthesis"],

            description: "Superscript Right Parenthesis"
        },

        {
            output: "ⁿ",
            codepoint: 0x207F,

            latex: ["\\^n"],

            unicode: ["U+207F"],

            aliases: ["superscript n"],

            description: "Superscript Latin Small Letter N"
        },

        // --- 윗첨자 알파벳 소문자 (유니코드 표준에 존재하는 문자들) ---
        {
            output: "ᵃ",
            codepoint: 0x1D43,

            latex: ["\\^a"],

            unicode: ["U+1D43"],

            aliases: ["superscript a"],

            description: "Superscript Latin Small Letter A"
        },

        {
            output: "ᵇ",
            codepoint: 0x1D47,

            latex: ["\\^b"],

            unicode: ["U+1D47"],

            aliases: ["superscript b"],

            description: "Superscript Latin Small Letter B"
        },

        {
            output: "ᶜ",
            codepoint: 0x1D9C,

            latex: ["\\^c"],

            unicode: ["U+1D9C"],

            aliases: ["superscript c"],

            description: "Superscript Latin Small Letter C"
        },

        {
            output: "ᵈ",
            codepoint: 0x1D48,

            latex: ["\\^d"],

            unicode: ["U+1D48"],

            aliases: ["superscript d"],

            description: "Superscript Latin Small Letter D"
        },

        {
            output: "ᵉ",
            codepoint: 0x1D49,

            latex: ["\\^e"],

            unicode: ["U+1D49"],

            aliases: ["superscript e"],

            description: "Superscript Latin Small Letter E"
        },

        {
            output: "ᶠ",
            codepoint: 0x1DA0,

            latex: ["\\^f"],

            unicode: ["U+1DA0"],

            aliases: ["superscript f"],

            description: "Superscript Latin Small Letter F"
        },

        {
            output: "ᵍ",
            codepoint: 0x1D4D,

            latex: ["\\^g"],

            unicode: ["U+1D4D"],

            aliases: ["superscript g"],

            description: "Superscript Latin Small Letter G"
        },

        {
            output: "ʰ",
            codepoint: 0x02B0,

            latex: ["\\^h"],

            unicode: ["U+02B0"],

            aliases: ["superscript h"],

            description: "Superscript Latin Small Letter H"
        },

        {
            output: "ⁱ",
            codepoint: 0x2071,

            latex: ["\\^i"],

            unicode: ["U+2071"],

            aliases: ["superscript i"],

            description: "Superscript Latin Small Letter I"
        },

        {
            output: "ʲ",
            codepoint: 0x02B2,

            latex: ["\\^j"],

            unicode: ["U+02B2"],

            aliases: ["superscript j"],

            description: "Superscript Latin Small Letter J"
        },

        {
            output: "ᵏ",
            codepoint: 0x1D4F,

            latex: ["\\^k"],

            unicode: ["U+1D4F"],

            aliases: ["superscript k"],

            description: "Superscript Latin Small Letter K"
        },

        {
            output: "ˡ",
            codepoint: 0x1D50,

            latex: ["\\^l"],

            unicode: ["U+1D50"],

            aliases: ["superscript l"],

            description: "Superscript Latin Small Letter L"
        },

        {
            output: "ᵐ",
            codepoint: 0x1D51,

            latex: ["\\^m"],

            unicode: ["U+1D51"],

            aliases: ["superscript m"],

            description: "Superscript Latin Small Letter M"
        },

        {
            output: "ᵒ",
            codepoint: 0x1D52,

            latex: ["\\^o"],

            unicode: ["U+1D52"],

            aliases: ["superscript o"],

            description: "Superscript Latin Small Letter O"
        },

        {
            output: "ᵖ",
            codepoint: 0x1D56,

            latex: ["\\^p"],

            unicode: ["U+1D56"],

            aliases: ["superscript p"],

            description: "Superscript Latin Small Letter P"
        },

        {
            output: "ʳ",
            codepoint: 0x02B3,

            latex: ["\\^r"],

            unicode: ["U+02B3"],

            aliases: ["superscript r"],

            description: "Superscript Latin Small Letter R"
        },

        {
            output: "ˢ",
            codepoint: 0x02E2,

            latex: ["\\^s"],

            unicode: ["U+02E2"],

            aliases: ["superscript s"],

            description: "Superscript Latin Small Letter S"
        },

        {
            output: "ᵗ",
            codepoint: 0x1D57,

            latex: ["\\^t"],

            unicode: ["U+1D57"],

            aliases: ["superscript t"],

            description: "Superscript Latin Small Letter T"
        },

        {
            output: "ᵘ",
            codepoint: 0x1D58,

            latex: ["\\^u"],

            unicode: ["U+1D58"],

            aliases: ["superscript u"],

            description: "Superscript Latin Small Letter U"
        },

        {
            output: "ᵛ",
            codepoint: 0x1D5B,

            latex: ["\\^v"],

            unicode: ["U+1D5B"],

            aliases: ["superscript v"],

            description: "Superscript Latin Small Letter V"
        },

        {
            output: "ʷ",
            codepoint: 0x02B7,

            latex: ["\\^w"],

            unicode: ["U+02B7"],

            aliases: ["superscript w"],

            description: "Superscript Latin Small Letter W"
        },

        {
            output: "ˣ",
            codepoint: 0x02E3,

            latex: ["\\^x"],

            unicode: ["U+02E3"],

            aliases: ["superscript x"],

            description: "Superscript Latin Small Letter X"
        },

        {
            output: "ʸ",
            codepoint: 0x02E4,

            latex: ["\\^y"],

            unicode: ["U+02E4"],

            aliases: ["superscript y"],

            description: "Superscript Latin Small Letter Y"
        },

        {
            output: "ᶻ",
            codepoint: 0x1DBB,

            latex: ["\\^z"],

            unicode: ["U+1DBB"],

            aliases: ["superscript z"],

            description: "Superscript Latin Small Letter Z"
        },

        // --- 윗첨자 알파벳 대문자 (유니코드 표준에 존재하는 주요 문자들) ---
        {
            output: "ᴬ",
            codepoint: 0x1D2C,

            latex: ["\\^A"],

            unicode: ["U+1D2C"],

            aliases: ["superscript A"],

            description: "Superscript Latin Capital Letter A"
        },

        {
            output: "ᴮ",
            codepoint: 0x1D2E,

            latex: ["\\^B"],

            unicode: ["U+1D2E"],

            aliases: ["superscript B"],

            description: "Superscript Latin Capital Letter B"
        },

        {
            output: "ᴰ",
            codepoint: 0x1D30,

            latex: ["\\^D"],

            unicode: ["U+1D30"],

            aliases: ["superscript B"],

            description: "Superscript Latin Capital Letter D"
        },

        {
            output: "ᴱ",
            codepoint: 0x1D31,

            latex: ["\\^E"],

            unicode: ["U+1D31"],

            aliases: ["superscript E"],

            description: "Superscript Latin Capital Letter E"
        },

        {
            output: "ᴳ",
            codepoint: 0x1D33,

            latex: ["\\^G"],

            unicode: ["U+1D33"],

            aliases: ["superscript G"],

            description: "Superscript Latin Capital Letter G"
        },

        {
            output: "ᴴ",
            codepoint: 0x1D34,

            latex: ["\\^H"],

            unicode: ["U+1D34"],

            aliases: ["superscript H"],

            description: "Superscript Latin Capital Letter H"
        },

        {
            output: "ᴵ",
            codepoint: 0x1D35,

            latex: ["\\^I"],

            unicode: ["U+1D35"],

            aliases: ["superscript I"],

            description: "Superscript Latin Capital Letter I"
        },

        {
            output: "ᴶ",
            codepoint: 0x1D36,

            latex: ["\\^J"],

            unicode: ["U+1D36"],

            aliases: ["superscript J"],

            description: "Superscript Latin Capital Letter J"
        },

        {
            output: "ᴷ",
            codepoint: 0x1D37,

            latex: ["\\^K"],

            unicode: ["U+1D37"],

            aliases: ["superscript K"],

            description: "Superscript Latin Capital Letter K"
        },

        {
            output: "ᴸ",
            codepoint: 0x1D38,

            latex: ["\\^L"],

            unicode: ["U+1D38"],

            aliases: ["superscript L"],

            description: "Superscript Latin Capital Letter L"
        },

        {
            output: "ᴹ",
            codepoint: 0x1D39,

            latex: ["\\^M"],

            unicode: ["U+1D39"],

            aliases: ["superscript M"],

            description: "Superscript Latin Capital Letter M"
        },

        {
            output: "ᴺ",
            codepoint: 0x1D3A,

            latex: ["\\^N"],

            unicode: ["U+1D3A"],

            aliases: ["superscript N"],

            description: "Superscript Latin Capital Letter N"
        },

        {
            output: "ᴼ",
            codepoint: 0x1D3C,

            latex: ["\\^O"],

            unicode: ["U+1D3C"],

            aliases: ["superscript O"],

            description: "Superscript Latin Capital Letter O"
        },

        {
            output: "ᴾ",
            codepoint: 0x1D3E,

            latex: ["\\^P"],

            unicode: ["U+1D3E"],

            aliases: ["superscript P"],

            description: "Superscript Latin Capital Letter P"
        },

        {
            output: "ᴿ",
            codepoint: 0x1D3F,

            latex: ["\\^R"],

            unicode: ["U+1D3F"],

            aliases: ["superscript R"],

            description: "Superscript Latin Capital Letter R"
        },

        {
            output: "ᵀ",
            codepoint: 0x1D40,

            latex: ["\\^T"],

            unicode: ["U+1D40"],

            aliases: ["superscript T"],

            description: "Superscript Latin Capital Letter T"
        },

        {
            output: "ᵁ",
            codepoint: 0x1D41,

            latex: ["\\^U"],

            unicode: ["U+1D41"],

            aliases: ["superscript U"],

            description: "Superscript Latin Capital Letter U"
        },

        {
            output: "ⱽ",
            codepoint: 0x2C7D,

            latex: ["\\^V"],

            unicode: ["U+2C7D"],

            aliases: ["superscript V"],

            description: "Superscript Latin Capital Letter V"
        },

        {
            output: "ᵂ",
            codepoint: 0x1D42,

            latex: ["\\^W"],

            unicode: ["U+1D42"],

            aliases: ["superscript W"],

            description: "Superscript Latin Capital Letter W"
        },

        // --- 윗첨자 그리스 소문자 ---
        {
            output: "ᵅ",
            codepoint: 0x1D45,

            latex: ["\\^\\alpha"],

            unicode: ["U+1D45"],

            aliases: ["superscript alpha"],

            description: "Modifier Letter Small Alpha"
        },

        {
            output: "ᵝ",
            codepoint: 0x1D46,

            latex: ["\\^\\beta"],

            unicode: ["U+1D46"],

            aliases: ["superscript beta"],

            description: "Modifier Letter Small Beta"
        },

        {
            output: "ᵞ",
            codepoint: 0x1D5E,

            latex: ["\\^\\gamma"],

            unicode: ["U+1D5E"],

            aliases: ["superscript gamma"],

            description: "Modifier Letter Small Greek Gamma"
        },

        {
            output: "ᵟ",
            codepoint: 0x1D5F,

            latex: ["\\^\\delta"],

            unicode: ["U+1D5F"],

            aliases: ["superscript delta"],

            description: "Modifier Letter Small Greek Delta"
        },

        {
            output: "ᵋ",
            codepoint: 0x1D4B,

            latex: ["\\^\\epsilon"],

            unicode: ["U+1D4B"],

            aliases: ["superscript epsilon"],

            description: "Modifier Letter Small Open E"
        },

        {
            output: "ᶿ",
            codepoint: 0x1DBE,

            latex: ["\\^\\theta"],

            unicode: ["U+1DBE"],

            aliases: ["superscript theta"],

            description: "Modifier Letter Small Theta"
        },

        {
            output: "ᶥ",
            codepoint: 0x1DA5,

            latex: ["\\^\\iota"],

            unicode: ["U+1DA5"],

            aliases: ["superscript iota"],

            description: "Modifier Letter Small Iota"
        },

        {
            output: "ᵠ",
            codepoint: 0x1D60,

            latex: ["\\^\\phi"],

            unicode: ["U+1D60"],

            aliases: ["superscript phi"],

            description: "Modifier Letter Small Greek Phi"
        },

        {
            output: "ᵡ",
            codepoint: 0x1D61,

            latex: ["\\^\\chi"],

            unicode: ["U+1D61"],

            aliases: ["superscript chi"],

            description: "Modifier Letter Small Greek Chi"
        }

    ]

};