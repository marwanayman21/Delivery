export const categories = [
    {
        id: 0.5,
        name: 'All',
        image: require( '../assets/images/all-you-can-eat.png' ),
    },
    {
        id: 1,
        name: 'Pizza',
        image: require( '../assets/images/pizzaIcon.png' ),
    },
    {
        id: 2,
        name: 'Burger',
        image: require( '../assets/images/burger.png' ),
    },
    {
        id: 2.5,
        name: 'Chicken',
        image: require( '../assets/images/fried-chicken.png' ),
    },
    {
        id: 3,
        name: 'Italian',
        image: require( '../assets/images/pasta.png' ),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require( '../assets/images/chinese.png' ),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require( '../assets/images/ramen.png' ),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require( '../assets/images/cupcake.png' ),
    },

]


export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Papa Johns',
            image: require( '../assets/images/pizza.png' ),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Pizza',
            dishes: [
                {
                    id: 1,
                    name: 'Super-Papa',
                    description: 'Pepperoni, Italian Sausage, Smoked Veal, Onions, Green Pepper, Fresh Mushroom, Black Olives',
                    price: 15,
                    image: require( '../assets/images/Super-Papa.jpg' ),
                    qty: 1
                },
                {
                    id: 2,
                    name: '6 Cheese',
                    description: 'A blend of 6 delicious cheeses (Gouda,Cheddar , Emmental, Romano, Mozzarella, Edam )',
                    price: 16.5,
                    image: require( '../assets/images/6-Cheese.jpg' ),
                    qty: 1
                },
                {
                    id: 3,
                    name: 'Pepperoni',
                    description: 'Loaded with Pepperoni and Extra Mozzarella Cheese',
                    price: 15,
                    image: require( '../assets/images/Pepperoni.jpg' ),
                    qty: 1
                },
                {
                    id: 4,
                    name: 'Margherita',
                    description: 'Mozzarella Cheese and Pizza Sauce',
                    price: 12,
                    image: require( '../assets/images/Margherita.jpg' ),
                    qty: 1
                },
                {
                    id: 5,
                    name: 'Buffalo Poppers',
                    description: 'Chicken Poppers,Beef Bacon, Onions, Jalapeno Pepper, Ranch Sauce with Buffalo Sauce Drizzled on top',
                    price: 17.5,
                    image: require( '../assets/images/Buffalo-Poppers-Pizza.jpg' ),
                    qty: 1
                },
                {
                    id: 6,
                    name: '4X4',
                    description: "4 types of pizza (Super Papa`s, Chicken BBQ, Garden Special and Margherita)",
                    price: 28.5,
                    image: require( '../assets/images/4X4.jpg' ),
                    qty: 1
                },

            ]

        },
        {
            id: 2,
            name: ' KFC',
            image: require( '../assets/images/منيو-كنتاكى.jpeg' ),
            description: "It's Finger Lickin' Good",
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 3.8,
            reviews: '3k',
            category: 'Chicken',
            dishes: [
                {
                    id: 21,
                    name: 'Mega Rizo',
                    description: 'Mega Rizo1 Rizo + 3 pcs of Strips + Sauce',
                    price: 12.5,
                    image: require( '../assets/images/KFC/148-Combo.png' ),
                    qty: 1
                },
                {
                    id: 22,
                    name: 'Dinner Plus',
                    description: '3 COB + 1 Fries + 1 Coleslaw + 1 Rizo',
                    price: 18.2,
                    image: require( '../assets/images/KFC/188-Combo.png' ),
                    qty: 1
                },
                {
                    id: 23,
                    name: 'Mix & Match',
                    description: '3 pcs of Chicken + Fries + Coleslaw + Zinger OR Twister',
                    price: 17.4,
                    image: require( '../assets/images/KFC/202-Combo.png' ),
                    qty: 1
                },
                {
                    id: 24,
                    name: 'Mighty Plus',
                    description: 'Mighty Zinger Sandwich + Rizo + Coleslaw+ Drink',
                    price: 20.3,
                    image: require( '../assets/images/KFC/66-Combo.png' ),
                    qty: 1
                },
                {
                    id: 25,
                    name: '4X4 Meal',
                    description: 'Mighty Zinger sandwich +Twister Sandwich + Supreme Sandwich',
                    price: 37.3,
                    image: require( '../assets/images/KFC/23-Combo.png' ),
                    qty: 1
                },


            ]

        },
        {
            id: 3,
            name: 'macdonald',
            image: require( '../assets/images/210417_2396c9d7bb.jpg' ),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Burger',
            dishes: [
                {
                    id: 31,
                    name: 'Big-tasty-Beef',
                    description: 'It’s the juicy beef patty smothered in three extraordinary slices of Emmental cheese',
                    price: 11,
                    image: require( '../assets/images/MAC/Big-tasty-Beef.png' ),
                    qty: 1
                },
                {
                    id: 32,
                    name: 'Bigmac',
                    description: 'Mouthwatering perfection is all about two 100% beef patties',
                    price: 13,
                    image: require( '../assets/images/MAC/Bigmac.png' ),
                    qty: 1
                },
                {
                    id: 33,
                    name: 'McRoyal',
                    description: 'The McRoyale has it all! A juicy beef patty accompanied by cheese,covered with our special McRoyale sauce',
                    price: 10,
                    image: require( '../assets/images/MAC/McRoyal.png' ),
                    qty: 1
                },
                {
                    id: 34,
                    name: 'M2M-190x190',
                    description: 'Pick two! Choose among the tasty Cheeseburger, the delicious Chicken MACDO or the juicy Beefburger + Fries + Drink.',
                    price: 14.5,
                    image: require( '../assets/images/MAC/M2M-190x190.png' ),
                    qty: 1
                },
                {
                    id: 35,
                    name: 'Share-Box',
                    description: 'Pick 2 sandwiches from Big Mac and McChicken + 2 sandwiches from Beef Burger, Cheeseburger and Chicken MacDo + 2 regular Fries + 1.25 liter Coke.',
                    price: 17,
                    image: require( '../assets/images/MAC/Share-Box.png' ),
                    qty: 1
                },
            ]

        }
    ]
}