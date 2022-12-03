import coffee_coffee from "../assets/coffee_coffee.png";
import coffee_cappuccino from "../assets/coffee_cappuccino.png";
import coffee_americano from "../assets/coffee_americano.png";
import coffee_espresso from "../assets/coffee_espresso.png";
import coffee_latte from "../assets/coffee_latte.png";
import coffee_mocha from "../assets/coffee_mocha.png";
import smoothie_blueberry from "../assets/smoothie_blueberry.png";
import smoothie_chocolate from "../assets/smoothie_chocolate.png";
import smoothie_green_apple from "../assets/smoothie_green_apple.png";
import smoothie_greentea from "../assets/smoothie_greentea.png";
import smoothie_kiwi from "../assets/smoothie_kiwi.png";
import smoothie_mango from "../assets/smoothie_mango.png";
import smoothie_pistachio from "../assets/smoothie_pistachio.png";
import smoothie_strawberry from "../assets/smoothie_strawberry.png";
import smoothie_taro from "../assets/smoothie_taro.png";
import smoothie_watermelon from "../assets/smoothie_watermelon.png";
import tea_greentea from "../assets/tea_greentea.png";
import tea_iced_mango from "../assets/tea_iced_mango.png";
import tea_iced_orange from "../assets/tea_iced_orange.png";
import tea_iced_pomegranate from "../assets/tea_iced_pomegranate.png";
import tea_ginger from "../assets/tea_ginger.png";
import tea_iced_peach from "../assets/tea_iced_peach.png";
import tea_milktea from "../assets/tea_milktea.png";

export const obj = {
    based: {
        all: false,
        water: false,
        milk: false,
    },
    taste: {
        all: false,
        fruit: false,
        chocolate: false,
        espresso: false,
        sweet: false,
        sour: false,
        bitter: false,
    },
    sort: {
        all: false,
        calories: false,
        price: false,
    },
};

export const lists = {
    coffee: [{
            name: "Coffee",
            image: coffee_coffee,
            description: "It is served by mixing coffee and hot/iced water. Start and end your day with coffee. If you would like it sweeter, please tell the staff.",
            sort: { calories: 5, price: 1.25 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: false,
                sweet: false,
                sour: false,
                bitter: true,
            },
        },
        {
            name: "Americano",
            image: coffee_americano,
            description: "It is served by mixing espresso and hot/iced water. If you have a busy day, how about taking a break while drinking an Americano?",
            sort: { calories: 15, price: 3.25 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: true,
                sweet: false,
                sour: false,
                bitter: true,
            },
        },
        {
            name: "Latte",
            image: coffee_latte,
            description: "It is served by mixing espresso and steamed/iced milk with sugar. Enjoy the day calmly with a latte.",
            sort: { calories: 190, price: 3.25 },
            based: {
                water: false,
                milk: true,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: true,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "Mocha",
            image: coffee_mocha,
            description: "It is served by mixing espresso, chocolate and steamed/iced milk. Enjoy the sweetness of espresso and chocolate.",
            sort: { calories: 380, price: 5.25 },
            based: {
                water: false,
                milk: true,
            },
            taste: {
                fruit: false,
                chocolate: true,
                espresso: true,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "Espresso",
            image: coffee_espresso,
            description: "It is served by mixing solo espresso and a small cup of hot/iced water. Enjoy the bitter taste of traditional espresso.",
            sort: { calories: 10, price: 1.45 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: true,
                sweet: false,
                sour: false,
                bitter: true,
            },
        },
        {
            name: "Cappuccino",
            image: coffee_cappuccino,
            description: "It is served by mixing espresso and steamed/iced milk with sugar. The soft foam of the cappuccino will calm your mind.",
            sort: { calories: 390, price: 3.25 },
            based: {
                water: false,
                milk: true,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: true,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
    ],
    tea: [{
            name: "GreenTea",
            image: tea_greentea,
            description: "It is served by mixing GreenTea and steamed/iced milk. This is the drink most ordered by customers. It's a choice you won't regret.",
            sort: { calories: 200, price: 5.25 },
            based: {
                water: false,
                milk: true,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: false,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "MilkTea",
            image: tea_milktea,
            description: "It is served by mixing black tea and hot/iced water. If your day is boring, drink milk tea to solve your problems. If you would like it sweeter, please tell the staff.",
            sort: { calories: 145, price: 5.25 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: false,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "Iced Mango",
            image: tea_iced_mango,
            description: "It is served by mixing fresh mango and iced water. Do you like sour taste? Then you have chosen well.",
            sort: { calories: 180, price: 4.25 },
            based: {
                water: false,
                milk: true,
            },
            taste: {
                fruit: true,
                chocolate: false,
                espresso: false,
                sweet: false,
                sour: true,
                bitter: false,
            },
        },
        {
            name: "Iced Peach",
            image: tea_iced_peach,
            description: "It is served by mixing fresh peach and iced water. Feel the unique aroma and taste that only peaches can produce.",
            sort: { calories: 70, price: 4.25 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: true,
                chocolate: false,
                espresso: false,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "Iced Pomegranate",
            image: tea_iced_pomegranate,
            description: "It has a sweet taste as it sours by adding sugar to give it a sweet taste.",
            sort: { calories: 70, price: 4.75 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: true,
                chocolate: false,
                espresso: false,
                sweet: true,
                sour: true,
                bitter: false,
            },
        },
        {
            name: "Iced Orange",
            image: tea_iced_orange,
            description: "It is served by mixing fresh orange and iced water. A sour orange is always right. We recommend it to anyone who likes sour taste.",
            sort: { calories: 110, price: 3.55 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: true,
                chocolate: false,
                espresso: false,
                sweet: false,
                sour: true,
                bitter: false,
            },
        },
        {
            name: "Ginger",
            image: tea_ginger,
            description: "This drink is healthy and contains both health and taste, with a little sugar added to counteract the bitterness.",
            sort: { calories: 40, price: 3.25 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: false,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
    ],
    smoothie: [{
            name: "Chocolate",
            image: smoothie_chocolate,
            description: "It is served by mixing sweet chocolate and iced milk. Enjoy the sweetness of chocolate. Don't worry, it's moderately sweet.",
            sort: { calories: 480, price: 5.25 },
            based: {
                water: false,
                milk: true,
            },
            taste: {
                fruit: false,
                chocolate: true,
                espresso: false,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "Strawberry",
            image: smoothie_strawberry,
            description: "It is served by mixing fresh strawberry and iced water. Are you looking for something refreshing and sweet? We have a strawberry smoothie.",
            sort: { calories: 380, price: 5.25 },
            based: {
                water: false,
                milk: true,
            },
            taste: {
                fruit: true,
                chocolate: false,
                espresso: false,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "Pistachio",
            image: smoothie_pistachio,
            description: "It is served by mixing chopped nuts and iced milk. We cut it into small pieces and made our own powder, so you can taste the good quality.",
            sort: { calories: 420, price: 5.25 },
            based: {
                water: false,
                milk: true,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: false,
                sweet: false,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "GreenTea",
            image: smoothie_greentea,
            description: "It is served by mixing green tea and iced milk. Green tea smoothie loved by our customers the most.",
            sort: { calories: 420, price: 5.25 },
            based: {
                water: false,
                milk: true,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: false,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "Green Apple",
            image: smoothie_green_apple,
            description: "It is served by mixing green apple and iced. If you want a fresh and new feeling, choose this drink.",
            sort: { calories: 420, price: 5.25 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: true,
                chocolate: false,
                espresso: false,
                sweet: false,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "Taro",
            image: smoothie_taro,
            description: "It is served by mixing taro and iced milk. You haven't tried tarot yet? Taro can be called the origin of smoothies. Try it today.",
            sort: { calories: 420, price: 5.25 },
            based: {
                water: false,
                milk: true,
            },
            taste: {
                fruit: false,
                chocolate: false,
                espresso: false,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "Mango",
            image: smoothie_mango,
            description: "It is served by mixing fresh mango and iced water. Mango won't make you regret it. Make wise choices.",
            sort: { calories: 320, price: 5.25 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: true,
                chocolate: false,
                espresso: false,
                sweet: true,
                sour: false,
                bitter: false,
            },
        },
        {
            name: "Kiwi",
            image: smoothie_kiwi,
            description: "It is served by mixing fresh kiwi and iced water. Isn't kiwi the representative of sour taste among fruits? Recommended for those who like sour taste.",
            sort: { calories: 300, price: 5.25 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: true,
                chocolate: false,
                espresso: false,
                sweet: false,
                sour: true,
                bitter: false,
            },
        },
        {
            name: "Blueberry",
            image: smoothie_blueberry,
            description: "It is served by mixing fresh blueberry and iced water. We grind our own blueberries instead of powder to ensure better aroma and taste.",
            sort: { calories: 340, price: 5.25 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: true,
                chocolate: false,
                espresso: false,
                sweet: false,
                sour: true,
                bitter: false,
            },
        },
        {
            name: "Watermelon",
            image: smoothie_watermelon,
            description: "It is served by mixing fresh watermelon and iced water. How about a refreshing day with watermelon? Spend the day with a moderate sweetness and refreshing taste.",
            sort: { calories: 350, price: 5.25 },
            based: {
                water: true,
                milk: false,
            },
            taste: {
                fruit: true,
                chocolate: false,
                espresso: false,
                sweet: false,
                sour: true,
                bitter: false,
            },
        },
    ],
};